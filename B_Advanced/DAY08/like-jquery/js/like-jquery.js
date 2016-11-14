/**
 * --------------------------------
 * 커스텀 라이브러리 모듈 `likeJq`
 * IIFE
 * --------------------------------
 */

var likeJq = (function( global ){
    'use strict';

    /**
     * ---------------------------------------------------
     * trim() : 문자열의 좌측, 우측의 공백을 제거하는 헬퍼 함수
     * ※ jQuery 라이브러리의 헬퍼함수인 trim() 또한 이와 같은 방법으로 구현된 것.
     * ---------------------------------------------------
     */

    likeJq.trimLeft = function( text ) {
        return text.replace(/^\s+/, '');
    };
    likeJq.trimRight = function( text ) {
        return text.replace(/\s+$/, '');
    };
    likeJq.trim = function( text ) {
        return likeJq.trimRight( likeJq.trimLeft(text) );
    };


    /**
     * --------------------------------
     * 생성자 함수
     * 생성자 함수의 속성(메소드)을 추가
     * 객체를 생성하지 않고도 외부에서 사용 가능한 정적 메소드.
     * --------------------------------
     */

    function likeJq( selector, context ) {
        // this === undefined   // 'use strict' 있는 경우
        // this === window      // 'use strict' 없는 경우
        // this === likeJq {}

        /**
         * ------------------------------------------------------------
         * new 키워드를 강제화시키는 패턴
         * 객체의 생성자를 물어 자신(생성자)인지 확인 후 new 키워드 사용을 강제화한다.
         * ------------------------------------------------------------
         */
        if ( !(this instanceof likeJq) ) {
          return new likeJq( selector, context );
        }
        // 객체에 초기화 설정
        this._init.apply( this, arguments );
    }

    // 생성자 함수의 프로토타입 객체
    likeJq.fn = likeJq.prototype = {
        // 생성자 참조 멤버 변수
        'constructor': likeJq,
        'version': '1.0.0',
        '_init': function(selector, context) {
            context = context || this;
            this._elements = document.querySelectorAll(selector);
        },

        'each' : function(callback) {
            var el, i=0, l=this._elements.length;
            for ( ; i<l; i++ ) {
                el = this._elements[i];
                callback.call(el, i, el, this._elements);
            }
        },

        'hasClass' : function(name) {
            this.each(function(index, element){
                var _classes = element.getAttribute('class');
                for ( var i=0, l=_classes.length; i<l; i++ ) {
                    console.log(_classes[i]);
                }
            });
        },

        'addClass' : function(name) {
            this.each(function(index,el){

                /**
                 * --------------------------------
                 * ex1.classList - IE10+ 
                 * --------------------------------
                 */
                
                // el.classList.add(name); 

                /**
                 * --------------------------------
                 * ex2. 중복되는 class
                 * --------------------------------
                 */
            
                var pre_classes     = el.getAttribute('class') || ''; // 초기값 ''
                var pre_classes_arr = pre_classes.split(' ');
                for ( var i = 0, l=pre_classes_arr.length; i<l; i++ ) {
                    var item = pre_classes_arr[i];
                    // 입력한 class name 있다면 함수를 종료하라
                    if ( item === name ) { return; } // 함수종료
                }

                // [방식1] 클래스 앞에 공백이 생김. => [방식1], [방식2] 형태로 사용하면 된다.
                // el.setAttribute('class', pre_classes + ' ' + name );

                // [방식2] trim() 사용 
                // el.setAttribute('class', (pre_classes + ' ' + name).trim() );

                // [방식3] 만든 유틸리티 함수 사용 - likeJq.trim()
                el.setAttribute('class', likeJq.trim(pre_classes + ' ' + name) );
            });
            // 메소드를 연결해서 사용하려면
            return this;
        },

        'removeClass' : function(name) {
            var name_reg = new RegExp('(^|\\s+)' + name + '(\\s+|$)', 'g');
            this.each(function(index, el) {            
                /**
                 * --------------------------------
                 * ex1. classList 사용
                 * --------------------------------
                 */
                // el.classList.remove(name); // classList: IE10+

                /**
                 * --------------------------------
                 * ex2. new RegExp()사용 
                 * --------------------------------
                 */

                 var classes = el.getAttribute('class');
                 classes = classes.replace(name_reg, ' ');
                 el.setAttribute('class', likeJq.trim(classes));
            });

            // 메소드를 연결해서 사용하려면 'return this;'
            return this;
        },
    };
    // 생성자 함수 반환
    return likeJq;
})( this );
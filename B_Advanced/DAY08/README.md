###### JJ_CAMP_Advanced

[＜ INDEX](../../README.md)

## DAY 08
- 객체지향 언어를 사용하는 프로그래밍의 특징
- jQuery와 유사한 라이브러리 `Like jQuery` 
- Ajax(Asynchronous JavaScript And XML)-SPA(Single Page Application)
	- Native JavaScript AJAX 방식

---

## 객체지향 언어를 사용하는 프로그래밍의 특징
- 1. 추상화(Abstract)
- 2. 캡슐화(Encapsuration) : 자바스크립트에서 지원하지 않는다. `IIFE` 패턴으로 흉내
- 3. 상속(Inheritance)
- 4. 다형성(Polymorphism)  : 자바스크립트에서 지원하지 않는다.

---


## jQuery와 유사한 라이브러리 `Like jQuery` 
#### 생성한 인스턴스의 생성자를 확인
```javascript
(function(global, $) {
	var $instance = new $();
    console.log( '$instance: ', $instance );
    console.log( '$instance.constructor === $: ', $instance.constructor === $ ); // true

    var $ins = $('.demo', document.body);
    console.log( '$ins.version: ', $ins.version ); // 1.0.0
})(this, likeJq);
```

```javascript
var likeJq = (function( global ){
    'use strict';

	// 생성자 함수
    function likeJq( selector, context ) {
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

	likeJq.fn = likeJq.prototype = {
		'constructor': likeJq,
        'version': '1.0.0',
        '_init': function(selector, context) {
            context = context || this;
            this._elements = document.querySelectorAll(selector);
        },
	};
})( this );
```

> `new를 강제하는 패턴`<br>
> 생성자란? `new` 키워드와 함께 호출될 뿐 일반 함수에 불과하다. 하지만 new를 빼먹으면 문법 오류나 런타임 에러가 발생하지는 않지만, 논리적인 오류가 생겨 의도치 않은 결과가 발생할 수도 있다. 이유는 `new를 빼먹고 생성자 함수를 호출할 경우 this가 전역(Global) 객체`를 가리키기 때문이다. (웹 브라우저 환경에서 this는 window 객체를 가리킨다) 이는 전역을 오염시키는 행위가 되기 때문에 피해야 할 상황이다.

#### each, addClass, removeClass
```html
<nav class="demo">
    <ul>
        <li><a class="demo-links" href="">link 1m</a></li>
        <li><a href="">link 2m</a></li>
        <li><a class="demo-links" href="">link 3m</a></li>
        <li><a href="">link 4m</a></li>
        <li><a class="demo-links" href="">link 5m</a></li>
        <li><a href="">link 6m</a></li>
    </ul>
</nav> 
```

```javascript
(function(global, $) {
	'use strict';

	var $demo_links = $('.demo a');

	// each
	$demo_links.each(function(index, el, list) {
		console.log(index, el, list);
    });

    // addClass 메소드 체이닝.
    $demo_links.addClass('hey').addClass('you').addClass('demo-links').addClass('me');

    // removeClass
    $demo_links.removeClass('you');
})( this, lkieJq );
```

```javascript
var likeJq = (function( global ){
    'use strict';

	// 생성자 함수
    function likeJq( selector, context ) {
        if ( !(this instanceof likeJq) ) {
          return new likeJq( selector, context );
        }
        // 객체에 초기화 설정
        this._init.apply( this, arguments );
    }

	// 생성자 함수의 프로토타입 객체
	likeJq.fn = likeJq.prototype = {
		// 생성자 참조 멤버 변수
        'each' : function(callback) {
            var el, i=0, l=this._elements.length;
            for ( ; i<l; i++ ) {
                el = this._elements[i];
                callback.call(el, i, el, this._elements);
            }
        },

       'addClass' : function(name) {
            this.each(function(index,el){
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
```

---

#### `Element.prototype`에 능력을 확장 - `지양!`
- `radioClass`, `hasClass`, `toggleClass`, `addClass`, `removeClass`

```javascript
(function(global, $){
        var old_this = null;
        $.radioClass = function(name) {
            // 기존에 name 변수에 복사된 문자 값을 class 속성으로 가진 요소에서는 해당 클래스 속성을 제거해야 한다.
            if ( old_this !== null ) {
                old_this.removeClass(name);
            }

            this.addClass(name);
            old_this = this;

            // 메소드를 연결(메소드 체이닝)해서 사용하려면 'return this;'
            return this;
        };

        $.hasClass = function(name) {
            var has_check_class = new RegExp( '(^|\\s+)' + name + '(\\s+|$)' );
            return has_check_class.test( this.getAttribute('class') );
        };

        $.toggleClass = function(name) {
            if( this.hasClass(name) ) {
                this.removeClass(name);
            } else {
                this.addClass(name);
            }
        };

        $.addClass = function(name) {
            // this // DOM ElementNode
            name = name.split(' ');
            for( var i = 0, l=name.length; i<l; i++ ) {
                this.classList.add(name[i]);
            }
            // 메소드를 연결(메소드 체이닝)해서 사용하려면 'return this;'
            return this;
        };

        $.removeClass = function(name) {
            name = name || '*';
            if ( name === '*' ) {
                this.className = '';
                // 메소드를 연결(메소드 체이닝)해서 사용하려면 'return this;'
                return this;
            }
            name = name.split(' ');
            for( var i = 0, l=name.length; i<l; i++ ) {
                this.classList.remove(name[i]);
            }
        };
})(this, Element.prototype);
````

---

## Ajax-SPA(Single Page Application)
- 현대 웹에서 비동기 통신은 필수 사항이 되고 있다.
- 전통적인 웹은 요청사항이 생기면 화면전환(깜빡임)이 생기지만 Ajax 통신을 이용하면 부분 제어가 가능하다.
- 쾌적한 UX를 제공해 줄수 있다.

### Native JavaScript AJAX 방식
#### `Ajax(비동기 통신)`를 수행할 객체 생성

```javascript
(function(global, XHR){
    'use strict';

    // Ajax (비동기 통신)를 수행할 객체 생성
    var xhr = new XMLHttpRequest();

    // 생성된 XHR 객체 검토
    console.dir(xhr); 
})(this, this.XMLHttpRequest);
```

#### 동기 방식의 통신
```html
  <button type="button" class="call-ajax-btn">Call Ajax</button>

  <div class="ajax-container">
    <p> Ajax로 처리된 데이터 코드가 이 곳에 적용됩니다. </p>
  </div>
```

```javascript
(function(global, Ajax){
    'use strict';

    // 비동기 통신을 하기 위한 객체 생성
    // 생성자 함수 XMLHttpRequest를 통해
    var xhr = new Ajax();
    console.dir(xhr); 

    xhr.open('GET',  '../data/data.txt', false);

    var ajax_call_btn = document.querySelector('.call-ajax-btn');
    var ajax_container = document.querySelector('.ajax-container');

    ajax_call_btn.addEventListener('click', function() {
        xhr.send(); // 서버에 요청 응답을 받을 때 아무 것도 안함

        /////////////////////////////////////////////////
        // false : 동기 방식의 통신  - 데이터가 로드될 때까지 기다림
        /////////////////////////////////////////////////

        // 전송 상태 확인
        if ( xhr.status === 200 ) {
            console.log('success');
            console.log(xhr.responseText); // 전송 성공 시, 응답 받은 데이터
            ajax_container.innerHTML = xhr.responseText;
        } 
    });
})(this, this.XMLHttpRequest);
```

#### 비동기 방식의 통신 
```javascript
(function(global, Ajax){
    'use strict';

    // 비동기 통신을 하기 위한 객체 생성
    // 생성자 함수 XMLHttpRequest를 통해
    var xhr = new Ajax();
    console.dir(xhr); 

    xhr.open('GET',  '../data/data.json', true);

    ////////////////////////////////////////////////////
    // true  : 비동기 방식의 통신 - 아래 코드가 바로 해석됨
    ////////////////////////////////////////////////////

    // 비동기 통신 이벤트 감지 구문
    xhr.onreadystatechange = function() {
        if( xhr.status === 200 && xhr.readyState === 4 ) {
            // console.log('success');            
            var html_template = '';
            var Data_json2obj = global.JSON.parse(xhr.response);
            [].forEach.call(Data_json2obj.results, function(item) {
               // console.log(item.gender); 
               // console.log(`${item.name.title}`, `${item.name.first}`, `${item.name.last}`); 
               // console.log(item.location.street);

                html_template += '<ul class="list">';
                html_template +=  `<li><img class="fl" src="${item.picture.thumbnail}" alt=""></li>`;
                html_template +=  `<li><h4>${item.gender}</h4></li>`;
                html_template +=  `<li><h2 class="user-name">${item.name.title}, ${item.name.first} ${item.name.last}</h2></li>`;
                html_template +=  `<li>${item.location.street}</li>`;
                html_template += '</ul>';
            });
            ajax_container.innerHTML = html_template;
        } else {
            // console.log('데이터 요청 중입니다.....');
            ajax_container.innerHTML = '데이터 요청 중입니다.'
        }
    };

    var ajax_call_btn  = document.querySelector('.call-ajax-btn');
    var ajax_container = document.querySelector('.ajax-container');

    ajax_call_btn.addEventListener('click', function() {
        xhr.send(); // 서버에 요청 응답을 받을 때 아무 것도 안함
    });
})(this, this.XMLHttpRequest);
```
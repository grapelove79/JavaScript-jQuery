// * 문서객체 
// - 생성
// - 조작
// - 탐색 
// - 이벤트핸들링

// 작성한 헬퍼 함수를 사용하여 문서객체 생성/조작/이벤트 핸들링
// 동적 생성: <article id="lecture">indipendency article</article>

(function(global) {    
    'use strict';
    var body = query('body');
    var container = createEl({
        'element' : 'article',
        'attr' : { 'id' : 'lecture' },
        'text' : 'indipendency article',
        'finish' : function() {
            this.onmouseover = function() {
                this.style.background = '#fb4848';
            };
            appendTo(this, body);
        }
    });
}(this));


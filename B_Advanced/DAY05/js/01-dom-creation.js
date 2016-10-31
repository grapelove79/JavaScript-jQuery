/**
 * --------------------------------
 * ex1.
 * --------------------------------
 */

// (function(global) {
//     // 염격한 문법 모드
//     'use strict';

//     // this === window?
//     console.log('global === window: %c' + (global === window), 'color: #1E51FF; font-size: 20px;'); // true

//     /**
//      * --------------------------------
//      * console.log 
//      * --------------------------------
//      */
    
//     // function cLog(input, console_style) {
//     //     // 사용자가 전달한  input은 문자열이어야 한다는 것ㅇㄹ 검증
//     //     validate( !isString(input), '문자열을 입력해야 합니다' );

//     //     // 옵션: console_style
//     //     // 기본값
//     //     console_style = console_style || 'color: #FF23F7; font-size: 1.2rem;';
//     //     console.log(input, console_style);
//     // }

//     // // 사용법
//     // cLog('global === window: %c' + (global === window)); // true

//     //////////////////////////////////////////////////////////////////////////////////////////////

//     // 비공개
//     var mike = '무선 마이크';

//     // 공개(노출)
//     global.mike = mike;
  
// }(this)); // this는 현재 컨텐스트인 'global'이다.

// console.log(mike); // '무선 마이크'

/**
 * --------------------------------
 * ex2.
 * --------------------------------
 */

// (function(global) {
//     // 염격한 문법 모드
//     'use strict';

//     var container_attrs = {
//         'id': 'page',
//         'class': 'container',
//         'data-app': 'custom-library'
//     };

//     var container = createEl('div', container_attrs);
//     console.log('container:', container);

//     // Native
//     var container_content = document.createTextNode('This is container element.');
//     console.log(container_content.nodeType === document.TEXT_NODE);

//     // 요소노드에 텍스트노드를 자식으로 병합하는 방법 DOM API
//     // 부모노드.appendChild(자식노드)
//     container.appendChild(container_content);
//     console.log('container:', container);  
// }(this)); 

/**
 * ---------------------------------------------------------------------------------------------------
 * ex3. 동적 추가
 * <div id="page" class="contaienr" data-app="costom-library">this is a container el.</div>
 * ---------------------------------------------------------------------------------------------------
 */

(function(global) {
    // 염격한 문법 모드
    'use strict';

    // 비공개
    var mike = '무선 마이크';

    var container_attrs = {
        'class': 'container',
        'id': 'page',
        'data-app': 'costom-library',
    };

    // 방식1
    // var container = createEl('div', container_attrs);

    // 방식2
    // var container = createEl('div', container_attrs, 'this is a container el.');

    // 방식3. 객체 방식으로 추가
    var container = createEl({
        'element' : 'div',
        'attr'    : container_attrs,
        'text'    : 'this is a container el.',
        'finish'  : function() {
          append(query('body'), this);
        }
    });

    console.log('container:', container);

    //조작
    var body = query('body');
    // body 요소를 부모로 하여 container 자식 요소를 추가(삽입)
    appendTo(container, body);

    // 공개(노출)
    global.mike = mike;  
}(this)); 

console.log(mike); // '무선 마이크'



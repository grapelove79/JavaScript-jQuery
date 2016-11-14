/**
 * ------------------------------------
 * Native JavaScript AJAX 방식 - 동기방식
 * ------------------------------------
 */

/**
 * --------------------------------------------------
 * ex1. Ajax(비동기 통신)를 수행할 객체 생성 - XMLHttpRequest
 * --------------------------------------------------
 */

// (function(global, XHR){
//     'use strict';

//     // Ajax (비동기 통신)를 수행할 객체 생성
//     var xhr = new XMLHttpRequest();

//     // 생성된 XHR 객체 검토
//     console.dir(xhr); 
// })(this, this.XMLHttpRequest);

/**
 * --------------------------------
 * ex2. 동기 방식의 통신
 * --------------------------------
 */

// (function(global, Ajax){
//     'use strict';

//     // 비동기 통신을 하기 위한 객체 생성
//     // 생성자 함수 XMLHttpRequest를 통해
//     var xhr = new Ajax();
//     console.dir(xhr); 


//     /**
//      * --------------------------------
//      * 아래 3개는 같다.
//      * --------------------------------
//      */
    
//     // 1. XMLHttpRequest.prototype
//     // 2. xhr.constructor.prototype
//     // 3. xhr.__prooto__ // 비표준이고 크롬에서만 보인다.


//     *
//      * --------------------------------
//      * 동기방식으로 처리 방법.
//      * false : 동기 방식의 통신  - 데이터가 로드될 때까지 기다림
//      * true  : 비동기 방식의 통신 - 아래 코드가 바로 해석됨
//      * --------------------------------
        

//     xhr.open('GET',  '../data/data.txt', false);
//     xhr.send(); // 서버에 요청 응답을 받을 때 아무 것도 안함
  
//     ///////////////////////////////////////////////////
//     // false : 동기 방식의 통신  - 데이터가 로드될 때까지 기다림
//     //////////////////////////////////////////////////

//     // 전송 상태 확인
//     if ( xhr.status === 200 ) {
//         console.log('success');
//         console.log(xhr.responseText); // 전송 성공 시, 응답 받은 데이터
//     } else {
//         console.log(xhr.status);
//         console.info('fail');
//     }

// })(this, this.XMLHttpRequest);

/**
 * --------------------------------
 * ex3. 동기 방식의 통신
 * innerHTML 이용해서 data 뿌리기
 * --------------------------------
 */
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
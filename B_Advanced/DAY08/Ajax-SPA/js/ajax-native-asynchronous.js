/**
 * --------------------------------------
 * Native JavaScript AJAX 방식 - 비동기 방식 
 * --------------------------------------
 */

/**
 * --------------------------------
 * ex1. 비동기 방식의 통신
 * --------------------------------
 */

// (function(global, Ajax){
//     'use strict';
//     // 비동기 통신을 하기 위한 객체 생성
//     // 생성자 함수 XMLHttpRequest를 통해
//     var xhr = new Ajax();
//     console.dir(xhr); 

//     xhr.open('GET',  '../data/data.txt', true);

//     var ajax_call_btn = document.querySelector('.call-ajax-btn');
//     var ajax_container = document.querySelector('.ajax-container');

//     ajax_call_btn.addEventListener('click', function() {
//         xhr.send(); // 서버에 요청 응답을 받을 때 아무 것도 안함

//         /////////////////////////////////////////////////
//         // true  : 비동기 방식의 통신 - 아래 코드가 바로 해석됨
//         /////////////////////////////////////////////////

//         // 전송 상태 확인
//         if ( xhr.status === 200 ) {
//             console.log('success');
//             console.log(xhr.responseText); // 전송 성공 시, 응답 받은 데이터
//             ajax_container.innerHTML = xhr.responseText;
//         } else {
//             console.log('기다리지 않겠어!!!');
//         }
//     });
// })(this, this.XMLHttpRequest);

/**
 * --------------------------------
 * ex2. 비동기 통신 이벤트 감지 
 * --------------------------------
 */

// (function(global, Ajax){
//     'use strict';

//     // 비동기 통신을 하기 위한 객체 생성
//     // 생성자 함수 XMLHttpRequest를 통해
//     var xhr = new Ajax();
//     console.dir(xhr); 

//     xhr.open('GET',  '../data/data.txt', true);

//     // 비동기 통신 이벤트 감지 구문
//     xhr.onreadystatechange = function() {
//         if( xhr.status === 200 && xhr.readyState === 4 ) {
//             console.log('success');
//             console.log(xhr.responseText);
//             ajax_container.innerHTML = xhr.responseText;    
//         } else {
//             console.log('데이터 요청 중입니다.....');
//         }
//     };

//     var ajax_call_btn = document.querySelector('.call-ajax-btn');
//     var ajax_container = document.querySelector('.ajax-container');

//     ajax_call_btn.addEventListener('click', function() {
//         xhr.send(); // 서버에 요청 응답을 받을 때 아무 것도 안함

//         /////////////////////////////////////////////////
//         // true  : 비동기 방식의 통신 - 아래 코드가 바로 해석됨
//         /////////////////////////////////////////////////

//         // // 전송 상태 확인
//         // if ( xhr.status === 200 ) {
//         //     console.log('success');
//         //     console.log(xhr.responseText); // 전송 성공 시, 응답 받은 데이터
//         //     ajax_container.innerHTML = xhr.responseText;
//         // } else {
//         //     console.log('기다리지 않겠어!!!');
//         // }
//     });
// })(this, this.XMLHttpRequest);

/**
 * --------------------------------
 * ex3. 비동기 방식의 통신
 * html 파일 불러오기
 * --------------------------------
 */

// (function(global, Ajax){
//     'use strict';

//     // 비동기 통신을 하기 위한 객체 생성
//     // 생성자 함수 XMLHttpRequest를 통해
//     var xhr = new Ajax();
//     console.dir(xhr); 

//     xhr.open('GET',  '../data/data.html', true);

//     ////////////////////////////////////////////////////
//     // true  : 비동기 방식의 통신 - 아래 코드가 바로 해석됨
//     ////////////////////////////////////////////////////

//     // 비동기 통신 이벤트 감지 구문
//     xhr.onreadystatechange = function() {
//         if( xhr.status === 200 && xhr.readyState === 4 ) {
//             console.log('success');
//             console.log(xhr.responseText);
//             ajax_container.innerHTML = xhr.responseText;    
//         } else {
//             // console.log('데이터 요청 중입니다.....');
//             ajax_container.innerHTML = '데이터 요청 중입니다.'
//         }
//     };

//     var ajax_call_btn = document.querySelector('.call-ajax-btn');
//     var ajax_container = document.querySelector('.ajax-container');

//     ajax_call_btn.addEventListener('click', function() {
//         xhr.send(); // 서버에 요청 응답을 받을 때 아무 것도 안함
//     });
// })(this, this.XMLHttpRequest);

/**
 * --------------------------------
 * ex4. 비동기 방식의 통신
 * xml 파일 불러오기 -- 수정하기
 * --------------------------------
 */

// (function(global, Ajax){
//     'use strict';

//     // 비동기 통신을 하기 위한 객체 생성
//     // 생성자 함수 XMLHttpRequest를 통해
//     var xhr = new Ajax();
//     console.dir(xhr); 

//     xhr.open('GET',  '../data/data.xml', true);

//     ////////////////////////////////////////////////////
//     // true  : 비동기 방식의 통신 - 아래 코드가 바로 해석됨
//     ////////////////////////////////////////////////////

//     // 비동기 통신 이벤트 감지 구문
//     xhr.onreadystatechange = function() {
//         if( xhr.status === 200 && xhr.readyState === 4 ) {
//             console.log('success');
//             console.log(xhr.responseText);
//             console.log(xhr.responseXML);
//             ajax_container.innerHTML = xhr.responseText;    
//         } else {
//             // console.log('데이터 요청 중입니다.....');
//             ajax_container.innerHTML = '데이터 요청 중입니다.'
//         }
//     };

//     var ajax_call_btn = document.querySelector('.call-ajax-btn');
//     var ajax_container = document.querySelector('.ajax-container');

//     ajax_call_btn.addEventListener('click', function() {
//         xhr.send(); // 서버에 요청 응답을 받을 때 아무 것도 안함
//     });
// })(this, this.XMLHttpRequest);

/**
 * --------------------------------
 * ex5. 비동기 방식의 통신
 * JSON 파일 불러오기
 * --------------------------------
 */

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
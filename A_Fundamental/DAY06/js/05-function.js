'use strict';

/**
 * -----------------------------------------------
 * [미션] aboutFunctions 함수를 수행(호출)할 때 마다
 * 함수에 관한 아래 메시지를 순차적으로 하나씩 출력하는 봇(Bot)을 만들자.
 * - this is function object
 * - function has properties
 * - function will call objcet
 * - function is usafull feature
 * ----------------------------------------------------
 */

// ex1.
// var message_count = 0, 
// about_fn_messages = [];
// about_fn_messages.push('this is function object');
// about_fn_messages.push('function has properties');
// about_fn_messages.push('function will call objcet');
// about_fn_messages.push('function is usafull feature');

// function printFunctionMessage() {
// 	console.log(about_fn_messages[message_count]); 
// 	// 0, 1, 2, 0, 1, 2... 계속 순환... 나머지 연산자를 사용. 
// 	message_count = (message_count + 1) % about_fn_messages.length; 
// }

// printFunctionMessage();
// printFunctionMessage();
// printFunctionMessage();
// printFunctionMessage();

/**
 * --------------------------------
 * ex2. button 이벤트 바인딩
 * --------------------------------
 */

// var message_count = 0, 
// ironman = document.querySelector('.ironman'),
// ironman_message = ironman.querySelector('.message'),
// print_button = ironman.querySelector('.ironman-print-button'),

// about_fn_messages = [];
// about_fn_messages.push('this is function object');
// about_fn_messages.push('function has properties');
// about_fn_messages.push('function will call objcet');
// about_fn_messages.push('function is usafull feature');

// function printFunctionMessage() {
// 	// console.log(about_fn_messages[message_count]); 
// 	// 0, 1, 2, 0, 1, 2... 계속 순환... 나머지 연산자를 사용.

// 	// 'message_count + 1' ==> 'message_count' 값이 변화하지 않는다. 
// 	//  'message_count = message_count + 1' 변수에 넣어야 한다.

// 	// 방법1.
// 	// message_count = (message_count = message_count + 1) % about_fn_messages.length;
// 	// return about_fn_messages[ message_count ];

// 	// 방법2. 
// 	// return about_fn_messages[ (message_count = message_count + 1) % about_fn_messages.length ];
// 	return about_fn_messages[ message_count++ % about_fn_messages.length ];
// }

// print_button.onclick = function() {
// 	var print_message = printFunctionMessage();
// 	console.log(print_message);
// 	ironman_message.textContent = print_message; // textContent: 텍스트 삽입, FF에선 호환 안됨.  innerHTML : 코드 삽입
// };

/**
 * --------------------------------
 * 자동 롤링
 * --------------------------------
 */

var message_count = 0, 
ironman = document.querySelector('.ironman'),
ironman_message = ironman.querySelector('.message'),
print_button = ironman.querySelector('.ironman-print-button'),

about_fn_messages = [];
about_fn_messages.push('this is function object');
about_fn_messages.push('function has properties');
about_fn_messages.push('function will call objcet');
about_fn_messages.push('function is usafull feature');

var printFunctionMessage;
function animateMessage() {
	printFunctionMessage = setInterval(function () {
		var print_message = about_fn_messages[ message_count++ % about_fn_messages.length ];
		// console.log(print_message);
		ironman_message.textContent = print_message;
	}, 1000);
}

animateMessage();

document.onclick = function() {
	window.clearInterval(printFunctionMessage); //멈춤 
	window.setTimeout(animateMessage, 2000); // 2초후 다시 실행 
};
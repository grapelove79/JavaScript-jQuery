'use strict';

var message_count = 0, 
ironman = document.querySelector('.ironman'),
ironman_message = ironman.querySelector('.message'),
print_button = ironman.querySelector('.ironman-print-button'),

about_fn_messages = [];
about_fn_messages.push('this is function object');
about_fn_messages.push('function has properties');
about_fn_messages.push('function will call objcet');
about_fn_messages.push('function is usafull feature');

function printFunctionMessage() {
	return about_fn_messages[ message_count++ % about_fn_messages.length ];
}

print_button.onclick = function() {
	var print_message = printFunctionMessage();
	// console.log('click function 내부: ', print_message);
	ironman_message.textContent = print_message; // textContent: 텍스트 삽입, FF에선 호환 안됨.  innerHTML : 코드 삽입
};
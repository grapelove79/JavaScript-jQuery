'use strict';

/**
 * --------------------------------
 * ex1. 비효율적. 
 * --------------------------------
 */

// querySelector: 매칭되는 첫번째만 가져온다.
// querySelectorAll: 모두 다 가져온다.

// // 문서에서 .box-container 요소를 찾아 변수에 참조한다
// var container = document.querySelector('.box-container');
// // .box_buttons 문서 요소 참조 변수에서 내부에 포함된 <a>요소를 수집한다.
// // box_buttons: 유사배열(Array Like Ojbect)
// var box_buttons = container.querySelectorAll('a');

// // 이벤트 핸들러 연결
// // this
// box_buttons[0].onclick = function() { console.log(this) };
// box_buttons[1].onclick = function() { console.log(this) };
// box_buttons[2].onclick = function() { console.log(this) };
// box_buttons[3].onclick = function() { console.log(this) };
// box_buttons[4].onclick = function() { console.log(this) };
// box_buttons[5].onclick = function() { console.log(this) };
// box_buttons[6].onclick = function() { console.log(this) };
// box_buttons[7].onclick = function() { console.log(this) };

/**
 * --------------------------------
 * ex2. 효율적으로 for문 리팩토링
 * --------------------------------
 */

// var container = document.querySelector('.box-container');
// var box_buttons = container.querySelectorAll('a');

// var i = 0, btn_len=box_buttons.length;
// for( ; i<btn_len; i++ ) {
// 	box_buttons[i].onclick = function() {
// 		console.log(this)
// 	};
// }


/**
 * --------------------------------
 * while문으로 변경
 * --------------------------------
 */

var container = document.querySelector('.box-container');
var box_buttons = container.querySelectorAll('a');


// [방법1] 계속 순환하면 함수가 계속 실행 - 좋지 않은 코드
// var i = 0, btn_len=box_buttons.length;
// while( i<btn_len ) {
// 	box_buttons[i].onclick = function() {
// 		console.log(this);
// 	};
// 	i++;
// }


// [방법2] 함수를 분리
var i = 0, btn_len=box_buttons.length;
while( i<btn_len ) {
	box_buttons[i].onclick = actionButton;
	i++;
}

function actionButton() {
	console.log(this);
};
'use strict';
/**
 * --------------------------------
 * ex1.
 * --------------------------------
 */

// 문서 객체를 찾아와 변수에 할당(대입)
// var button = document.getElementById('target');

// button.onclick = function() {
// 	document.body.style.background = "#FF32FD";
// };

/**
 * --------------------------------
 * ex1.
 * --------------------------------
 */

// 문서 객체를 찾아와 변수에 할당(대입)
var body = document.body;
var button = document.getElementById('target');

// 수행할 일(기능)을 참조하는 변수 선언
// 기능(Function) 수행
var buttonClick = function() {
	body.style.background = '#FF32FD';
};

// 참조된 변수를 사용하여
// 자바스크립트 프로그래밍 코드 작성(동작 수행)
button.onclick = buttonClick;
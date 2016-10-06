'use strict';

/**
 * -----------------------------------------------------
 * 자바스크립트의 데이터 유형 변경(형 변환, Change Data Type)
 * -----------------------------------------------------
 */

/**
 * --------------------------------
 * Number -> String
 * --------------------------------
 */

// var count = 10;

// // 방법1. 앞, 뒤에 홀따옴표(''), 쌍따옴표("")를 추가하는 경우
// '10', '2013'

// // 방법2. 빈문자 ''를 더해주는 방식
// count + ''; // 10 --> '10'

// // 방법3. 문자 객체가 소유한 함수(메소드, Method)를 사용하는 경우
// // 변수.toString()
// count.toString(); // '10'
// // 원시데이터는 속성을 가질 수 없다. 

// // 방법4. String(변수명);
// String(count);

/**
 * --------------------------------
 * String(Like Number) -> Number
 * --------------------------------
 */

// // 방법1. 숫자형 문자 뒤에 0을 빼거나, 1을 곱하거나 나눈다.
// '450' - 0, '390' * 1, '-123' / 1

// // 방법2. 숫자형 문자 앞에 + 기호를 붙인다.
// +'.94'

// // 방법3. 숫자 함수에 숫자형 문자를 전달하여 실행한다.
// Number('89790');


/**
 * --------------------------------
 * String(Like Unit) -> Number
 * 단위(Unit)의 유형
 * 10px
 * 11pt
 * 1em
 * 2.1rem
 * 100%
 * 80vmin
 * 20vw
 * --------------------------------
 */

// 방법1. parseInt() 함수에 단위 유형의 문자를 전달한다. -> 정수(Integer)를 반환
window.parseInt('20.3%', 10); // 20

// 방법 2. parseFloat() 함수에 단위 유형의 문자를 전달한다. -> 실수(Floating)를 반환
window.parseFloat('20.3%', 10); // 20.3


/**
 * --------------------------------
 * <h1> 이벤트 함수 연결
 * --------------------------------
 */

// // 문서에서 요소이름(tagName)이 'h1'인 요소를 탐색하여 수집한다.
// var h1_els = document.getElementsByTagName('h1'); // [ <h1> ] => Nodelist (노드리스트)
// // 수집된 집합(Nodelist) 내에서 대상 객체를 뽑아내야만 제어가 가능하다.
// var h1 = h1_els.item(0); // Programming에서는 시작되는 숫자 값이 0부터.

// // 이벤트 속성에 실행할 함수를 연결한다.
// h1.onclick = function() {
// 	console.log('this is heading 1.');
// }

// h1_els.onclick = function() {
// 	console.log('h1_els 변수에 참조된 것은 노드리스트(집합, 유사배열)이기에 이 코드는 작동되지 않는다.');
// }


/**
 * --------------------------------------------------------
 * ex1) 문서 객체의 스타일 속성 값을 가져와 조작하는 예시 (parseInt() 활용)
 * 표준 방식(W3C) VS 비표준 방식(MS)
 * --------------------------------------------------------
 */

// // 문서에서 요소이름(tagName)이 'h1'인 요소를 탐색하여 수집한다.
// var h1_els = document.getElementsByTagName('h1'); // [ <h1> ] => Nodelist (노드리스트)
// // 수집된 집합(Nodelist) 내에서 대상 객체를 뽑아내야만 제어가 가능하다.
// var h1 = h1_els.item(0); // Programming에서는 시작되는 숫자 값이 0부터.

// h1.onclick = function() {
// 	console.log('this is heading 1.');
// 	// 클릭하면 h1 참조 객체의 font-size 값을 가져오고자 한다.
// 	var current_font_size = h1.style.fontSize;

// 	/**
// 	 * --------------------------------
// 	 * 표준 방식 : W3C Standard Method
// 	 * --------------------------------
// 	 */
// 	var current_fontSize = window.getComputedStyle(h1).fontSize;
// 	var pars = window.parseInt(current_fontSize, 10);
// 	var parsf = window.parseFloat(current_fontSize, 10);

// 	/**
// 	 * --------------------------------------------
// 	 * 비표준 방식 : Microsoft Non Standard Method
// 	 * --------------------------------------------
// 	 */
// 	 // h1.currentStyle.fontSize;
// 	 console.log('비표준방식', current_font_size);
// 	 console.log('표준방식', current_fontSize);
// 	 console.log('parseInt', pars);
// 	 console.log('parseFloat', parsf);
// }

// h1_els.onclick = function() {
// 	console.log('h1_els 변수에 참조된 것은 노드리스트(집합, 유사배열)이기에 이 코드는 작동되지 않는다.');
// }


/**
 * --------------------------------------------------------
 * ex2) 문서 객체의 스타일 속성 값을 가져와 조작하는 예시 (parseInt() 활용)
 * --------------------------------------------------------
 */

// 문서에서 요소이름(tagName)이 'h1'인 요소를 탐색하여 수집한다.
// Nodelist (노드리스트)
var h1_els = document.getElementsByTagName('h1'); // [ <h1> ]
// 수집된 집합(Nodelist) 내에서 대상 객체를 뽑아내야만 제어가 가능하다.
var h1 = h1_els.item(0); // Programming에서는 시작되는 숫자 값이 0부터 이다.
// 이벤트 속성에 실행할 함수를 연결한다.
h1.onclick = function() {
	console.log('this is heading 1.');
	// 클릭하면 h1 참조 객체의 font-size 값을 가져오고자 한다.
	var current_font_size = h1.style.fontSize;

	/**
	 * --------------------------------
	 * 표준 방식 : W3C Standard Method
	 * --------------------------------
	 */
	current_font_size = window.getComputedStyle(h1).fontSize;
	// console.log( window.parseInt(current_font_size, 10));
	current_font_size = window.parseInt(current_font_size, 10);
	current_font_size = current_font_size - 10;
	h1.style.fontSize = current_font_size + 'px';
};

// 참고로 수집된 집합 자체에 이벤트를 연결하면 동작하지 않는다.
h1_els.onclick = function() {
	console.log('h1_els 변수에 참조된 것은 노드리스트(집합)이기에 이 코드는 작동되지 않는다.');
};
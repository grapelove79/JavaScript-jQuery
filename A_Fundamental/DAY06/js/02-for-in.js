'use strict';

// ex1.
// var cssObject = {
// 	'fort-size' : '22px',
// 	'color' : '#3021ff',
// 	'margin-top': '32px'
// }

// for ( var props in cssObject) {
// 	console.log(props);
// }

/**
 * ------------------------------------------------------------------------
 * ex2. 미션 - TO DO
 * 1. 문서(document)에서 `.target-element`를 찾아 변수에 할당(적절한 변수 이름 작성)
 * 1-2. 이벤트를 제어할 버튼 요소를 문서에서 찾아 변수에 할당 (적절한 변수 이름 작성)
 * 1-3. 설정할 CSS 객체를 선언과 동시에 값으로서 객체를 정의 
 * 2. 변수에 참조된 버튼 객체를 사용자가 클릭하면( 이벤트 연결<->함수[이벤트 핸들러] )
 * 3. 함수의 로직을 작성 (작성할 css객체를 `for ~ in문`으로 순환하여 스타일 적용)
 * ------------------------------------------------------------------------
 */

// 1. 문서(document)에서 `.target-element`를 찾아 변수에 할당(적절한 변수 이름 작성)
// querySelector : IE8+ 사용 가능. DOM4
var target_el = document.querySelector('.target-element');

// 1-2. 이벤트를 제어할 버튼 요소를 문서에서 찾아 변수에 할당 (적절한 변수 이름 작성)
var assign_btn = document.querySelector('.btn-assign-css-object');

// 1-3. 설정할 CSS 객체를 선언과 동시에 값으로서 객체를 정의 
var css_object = {
	'width'			 : '300px',
	'font-size' 	 : '5rem',
	'outline' 		 : '3px solid #FF23F7',
	'letter-spacing' : '-0.02em',
	'color' 		 : '#FF23F7'
};

// 2. 변수에 참조된 버튼 객체를 사용자가 클릭하면( 이벤트 연결<->함수[이벤트 핸들러] )
assign_btn.onclick = assignCSSObject;

// ex.
// target_el.style.color = css_object.color;
// target_el.style['font-size'] = css_object['font-size'];

// 3. 함수의 로직을 작성 (작성할 css객체를 `for ~ in문`으로 순환하여 스타일 적용)
// jquery의 `.css()'와 같다.
function assignCSSObject() {
	for ( var props in css_object) {
		// console.log(props);
		var value = css_object[props]; // === css_object['font-size'];
		// console.log(prop,':', value);
		target_el.style[props] = value;
	}
}
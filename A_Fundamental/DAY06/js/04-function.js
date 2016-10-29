'use strict';

/**
 * -----------------------------------------------------------------
 * 자바스크립트 함수(function)
 * 함수는 명령문의 묶음이며 재샤옹 가능하다. (기능, 코드 묶음, 모듈)
 * 자바스크립트 함수는 객체이다.
 * 1급 객체(First Class Object)이다.
 * 함수는 객체이므로 속성을 가질 수 있다.
 * 이유는 `객체`란? `속성의 집합`이기 때문이다.
 * 함수는 유일하게 호출 가능(코드 재사용, 발동 시기(이벤트)를 조정)한 객체이다.
 * -----------------------------------------------------------------
 */

// 함수 정의 목적: 일련의 반복되는 코드 묶음으로 재사용할 목적이다.
function aboutFunction() {
	console.log('this is function object');
	console.log('function has properties');
	console.log('function will call objcet');
}

// 함수 이름 호출(실행)
console.log('aboutFunction(): ', typeof aboutFunction()); // 'undefined'

// 함수 이름 (실행 X, 호출 X)
console.log('aboutFunction: ', typeof aboutFunction); // 'function'


/**
 * --------------------------------
 * 함수를 만드는 자주 사용되는 방법 2가지
 * --------------------------------
 */
 
/**
 * --------------------------------
 * 1. 함수를 정의하는 방법
 * : 선언식 (함수 이름으로 정의하는 방법)
 * --------------------------------
 */

function drinkMilk() {
	console.log('밀크를 마시다');
	// return값이 없으면 기본값 undefined. (return을 쓰지 않으면 암묵적으로 undefined)
	return undefined;
}

/**
 * ---------------------------------------
 * 2.함수 표현식을 변수에 참조하는 방식
 * : 표현식 (함수 값(리터럴)을 변수에 할당하는 방법)
 * ---------------------------------------
 */

var lookAt = function() {
	console.log('무엇무엇을 응시하다.');
};

var target_button = document.querySelector('button.target');

// 2-1. 문서객체.이벤트속성 = 함수 값;
target_button.onclick; // 기본값: null

// ex1. 문서 요소객체의 이벤트 속성(객체가 소요한 변수)에 함수의 실행 결과 반환 값을 복사/참조
// target_button.onclick = drinkMilk(); // (X) 

// ex2. 문서 요소객체의 이벤트 속성(객체가 소요한 변수)에 함수를 참조
// 참조된 함수의 실행 시점(Event)은 사용자가 버튼을 클릭했을 때.
target_button.onclick = drinkMilk; // (O) => drinkMilk() 함수가 참조가 됨.

// 2-2. 문서객체.이벤트속성 = 함수 이름 연결
target_button.onmouseenter = function() {
	console.log('버튼에 마우스가 올라갔다.');
}
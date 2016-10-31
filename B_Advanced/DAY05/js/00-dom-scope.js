'use strict';

/**
 * --------------------------------
 * 안티패턴: 전역 공간에 변수를 설정
 * --------------------------------
 */

// var creation = 'Creation Element Node';

/**
 * --------------------------------------------------
 * 굿패턴: 모듈을 사용하여 코드를 외부에서 조작할 수 없도록 처리
 * IIFE 즉시 실행함수 패턴 ==> 자바스크립트 모듈 패턴
 * --------------------------------------------------
 */

 // (function() {
 // 	// var creation => 지역변수
 // 	var creation = 'Creative Front-End Developer';
 // 	console.log('내부 - creation:', creation);
 // }());
 // 	console.log('외부 - creation:', creation); // creation is not defined


 /**
  * -------------------------------------------------------------------
  * var 키워드를 사용할 경우는 블록문(if, for, while)은 별도의 공간을 가지지 않는다.
  * 단, ES6(ECMAScript 2015)에서는 let 키워드가 등장했는데 
  * `let 키워드`를 블록문 내부에서 사용할 경우, 별도의 공간이 형성이 된다.
  * -------------------------------------------------------------------
  */

// ex1.
// var creation = 'Creation Element Node';
// {
// 	var creation = 'Creative Front-End Developer';
// 	// let creation = 'Creative Front-End Developer';
// 	console.log('내부 - creation:', creation);
// }
// console.log('외부 - creation:', creation); 


// ex2.
var creation = 'Creation Element Node';

console.log('외부 - creation:', creation); // Creation Element Node

 {
 	var creation = 'Creative Front-End Developer';
 	console.log('블록문 내부 - creation:', creation); // Creative Front-End Developer
 }

 (function() {
 	// var creation => 지역변수
 	var creation = 'Creative Developer';
 	console.log('함수 내부 1 - creation:', creation); // Creative Developer
 }());

 (function() {
 	// var creation => 지역변수
 	var creation = 'Reactivity RXJS';
 	console.log('함수 내부 2 - creation:', creation); // Reactivity RXJS
 }());

console.log('외부 - creation:', creation); // Creative Front-End Developer
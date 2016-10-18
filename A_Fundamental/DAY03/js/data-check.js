'use strict';

/**
 * --------------------------------
 * 올바른 데이터 유형을 체크하는 방법
 * --------------------------------
 */

/**
 * -----------------------------------------------------------
 * [정보 유형 파악하기 1] typeof 키워드(함수가 아님)
 * typeof 키워드 사용 시 주의할 점!
 * null, Array를 올바르게 인식하지 못한다. 둘 다 모두 'object'를 반환한다.
 * -----------------------------------------------------------
 */

var num, str, boo, fnc, arr, obj;

num = 100;
str = 'this is string';
boo = !false;
fnc = function() {};
arr = [];
obj = {};

console.log('typeof num', num);				// number
console.log('typeof str', str);				// string
console.log('typeof boo', boo);				// boolean
console.log('typeof fnc', fnc);				// function
console.log('typeof arr', arr);				// object ==> array로 제대로 출력이 안된다.
console.log('typeof obj', obj);				// object
console.log('typeof null', null);			// object ==> null로 제대로 출력이 안된다.
console.log('typeof undefined', undefined); // undefined


// ex.
var x = 909;
x - 80;
x + '';
console.log( typeof x + '' ); // number
console.log( typeof (x + '') ); // string

/**
 * --------------------------------------------------------
 * 데이터 유형을 체크하는 방법 typeof instanceof
 * 설계 도면(클래스(Class), 생성자(constructor)) 
 * ㄴ> ex.) 'sketch' Symbols
 * 조각(실체화된 객체) instance 
 * ㄴ> 생성자 함수를 사용하여 생성한 객체
 * --------------------------------------------------------
 */

var playlist = new Array();
console.log(typeof playlist); //object => 데이터 유형이 제대로 체크가 되지 않아. 'instanceof'를 사용하면 제대로 나온다.
console.log(playlist instanceof Array); //true
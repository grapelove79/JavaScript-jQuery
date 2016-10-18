'use strict';

/**
 * --------------------------------
 * Boolean 데이터로 유형 변경
 * typeof의 설계오류
 * --------------------------------
 */

 /**
  * --------------------------------
  * 방법1. Boolean() 함수 사용
  * --------------------------------
  */

var num = 101,
	str = 'variable vs constant',
	nu  = null,
	arr = [num, str, nu],
	un; //undefined

console.log('num', num);
console.log('num', typeof num);
console.log('str', str);
console.log('str', typeof str);
console.log('arr', arr);
console.log('arr', typeof arr); // 설계 오류!!! arr은 객체가 아님에도 typeof로 결과를 출력했을 때 객체(Object)라고 결과를 반환한다.
console.log('nu', nu);
console.log('nu', typeof nu); // 설계 오류!!! null은 객체가 아님에도 typeof로 결과를 출력했을 때 객체(Object)라고 결과를 반환한다.
console.log('un', un);
console.log('un', typeof un);

console.log( Boolean(num) ); // true
console.log( Boolean(str) ); // true
console.log( Boolean(arr) ); // true
console.log( Boolean(nu) );  // false
console.log( Boolean(un) );  // false

console.log( !num ); // !true -> false
console.log( !str ); // !true -> false
console.log( !nu );  // !false -> true
console.log( !un );  // !false -> true

console.log( !!num ); // true
console.log( !!str ); // true
console.log( !!nu );  // false
console.log( !!un );  // false

/**
 * --------------------------------
 * 방법2. 
 * undefined, null 데이터 유형 변경 방법
 * !! 를 데이터 앞에 붙여주는 것 (애용)
 * [문자]
 * 'null', undefined + '', String(null)
 * [불리언]
 * !null, !!undefined
 * [숫자]
 * null + 9 => 9, Number(null)
 * --------------------------------
 */

// 왜? 함수를 만들어야 하나?
// isNaN() 사용이 혼란을 가미하므로
// 쉽게 이해하고 사용 가능하도록 사용자정의 함수를 만든다.
function isNumber(value) {
  return !isNaN(value);
}
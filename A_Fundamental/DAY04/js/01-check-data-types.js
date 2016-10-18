'use strict';

/**
 * --------------------------------
 * 올바른 데이터 유형을 체크하는 방법
 * 1. typeof 키워드
 * 2. instanseof 키워드
 * 3. .constructor 속성
 * 4. 사용자 정의 헬퍼 함수 isDtatType()
 * --------------------------------
 */

var num, str, boo, fnc, arr, obj, nu;
num = 10;					// new Number(10) 
str = 'java vs javascript'; // new String('java vs javascript')
boo = !false;				// new Boolean(true)
fnc = function() {};		// new Function()
arr = [];					// new Array()
obj = {};					// new Object()
nu  = null;
/**
 * --------------------------------
 * 1. typeof
 * typeof의 치명적인 설계 오류
 * null, []를 올바르게 인식하지 못한다.
 * --------------------------------
 */

console.log('null', typeof nu);		// object
console.log('arrary', typeof arr);  // object

/**
 * --------------------------------------------------------------------
 * 2. instanceof
 * (실체화된 객체) instance - 생성자(constructor) 
 * ㄴ> e.g. Adobe Flash, Adobe Illustrator, Sketch --> 'Symbols' 개념
 * {실체화된 객체} instanceof [객체를 생성하는 생성자]
 * --------------------------------------------------------------------
 */

var check_array_data = arr instanceof Array;
var is_check_array_data = arr instanceof Object;

console.log('check_array_data', check_array_data); //true
console.log('is_check_array_data', is_check_array_data); //true

// 객체만이 생성자를 가진다. null 객체가 아니다. null 유형은 instanceof 키워드를 사용하여 데이터 체크가 불가능
// 이유는 instanceof 키워드는 객체만 판별이 가능!!!
// 객체가 아닌 것들(null, undefined)에는 사용할 수 없다.
// console.log('null is:', null instanceof Null);

// * instanceof 키워드 사용시 주의가 필요한 부분
// 원시데이터 유형(9, '문자', false)은 올바르게 체크할 수 없다.

// 원시데이터는 값이기 때문에. instanceof의 조각이 아니기 때문에 쓸 수가 없다. 
console.log('num instanceof Number', num instanceof Number);  // false
console.log('str instanceof String:', str instanceof String);  // false
console.log('boo instanceof Boolean:', boo instanceof Boolean); // false


/**
 * ------------------------------------------------------------------------------------
 * 3. .constructor (생성자)
 * 자바스크립트에 존재하는 실체화된 모든 객체(instance Object)는 기본적으로 가지고 있는 속성이다.
 * {object}.constructor 속성(Property)
 * 객체가 아닌 것들(null, undefined)에는 사용할 수 없다.
 * undefined => typeof로 판별 가능
 * ------------------------------------------------------------------------------------
 */

console.log( 'num.constructor:', num.constructor ); // function Number() { [native code] }
console.log( 'num.constructor === Number:', num.constructor === Number ); // true

console.log( 'str.constructor:', str.constructor ); // function String() { [native code] }
console.log( 'str.constructor === String:', str.constructor === String ); // true

console.log( 'boo.constructor:', boo.constructor ); // function Boolean() { [native code] }
console.log( 'str.constructor === Boolean:', str.constructor === Boolean ); // true

console.log( 'fnc.constructor:', fnc.constructor ); // function Function() { [native code] }
console.log( 'fnc.constructor === Function:', fnc.constructor === Function ); // true

console.log( 'arr.constructor:', arr.constructor ); // function Array() { [native code] }
console.log( 'arr.constructor === Array:', arr.constructor === Array ); // true

console.log( 'obj.constructor:', obj.constructor ); // function Object() { [native code] }
console.log( 'arr.constructor === Object:', obj.constructor === Object ); // true


/**
 * ------------------------------------------
 * 4. 사용자 정의 헬퍼 함수 isDataType()
 * 'Object' 모든 객체의 조상이자, 객체 생성자 함수
 * 생성자 함수의 특징은 함수 이름의 첫 글자는 대문자.
 * 생성자 함수는 .prototype 속성을 가짐.
 * ------------------------------------------
 */


console.dir(Object.prototype); // {}

// Object.prototype 원형 객체의 능력 중에는 .toString() 함수가 있다.
console.log(typeof Object.prototype.toString); // function

// Object.prototype.toString 함수는 누군가 빌려쓸 수 있다.
// 자바스크립트의 데이터 유형들이 빌려 쓴다.
// 메소드 빌려쓰기 -> call({data})
// Object.prototype.toString.call({data}); // [Object {Date}]

// 위 코드의 수행 결과 아래와 같은 문자열이 반환된다.
// [Object Data]

// 우리는 위 문자열에서 해당 데이터 이름을 가진 것을 잘라내야(slice) 한다.
// Object.prototype.toString.call({data}).slice(8, -1); //Data

// 잘라낸 문자열(Data)을 소문자로 반환하자
// Object.prototype.toString.call({data}).slice(8, -1).toLowerCase(); // data

// 사용자 정의 헬퍼 함수 
function isDataType(data) {
	return Object.prototype.toString.call(data).slice(8, -1).toLowerCase(); 
}

/**
 * --------------------------------
 * console {}
 * --------------------------------
 */

// console.log() : 기록하다.
// console.info() : 정보를 표시하다.
// console.error() : 오류를 출력하다.
// console.dir() : 분석하다.
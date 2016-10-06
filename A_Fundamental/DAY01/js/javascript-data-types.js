/**
 * ---------------------------------------------------------------
 * 자바스크립트 데이터 유형(Data type) 
 * ---------------------------------------------------------------
 * [원시 데이터 유형(primitive type)] 
 * 숫자 (Number) : 2016
 * 문자 (String) : '푸르고 깊은 바다', "Design is All. All is Design."
 * 불리언 (Boolean, 논리) : true, falae
 * null
 * undefined
 * ----------------------------------------------------------------
 * [복합 데이터 유형(reference type)] 
 * 배열 (Array)
 * 함수 (Function)
 * 객체 (Object)
 * ---------------------------------------------------------------
 */

// 숫자를 변수에 할당
var current_year = 2016;

// 문자를 변수에 할당
var app_name = 'application';

// 불리언을 변수에 활당
var studing = true;
var sleeping = false;

/**
 * --------------------------------
 * 변수에 데이터 값 할당: 복사 vs 참조
 * --------------------------------
 */

var c_year = current_year;
// console.log('current_year:', current_year);
// console.log('c_year:', c_year);

// 참조하는 경우
// 복합 데이터 활용
// 배열 데이터
var study_tools = ['pen', 'note'];
// study_tools 변수가 참조한 값을
// class_tools 변수도 참조한 것이다.
var class_tools = study_tools;

// console.log('study_tools:', study_tools);
// console.log('class_tools:', class_tools);

var a = 10, 
	b = a,
	c = { x: a},
	d = c;

console.log('a의 값은', a); // 10
console.log('b의 값은', b); // 10 
console.log('c의 값은', c); // Object {x: 10}
console.log('d의 값은', d); // Object {x: 10}

a = 100, b = 200, c.x = 300;
console.log('a의 값은', a); // 100
console.log('b의 값은', b); // 200
console.log('c의 값은', c); // Object {x: 300}
console.log('d의 값은', d); // Object {x: 300}
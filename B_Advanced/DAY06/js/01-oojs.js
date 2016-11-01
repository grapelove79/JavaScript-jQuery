// 'use strict';

/**
 * ----------------------------------------------------
 * 자바스크립트 프로그래밍 방법론
 * ----------------------------------------------------
 * 1. 함수 지향 프로그래밍
 * : 함수 중심의 프로그래밍 방법론
 * 2. 객체 지향 자바스크립트
 * : 객체를 중심으로 프로그래밍 방법론
 * : "객체를 생성하다"
 * : 어떻게 객체를 생성할 것인가?
 * ----------------------------------------------------
 * 3. 객체의 종류
 * 3-1. 언어에 내장된 객체(Native Objects)
 * ㄴ 원시 유형 : String, Number, Boolean
 * ㄴ 참조 유형 : Object, Function, Array
 * 3-2. 언어차원에서 지원하는 라이브러리 객체
 * ㄴ Math, RegExp, Date, ...
 * ----------------------------------------------------
 * 3-3. 웹 브라우저에 정의된 객체(Browser Object Model) : BOM
 * ㄴ window {}
 * ㄴ screen {}
 * ㄴ navigator {}
 * ㄴ location {}
 * ㄴ history {}
 * ----------------------------------------------------
 * 3-4. 사용자 정의 객체(Custom, User Defined Objects)
 * ㄴ Creational Pattern
 * ㄴ Object Literal
 * ㄴ Constructor, Prototype
 * ㄴ Object.create()
 * ㄴ class 
 * ----------------------------------------------------
 */

/**
 * --------------------------------
 * ex1. 
 * --------------------------------
 */

function subject(who, where, when) {
	return who + '가' + where + '에서' + when + '에 교육을 받는다.';
}

var korea = subject('야무', '서울', '주말');
var japanese = subject('사토시', '도쿄', '주중');

console.log('korea', korea);
console.log('japanese', japanese);

console.log('--------------------------------------------------');

/**
 * --------------------------------
 * ex2. 데이터 유형을 검증
 * --------------------------------
 */

var kor, jap;

// 객체를 생성할 생성자(Constructor) 함수 정의
function Subject(){}

// 객체 생성
kor = new Subject();
jap = new Subject();

/**
 * --------------------------------------------------------------
 * 데이터 유형을 검증
 * 1. typeof: `null`, `[]` 유형을 올바르게 체크해주지 않는다.
 * 2. 생성된 객체의 생성자를 판단하는 코드 (instanceof, .constructor)
 * ㄴ 2-1. instanceof: 원시 데이터 유형의 경우는 올바르게 체크해주지 않는다.
 	: 객체 instanceof 생성자(함수)
 * ㄴ 2-2. .constructor : 객체가 아닌 유형의 경우에서는 사용 불가 
 	: 객체.constructor === 생성자 (함수)
 * --------------------------------------------------------------
 */

// 1. typeof [ null, [] 유형을 올바르게 체크해주지 않는다. ]
// console.log('typeof kor', typeof kor);
// console.log('typeof jap', typeof jap);

// 2. 생성된 객체의 생성자를 판단하는 코드 (instanceof, .constructor)
// console.log('kor instanceof Subject', kor instanceof Subject); //true
// console.log('jap.constructor === Subject', jap.constructor === Subject); //true


/**
 * --------------------------------
 * ex3. 생성자(Constructor) 함수 
 * --------------------------------
 */

var kor, jap;
// 객체를 생성할 생성자(Constructor) 함수 정의
function Subject(category, teacher, course){
	'use strict'; // (지시문 프롤로그) 
	// this !== window
	// new를 함께 사용하지 않을 경우 
	// this === undefined

	// 함수 내에 있는 `this`는 `함수를 실행하는 주체`를 가르킨다.
	// 생성자 함수에서 `this`는 `생성된 객체`를 가르킨다.

	// 속성 : 명사 형태
	this.category = category;
	this.teacher = teacher;
	this.course = course;

	// 속성(메소드): 동사 형태
	this.addCourseItem = function(item) {
		this.course.push(item);
	};
	this.fireTeacher = function() {
		this.teacher = nul;
	};
	this.replaceTeacher = function(new_teacher) {
		this.teacher = new_teacher;
	};
}

// 객체 생성
kor = new Subject('수학', '공학수학', ['미분', '적분', '삼각함수']);
jap = new Subject('영어', '회화문법', ['현재시제', '의문형']);

// 1. typeof
console.log('typeof kor', typeof kor); //object
console.log('typeof jap', typeof jap); //object

// 2. instanceof, constructor
console.log('kor instanceof Subject', kor instanceof Subject); //true
console.log('jap.constructor === Subject', jap.constructor === Subject); //true

console.log('--------------------------------------------------------------------------------------------');

console.log('kor: ', kor); // Subject {category: "수학", teacher: "공학수학", course: Array[3]}
console.log('jap: ', jap); // Subject {category: "영어", teacher: "회화문법", course: Array[2]}

console.log('--------------------------------------------------------------------------------------------');

console.log('kor: ', kor.category); // 수학
console.log('kor: ', kor.teacher);  // 공학수학 
console.log('kor: ', kor.course);   // ["미분", "적분", "삼각함수"]

console.log('jap: ', jap.category); // 영어
console.log('jap: ', jap.teacher);  // 회화문법
console.log('jap: ', jap.course);   // ['현재시제', '의문형']

console.log('--------------------------------------------------------------------------------------------');

/**
 * --------------------------------
 * 객체의 유형
 * 1. function : 호출가능 객체
 * 2. array : 값으로 구성된 집합 객체
 * 3. object : 속성으로 구성된 집합 객체
 * --------------------------------
 */

/**
 * --------------------------------------
 * ex1. 객체 리터럴 : Plain Object로 생성
 * --------------------------------------
 */

var cssProperties = {};
cssProperties.margin = '20px';
cssProperties.outline = '2px solid #30212f';
cssProperties.fontSize = '3rem';

console.log('Plain Object로 생성: ', cssProperties); //

console.log('--------------------------------------------------------------------------------------------');

/**
 * --------------------------------------
 * ex2. new Subject 생성
 * --------------------------------------
 */

var history_of_korea = new Subject('한국사', '설민석', [
	'숨겨진 조선왕조 비록',
	'한일항쟁과 그 결과'
]);

console.log('new Subject 생성: ', history_of_korea);

history_of_korea.addCourseItem('흥선대원과 쇄국정책')

console.log('history_of_korea.course:', history_of_korea.course);


/**
 * --------------------------------------------
 * 함수의 `this`, 영역(scope)
 * 자바스크립트 블록문 : 별도의 스코프를 생성하지 못한다.
 * --------------------------------------------
 */

/**
 * --------------------------------
 * ex1. 함수는 별도의 스코프가 생성이 된다.
 * --------------------------------
 */

var phone = 'Gallaxy';

console.log(phone); // Gallaxy

 function scopeFn() {
 	// console.log(this); // window
 	var phone = 'iPhone';
 	this.phone = phone;
 	console.log(phone); // iPhone
 }

scopeFn(); // === window.scopeFn(); // this === window{}
document.onclick = scopeFn; // iPhone
console.log(phone); // iPhone


/**
 * --------------------------------
 * ex3. 'use strict'; 사용하지 않고
 * new를 붙이지 않고 생성할 경우 - BAD
 * --------------------------------
 */

// window.teacher
// Subject('IT', 'yamoo9', []);
// window.category // 'IT'
// window.teacher // 'yamoo9'
// window.course // []

 /**
  * --------------------------------
  * 'use strict'; (지시문 프롤로그)사용하고
  *  new를 붙여서 생성한 경우 - GOOD
  * --------------------------------
  */

// Subject('IT', 'yamoo9', []); // Uncaught TypeError: Cannot set property 'category' of undefined(…)
// new Subject('IT', 'yamoo9', []);

/**
 * --------------------------------------------------
 * 자바스크립트 세상의 모든 객체는 `.constructor`속성을 가진다.
 * 사용자가 정의 한 객체 역시 .constructor 속성을 가진다.
 * --------------------------------------------------
 */

// [].constructor // function Array() { [native code] }
// ({}).constructor // functio Object() { [native code] }
// ({}).constructor === Object // true
// 'hi'.constructor // function String() { [native code] }
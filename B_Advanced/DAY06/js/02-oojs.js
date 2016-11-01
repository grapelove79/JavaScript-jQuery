/**
 * --------------------------------
 * Person 객체
 * --------------------------------
 */

function Person(first_name, last_name, age, job, category) {
	'use strict';
	this.first_name = first_name;
	this.last_name 	 = last_name;
	this.age 		 = age;
	this.job 		 = job;
	this.category 	 = category;
}

var kor_teacher = new Person('설', '민석', 39, '강사', '한국사 강사');
var jap_teacher = new Person('요혜이', '나카무라', 32, '통역사','일본어 회화 강사');


/**
 * --------------------------------
 * Subject 객체
 * --------------------------------
 */

var kor, jap;
// 객체를 생성할 생성자(Constructor) 함수 정의
function Subject(category, teacher, course){
	'use strict'; // (지시문 프롤로그) : Subject 생성자 함수 안에서 엄격하게 사용하겠다
	// this !== window
	// new를 함께 사용하지 않을 경우 
	// this === undefined

	// 일반함수에서는 this는 주체가 되는 것이 this.... 다시듣기 녹음1. 
	// 생성자 함수에서는 생성된 객체가 this가 된다.

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
kor_subject = new Subject(kor_teacher.category, kor_teacher, ['미분', '적분', '삼각함수']);
jap_subject = new Subject(jap_teacher.category, jap_teacher, ['현재시제', '의문형']);

console.log(kor_subject);

console.log('------------------------------------------------------------------------------------------');

console.log(jap_subject);
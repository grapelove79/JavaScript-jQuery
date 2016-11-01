'use strict';

// 선생님(teacher)
//   - 과목(subject)
//   - 경력(career)
//   - 전공(major)
//   - 이름(name)
//   - 성별(gender)
//   - 나이(age)
//   - 키(height)
//   - 몸무게(weight)
//   - 건강(health)
//   - 질병(sickness)

/**
 * --------------------------------
 * 방식1. 모듈공개 
 * global.Teacher = Teacher;
 * --------------------------------
 */

// (function(global) {
// 	function Teacher(person, subject, career, major) {
// 	// preson 인자는 생성자가 Person인가?
// 	if ( person.constructor !== Person ) {
// 		throw new Error('첫번째 인자는 Preson 생성자는 사용하여 생성된 객체어야 합니다.');
// 	}
// 	this.person  = person;
// 	this.subject = subject;
// 	this.career  = career;
// 	this.major   = major;
// }

// 	// 모듈 공개
// 	global.Teacher = Teacher;

// }(this));

/**
 * --------------------------------
 * 방식2. 네임스페이스
 * y9.Teacher = Teacher;
 * --------------------------------
 */

(function(global, y9) {
	function Teacher(person, subject, career, major) {
	// preson 인자는 생성자가 Person인가?
	if ( person.constructor !== y9.Person ) {
		throw new Error('첫번째 인자는 Preson 생성자는 사용하여 생성된 객체어야 합니다.');
	}
	this.person  = person;
	this.subject = subject;
	this.career  = career;
	this.major   = major;
}
	// 모듈 공개
	// global.Teacher = Teacher;
	y9.Teacher = Teacher;

})(this, ( this.y9 = this.y9 || {}) );
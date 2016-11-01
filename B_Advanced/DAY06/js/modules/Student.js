'use strict';

// 학생(student)
//   - 학년(grade)
//   - 졸업년도(graduation)
//   - 좋아하는 과목(like subject)
//   - 싫어하는 과목(hate subject)
//   - 이름(name)
//   - 성별(gender)
//   - 나이(age)
//   - 키(height)
//   - 몸무게(weight)
//   - 건강(health)
//   - 질병(sickness)

/**
 * --------------------------------
 * [방법1] 바로 공개 : global.Student 
 * --------------------------------
 */

// (function(global) {
// 	global.Student = function Student(person, 
// 	grade, 
// 	graduation, 
// 	like_subject, 
// 	hate_subject
// 	) {
// 		if( !(person instanceof Person) ) {
// 			throw new Error('첫번째 인자는 Preson 생성자는 사용하여 생성된 객체어야 합니다.');
// 		}
// 		this.person = person;
// 		this.grade = grade;
// 		this.graduation = graduation;
// 		this.like_subject = like_subject;
// 		this.hate_subject = hate_subject;
// 	}

// 	function studying(how) {
// 		return this.person.name + '은' + how + ' 공부를 한다.';
// 	}
// }(this));

////////////////////////////////////////////////////////////

/**
 * ---------------------------------------------------
 * [방법2] 선택해서 공개 : global.Student = Student;
 * ---------------------------------------------------
 */

// (function(global) {
// 	function Student(person, 
// 	grade, 
// 	graduation, 
// 	like_subject, 
// 	hate_subject
// 	) {
// 		if( !(person instanceof Person) ) {
// 			throw new Error('첫번째 인자는 Preson 생성자는 사용하여 생성된 객체어야 합니다.');
// 		}
// 		this.person = person;
// 		this.grade = grade;
// 		this.graduation = graduation;
// 		this.like_subject = like_subject;
// 		this.hate_subject = hate_subject;
// 	}

// 	function studying(how) {
// 		return this.person.name + '은' + how + ' 공부를 한다.';
// 	}

// 	global.Student = Student;
// }(this));

/**
 * ----------------------------------------
 * [방법3] 네임스페이스 : y9.Student = Student;
 * ----------------------------------------
 */

(function(global, y9) {
	var Student = function(person, 
	grade, 
	graduation, 
	like_subject, 
	hate_subject
	) {
		if( !(person instanceof y9.Person) ) {
			throw new Error('첫번째 인자는 Preson 생성자는 사용하여 생성된 객체어야 합니다.');
		}
		this.person = person;
		this.grade = grade;
		this.graduation = graduation;
		this.like_subject = like_subject;
		this.hate_subject = hate_subject;
	}

	function studying(how) {
		return this.person.name + '은' + how + ' 공부를 한다.';
	}

	// global.Student = Student;
	y9.Student = Student;

})(this, (this.y9 = this.y9 || {}) );
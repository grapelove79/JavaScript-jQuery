'use strict';

/**
 * --------------------------------
 * 방식1.
 * --------------------------------
 */

// // 사람을 만들고 싶다. 
// var cocoaman = new Person(
// 	'코코아', 
// 	'남성',
// 	23,
// 	'167cm',
// 	'52kg',
// 	'독서',
// 	'건강하다',
// 	'식도염'
// );

// console.log('cocoaman: ', cocoaman);

// console.log('------------------------------------------------');

// // 방식1
// // 알고보니, 이 사람은 선생님이다. 선생님으로 변경하자!
// // cocoamane.subject = '코코아 열매 부수기';
// // cocoamane.career = '12년';
// // cocoamane.major = '열매 빻기';
 
// var teacher_cocoaman = new Teacher(
// 	cocoaman, 
// 	'코코아 열매 부수기', 
// 	'12년', 
// 	'열매 빻기'
// );

// console.log('teacher_cocoaman: ', teacher_cocoaman);

// console.log('------------------------------------------------');

// var student_cocoamane = new Student(
// 	cocoaman, 
// 	'2학년', 
// 	'2012년', 
// 	'영어',
// 	'수학'
// );

// console.log('student_cocoamane: ', student_cocoamane);

/**
 * --------------------------------
 * 방식3.
 * 네임스페이스  
 * new y9.Person
 * --------------------------------
 */

// 사람을 만들고 싶다.
var cocoaman = new y9.Person(
  '코코아맨',
  '남성',
  23,
  '167cm',
  '52kg',
  '독서',
  '건강',
  '식도염'
);

console.log('1. cocoaman:', cocoaman);

console.log('%c------------------------------', 'color: #3d9a21');

// 알고 보니 이 사람은 선생님이었다. 선생님으로 변경하자.
// cocoaman.subject = '코코아 열매 부수기';
// cocoaman.career  = '12년';
// cocoaman.major   = '열매 빻기';

var teacher_cocoaman = new y9.Teacher(
  cocoaman,
  '코코아 열매 부수기',
  '12년',
  '열매 빻기'
);

console.log('2. teacher_cocoaman:', teacher_cocoaman);

console.log('%c------------------------------', 'color: #3d9a21');

var student_cocoaman = new y9.Student(
  cocoaman,
  '2학년',
  '2021년',
  '영어',
  '수학'
);

console.log('3. student_cocoaman:', student_cocoaman);

console.log('%c------------------------------', 'color: #3d9a21');

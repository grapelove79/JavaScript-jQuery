'use strict';

/**
 * --------------------------------------------------------
 * conditions
 * : 자바스크립트 조건 구문 => if, &&, ||, switch, 3항식, 다중 3항식
 * --------------------------------------------------------
 */

 // if(조건) {
 // 	조건이 참일 경우 실행되는 블록문;
 // }


/**
 * --------------------------------
 * ex. if문
 * --------------------------------
 */
//  console.log('%c---------------------------', 'color: #3d9a21');

//  var condition = true;
//  if (condition === true) { 
//  	console.log('condition is true'); 
//  } else { 
//  	console.log('condition is false');
//  }

//  // condition is true

//  console.log('%c---------------------------', 'color: #3d9a21');

//  // 조건 변경
//  condition = !condition // 'condition=> true'에서 '!condition => false'로 형변환이 됨.
//  if (condition === true) { 
//  	console.log('condition is true'); 
//  } else { 
//  	console.log('condition is false');
//  }

// // condition is false


/**
 * --------------------------------
 * ex2. if문
 * --------------------------------
 */
 console.log('%c---------------------------', 'color: #3d9a21');

 var condition = true;
 if (condition !== true) { 
 	console.log('condition is true'); 
 } else { 
 	console.log('condition is false');
 }


 console.log('%c---------------------------', 'color: #3d9a21');

 var condition = true;
 if (true !== true) { 
 	console.log('condition is true'); 
 } else { 
 	console.log('condition is false');
 }


/**
 * --------------------------------
 * if() {} else if 
 * --------------------------------
 */
var rank = 1
//rank 조건이 1이라면 블록문 {} 수행
if ( rank === 1 ) {  
	console.log('rank is One.');
} 
//rank 조건이 2이라면 블록문 {} 수행
else if( rank === 2 ) { 
	console.log('rank is Two.');
} 
//rank 조건이 3이라면 블록문 {} 수행
else if( rank === 3 ) { 
	console.log('rank is Three.');
} 
//rank 조건이 4이라면 블록문 {} 수행
else if( rank === 4 ) { 
	console.log('rank is Four.');
} 
//rank 조건이 1,2,3,4이 아니라면 블록문 {} 수행
else {
	console.log('rank isn\'t One, Two, Three, Four.');
}

/**
 * --------------------------------
 * 논리연산자
 * 그리고(AND) && : A && B
 * 또는(OR)	 || : A || B
 * --------------------------------
 */
// // range 변수 선언 및 숫자 값 복사
// var range = 27;

// // if 조건 구문 
// if( range < 8 ) {
// 	console.log('range 값은 8보다 작은 수 입니다.');
// } 
// else if( range >= 8 && range <= 27 ) {
// 	console.log('range 값은 8이상, 27이하의 수입니다.');
// } 
// else {
// 	console.log('range 값은 27보다 큰 수입니다.');
// }

function checkNum(range) {
	if( range < 8 ) {
		console.log('range 값은 8보다 작은 수 입니다.');
	} 
	else if( range >= 8 && range <= 27 ) {
		console.log('range 값은 8이상, 27이하의 수입니다.');
	} 
	else {
		console.log('range 값은 27보다 큰 수입니다.');
	}
}
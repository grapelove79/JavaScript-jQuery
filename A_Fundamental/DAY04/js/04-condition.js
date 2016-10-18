'use strict';

/**
 * --------------------------------------------------------
 * 대입(할당) 연산자
 * = 오른쪽에 있는 값을 왼편의 변수에 대입(할당)하다 [값 복사|참조]
 * --------------------------------------------------------
 * 비교 연산자 (Compare Operators)
 * > 보다 크다
 * < 보다 작다
 * >= 보다 크거나 같다
 * <= 보다 작거나 같다
 * == 값이 같다 ( 자동으로 형 변환 발생! 안티 패턴)
 * === 값이 같다 ( 자동으로 형 변환 발생하지 않는다! 굿 패턴) 엄격!!
 * != 같이 다르다 ( 자동으로 형 변환 발생! 안티 패턴)
 * !== 값이 다르다 ( 자동으로 형 변환 발생하지 않는다! 굿 패턴) 엄격!!
 * --------------------------------------------------------
 * 논리 연산자 (Logical Operators)
 * && 두 조건 모두 참일 때만 결과 참
 * || 두 조건 중 하나가 참이면 결과 참
 * ! 불리언 값으로 변경하되, 반전시킴
 * --------------------------------------------------------
 */

// // 느슨한 비교 예
// ""           ==   "0"           // false
// 0            ==   ""            // true
// 0            ==   "0"           // true
// false        ==   "false"       // false
// false        ==   "0"           // true
// false        ==   undefined     // false
// false        ==   null          // false
// null         ==   undefined     // true
// " \t\r\n"    ==   0             // true

// // 엄격한 비교 예
// ""           ===   "0"           // false
// 0            ===   ""            // false
// 0            ===   "0"           // false
// false        ===   "false"       // false
// false        ===   "0"           // false
// false        ===   undefined     // false
// false        ===   null          // false
// null         ===   undefined     // false
// " \t\r\n"    ===   0             // false

//ES6
// Object.is(0, false)
// Object.is(0, 0)

/**
 * ------------------------------------
 * &&, || 연산자 만으로 조건 구문 처리하는 방법!
 * ------------------------------------
 */
var drink;  // undefiend

// if(!drink) { console.log(default drink); }
drink = drink || 'default drink';

console.log('drink', drink);

// if(drink) { drink = 'another drink'; }
drink = drink && 'another drink';

console.log('drink', drink);

/**
 * ----------------------------------------------------------
 * 3항 연산자를 사용한 조건문 처리
 * 조건 ? 조건이 참일 경우 실행 : 조건이 거짓일 경우 실행
 * true ? console.log('true') : console.log('false'); // true
 * ----------------------------------------------------------
 */

var im_hungry = false;

// 방식1.
// if ( im_hungry ) {
//   console.log('난 배고파');
// } else {
//   console.log('난 배고프지 않아');
// }

// 방식2.
// im_hungry ? console.log('난 배고파') : console.log('난 배고프지 않아');

// 방식3.
// 위 결과(방식1, 방식2)와 아래 결과는 동일하다.
im_hungry ? 
	console.log('난 배고파!') : 
	console.log('난 배고프지 않아!');


/**
 * --------------------------------
 * 다중 3항 조건식
 * --------------------------------
 */

// 검사, 마법사, 궁수, 엘프, 사냥꾼, 두르이드 
var charactor = '마법사';

charactor === '사냥꾼' ?
	console.log('선택된 캐릭터는 사냥꾼입니다') :
	charactor === '엘프' ?
		console.log('선택된 캐릭터는 엘프입니다') :
		charactor === '두르이드' ?
			console.log('선택된 캐릭터는 두르이드입니다') :
				charactor === '궁수' ?
					console.log('선택된 캐릭터는 궁입니다') :
					charactor === '검사' ?
						console.log('선택된 캐릭터는 검사입니다') :
						console.log('그럼 넌!! 마법사이구나');
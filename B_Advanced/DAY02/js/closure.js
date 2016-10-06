'use strict';

/**
 * --------------------------------
 * 예제1. 자바스크립트 클로저
 * 객체 (모던 자바스크립트: 모듈 패턴) 
 * --------------------------------
 */

/**
 * --------------------------------
 * ex1. 함수 표현식
 * Yahoo 엔지니어 더글라스 크록포드 권장!!
 * --------------------------------
 */

// var countDownMaker = function(init_count) {
// 	// 사용자가 설정한 초기 count 값
// 	// console.log('init_count', init_count); // 10
// 	return init_count--; // 값을 기억해야 한다,
// };

// var countDownMaker10 = countDownMaker(10);
// console.log(countDownMaker10); // 10


/**
 * --------------------------------
 * ex2. 함수 표현식
 * Yahoo 엔지니어 더글라스 크록포드 권장!!
 * --------------------------------
 */

var countDownMaker = function(init_count) {
	// 사용자가 설정한 초기 count 값
	// console.log('init_count', init_count); // 10
	var _innerCountDown = function() {
		return init_count--; // 10, 9, 8.....
	};
	// 클로저 함수 반환
	return _innerCountDown;
};

// 반환된 클로저 함수를 변수 countdown10 변수에 참조
var countdown10 = countDownMaker(10);

// console.log('1', countdown10()); // 10
// console.log('2', countdown10()); // 9
// console.log('3', countdown10()); // 8

// countdown10(); // 10
// countdown10(); // 9
// countdown10(); // 8
// countdown10(); // 7
// countdown10(); // 6
// //.
// //.
// //.
// countdown10(); // 0

//////////////////////////////////////////////////////////////////////////////

/**
 * --------------------------------
 * 예제2. 자바스크립트 클로저
 * <a> 링크 클릭 시, 인덱스 출력하기
 * --------------------------------
 */

var demo_nav = document.getElementById('demo-nav');
// console.log(demo_nav);
var demo_nav_links = demo_nav.getElementsByTagName('a');
// console.log('demo_nav_links', demo_nav_links);

/**
 * --------------------------------------------------
 * ex1. for문 방식
 * link.onclick = function(){} 쓰는 방식을 좋지 않다. ==> 예전방식
 * for문이 다 돌아가는 상태라서 '4'가 출력
 * ㄴ [해결 방법] 클로저. 객체 속성
 * --------------------------------------------------
 */

// var i=0, l=demo_nav_links.length; // 1회 수행. 호이스팅 현상
// for(; i<l; i++) {
// 	var link = demo_nav_links[i];
// 	// console.log('link'+i+':', link);
// 	link.onclick = function() {
// 		console.log(i); //해당 요소를 클릭하면 마지막값인 '4' 출력이 된다.
// 		// 링크를 클릭했을 때 브라우저의 기본 동작을 차단 - 예전방식 
// 		return false;
// 	};
// }

/**
 * -----------------------------------------
 * ex2. 함수가 바로 실행 되서 값이 0,1,2,3 출력이 된다.
 * 해당 요소를 클릭하면 마지막값인 '4' 출력이 된다.
 * -----------------------------------------
 */
// var i=0, l=demo_nav_links.length; // 1회 수행. 호이스팅 현상
// var linkClick = function(i) {
// 		console.log(i); // 해당 요소를 클릭하면 마지막값인 '4' 출력이 된다.
// 		// 링크를 클릭했을 때 브라우저의 기본 동작을 차단 - 예전방식 
// 		return false;
// };
// for(; i<l; i++) {
// 	var link = demo_nav_links[i];
// 	// console.log('link'+i+':', link);
// 	link.onclick = linkClick(i); // 함수가 바로 실행 되어 값이 0,1,2,3 출력이 된다.
// }

/**
 * --------------------------------
 * ex3. 클로저 사용.
 * for문이 돌때 'i'값을 참조한다
 * 단점: 'linkClick' 변수를 하나 더 생성해야 한다. 
 * 변수를 지울수 없고 null을 넣어 비울수 있다.
 * --------------------------------
 */
// var i=0, l=demo_nav_links.length; 
// var linkClick = function(i) {
// 		return function() {
// 			console.log(i); // for문이 돌때 'i'값을 참조한다
// 			return false;  // 링크를 클릭했을 때 브라우저의 기본 동작을 차단
// 		}
// };

// for(; i<l; i++) {
// 	var link = demo_nav_links[i];
// 	// console.log('link'+i+':', link);
// 	link.onclick = linkClick(i); // 함수가 바로 실행 되어 값이 0,1,2,3 출력이 된다.
// }


/**
 * ------------------------------------------------------
 * ex4. IIFE + 클로저 
 * : IIFE (즉시 실행 함수) 패턴을 사용하여 클로저 함수 구현/활용
 * ------------------------------------------------------
 */
var i=0, l=demo_nav_links.length; 
for(; i<l; i++) {
	var link = demo_nav_links[i];
	link.onclick = ( function(idx) {
		return function(i){
			console.log(idx);
			return false;
		};
	}(i));
}
// console.log(i); // 4
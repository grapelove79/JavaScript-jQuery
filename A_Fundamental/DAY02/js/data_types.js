'use strict';

/**
 * --------------------------------
 * 숫자 유형
 * 숫자 상수 (실수, 소수, 정수, ...)
 * --------------------------------
 */

var x = 3;
var y = 1.234;
var z = x + y;

/**
 * --------------------------------
 * 문자 유형
 * 문자 상수 "", ''로 감싸진 글
 * --------------------------------
 */

 var k = 'Doctor K';
 var rem = 'Root Equal M';
 var me = 'I\'m a Boy'; // Escape 처리 (Back Slash '\' 사용);
 var you = "You're a Girl"

/**
 * --------------------------------
 * 논리(Boolean) 유형
 * 논리 상수 true, false
 * 1: true, 0: false
 * --------------------------------
 */

var is_showing    = false;
var is_expanded   = true;    // boolean
var is_compressed = 'false'; // string
var toilet;                  // undefined
var carousel = null;         // null

/**
 * -----------------------------------------
 * 이벤트 속성에 함수를 연결하는 것을 이벤트 바인딩 한다.
 * ㄴ> Event property, handler, binding
 * [추가, 연결] 이벤트 속성에 함수(핸들러)를 설정
 * [제거] 이벤트 속성에 초기 값인 null을 대입
 * -----------------------------------------
 */

// 이벤트 초기 상태 = null
// document.onclick

// 이벤트에 함수 연결
// document.onclick = function() {
//       console.log('clicked');
// }

// 이벤트에 함수 제거
// document.onclick = null

/**
 * ----------------------------------------
 * ex1) 1회만 클릭 수행.(클릭과 동시에 이벤트 제거)
 * ----------------------------------------
 */

// document.onclick = function() {
//       console.log('clicked');
//       document.onclick = null;
// }

/**
 * ----------------------------------------
 * ex2) 1회만 클릭 수행.(클릭과 동시에 이벤트 제거)
 * ----------------------------------------
 */
 
var doc = document;
var onClick = doc.onclick = function() {
	console.log('clicked');
	document.onclick = null;
}

doc.onclick = onClick;
// doc.onclick = onClick(); // 'onClick()'바로 실행이 되므로 오류 
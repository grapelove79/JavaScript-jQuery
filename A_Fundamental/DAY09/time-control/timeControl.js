'use strict';

/**
 * -----------------------------------------------------------
 * 시간을 제어하는 전역 함수(Global Functions)
 * window {} 객체의 메소드
 * -----------------------------------------------------------
 * setInterval: 일정 주기(Interval) 마다 반복하여 실행되는 함수
 * while () {} 느낌
 * callback: 실행 함수
 * ms: 주기, 밀리초 (1초 === 1000밀리초)
 * window.setInterval() : 계속 실행. cpu사용이 계속 됨.
 * -----------------------------------------------------------
 * setTimeout: 특정 시간(Event)에 되면, 한 번 실행되는 함수
 * if () {} 느낌
 * window.setTimeout(); : 1회만 사용
 * -----------------------------------------------------------
 */


/**
 * --------------------------------
 * ex1. setTimeout, setInterval
 * --------------------------------
 */

// function callMe() {
// 	console.log('call me');
// }

// var interval_id = window.setInterval( callMe, 2000 );

// // 주기에 따른 반복 실행을 멈추고 싶을 때
// window.clearInterval(interval_id);

// var time_id = window.setTimeout( callMe, 1000 ); 


/**
 * --------------------------------
 * ex2. 애니메이션 예제
 * --------------------------------
 */

function callMe() {
	console.log('call me');
}

// 애니메이션 정의 
function playAnimation( callback, time ) {
	return window.setInterval( callback, time );
}

// 애니메이션 멈춤 
function stopAnimation( id ) {
	window.clearInterval(id);
}

// 애니메이션 실행
var anim_id = playAnimation( callMe, 500 );

// 애니메이션 실행을 지움
stopAnimation(anim_id);
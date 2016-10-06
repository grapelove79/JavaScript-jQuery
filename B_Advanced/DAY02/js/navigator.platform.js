'use strict';

/**
 * --------------------------------
 * Navigator 객체
 * window.navigator
 * 웹 브라우저의 정보 제공
 * ㄴ 어떤 운영체제를 사용자가 쓰고 있나?
 * ㄴ 플러그인은 무엇 무엇을 사용하나?
 * ㄴ 웹 브라우저의 코드네임, 개발 엔진은 무엇인가?
 * HTML5에 새로 추가
 * ㄴ window.navigator.geolocation
 * ㄴ window.localStorage
 * --------------------------------
 */

 /**
  * ------------------------------------------------------------------------
  * [미션] 사용자가 접속한 환경은 window? 혹은? machintosh?
  * ㄴ Mac 사용자 : MacIntel
  * ㄴ window 사용자 : win32
  * 검토한 사용자의 환경을 식벽하기 위한 방법으로 class 속성에 감지된 해당 플랫폼 키워드를 추가한다.
  * ------------------------------------------------------------------------
  */

var html = document.documentElement;
// var navi = window.navigator;
// console.log('navigator.platform', navigator.platform);


/**
 * --------------------------------------------------------
 * 문제발생! class가 없는 경우 추가된 class 앞에 공백이 생긴다.
 * --------------------------------------------------------
 */

// [방식1] if문
// function detectPlatform() {
// 	// var is_window = navigator.platform.toLowerCase(); // 문자열 'MacIntel'
// 	// var is_window = navigator.platform.toLowerCase().indexOf('win'); // -1
// 	var is_window = navigator.platform.toLowerCase().indexOf('win') > -1; 
// 	var identifier = '';
// 	// console.log('is_window:', is_window); 

// 	// Window OS가 맞다면, 'win' 클래스 속성을 추가
// 	if( is_window ) {
// 		identifier = ' win';
// 	} 
// 	// Window OS가 아니라면, 'mac' 클래스 속성을 추가
// 	else {
// 		identifier = ' mac';
// 	}
// 	html.className += identifier;
// }

// detectPlatform();


// [방식2] 삼항식
function detectPlatform() {
	var is_window = navigator.platform.toLowerCase().indexOf('win') > -1; 
	var identifier = '';
	var identifier = is_window ? 'win' : 'mac';

	html.className += ' ' + identifier; // === html.className = html.className + ' ' + identifier;
}

detectPlatform();
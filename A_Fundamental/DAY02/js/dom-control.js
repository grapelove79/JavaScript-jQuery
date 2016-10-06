'use strict';
/**
 * --------------------------------
 * [방법1] `body` 끝자리에 `script` 선언
 * --------------------------------
 */

// [Design, 설계] 참조하고자 하는 문서 개게에 적절한 메모리 이름 공간을 변수 이름으로 설정한다.
// var html = document.documentElement, 
// 	body = document.body, 
// 	page = document.getElementById('page'),
// 	page_headline = page.getElementsByTagName('h1'),
// 	page_child = page.getElementsByClassName('page-child');

// 상위 컨테이너에서 하위 자식을 찾는 방법이 좋다. 
// <head>안에서 script 선언을 하면 아래와 같은 메시지가 나온다.
// Uncaught TypeError: Cannot read property 'getElementsByTagName' of null
// ㄴ> property 오직 객체만 가질수 있다. 

/**
 * --------------------------------
 * 이벤트 프로그래밍
 * : 코드가 실행되는 시점(Event)을 감지하여 코드를 처리한다.
 * --------------------------------
 */

// window : 빌트인 오브젝트, 네이티브 오브젝트, 내장객체
// window 객체의 이벤트 속성(Event Property)
console.log( 'window.onload:', window.onload ); // null [초기 값]

/**
 * --------------------------------
 * [방법2] 이벤트 사용 - 초기화 수행
 * <head>안에 <script>를 넣어도 실행된다 
 * --------------------------------
 */

var initialization = function(){
	var html = document.documentElement, 
		body = document.body, 
		page = document.getElementById('page'),
		page_headline = page.getElementsByTagName('h1'),
		page_child = page.getElementsByClassName('page-child');

	console.log('html', html);
	console.log('body', body);
	console.log('page', page);
	console.log('page_headline', page_headline);
	console.log('page_child', page_child);
}

window.onload = initialization;
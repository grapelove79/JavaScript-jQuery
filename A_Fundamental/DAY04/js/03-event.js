'use strict';

/**
 * --------------------------------
 * ex1. 이벤트 전파
 * 자식 요소에서 발생한 이벤트가 상위 요소까지 전파되는 특성을 가리켜 이벤트 버블링(event bubbling) 또는 이벤트 전파(event propagation)라고 한다.
 * --------------------------------
 */

// // 참조할 객체를 담을 변수 선언
// var page, article, brand, slogan;
// // 문서 요소객체를 선택하여 각 변수에 참조
// page 	= document.querySelector('#page');
// article = document.querySelector('.article');
// brand 	= document.querySelector('.brand');
// slogan 	= document.querySelector('.slogan');

// // 참조된 문서 요소객체에 가각 이벤트 연결(Event Binding)
// page.onclick = function() {
// 	console.log('page영역 클릭');
// }
// article.onclick = function() {
// 	console.log('article 클릭');
// }
// brand.onclick = function() {
// 	console.log('slogan 클릭');
// }
// slogan.onclick = function() {
// 	console.log('slogan 클릭');
// }

/**
 * ----------------------------------------------------------------------------
 * ex2. if문: 이벤트 감지
 * 단점: 조건구문이 하나하나씩 확인을 하기 때문에 느려진다. 
 * 조건이 많아지면 if문을 사용하는 것은 지양. 조건이 많아지는경우 swicth문 사용하는 것이 좋다.
 * ----------------------------------------------------------------------------
 */

// 참조할 객체를 담을 변수 선언
var page, article, brand, slogan, mouseEventHandler;
// 문서 요소객체를 선택하여 각 변수에 참조
page 	= document.querySelector('#page');
article = document.querySelector('.article');
brand 	= document.querySelector('.brand');
slogan 	= document.querySelector('.slogan');

mouseEventHandler = function(event) { 
	// Event Object {}
	// console.log(event);
	if( event.type === 'click' ) {
		console.log('mouse clicked');
	} else if( event.type === 'mouseover' ) {
		console.log('mouse overed');
	} else if( event.type === 'mouseout' ) {
		console.log('mouse outed');
	} else {
		console.log('clicked, overed, outed X');
	}
};
// 참조된 문서 요소객체에 가각 이벤트 연결(Event Binding)
page.onclick = mouseEventHandler;
page.onmouseover = mouseEventHandler;
page.onmouseout = mouseEventHandler;
article.onclick = mouseEventHandler;
brand.onclick = mouseEventHandler;
slogan.onclick = mouseEventHandler;
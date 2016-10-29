'use strict';

/**
 * --------------------------------
 * [미션] 사이드 메뉴의 각 링크 `<a>`를 클릭하는 이벤트 처리
 * 1. 문서에서 nav.side-menu 요소 객체를 찾아 변수에 참조
 * 2. 참조된 사이드 메뉴 내부에서 <a> 요소를 모두 찾아 변수에 참조
 * 3. for 문을 사용하여 <a>의 집합을 순환 처리
 * 4. 각 <a> 요소에 이벤트를 연결
 * 5. 연결된 이벤트 핸들러(함수) 로직을 구현
 * --------------------------------
 */

var html = document.querySelector('html'),
	body = document.querySelector('body'),
	// 1. 문서에서 nav.side-menu 요소 객체를 찾아 변수에 참조
	side_menu = document.querySelector('nav.side-menu'),
	// 2. 참조된 사이드 메뉴 내부에서 <a> 요소를 모두 찾아 변수에 참조
	side_links = side_menu.querySelectorAll('a'), // 집합 (유사 배열, NodeList)
	i=0, 
	l=side_links.length,
	side_link;

// 3. for 문을 사용하여 <a>의 집합을 순환 처리
for ( ; i<l; i++) {
	// console.log('side_links['+i+']', side_links[i]);
	side_link =  side_links[i];
	// 메뉴의 글자 컬러
	side_link.style.color = side_link.getAttribute('data-bg-color');
	// 4. 각 <a> 요소에 이벤트를 연결
	side_link.onmouseenter = changeDocumentBgcolor;
}

// 5. 연결된 이벤트 핸들러(함수) 로직을 구현
function changeDocumentBgcolor() {
	// console.log(this); // 각각의 'a'. 함수에 연결된 주체.
	var bg_color= this.getAttribute('data-bg-color');
	// console.log(bg_color);
	// 누구의 배경 색을 바꿀 것인가?
	// document => <html> 또는 <body>
	// html.style.background = '#ff0';
	// console.log(this[data-bg-color]); //ReferenceError
	html.style.background = bg_color;
}
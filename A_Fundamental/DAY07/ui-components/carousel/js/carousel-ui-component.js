'use strict';

/**
 * --------------------------------
 * ex1. 화면 전체 크기로 제어
 * --------------------------------
 */

// var container 			= document.querySelector('.carousel-container'),
// 	controls  			= document.querySelector('.carousel-controls'),
// 	view  	  			= document.querySelector('.carousel-view'),
// 	// view 영역 내부의 img의 폭을 가져와서 이미지 갯수만큼의 폭을 view 영역에 설정한다.
// 	view_contents 		= view.querySelectorAll('img'),
// 	view_content_width 	= view_contents[0].clientWidth,
// 	view_width 			= view_content_width * view_contents.length;

// 	//.carousel-view 영역의 가로 폭을 포함하는 이미지 개수의 폭의 합 만큼 설정
// 	console.log(view.style.width = view_width + 'px');
//  	view.style.width = view_width + 'px';

/**
 * --------------------------------
 * ex2. 이전/다음 버튼 이벤트 연결
 * --------------------------------
 */

var container, controls, view, carousel_content_active_index;
container = document.querySelector('.carousel-container');
controls  = container.querySelector('.carousel-controls');
view      = container.querySelector('.carousel-view');

// 현재 활성화된 콘텐츠의 인덱스 
carousel_content_active_index = 0;

// console.log('container:', container);
// console.log('controls:', controls);
// console.log('view:', view);

// view 영역 내부의 img 의 폭을 가져와서
// 이미지 개수만큼의 폭을 view 영역에 설정한다.
var view_contents, view_contents_length, view_content_width, view_width;
view_contents        = view.querySelectorAll('img');
view_contents_length = view_contents.length;
view_content_width   = container.clientWidth;
view_width           = view_content_width * view_contents_length;

// .carousel-view 영역의 가로 폭을 포함하는 이미지 개수의 폭의 합 만큼 설정
view.style.width = view_width + 'px';

  // 1. 요소.clientWidth 속성
  // 소수점을 허용하지 않고, 값을 올림하여 정수를 반환한다.
  // content-box + padding-box 까지의 폭을 반환한다.

  // 2. 요소.style.width 속성
  // 인라인 스타일 속성이 설정된 요소의 width 너비를 가져온다.
  // 인라인 스타일 속성이 설정되어 있지 않을 경우는 빈 문자열 ''을 반환한다.

  // 3. window.getComputedStyle(요소).width
  // 웹 브라우저가 최종적으로 계산한 width 값을 반환한다.
  // 다만, 이 방법은 표준 방법이지만 표준을 준수하지 않은 IE 8- 브라우저에서는
  // 작동하지 않는다.

  // 4. 요소.currentStyle.width
  // 비 표준 방법으로 Microsoft Internet Explorer 에서만 동작한다.
  // 가져오는 값은 .getComputedStyle(요소).width과 같다.

// 각 이미지를 순환 처리하여 컨테이너 요소의 너비 만큼 이미지 너비를 설정한다.
for (var i=0; i<view_contents_length; i++ ) {
  var view_content = view_contents.item(i);
  // console.log(view_content); // 각 <img> 출력
  view_content.style.width = view_content_width + 'px';
}

// 버튼 이벤트 연결
var prev_btn = controls.querySelector('.carousel-previous-btn');
var next_btn = controls.querySelector('.carousel-next-btn');

prev_btn.onclick = prevMoveCarouselContentView;
next_btn.onclick = nextMoveCarouselContentView;

function prevMoveCarouselContentView() {
	carousel_content_active_index = --carousel_content_active_index % view_contents_length;
	console.log(carousel_content_active_index);
}

var view_position = ['0', '-25%', '-50%', '-75%'];

function nextMoveCarouselContentView() {
	carousel_content_active_index = ++carousel_content_active_index % view_contents_length;
	view.style.transform = 'translateX('+ view_position[carousel_content_active_index] +')';
}
'use strict';

//1. .photo-gallery-container 요소를 찾아 변수에 할당
var container 		 = document.querySelector('.photo-gallery-container'),
//2. .photo-gallery-container 내부의 a요소를 수집에서 이벤트 핸들링 (반복 처리)
	container_button = container.querySelectorAll('a'),
	container_view = container.querySelector('.photo-gallery-view'),
	i = 0,
	len = container_button.length;

for( ; i <len; i++ ) {
	var button = container_button[i];
	button.index = i+1 // i값에 1을 더하는 연산자이고, '++i': i값이 증가하여 i값이 바뀌는 형태이다.
	console.log(button.index); // 1,2,3
	button.onclick = changPhoto;
}

function changPhoto(e) {
	// view 컨테이너 내부의 이미지 교체
	// console.log(this.index);
	e.preventDefault();
	var view_img = container_view.querySelector('img');
	var index = 1;
	// src="http://placehold.it/600x620?text=01" alt="Big 01"
	view_img.src = 'http://placehold.it/600x620?text=0' + this.index;
	view_img.alt = 'Big 0' + this.index;
	// return false; // 브라우저 기본 동작 차단
}

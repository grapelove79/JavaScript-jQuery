'use strict';

// .photo-gallery-container 요소를 찾아 변수에 할당
// var photo_gallery_container;
var container = document.querySelector('.photo-gallery-container');

// .photo-gallery-container 내부의 a 요소를 수집해서 이벤트 핸들링 (반복 처리)
var container_buttons = container.querySelectorAll('a');
var container_view = container.querySelector('.photo-gallery-view');

for(var i=0, l=container_buttons.length; i<l; i++) {
	var button = container_buttons[i];
	button.index = i+1;
	button.alt = button.querySelector('img').alt;
	button.onclick = changePhotoGalleryView;
}

function changePhotoGalleryView() {
	// view 컨테이너 내부의 이미지 교체
	// console.log(this.index);
	var view_img = container_view.querySelector('img');
	// src="http://placehold.it/600x620?text=01" alt="Big 01"
	// view_img.src = 'http://placehold.it/600x620?text=0'+this.index;
	view_img.src = 'images/big/0'+ this.index +'.jpg';
	view_img.alt = this.alt;
	view_img.title = view_img.alt;
	// 브라우저의 기본 동작 차단
	return false;
}
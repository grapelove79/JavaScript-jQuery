'use strict';

/**
 * ------------------------------------------------------------------
 * TO DO
 * 1. 문서(document)에 <audio> 객체(요소노드)를 생성(create) 한다.
 * 2. 생성된 오디오 객체를 참조하고 잇는 변수 ironman_audio_obj에 src 속성을 설정.
 * 3. 음원 소스를 src 속성의 값으로 설정. 
 * 4. 음원을 설정하는 경로는 HTML 파일 기준의 상대 위치 설정.
 * 5. 문서에서 .ironman-print-button 버튼 요소를 찾아 이벤트를 연결
 * ㄴ 음원 재생(play) 함수, 일시정지(pause) 함수, 정지(stop) 함수
 * ------------------------------------------------------------------
 */

/**
 * ------------------------------------------
 * ex1. create <audio> element
 * 사운드 컨트롤을 위한 오디오 객체를 런타임 중에 생성
 * ------------------------------------------
 */

// //1. 문서(document)에 <audio> 객체(요소노드)를 생성(create) 한다.
// var ironman_audio_obj;
// 	ironman_audio_obj = document.createElement('audio');
// 	console.log(ironman_audio_obj); // <audio></audio>

// // 2. 생성된 오디오 객체를 참조하고 잇는 변수 ironman_audio_obj에 src 속성을 설정. 
// // 3. 음원 소스를 src 속성의 값으로 설정. 
// // 4. 음원을 설정하는 경로는 HTML 파일 기준의 상대 위치 설정

// // mp3 속성 설정 - mp3 : IE9 +
// ironman_audio_obj.setAttribute('src', 'media/myturn.mp3');

// // autoplay 속성 설정
// // ironman_audio_obj.setAttribute('autoplay', 'autoplay');

// // 자바스크립트에서 DOM API가 제공하는 이벤트를 사용하여 컨트롤 
// console.dir(ironman_audio_obj);

// ironman_audio_obj.oncanplay = playSound; 

// function playSound() {
// 	// console.log('this', this); // audio 객체를 가르킨다.
// 	this.play(); // 음원재생
// }


/**
 * --------------------------------
 * ex2. 이벤트를 연결
 * --------------------------------
 */

// // 문서(document)에 <audio> 객체(요소노드)를 생성(create)한다.
// var ironman_audio_obj;
// ironman_audio_obj = document.createElement('audio');

// // 생성된 오디오 객체를 참조하고 있는 변수 ironman_audio_obj에 src 속성을 설정합니다.
// // 음원 소스를 src 속성의 값으로 설정합니다.
// // 음원을 설정하는 경로는 HTML 파일 기준의 상대 위치 설정입니다.
// var playlist = [ 'myturn', 'special', 'wantone' ];
// ironman_audio_obj.setAttribute('src', 'media/' + playlist[playlist.length - 1] + '.mp3');

// // autoplay 속성 설정
// // ironman_audio_obj.setAttribute('autoplay', 'autoplay');
// // console.log('ironman_audio_obj:', ironman_audio_obj); //<audio></audio>

// // 자바스크립트에서 DOM API가 제공하는 이벤트를 사용하여 컨트롤
// console.dir(ironman_audio_obj);

// // ironman_audio_obj.oncanplay = playSound;

// // 문서에서 .ironman-print-button 버튼 요소를 찾아 이벤트를 연결
// var ironman_btn = document.querySelector('.ironman-print-button');

// // 이벤트 제어
// ironman_btn.onmouseenter = playSound;
// ironman_btn.onmouseleave = stopSound;

// // 아이언맨 음원 재생(play) 함수
// function playSound() {
//   // console.log('this:', this);
//   ironman_audio_obj.play(); // 음원 재생
//   // console.log(ironman_audio_obj.currentTime); // '0'  
// }

// // 아이언맨 음원 일시 정지(pause) 함수
// function pauseSound() {
//   ironman_audio_obj.pause();
// }

// // 아이언맨 음원 정지(stop) 함수
// function stopSound() {
//   pauseSound();
//   ironman_audio_obj.currentTime = 0;
// }

/**
 * --------------------------------
 * ex3. mp3 파일(playlist) 랜덤 추출
 * 자바스크립트 Math 객체를 활용
 * Math.floor() : 소수점 버림, 정수형 반환
 * Math.random(): 0~1 실수값이 출력 
 * --------------------------------
 */

// // 문서(document)에 <audio> 객체(요소노드)를 생성(create)한다.
// var ironman_audio_obj;
// ironman_audio_obj = document.createElement('audio');

// // 생성된 오디오 객체를 참조하고 있는 변수 ironman_audio_obj에 src 속성을 설정합니다.
// // 음원 소스를 src 속성의 값으로 설정합니다.
// // 음원을 설정하는 경로는 HTML 파일 기준의 상대 위치 설정입니다.
// var playlist = [ 'myturn', 'special', 'wantone' ];

// // 자바스크립트 Math 객체를 활용
// // var random_paly_index = Math.floor(Math.random() * playlist.length);
// // console.log(random_paly_index); // 0, 1, 2

// var random_paly_index = getRandomNumber(playlist.length);
// ironman_audio_obj.setAttribute('src', 'media/' + playlist[playlist.length - 1] + '.mp3');

// // mp3 파일(playlist) 랜덤 추출 함수
// function getRandomNumber(n) {
// 	return Math.floor(Math.random() * n);
// }

// // autoplay 속성 설정
// // ironman_audio_obj.setAttribute('autoplay', 'autoplay');
// // console.log('ironman_audio_obj:', ironman_audio_obj); //<audio></audio>
// // 자바스크립트에서 DOM API가 제공하는 이벤트를 사용하여 컨트롤
// console.dir(ironman_audio_obj);

// // ironman_audio_obj.oncanplay = playSound;

// // 문서에서 .ironman-print-button 버튼 요소를 찾아 이벤트를 연결
// var ironman_btn = document.querySelector('.ironman-print-button');

// // 이벤트 제어
// ironman_btn.onmouseenter = playSound;
// ironman_btn.onmouseleave = stopSound;

// // 아이언맨 음원 재생(play) 함수
// function playSound() {
//   // console.log('this:', this);
//   ironman_audio_obj.play(); // 음원 재생
//   // console.log(ironman_audio_obj.currentTime); // '0'  
// }

// // 아이언맨 음원 일시 정지(pause) 함수
// function pauseSound() {
//   ironman_audio_obj.pause();
// }

// // 아이언맨 음원 정지(stop) 함수
// function stopSound() {
//   pauseSound();
//   ironman_audio_obj.currentTime = 0;
// }


/**
 * --------------------------------
 * ex4. play, pause, stop 아이콘 추가
 * --------------------------------
 */

// 문서(document)에 <audio> 객체(요소노드)를 생성(create)한다.
var ironman_audio_obj;
	ironman_audio_obj = document.createElement('audio');

// 생성된 오디오 객체를 참조하고 있는 변수 ironman_audio_obj에 src 속성을 설정.
// 음원 소스를 src 속성의 값으로 설정.
// 음원을 설정하는 경로는 HTML 파일 기준의 상대 위치 설정
var playlist = [ 'myturn', 'special', 'wantone' ];

// 자바스크립트 Math 객체를 활용
// var random_paly_index = Math.floor(Math.random() * playlist.length);
// console.log(random_paly_index); // 0, 1, 2

var random_paly_index = getRandomNumber(playlist.length),
	play_sound_path   = 'media/' + playlist[playlist.length - 1] + '.mp3',
	play_sound_title  = document.querySelector('.play-sound-title');
	ironman_audio_obj.setAttribute('src', play_sound_path);

	// 1. HTML DOM 방식
	play_sound_title.innerHTML = play_sound_path;
	// play_sound_title.textContent = play_sound_path;

	// 2. XML DOM 방식
	// play_sound_title.firstChild.nodeValue = play_sound_path;

// mp3 파일(playlist) 랜덤 추출 함수
function getRandomNumber(n) {
	return Math.floor(Math.random() * n);
}

// play, pause, stop 아이콘
var sound_control_buttons = document.querySelectorAll('.sound-control-button');

for ( var i = 0, l=sound_control_buttons.length; i<l; i++ ) {
	var button = sound_control_buttons[i];
	// console.log(button);
	var button_label = button.getAttribute('aria-label');
	// console.log(button_label);
	switch(button_label) {
		case '재생' :
			button.onclick = playSound;
		break;
		case '일시정지' :
			button.onclick = pauseSound;
		break;
		case '정지' : 
			button.onclick = stopSound;
	}
}

// autoplay 속성 설정
// ironman_audio_obj.setAttribute('autoplay', 'autoplay');
// console.log('ironman_audio_obj:', ironman_audio_obj); //<audio></audio>
// 자바스크립트에서 DOM API가 제공하는 이벤트를 사용하여 컨트롤
console.dir(ironman_audio_obj);

// ironman_audio_obj.oncanplay = playSound;

// 문서에서 .ironman-print-button 버튼 요소를 찾아 이벤트를 연결
var ironman_btn = document.querySelector('.ironman-print-button');

// 이벤트 제어
ironman_btn.onmouseenter = playSound;
ironman_btn.onmouseleave = stopSound;

// 아이언맨 음원 재생(play) 함수
function playSound() {
  // console.log('this:', this);
  ironman_audio_obj.play(); // 음원 재생
  // console.log(ironman_audio_obj.currentTime); // '0'  
}

// 아이언맨 음원 일시 정지(pause) 함수
function pauseSound() {
  ironman_audio_obj.pause();
}

// 아이언맨 음원 정지(stop) 함수
function stopSound() {
  pauseSound();
  ironman_audio_obj.currentTime = 0;
}
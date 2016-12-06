###### JJ_CAMP_Fundamental

[＜ INDEX](../../README.md)

## DAY 07
- Audio (HTML5) `ironman`
- UI Components `carousel`

---

## Audio (HTML5)
- autoplay : 자동 재생. 웹접근성에서 관점에서 좋지 않다. '인식의 용의성' 지침에 좋지 않다. 3초 이상
- controls : 사용자가 제어 가능한 컨트롤러 화면에 표시.
- loop : 반복 횟수 설정

### Play, Pause, Stop 제어
1. 문서(document)에 `<audio>` 객체(요소노드)를 `생성(create)`한다.
2. 생성된 오디오 객체를 참조하고 잇는 변수 `ironman_audio_obj`에 `src`속성을 설정.
3. 음원 소스를 `src`속성의 값으로 설정. 
4. 음원을 설정하는 경로는 `HTML 파일 기준의 상대 위치` 설정.
5. 문서에서 `.ironman-print-button` 버튼 요소를 찾아 이벤트를 연결.<br>
   ㄴ> 음원 `재생(play)`, `정지(pause)`, `정지(stop)` 함수 생성

```html 
  <div class="ironman">
    <p class="message">message</p>
    <button type="button" class="ironman-print-button">
      <img src="images/ironman.png" alt="ironman" width="256" height="256">
    </button>
    <p class="play-sound-title">play-sound-title</p>

    <button class="sound-control-button fa fa-play-circle" title="재생 버튼" aria-label="재생"></button>
    <button class="sound-control-button fa fa-pause-circle" title="일시정지 버튼" aria-label="일시정지"></button>
    <button class="sound-control-button fa fa-stop-circle" title="정지 버튼" aria-label="정지"></button>
  </div>
```

```javascript
// 문서(document)에 <audio> 객체(요소노드)를 생성(create)한다.
var ironman_audio_obj;
    ironman_audio_obj = document.createElement('audio');

// 생성된 오디오 객체를 참조하고 있는 변수 ironman_audio_obj에 src 속성을 설정.
// 음원 소스를 src 속성의 값으로 설정.
// 음원을 설정하는 경로는 HTML 파일 기준의 상대 위치 설정
var playlist = [ 'myturn', 'special', 'wantone' ];

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
```

---

## UI Components `carousel`

```html
  <article class="carousel-container">
    <h1 class="readable-hidden">Earphones &amp; Earset 3i Carousel Component</h1>
    <div class="carousel-controls">
      <div class="carousel-indicator">
        <button type="button" class="ir active-tab carousel-tab">product view 01</button>
        <button type="button" class="ir carousel-tab">product view 02</button>
        <button type="button" class="ir carousel-tab">product view 03</button>
        <button type="button" class="ir carousel-tab">product view 04</button>
      </div>
      <div class="carousel-navigator">
        <button type="button" class="ir carousel-previous-btn">previous product view</button>
        <button type="button" class="ir carousel-next-btn">next product view</button>
      </div>
    </div>
    <div class="carousel-view clearfix">
      <img class="active-view" src="images/01.jpg" alt="product 01">
      <img src="images/02.jpg" alt="product 02">
      <img src="images/03.jpg" alt="product 03">
      <img src="images/04.jpg" alt="product 04">
    </div>
  </article>
```

```javascript
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
var view_contents        = view.querySelectorAll('img');
var view_contents_length = view_contents.length;
var view_content_width   = container.clientWidth;
var view_width           = view_content_width * view_contents_length;

// .carousel-view 영역의 가로 폭을 포함하는 이미지 개수의 폭의 합 만큼 설정
view.style.width = view_width + 'px';

// 각 이미지를 순환 처리하여 컨테이너 요소의 너비 만큼 이미지 너비를 설정한다.
for (var i=0; i<view_contents_length; i++ ) {
  var view_content = view_contents.item(i);
  // console.log(view_content); // 각 <img> 출력
  view_content.style.width = view_content_width + 'px';
}

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

var indicator_items = controls.querySelectorAll('.carousel-tab');
```
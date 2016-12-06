###### JJ_CAMP_Fundamental

[＜ INDEX](../../README.md)

## DAY 09
- 객체 지향 JavaScript
- 시간을 제어하는 전역 함수(Global Functions)
- UI Components `carousel` (함수형 프로그래밍, 절차 지향)<br>
	- 애니메이션 컨트롤<br>
	- 키보드 접근성 : `인디케이터` 혹은 `이전/다음`에 키보드 포커싱 될때 애니메이션 멈춤

## [객체 지향 JavaScript 입문](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript) 
1. 추상화(Abstract)
2. 캡슐화(Encapsuration) : 자바스크립트에서 지원하지 않는다. IIFE 패턴으로 흉내.
3. 상속(Inheritance)
4. 다형성(Polymorphism)  : 자바스크립트에서 지원하지 않는다.

---

## 시간을 제어하는 전역 함수(Global Functions)
- window {} 객체의 메소드
- `setInterval` 일정 주기(Interval) 마다 `반복`하여 실행되는 함수<br>
  - while () {} 느낌<br>
  - callback: 실행 함수<br>
  - ms: 주기, 밀리초 (1초 === 1000밀리초)<br>
  - `window.setInterval()` : 계속 실행. `cpu사용이 계속 됨`.<br>
- `setTimeout` 특정 시간(Event)에 되면, `한 번` 실행되는 함수<br>
  - if () {} 느낌<br>
  - `window.setTimeout()` : 1회만 사용<br>

```html
  <div class="button-group">
    <button type="button" class="play-ball-button">Play Moving Ball</button>
    <button type="button" class="stop-ball-button">Stop Moving Ball</button>
  </div>

  <div class="ball"></div>
````

```javascript

    function playAnimation( callback, time ) {
      // callback = callback || return;
      if ( callback === undefined ) { return; } // 함수 종료
      // time = time || tiem = 1000;
      if ( time === undefined ) { time = 1000; }
      return window.setInterval( callback, time );
    }

    function stopAnimation(id) {
      window.clearInterval(id);
    }

    // 초기 전역 변수 선언
    var ball, play_ball_button, stop_ball_button, stop_anim;

    // window load 상태가 완료되면, 실행
    window.onload = initBallMoving;

    // 초기 실행 함수 (무빙 볼 재생/정지, 애플리케이션 초기화)
    function initBallMoving() {
      // 컨트롤 할 문서 객체 각 변수에 참조
      selectControlEls();
      // 이벤트 핸들러 연결(Binding)
      bindEventControlEls();
    }

    function selectControlEls() {
      ball = document.querySelector('.ball');
      play_ball_button = document.querySelector('.play-ball-button');
      stop_ball_button = document.querySelector('.stop-ball-button');
    }

    function bindEventControlEls() {
      play_ball_button.onclick = playBall;
      stop_ball_button.onclick = stopBall;
    }

    function playBall() {
      // ball 이동 (일정 주기마다 playBall 함수 실행)
      stop_anim = playAnimation(movingBall, 100);
    }

    function stopBall() {
      console.log('볼 무빙 중지');
      stopAnimation(stop_anim);
    }

    function movingBall() {
      var current_ball_pos_x = ball.offsetLeft;
      console.log('before:', current_ball_pos_x);
      ball.style.left = current_ball_pos_x + 10 + 'px';
      console.log('after:', ball.offsetLeft);
    }

```

---

## UI Component `carousel` 
: 캐러셀 컴포넌트 (함수형 프로그래밍, 절차 지향)

### 자동 애니메이션
0. 재사용 가능한 공통 함수(Common Functions)
1. 초기 변수 설정
2. 캐러셀 초기화(이벤트 처리) 
3. 캐러셀 함수들
4. 캐러셀 이벤트 바인딩

#### 시간을 제어하는 전역 함수 - 재사용 가능한 공통 함수(Common Functions)
```javascript
// 애니메이션 정의 
function playAnimation( callback, time ) {
  return window.setInterval( callback, time );
}

// 애니메이션 멈춤 
function stopAnimation( id ) {
  window.clearInterval(id);
}
```

#### 1. 초기 변수 설정
```javascript
var using_animation, 
    animation_duration,
    ani_control_id,
    selected_num,
    selected_tab,
    container,
    container_width,
    view,
    view_contents,
    tabs,
    tabs_total,
    prev_button,
    next_button;
```

#### 2. 캐러셀 초기화 (이벤트 처리)
```javascript
window.onload = function() {
    // initCarousel(인디케이터 인덱스 초기값, 애니메이션 적용 설정, 애니메이션 진행 시간 설정)
    initCarousel( 3, true, 1000 );
};

function initCarousel( activate_index, anim, time ) {   
      // 애니메이션 적용 설정
      using_animation    = anim || false;

      // 애니메이션 진행 시간 설정
      animation_duration = time || 3000;

      // 초기 설정 변수
      selected_num       = 0;    // 선택된 인덱스 메모리 변수
      selected_tab       = null; // 선택된 탭 메모리 변수

      // 캐러셀 컨트롤 객체 참조
      selectCarouselControls();

      // 캐러셀 뷰 영역의 너비 및 각 콘텐츠 너비 설정
      settingViewContentsWidth();

      // 캐러셀 이벤트 바인딩
      bindingEventsCarouselControlls();

      // 애니메이션 설정
      settingAnimation();

      // 초기 활성화, 사용자 액션 시뮬레이션
      if ( !activate_index ) { activate_index = 0; }
      settingActivation( activate_index );
}
```

#### 3. 캐러셀 함수들
```javascript

// 캐러셀 컨트롤 객체 참조
function selectCarouselControls() {
  container       = document.querySelector('.carousel-container');
  container_width = container.clientWidth;
  view            = container.querySelector('.carousel-view');
  view_contents   = view.querySelectorAll('img');
  tabs            = container.querySelectorAll('.carousel-tab');
  tabs_total      = tabs.length;
  prev_button     = document.querySelector('.carousel-previous-btn');
  next_button     = document.querySelector('.carousel-next-btn');
}

// 캐러셀 뷰 영역의 너비 및 각 콘텐츠 너비 설정
function settingViewContentsWidth() {
  view.style.width = container_width tabs_total + 'px';
  for ( var k=0, j=view_contents.length; k<j; k++ ) {
    view_contents[k].style.width = container_width + 'px';
  }
}

// 캐러셀 이벤트 바인딩 
function bindingEventsCarouselControlls() {
  for (var i=0, l=tabs_total; i<l; i++) {
    var tab = tabs[i];
    tab.num = i;
    tab.onclick = function() {
      selected_num = this.num;
      activeViewContent( this, selected_num );
    };

	 // 키보드 접근성 
     //인디케이터 혹은 이전/다음이 키보드 포커싱 될때 멈춤
     tab.onfocus = stopCarousel;
  }
  
  prev_button.onclick = prevViewContent;
  next_button.onclick = nextViewContent;
}

// 이전 버튼
function prevViewContent() {
  selected_num = --selected_num % tabs_total;
  if ( selected_num < 0 ) {
    selected_num = tabs_total - 1;
  }
  activeViewContent( tabs[selected_num], selected_num );
}

// 다음 버튼
function nextViewContent() {
  selected_num = ++selected_num % tabs_total;
  activeViewContent( tabs[selected_num], selected_num );
}

// 현재 활성화된 콘텐츠
function activeViewContent(tab, num) {
  if ( selected_tab !== null ) {
    selected_tab.classList.remove('active-tab');
  }
  tab.classList.add('active-tab');
  selected_tab = tab;
  view.style.left = -1 * num * container_width + 'px';
}

// 애니메이션 컨트롤 - 시작
function playCarousel() {
  ani_control_id = playAnimation(function() {
    next_button.onclick();
  }, animation_duration);
}

// 애니메이션 컨트롤 - 멈춤
function stopCarousel() {
  stopAnimation(ani_control_id);
}

// container영역에 onmouseout : 시작, onmouseover: 멈춤
function settingAnimation() {
  if ( using_animation ) {
    container.onmouseout  = playCarousel;
    container.onmouseover = stopCarousel;
    playCarousel();
  }
}

// 초기 활성화
function settingActivation(index) {
  tabs[index].onclick();
} 
```
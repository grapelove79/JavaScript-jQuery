'use strict';
/**
 * -----------------------------------------------------
 * 자동 애니메이션 캐러셀 컴포넌트 (함수형 프로그래밍, 절차 지향)
 * 0. 재사용 가능한 공통 함수(Common Functions)
 * 1. 초기 변수 설정
 * 2. 캐러셀 초기화(이벤트 처리) 
 * 3. 캐러셀 함수들
 * 4. 캐러셀 이벤트 바인딩
 * -----------------------------------------------------
 */

/**
 * ------------------------------------
 * 재사용 가능한 공통 함수(Common Functions)
 * ------------------------------------
 */

// 애니메이션 정의 
function playAnimation( callback, time ) {
  return window.setInterval( callback, time );
}

// 애니메이션 멈춤 
function stopAnimation( id ) {
  window.clearInterval(id);
}

/**
 * --------------------------------
 * 1. 초기 변수 설정
 * --------------------------------
 */

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

/**
 * --------------------------------
 * 2. 캐러셀 초기화 (이벤트 처리)
 * --------------------------------
 */

window.onload = function() {
    // initCarousel(인디케이터 인덱스 초기값, 애니메이션 적용 설정, 애니메이션 진행 시간 설정)
    initCarousel( 3, true, 1000 );
};

function initCarousel( activate_index, anim, time ) {   
    /**
      * --------------------------------
      * option
      * --------------------------------
      */
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

/**
 * --------------------------------
 * 3. 캐러셀 함수들
 * --------------------------------
 */

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
    view.style.width = container_width  * tabs_total + 'px';
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
  
      /**
       * ----------------------------------------
       * 키보드 접근성 
       * 인디케이터 혹은 이전/다음이 키보드 포커싱 될때 멈춤
       * ----------------------------------------
       */
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
    // --------------------------------------------------------------
    view.style.left = -1 * num * container_width + 'px';
}

// 애니메이션 컨트롤 - 시작
function playCarousel() {
    ani_control_id = playAnimation(function() {
      next_button.onclick();
    }, animation_duration);
}

// 애니메이션 컨트롤 - 멈
function stopCarousel() {
    stopAnimation(ani_control_id);
}

// container영역에 onmouseout : 시작, onmouseover: 멈춤
function settingAnimation() {
    if ( using_animation ) {
      container.onmouseout = playCarousel;
      container.onmouseover = stopCarousel;
      playCarousel();
    }
}

// 초기 활성화
function settingActivation(index) {
    tabs[index].onclick();
}
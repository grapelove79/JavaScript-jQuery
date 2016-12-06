// --------------------------------------------------------------------------------------------
// TO DO:
// 0. 캐러셀 탭 패널을 감싼 `래퍼 요소의 너비`를 `탭 패널 너비 × 탭 패널 개수`로 설정한다.
// 1. 인디케이터 탭 버튼을 누르면 캐러셀 콘텐츠는 해당 콘텐츠를 보여준다.
// 2. 이전/다음 탐색 버튼을 누르면 캐러셀 콘텐츠는 슬라이드 되어 콘텐츠를 보여준다. (인디케이터 탭 업데이트)
// 3. 3초마다 자동으로 다음 콘텐츠를 보여줄 수 있도록 설정한다.
// 4. 마우스가 캐러셀 영역으로 들어가면 자동 넘김이 멈추고, 마우스가 캐러셀 영역 밖으로 나가면 자동 넘김이 다시 시작한다.
// 5. 인디케이터 탭 또는 이전/다음 탐색 버튼에 포커스가 되면 자동 넘김이 멈춰야 한다.
// 6. 자동 넘김 또는 넘김 시간 등은 옵션으로 설정할 수 있도록 변경한다.
// 7. 객체 지향 자바스크립트 방식으로 코드를 변경한다. (e.g: new Carousel('#bs3-headphone') )
// --------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------
// 초기 변수 정의
var carousel;
var tab_list;
var tabs;
var tab_button_group;
var tab_wrapper;
var active_page_index = 0;
var using_animation = true;
var animation_time = '0.4s';

// -------------------------------------------------------------------------
// 컴포넌트 초기화 함수
function initCarousel() {
  // 컴포넌트 객체 참조
  selectionControls();
  // 로드할 때 UI 구현을 위한 함수 실행
  resizeControl();
  // 컴포넌트 이벤트 바인딩
  bindingEvents();
  // 애니메이션 설정
  using_animation && settingAnimation();
}

// -------------------------------------------------------------------------
// 컴포넌트 함수

// 컴포넌트 문서 객체 참조
function selectionControls() {
  carousel         = document.querySelector('.ui-carousel');
  tab_list         = carousel.querySelector('.ui-carousel-tablist');
  tabs             = tab_list.querySelectorAll('a');
  tab_button_group = carousel.querySelector('.ui-carousel-button-group');
  tab_wrapper      = carousel.querySelector('.ui-carousel-tabpanel-wrapper');
}

function settingWrapperWidth() {
  // 컨테이너(캐러셀)의 너비
  var container_width = carousel.clientWidth;
  // 각 탭패널을 순환하여 width 값을 container_width 값으로 설정
  var panels = tab_wrapper.querySelectorAll('.ui-carousel-tabpanel');
  for ( var i=0, l=panels.length; i<l; i++ ) {
    panels[i].style.width = container_width + 'px';
  }
  // 탭 패널 래퍼 객체의 width 속성으로 설정
  tab_wrapper.style.width = panels.length * container_width + 'px';
}

function activeTabPanel(active_index) {
  // 탭 패널 래퍼를 이동
  var distance_x = -carousel.clientWidth * active_index + 'px';
  tab_wrapper.style.left = distance_x;
  updateIndicators( active_index );
}

function updateIndicators(active_index) {
  // 기존에 활성화된 탭에서 active 클래스 제거
  var activated_tab = tab_list.querySelector('.active');
  if (activated_tab) {
    activated_tab.classList.remove('active');
  }
  // 현재 사용자가 누른 탭에 active 클래스 추가
  var current_tab = tabs[active_index];
  var parent = current_tab.parentNode;
  parent.classList.add('active');
}

function prevContent() {
  active_page_index = --active_page_index < 0 ? (tabs.length - 1) : active_page_index;
  activeTabPanel(active_page_index);
}

function nextContent() {
  active_page_index = ++active_page_index % tab_wrapper.children.length;
  activeTabPanel(active_page_index);
}

function eventTabs() {
  for ( var tab, i=0, l=tabs.length; i<l; i++ ) {
    tab = tabs[i];
    tab.index = i;
    tab.onclick = function(){
      // 활성화된 페이지 인덱스 업데이트
      active_page_index = this.index;
      activeTabPanel( active_page_index );
      return false;
    };
  }
}

function eventButtons() {
  // 사용자가 이전/다음 버튼을 누르면 처리하는 로직
  var buttons = tab_button_group.querySelectorAll('button');
  var prev_button = buttons[0];
  var next_button = buttons[1];
  prev_button.onclick = prevContent;
  next_button.onclick = nextContent;
}

/** @function resizeCarouselHeight() 캐러셀 컴포넌트 높이를 변경하는 함수 */
var resizeCarouselHeight = function() {
  var tab_panel = tab_wrapper.querySelector('.ui-carousel-tabpanel');
  carousel.style.height = tab_panel.clientHeight + 'px';
};

function resizeControl() {
  resizeCarouselHeight();
  settingWrapperWidth();
  // 창크기 리사이징 될때 액티브된 인덱스 보임.
  activeTabPanel(active_page_index);
}

function settingAnimation() {
  // CSS Control
  tab_wrapper.style.transition = 'left '+ animation_time +' ease';
}

// -------------------------------------------------------------------------
// 이벤트 핸들러

// 이벤트 바인딩 함수
function bindingEvents() {
  // 0. 로드/리사이즈 이벤트
  window.onresize = resizeControl;
  // 1. 인디케이터 탭 클릭 이벤트
  eventTabs();
  // 2. 이전/다음 버튼 클릭 이벤트
  eventButtons();
}

// -------------------------------------------------------------------------
// 컴포넌트 초기 실행
initCarousel();
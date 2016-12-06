###### JJ_CAMP_Fundamental

[＜ INDEX](../../README.md)

## DAY 10
- Function
- UI Components `carousel` [DAY09 carousel refactoring](https://github.com/rockquai/JavaScript-jQuery/blob/master/A_Fundamental/DAY09/ui-components/carousel/js/carousel-ui-component.js)

## Function
- 랜덤 정수 반환 함수
- 문자열 포함 여부 확인 함수
- 문자열 반복처리 반환 함수 
- 끝에서 3번째 자리마다 콤마(,)를 추가하는 함수
- 통화(원)로 변경해주는 함수

### 랜덤 정수 반환 함수
```javascript
  function getRandomNumber(n) {
    return Math.round( Math.random() * n )
  }
```

### 문자열 포함 여부 확인 함수
```javascript
// [ES6] includes()
'coffee is good'. includes('i'); // true
'coffee is good'. includes('a'); // false
```

```javascript
  function includes( str, check ) {
    // 전달 받은 문자 내부에 체크하고자 하는 문자열이 있나?
    // Boolean 값을 반환하는 함수
    return str.indexOf(check) > -1;
  }  
```

### 문자열 반복처리 반환 함수 
```javascript
// [ES6] repeat()
'memory'.repeat(4) // "memorymemorymemorymemory" => 4번 반복
```

```javascript
  function repeat(str, num) {
    var str_arr = [];
    while( num-- ) {
      str_arr.push(str);
    }
    return str_arr.join(' ');
  } 
```

### 끝에서 3번째 자리마다 콤마(,)를 추가하는 함수
```javascript
  function addComma(n) {
    // 유효성 검사 
    if( typeof n !='number' ) { throw new Error ('숫자값을 입력해야 합니다') }
    // 숫자 값 n을 문자 값으로 변경 (형 변환)
    // 명시적으로 변경
    // n = String(n);
    // 암시적으로 변경
    n = n + '';
    // 배열로 변경
    n = n.split('');
    for( var i =n.length-3; i>0; i=i-3 ) {
      n.splice(i, 0, ',');
    }
    return n.join('');
  } //end
```

### 통화(원)로 변경해주는 함수
```javascript
  function currency( number, sign, sign_postion ) {
    // sign의 기본값
    sign = sign || '원';

    // sign_postion의 기본값
    sign_postion = sign_postion || '뒤';

    if( sign_postion ) {
      number = addComma(number) + sign; // sign 인자값이 뒤 붙는다.
    } else {
      number = sign + addComma(number); // sign 인자값이 앞에 붙는다.
    }
    return number;
  }
```

---

## UI Component `carousel` 
- [DAY09 carousel refactoring](https://github.com/rockquai/JavaScript-jQuery/blob/master/A_Fundamental/DAY09/ui-components/carousel/js/carousel-ui-component.js)
- 캐러셀 컴포넌트 높이 감지
- 사용자 옵션(자동 넘김, 애니메이션 사용 유무 & 시간 설정) 설정

### TO DO
0. 캐러셀 탭 패널을 감싼 `래퍼 요소의 너비`를 `탭 패널 너비 × 탭 패널 개수`로 설정한다.
1. 인디케이터 탭 버튼을 누르면 캐러셀 콘텐츠는 해당 콘텐츠를 보여준다.
2. 이전/다음 탐색 버튼을 누르면 캐러셀 콘텐츠는 슬라이드 되어 콘텐츠를 보여준다. (인디케이터 탭 업데이트)
3. 3초마다 자동으로 다음 콘텐츠를 보여줄 수 있도록 설정한다.
4. 마우스가 캐러셀 영역으로 들어가면 자동 넘김이 멈추고, 마우스가 캐러셀 영역 밖으로 나가면 자동 넘김이 다시 시작한다.
5. 인디케이터 탭 또는 이전/다음 탐색 버튼에 포커스가 되면 자동 넘김이 멈춰야 한다.
6. 자동 넘김 또는 넘김 시간 등은 옵션으로 설정할 수 있도록 변경한다.

```html
  <article id="bs3-headphone" class="ui-carousel">
    <h1 class="ui-carousel-headline">Beats Solo3 Wireless On-Ear Headphones – Rose Gold</h1>
    <div role="tablist" class="ui-carousel-tablist">
      <ul role="presentation">
        <li class="active"><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View Front"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 1"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 2"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 3"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 4"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 5"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 6"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 7"></a></li>
      </ul>
    </div>
    <div class="ui-carousel-button-group" role="group">
      <button type="button" class="ui-carousel-prev-button" aria-label="previous content"></button>
      <button type="button" class="ui-carousel-next-button" aria-label="next content"></button>
    </div>
    <div role="group" class="ui-carousel-tabpanel-wrapper">
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2.jpeg" alt="MNET2">
      </figure>
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2_AV1.jpeg" alt="MNET2_AV1">
      </figure>
      <figure class="ui-carousel-tabpanel active" role="tabpanel">
        <img src="images/MNET2_AV2.jpeg" alt="MNET2_AV2">
      </figure>
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2_AV3.jpeg" alt="MNET2_AV3">
      </figure>
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2_AV4.jpeg" alt="MNET2_AV4">
      </figure>
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2_AV5.jpeg" alt="MNET2_AV5">
      </figure>
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2_AV6.jpeg" alt="MNET2_AV6">
      </figure>
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2_AV7.jpeg" alt="MNET2_AV7">
      </figure>
    </div>
  </article>
```

#### 초기 변수 정의
```javascript
var carousel;
var tab_list;
var tabs;
var tab_button_group;
var tab_wrapper;
var active_page_index = 0;
var using_animation = true;
var animation_time = '0.4s';
```

#### 컴포넌트 초기화 함수
```javascript
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
```

#### 컴포넌트 함수
```javascript

// 컴포넌트 문서 객체 참조
function selectionControls() {
  carousel         = document.querySelector('.ui-carousel');
  tab_list         = carousel.querySelector('.ui-carousel-tablist');
  tabs             = tab_list.querySelectorAll('a');
  tab_button_group = carousel.querySelector('.ui-carousel-button-group');
  tab_wrapper      = carousel.querySelector('.ui-carousel-tabpanel-wrapper');
}

// 캐러셀 뷰 영역의 너비 및 각 콘텐츠 너비 설정
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

// 탭 패널 래퍼를 이동
function activeTabPanel(active_index) {  
  var distance_x = -carousel.clientWidth * active_index + 'px';
  tab_wrapper.style.left = distance_x;
  updateIndicators( active_index );
}

// 인디케이터
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

// 이전 버튼
function prevContent() {
  active_page_index = --active_page_index < 0 ? (tabs.length - 1) : active_page_index;
  activeTabPanel(active_page_index);
}

// 다음 버튼
function nextContent() {
  active_page_index = ++active_page_index % tab_wrapper.children.length;
  activeTabPanel(active_page_index);
}

// 활성화된 페이지 인덱스 업데이트
function eventTabs() {
  for ( var tab, i=0, l=tabs.length; i<l; i++ ) {
    tab = tabs[i];
    tab.index = i;
    tab.onclick = function(){      
      active_page_index = this.index;
      activeTabPanel( active_page_index );
      return false;
    };
  }
}

// 사용자가 '이전/다음' 버튼을 누르면 처리하는 로직
function eventButtons() {
  var buttons = tab_button_group.querySelectorAll('button');
  var prev_button = buttons[0];
  var next_button = buttons[1];
  prev_button.onclick = prevContent;
  next_button.onclick = nextContent;
}

// 캐러셀 컴포넌트 높이를 변경하는 함수
var resizeCarouselHeight = function() {
  var tab_panel = tab_wrapper.querySelector('.ui-carousel-tabpanel');
  carousel.style.height = tab_panel.clientHeight + 'px';
};

// 로드할 때 UI 구현을 위한 함수 실행
function resizeControl() {
  resizeCarouselHeight();
  settingWrapperWidth();
  // 창크기 리사이징 될때 액티브된 인덱스 보임.
  activeTabPanel(active_page_index);
}

// 애니메이션
function settingAnimation() {
  // CSS Control
  tab_wrapper.style.transition = 'left '+ animation_time +' ease';
}
```
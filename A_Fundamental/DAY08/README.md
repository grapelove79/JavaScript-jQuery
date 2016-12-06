###### JJ_CAMP_Fundamental

[＜ INDEX](../../README.md)

## DAY 08
- Inline Style 적용
- `.clientWidth`, `.style.width`, `.getComputedStyle(요소).width`, `.currentStyle.width`
- UI Components `carousel` [DAY07 carousel refactoring](https://github.com/rockquai/JavaScript-jQuery/blob/master/A_Fundamental/DAY07/ui-components/carousel/js/carousel-ui-component.js)

---

## Inline Style 적용
### 1. 여려 줄로 스타일 적용
```javascript
  var body = document.querySelector('body');

  body.style.fontSize = '32px';
  body.style.margin = '3em';
  body.style.padding = '2em 4em';
  body.style.color = '#0459FF';
```

### 2. 한번에 스타일 적용 : 최신 버전의 자바스크립트 - 크로스브라우징 안됨
```javascript
  body.style.cssText = `
    font-size : 32px;
    margin: 3rem;
    padding: 2em 4em;
    color: #333;
  `;
```

### 3. 하위 브라우저 호환
```javascript
  body.style.cssText = 'font-size: 32px; margin: 3rem; padding: 2em 4em; color: #333;';
```

### 4. 여러 줄로 사용하려면 배열을 사용
```javascript
  body.style.cssText = [
    'font-size : 32px;',
    'margin: 3rem;',
    'padding: 2em 4em;',
    'color: #333;'
  ].join('');
```

---

## `.clientWidth`
1. `요소.clientWidth` 속성 <br>
소수점을 허용하지 않고, 값을 올림하여 정수를 반환한다. <br>
content-box + padding-box 까지 너비를 반환한다.<br>

2. `요소.style.width` 속성 <br>
인라인 스타일 속성이 설정된 요소의 width 너비를 가져온다.<br>
인라인 스타일 속성이 설정되어 있지 않을 경우는 빈 문자열 ''을 반환한다.<br>

3. `windown.getComputedStyle(요소).width` 속성<br>
웹 브라우저가 최종적으로 계산한 width 값을 반환한다.<br>
다만, 이 방법은 표준 방법이지만 표준을 준수하지 않은 IE 8- 브라우저에서는 작동하지 않는다.<br>

4. `요소.currentStyle.width` 속성<br>
비 표준 방법으로 Microsoft Internet Explorer 에서만 동작한다.<br>
가져오는 값은 .getComputedStyle(요소).width과 같다.<br>

```html
  <div class="box"></div>
```

```css
  .box {
    /*box-sizing: border-box;*/
    width: 100px;
    height: 100px;
    background: #697FFB;
    padding: 10px;
    border: 10px solid;
  }
```

```javascript
    var box = document.querySelector('.box');

   // inline style값만 가져올수 있다
   // box.style.width
   console.log(box.style.width);

   // w3c 표준방식
   // window.getComputedStyle(box).width
   console.log(window.getComputedStyle(box).width);  

   // MS 비표준방식 - IE6,7,8
   // $0.currentStyle.width
```

---

## UI Components `carousel` 
- [DAY07 carousel refactoring](https://github.com/rockquai/JavaScript-jQuery/blob/master/A_Fundamental/DAY07/ui-components/carousel/js/carousel-ui-component.js)
- indicator Abstract(추상화)
- `인디케이터`와 `이전/다음 버튼` 싱크

### TO DO
1. 대상 찾기
2. view영역 내부의 `img`의 폭을 가져와서 이미지 개수만큼의 폭을 view영역에 설정
3. `.carousel-view` 영역의 가로 폭을 포함하는 이미지 개수의 폭의 합 만큼 설정
4. 각 이미지를 순환 처리하여 컨테이너 요소의 너비 만큼 이미지 너비를 설정
5. 이전/다음 버튼 이벤트 연결<br>
    5-1. `이전 버튼` :  `선감소한 활성화된 인덱스`와 `이미지 개수`를 나머지 연산<br>
    5-2. `다음 버튼` : `선증가한 활성화된 인덱스`와 `이미지 개수`를 나머지 연산<br>
6. `indicator`를 사용자가 클릭 했을 때, 이벤트 발생하는 일<br>
    6-1. 이전에 활성화되었던 인디케이터는 비 활성화, 클릭한 인디케이터는 활성화<br>
    6-2. 뷰(`carousel-view`) 영역이 클릭한 인디케이터의 인덱스(순서)에 해당하는 위치로 이동

```html
  <article class="carousel-container">
    <h1 class="readable-hidden">Earphones &amp; Earset 3i Carousel Component</h1>
    <div class="carousel-controls">
      <div class="carousel-indicator">
        <button role="tab" type="button" class="ir carousel-tab">product view 01</button>
        <button role="tab" type="button" class="ir carousel-tab">product view 02</button>
        <button role="tab" type="button" class="ir carousel-tab">product view 03</button>
        <button role="tab" type="button" class="ir carousel-tab">product view 04</button>
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

### indicator와 이전/다음 버튼 싱크
```javascript
  var prev_btn = controls.querySelector('.carousel-previous-btn');
  var next_btn = controls.querySelector('.carousel-next-btn');

  prev_btn.onclick = prevMoveCarouselContentView;
  next_btn.onclick = nextMoveCarouselContentView;

  // 이전 버튼
  function prevMoveCarouselContentView(){
    active_index = --active_index % view_contents_length;
    if ( active_index < 0) {
      active_index = view_contents_length - 1;
    }
    view.style.transform = 'translateX('+ (-1 * view_content_width * active_index) +'px)';
    indicator_items[active_index].onclick();
  }

  // 다음 버튼
  function nextMoveCarouselContentView(){
    active_index = ++active_index % view_contents_length;

    // 방식1. transform
    view.style.transform = 'translateX('+ (-1 * view_content_width * active_index) +'px)';

    // 방식2. left
    // view.style.position = 'absolute';
    // view.style.top = '0px';
    // view.style.left = -1 * view_content_width * active_index +'px';
    indicator_items[active_index].onclick();
  }
```

속성 | transform | left
---|---|---
호환 | IE하위브라우저 호환 안됨(IE9+) | IE하위브라우저 호환
CPU | 사용 안함 | 사용 함
GPU | 사용 함 | 사용 안함
속도 | `left`보다 훨씬 빠름 | `Reflow Repaint` 발생 - 느림


#### indicator Abstract(추상화)
: indicator를 사용자가 클릭 했을 때, 이벤트 발생하는 일
- [수행하는 일 1] 이전에 활성화되었던 인디케이터는 비 활성화, 클릭한 인디케이터는 활성화
- [수행하는 일 2] 뷰(carousel-view) 영역이 클릭한 인디케이터의 인덱스(순서)에 해당하는 위치로 이동

```javascript
  var indicator_items = controls.querySelectorAll('.carousel-tab');
  // console.log(indicator_items);

  for ( var i = 0, l=indicator_items.length; i<l; i++ ) {
    // console.log(indicator_items[i]);
    var item = indicator_items[i];
    item.index = i;
    indicator_items[i].onclick = activeSelectedItem;
  }

  var selected_item = null; // 아직 사용자는 아무 것도 선택하지 않았다.

  function activeSelectedItem() {
    var item = this;
    if ( selected_item !== null ) {
      // selected_item : 전에 클릭한 아이템을 기억하는 변수 
      selected_item.classList.remove('active-tab');
    } 
    // this : indicator_items. 함수를 실행시킨 주체.(= 사용자가 클릭한 indicator_items.)
    this.classList.add('active-tab');
    selected_item = item;
    // console.log(view_content_width); // 1000
    // console.log(item.index); // indicator_items 인덱

    var distance = view_content_width * item.index;

    // 인디케이터를 클릭했을 때 활성화 인덱스도 변경(싱크 작업)
    active_index = item.index;
    view.style.transform = 'translateX('+ (-1 * distance) +'px)';
  }
  ```

### Code refactoring

```javascript
window.onload = init;

function init() {
  // 지역 공간

  var selected_num    = 0;
  var selected_tab    = null;
  var container       = document.querySelector('.carousel-container');
  var container_width = container.clientWidth;
  var view            = container.querySelector('.carousel-view');
  var view_contents   = view.querySelectorAll('img');
  var tabs            = container.querySelectorAll('.carousel-tab');
  var tabs_total      = tabs.length;
  var prev_button     = document.querySelector('.carousel-previous-btn');
  var next_button     = document.querySelector('.carousel-next-btn');

  view.style.width = container_width  * tabs_total + 'px';

  for ( var k=0, j=view_contents.length; k<j; k++ ) {
    view_contents[k].style.width = container_width + 'px';
  }

  for (var i=0, l=tabs_total; i<l; i++) {
    var tab = tabs[i];
    tab.num = i;
    tab.onclick = function() {
      selected_num = this.num;
      activeViewContent( this, selected_num );
    };
  }

  prev_button.onclick = prevViewContent;
  next_button.onclick = nextViewContent;

  function prevViewContent() {
    selected_num = --selected_num % tabs_total;
    if ( selected_num < 0 ) {
      selected_num = tabs_total - 1;
    }
    activeViewContent( tabs[selected_num], selected_num );
  }
  function nextViewContent() {
    selected_num = ++selected_num % tabs_total;
    activeViewContent( tabs[selected_num], selected_num );
  }

  function activeViewContent(tab, num) {
    if ( selected_tab !== null ) {
      selected_tab.classList.remove('active-tab');
    }
    tab.classList.add('active-tab');
    selected_tab = tab;
    // --------------------------------------------------------------
    view.style.left = -1 * num * container_width + 'px';
  }

  // 사용자 액션 시뮬레이션
  tabs[0].onclick();
}
```
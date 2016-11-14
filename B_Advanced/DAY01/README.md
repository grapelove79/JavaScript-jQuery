###### JJ_CAMP_Advanced

[＜ INDEX](../../README.md)

## DAY 01

### 0. 브라우저를 구성하는 객체 
#### 기존에 존재하던 객체들 (window 객체)
- window.location 객체
- window.screen 객체 
- window.navigator 객체
- window.document 객체
- window.history 객체
 
#### HTML5에 추가된 객체들
- window.navigator.geolocation 객체
- window.localStorage 객체
- window.sessionStorage 객체

### DOM 선택 방식
```javascript
var body = document.getElementsByTagName('body').item(0); // XML DOM 방식
var body = document.body; // HTML DOM 방식
```

### DOM API
- appendChild : 부모노드.appendChild(자식노드)
- insertBefore: 목표노드.부모노드.insertBefore(삽입노드, 목표노드);

### 1. 자바스크립트를 사용하여 동적으로 코드 생성/추가
#### `<h1> Javascript Log </h1>` 생성 함수
```javascript
function createHeadline(h_lv, content, target) {
  // 유효성 검사
  if( typeof h_lv !== 'string' ) { throw new Error('첫번째 인자는 문자열이어야 한다.'); }
  if( typeof content !== 'string' ) { throw new Error('두번째 인자도 문자열이어야 한다.'); }
  if( target && target.nodeType !== 1 ) { throw new Error('세번째 인자는 요소노드여야 한다.'); }

  // 단계 1.
  // <h1> 요소를 생성하고,
  var headline = document.createElement(h_lv);
  // 텍스트 내용으로 `JavaScript Log` 라고하는 텍스트를 동적으로 생성한다.
  var headline_content = document.createTextNode(content);
  // 생성된 각 노드(Node) 검증
  // console.log('headline:', headline);
  // console.log('headline_content:', headline_content);
  // 각 노드를 합치기(둘 중 하나는 부모 노드, 자식 노드가 되어야 함)

  // 단계 2.
  // DOM API: ~ 자식으로 삽입
  // 부모노드.appendChild(자식노드)
  headline.appendChild(headline_content);
  // 합쳐진 노드 결과 검증
  // console.log('headline:', headline);

  // 단계 3.
  // DOM API: ~ 앞에 삽입
  // 목표노드.부모노드.insertBefore(삽입노드, 목표노드);
  // if문 사용하지 않고 target.parentNode.insertBefore(headline, target); 사용할 경우
  // target는 undefined. if문을 써줘야 한다.
  if ( target ) {
    target.parentNode.insertBefore(headline, target);
  }
  return headline;
}
```

#### 비순차목록 생성 함수
```html
<ul>
	<li>IOT</li>
	<li>VR</li>
	<li>IT</li>
</ul>
```

```javascript
function createList(list_type, contents, target) {
  var categories;

  // 유효성 검사
  if ( typeof list_type !== 'string' ) { throw new Error('첫번째 인자는 문자열이어야 합니다.'); }
  if ( contents && typeof contents === 'string' ) {
    categories = contents.split(' ');
  }
  if ( contents && contents instanceof Array ) {
    categories = contents;
  }
  if ( target && target.nodeType !== 1 ) { throw new Error('세번째 인자는 요소노드여야 합니다.'); }
  // console.log(categories);

  var list = document.createElement(list_type);

  categories.forEach(function(item, index) {
    // console.log(item, index);
    // <li>item</li>
    var li = document.createElement('li');
    var li_content = document.createTextNode(item);
    li.appendChild(li_content);
    // <list> 요소 내부에 삽입
    list.appendChild(li);
  });

   // console.log(list);
  if ( target ) {
    target.appendChild(list);
  }
  return list;
}
```

### 2. RWD 반응형 웹 디자인 적용을 위한 기기 감지 스크립팅 
#### `<html>`요소의 class 속성 값으로 처리 함수
```javascript
var html = document.documentElement;

var detect_classes = {
  'mobile': 800,
  'tablet': 1024,
  'desktop': 1280
};
```

```javascript
function assignClassDetection() {
    // <html> 요소의 class 속성 값을 가져온다.
    var html_class = html.getAttribute('class');
    var current_class = detectDeviceType();
    if(!html_class || assignClassDetection.old_class === current_class ) { return; } // 함수 종료
    // console.log('try code');

    // [단계1] 기존 클래스 속성 값을 제거한다.
    // 기존 클래스 속성과 달라진 경우에만 이 조건을 통과할 수 있다. (성능 이슈 해결)
    if ( html.classList.contains( assignClassDetection.old_class ) ) {
        html.classList.remove( assignClassDetection.old_class );
    }

    // [단계2] 현재 설정된 class 값을 <html> 요소의 class 속성으로 할당한다.
    html.classList.add(current_class);

    // [단계3] 현재 설정된 class 값을 기억한다.
    assignClassDetection.old_class = current_class;
}
```

#### 각 기기의 폭을 감지하는 함수 
```javascript
function detectDeviceType() {
    var device_width = window.innerWidth;
    var type = null;

    if( device_width < detect_classes.mobile ) { type = 'mobile'; }
    else if ( device_width < detect_classes.tablet ) { type = 'tablet'; }
    else if ( device_width < detect_classes.desktop ) { type = 'desktop'; }
    else { type = 'wide'; }
    return type;
}
```
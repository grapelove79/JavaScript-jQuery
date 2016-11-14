###### JJ_CAMP_Fundamental

[＜ INDEX](../../README.md)

## DAY 06
- for문
- for ~ in문
- function

---

## for문
`for (선언;확인;변경) {} => 값의 집합(배열)`

- [값의 집합] `배열`, `유사 배열` 순환할 때 사용하는 것이 좋다.

```javascript
var data_collection = [1, 'hammer', false, function() {}, [], {}];

console.log( 'data_collection.length:', data_collection.length );

for ( var i=0; i<data_collection.length; i=i+1 ) {
	console.log( 'data_collection['+ i +']:', data_collection[i] ); // 각 원소를 출력
}	
```

---

## for ~ in문
`for (속성 in 객체) => 속성의 집합(객체)`

- [값의 집합]에서는 사용하지 않는 것이 좋다.
- `속성의 집합(객체)`에서 사용하는 것이 좋다. 
- 왜? 객체는 for문을 사용하여 순환할 수 없는가? `객체는 배열과 달리 length 속성이 없다.`
- in 구문을 통해서 속성값이 있는지 체크 가능하다.

```javascript
var data_collections = [1, 'hammer', false, function() {}, [], {}];
for (var a in data_collections) {
	console.log(a, data_collections[a]);
}
```

### [미션] `for ~ in문` : CSS 스타일 적용
- 1. 문서(document)에서 `.target-element`를 찾아 변수에 할당(적절한 변수 이름 작성)
- 1-2. 이벤트를 제어할 버튼 요소를 문서에서 찾아 변수에 할당 (적절한 변수 이름 작성)
- 1-3. 설정할 CSS 객체를 선언과 동시에 값으로서 객체를 정의 
- 2. 변수에 참조된 버튼 객체를 사용자가 클릭하면( 이벤트 연결<->함수[이벤트 핸들러] )
- 3. 함수의 로직을 작성 (작성할 css객체를 `for ~ in문`으로 순환하여 스타일 적용)

```html 
	<button
	lang="ko-KR"
	type="button"
	class="btn-assign-css-object">
	css 속성 추가
	</button>

	<div class="target-element">
		taget <code>div</code> element
	</div>
```

```javascript
// 1. 문서(document)에서 `.target-element`를 찾아 변수에 할당(적절한 변수 이름 작성)
// querySelector : IE8+ 사용 가능. DOM4
var target_el = document.querySelector('.target-element');

// 1-2. 이벤트를 제어할 버튼 요소를 문서에서 찾아 변수에 할당 (적절한 변수 이름 작성)
var assign_btn = document.querySelector('.btn-assign-css-object');

// 1-3. 설정할 CSS 객체를 선언과 동시에 값으로서 객체를 정의 
var css_object = {
	'width'			 : '300px',
	'font-size' 	 : '5rem',
	'outline' 		 : '3px solid #FF23F7',
	'letter-spacing' : '-0.02em',
	'color' 		 : '#FF23F7'
};

// 2. 변수에 참조된 버튼 객체를 사용자가 클릭하면( 이벤트 연결<->함수[이벤트 핸들러] )
assign_btn.onclick = assignCSSObject;

// 3. 함수의 로직을 작성 (작성할 css객체를 `for ~ in문`으로 순환하여 스타일 적용)
function assignCSSObject() {
	for ( var props in css_object) {
		// console.log(props);
		var value = css_object[props]; // === css_object['font-size'];
		// console.log(prop,':', value);
		target_el.style[props] = value;
	}
}
```

### [미션] `for ~ in문` : 사이드 메뉴의 각 링크 `<a>`를 클릭하는 이벤트 처리
- 1. 문서에서 nav.side-menu 요소 객체를 찾아 변수에 참조
- 2. 참조된 사이드 메뉴 내부에서 <a> 요소를 모두 찾아 변수에 참조
- 3. for 문을 사용하여 <a>의 집합을 순환 처리
- 4. 각 <a> 요소에 이벤트를 연결
- 5. 연결된 이벤트 핸들러(함수) 로직을 구현

```html 
	<nav class="side-menu">
		<ul>
			<!-- <li><a href="" bgcolor>Intro</a></li> : 커스텀 속성을 넣을 땐 'data-' 넣어주면 된다. 
			bgcolor' 비표준, 'data-bg-color' 표준 -->
			<li><a href="" data-bg-color="#FF23F7">Intro</a></li> 
			<li><a href="" data-bg-color="#FFF00E">About</a></li>
			<li><a href="" data-bg-color="#30FFFB">Contact</a></li>
			<li><a href="" data-bg-color="#FF670E">Reference</a></li>
		</ul>
	</nav>
```

```javascript
var html = document.querySelector('html'),
	body = document.querySelector('body'),
	// 1. 문서에서 nav.side-menu 요소 객체를 찾아 변수에 참조
	side_menu = document.querySelector('nav.side-menu'),
	// 2. 참조된 사이드 메뉴 내부에서 <a> 요소를 모두 찾아 변수에 참조
	side_links = side_menu.querySelectorAll('a'), // 집합 (유사 배열, NodeList)
	i=0, 
	l=side_links.length,
	side_link;

// 3. for 문을 사용하여 <a>의 집합을 순환 처리
for ( ; i<l; i++) {
	// console.log('side_links['+i+']', side_links[i]);
	side_link =  side_links[i];
	// 메뉴의 글자 컬러
	side_link.style.color = side_link.getAttribute('data-bg-color');
	// 4. 각 <a> 요소에 이벤트를 연결
	side_link.onmouseenter = changeDocumentBgcolor;
}

// 5. 연결된 이벤트 핸들러(함수) 로직을 구현
function changeDocumentBgcolor() {
	// console.log(this); // 각각의 'a'. 함수에 연결된 주체.
	var bg_color= this.getAttribute('data-bg-color');
	// console.log(bg_color);
	// 누구의 배경 색을 바꿀 것인가?
	// document => <html> 또는 <body>
	// html.style.background = '#ff0';
	// console.log(this[data-bg-color]); //ReferenceError
	html.style.background = bg_color;
}
```
---

## fucntion
- 함수는 명령문의 묶음이며 재샤옹 가능하다. (기능, 코드 묶음, 모듈) <br>
- 자바스크립트 함수는 `객체`이다.
- `1급 객체(First Class Object)`이다.
- 함수는 객체이므로 속성을 가질 수 있다.
- `객체`란? `속성의 집합`이기 때문이다.
- 함수는 유일하게 `호출 가능`(코드 재사용, 발동 시기(이벤트)를 조정)한 객체이다.

### 함수를 만드는 자주 사용되는 방법 2가지

#### 1. 함수를 정의하는 방법 : 선언식 (함수 이름으로 정의하는 방법)
```javascript
function drinkMilk() {
	console.log('밀크를 마시다');
	// return값이 없으면 기본값 undefined. (return을 쓰지 않으면 암묵적으로 undefined)
	return undefined;
}
```

#### 2. 함수 표현식을 변수에 참조하는 방법 : 표현식 (함수 값(리터럴)을 변수에 할당하는 방법)
```javascript
var lookAt = function(){
  console.log('무엇무엇을 응시하다.');
};
```

### [미션] 메시지 출력
```html 
  <div class="ironman">
    <p class="message">message</p>
    <button type="button" class="ironman-print-button">
      <img src="images/ironman.png" alt="ironman" width="256" height="256">
    </button>
  </div>
```

```javascript
var message_count = 0, 
ironman = document.querySelector('.ironman'),
ironman_message = ironman.querySelector('.message'),
print_button = ironman.querySelector('.ironman-print-button'),

about_fn_messages = [];
about_fn_messages.push('this is function object');
about_fn_messages.push('function has properties');
about_fn_messages.push('function will call objcet');
about_fn_messages.push('function is usafull feature');

function printFunctionMessage() {
	// console.log(about_fn_messages[message_count]); 
	// 0, 1, 2, 0, 1, 2... 계속 순환... 나머지 연산자를 사용.

	// 'message_count + 1' ==> 'message_count' 값이 변화하지 않는다. 
	//  'message_count = message_count + 1' 변수에 넣어야 한다.

	// 방법1.
	// message_count = (message_count = message_count + 1) % about_fn_messages.length;
	// return about_fn_messages[ message_count ];

	// 방법2. 
	// return about_fn_messages[ (message_count = message_count + 1) % about_fn_messages.length ];
	return about_fn_messages[ message_count++ % about_fn_messages.length ];
}

print_button.onclick = function() {
	var print_message = printFunctionMessage();
	console.log(print_message);
	// textContent: 텍스트 삽입, FF에선 호환 안됨.  innerHTML : 코드 삽입
	ironman_message.textContent = print_message; 
};
```
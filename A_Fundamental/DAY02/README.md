###### JJ_CAMP_Fundamental

[＜ INDEX](../../README.md)

## DAY 02

## DOM API
: [Design, 설계] 참조하고자 하는 문서 개게에 적절한 메모리 이름 공간을 변수 이름으로 설정한다.

### [방법1] `body` 끝자리에 `script` 선언
- `<head>`안에서 `script` 선언을 하면 아래와 같은 메시지가 나온다.
- html 파서는 `script` 구문을 만나면 멈춘다. `body` 이후는 문서가 그려지지 않아(UI) 오류가 생긴다.

`
Uncaught TypeError: Cannot read property 'getElementsByTagName' of null
`
> property 오직 객체만 가질수 있다.

```html 
	<div id="page" lang="en">
		<h1>page element(parent)</h1>
		<div class="page-child">child element</div>
	</div>
```

```javascript 
var html = document.documentElement, 
	body = document.body, 
	page = document.getElementById('page'),
	page_headline = page.getElementsByTagName('h1'),
	page_child = page.getElementsByClassName('page-child');
```

### [방법2] 이벤트 사용 - 초기화 수행

```javascript
var initialization = function(){
	var html = document.documentElement, 
		body = document.body, 
		page = document.getElementById('page'),
		page_headline = page.getElementsByTagName('h1'),
		page_child = page.getElementsByClassName('page-child');

	console.log('html', html);
	console.log('body', body);
	console.log('page', page);
	console.log('page_headline', page_headline);
	console.log('page_child', page_child);
}

window.onload = initialization;
```
> `window.onload = initialization();` => window가 로드되기 전에 `initialization()`함수가 실행이 되어지므로 `()` 함수 호출을 붙이지 않는다. 

## 변수(Variable) VS 상수(Constant)
- `변수`는 실행 중인 상황에서 값을 변경할 수 있다.
- `상수`는 실행 중인 상황에서 값을 변경할 수 없다.
- 변수와 구분하기 위한 목적으로 `상수의 이름`은 `모두 대문자`로 작성 표기.
- 상수를 공식적으로 지원하는 것은 `ECMAScript 2015` 버전부터 지원.

```javascript
var bim_project = 'LG Bim';
const HOUR_T0_MINIUTE = 60;

console.log('bim_project', bim_project);
console.log('HOUR_T0_MINIUTE', HOUR_T0_MINIUTE); 

bim_project = 'Samsung Mini Bim'; // 바뀜
HOUR_T0_MINIUTE = '60분' 		  // 오류 발생
```

## 자바스크립트의 데이터 유형 변경(형 변환, Change Data Type)
### Number -> String (숫자 -> 문자)
```javascript
// 방법1. 앞, 뒤에 홀따옴표(''), 쌍따옴표("")를 추가하는 경우
'10', '2013'

// 방법2. 빈문자 ''를 더해주는 방식
count + ''; // 10 --> '10'

// 방법3. 문자 객체가 소유한 함수(메소드, Method)를 사용하는 경우
// 변수.toString()
count.toString(); // '10'
// 원시데이터는 속성을 가질 수 없다. 

// 방법4. String(변수명);
String(count);
```

### String(Like Number) -> Number (문자[숫자] -> 숫자 )
```javascript
// 방법1. 숫자형 문자 뒤에 0을 빼거나, 1을 곱하거나 나눈다.
'450' - 0, '390' * 1, '-123' / 1

// 방법2. 숫자형 문자 앞에 + 기호를 붙인다.
+'.94'

// 방법3. 숫자 함수에 숫자형 문자를 전달하여 실행한다.
Number('89790');
```

### String(Like Unit) -> Number (문자[단위] -> 숫자 -> 산술연산 -> 문자[단위])
```javascript
// 방법1. parseInt() 함수에 단위 유형의 문자를 전달한다. -> 정수(Integer)를 반환
window.parseInt('20.3%', 10); // 20

// 방법 2. parseFloat() 함수에 단위 유형의 문자를 전달한다. -> 실수(Floating)를 반환
window.parseFloat('20.3%', 10); // 20.3
```

## Event
- 이벤트 속성에 함수를 연결하는 것을 이벤트 바인딩 한다. (Event property, handler, binding)
- [추가, 연결] 이벤트 속성에 함수(핸들러)를 설정
- [제거] 이벤트 속성에 초기 값인 null을 대입

### 이벤트 추가, 연결, 제거

```javascript
// 이벤트 초기 상태 = null
document.onclick

// 이벤트에 함수 연결
document.onclick = function() {
      console.log('clicked');
}

// 이벤트에 함수 제거
document.onclick = null
```

### 1회만 클릭 수행.(클릭과 동시에 이벤트 제거)

```javascrpt
var doc = document;
var onClick = doc.onclick = function() {
	console.log('clicked');
	document.onclick = null;
}

doc.onclick = onClick;
// doc.onclick = onClick(); => 사용자가 'document'를 클릭했을 때, 이벤트가 실행이 되어야 하는데. onClick()'바로 실행이 되므로 오류다.
```

## 문서 객체 제어
### 표준 방식 VS 비표준 방식

```javascrpt
// 표준 방식(Microsoft Non Standard Method) 
window.getComputedStyle(h1).fontSize;

// 비표준 방식(Microsoft Non Standard Method)
h1.currentStyle.fontSize;
```

### 문서 객체의 스타일 속성 값을 가져와 조작하는 예시 (parseInt() 활용)

```javascrpt
// 문서에서 요소이름(tagName)이 'h1'인 요소를 탐색하여 수집한다.
// Nodelist (노드리스트)
var h1_els = document.getElementsByTagName('h1'); // [ <h1> ]
// 수집된 집합(Nodelist) 내에서 대상 객체를 뽑아내야만 제어가 가능하다.
var h1 = h1_els.item(0); // Programming에서는 시작되는 숫자 값이 0부터 이다.
// 이벤트 속성에 실행할 함수를 연결한다.
h1.onclick = function() {
	console.log('this is heading 1.');
	// 클릭하면 h1 참조 객체의 font-size 값을 가져오고자 한다.
	var current_font_size = h1.style.fontSize;

	/**
	 * --------------------------------
	 * 표준 방식 : W3C Standard Method
	 * --------------------------------
	 */
	current_font_size = window.getComputedStyle(h1).fontSize;
	// console.log( window.parseInt(current_font_size, 10));
	current_font_size = window.parseInt(current_font_size, 10);
	current_font_size = current_font_size - 10;
	h1.style.fontSize = current_font_size + 'px';
};

// 참고로 수집된 집합 자체에 이벤트를 연결하면 동작하지 않는다.
h1_els.onclick = function() {
	console.log('h1_els 변수에 참조된 것은 노드리스트(집합)이기에 이 코드는 작동되지 않는다.');
};
```

> 가비지 콜렉터란 메모리 할당을 추적하고 할당된 메모리가 더 이상 필요 없어졌을 때 해제하는 작업을 한다. (할당된 메모리가 더 이상 필요없을 때 해제)

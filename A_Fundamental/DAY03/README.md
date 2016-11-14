###### JJ_CAMP_Fundamental

[＜ INDEX](../../README.md)

## DAY 03

## 데이터 유형 변경
### Boolean 데이터로 유형 변경
- 방법 1. Boolean() 함수 사용
- 방법 2. '!!'를 데이터 앞에 붙여주는 것 (애용)

#### 방법1. Boolean() 함수 사용
```javascrpt
var num = 101,
	str = 'variable vs constant',
	nu  = null,
	un; //undefined

console.log('num', num);
console.log('num', typeof num);
console.log('str', str);
console.log('str', typeof str);
console.log('nu', nu);
console.log('nu', typeof nu); // 설계 오류!!! null은 객체가 아님에도 typeof로 결과를 출력했을 때 객체(Object)라고 결과를 반환한다.
console.log('un', un);
console.log('un', typeof un);

console.log( Boolean(num) ); // true
console.log( Boolean(str) ); // true
console.log( Boolean(nu) );  // false
console.log( Boolean(un) );  // false

console.log( !num ); // !true -> false
console.log( !str ); // !true -> false
console.log( !nu );  // !false -> true
console.log( !un );  // !false -> true

console.log( !!num ); // true
console.log( !!str ); // true
console.log( !!nu );  // false
console.log( !!un );  // false
```

#### '!!'를 데이터 앞에 붙여주는 것 (애용)
##### undefined, null 데이터 유형 변경 방법
- [문자] 'null', undefined + '', String(null)
- [불리언] !null, !!undefined
- [숫자] null + 9 => 9, Number(null)

## Function
- 참조형 데이터 : 변수의 값을 할당할 경우 복사가 아닌, 값 참조가 수행된다 
- 참조가 되는 데이터 유형은 객체이다.
	- 일반적인 객체 (Planin Object)
	- 배열 객체 (Array Ojbect)
	- 함수 객체 (Fucntion Ojbect)

### 함수 객체 (Fucntion Ojbect)
- 이름이 있는 함수(기명 함수) VS 이름이 없는 함수 (무명, 익명 함수)
- 함수 선언식(Function declaration) VS 함수 표현식(Function expression)

#### 함수 리터럴과 간단한 문서객체 제어
- [STEP 1] .content 요소를 선택하여 화면에서 보이지 않도록 만든다.
- [STEP 2] 문서에서 .btn-show-content 버튼을 선택한다.
- [STEP 3] 선택한 버튼을 사용자가 클릭하면 .content요소를 화면에 보이게 만든다.

```html
	<div class="show-hide-button-groud" role="group">
		<button type="button" class="btn-show-content">Show Content</button>
		<button type="button" class="btn-hide-content">Hide Content</button>
	</div>

	<div class="content">
		<p lang="en">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quod quae rem alias non vero nobis fugit, quasi quam, dolorum, cupiditate, inventore magnam. Magni autem reiciendis cum, temporibus eum pariatur.</p>
	</div>
```

```javascript
	var content = document.querySelector('.content');
	// content.style.display = 'none';
	var btn_show_content = document.querySelector('.btn-show-content');
	var btn_hide_content = document.querySelector('.btn-hide-content');

	btn_show_content.onclick = function() {
		content.style.display = 'block';
	};

	// 값을 참조하는 유형
	// 참조된 값을 다른 변수에 할당한다면
	// 그 값을 복사가 아닌 참조로 동일한 데이터를 가리키게 된다.
	btn_show_content.onmouseover = btn_show_content.onclick;

	btn_hide_content.onclick = function() {
		content.style.display = 'none';
	};

	btn_hide_content.onclick(); 
```
### 함수를 사용하는 방법 3가지
1. new Function ('함수 실행 코드');
2. 익명(무명)함수: 이름이 없는 함수 
`var fn = function() {};`
3. 기명함수: 이름이 정의(선언) 함수.
`function fn() {}`

### 객체를 생성하는 권한을 가진 함수
- 생성자(Constructor) 함수
- 생성된 객체(Instance)
- new Creater('person');

```javascript
// 변수
var eyes = '눈';
var ears = '귀';

// 함수
var crying = function() {
 console.log('울다');
};

// 객체 
var person = {};
person.eyes = eyes; // 속성
person.crying = crying; // 메소드

```
> 변수와 함수를 객체가 소유하게 되면 변수는 객체의 `속성`이라고 불리게 된다.
함수는 객체의 속성임과 동시에 특별히 `메소드`라고 부른다.

### 배열 객체(Array Object)
- 배열 객체는 여러 개의 데이터를 기억할 수 있는 공간을 제공하는 객체이다.
- 생성된 배열 객체는 기억하기 위해 변수에 할당한다. 
- 배열을 사용할 때 연관된 복수 데이터 관리 (쉽고 효율적이다.)

```javascript
var navigation_items =[];

navigation_items.push('Home');
navigation_items.push('About');
navigation_items.push('Works');
navigation_items.push('Products');
navigation_items.push('Contact');
```
### 연관배열(문자 유형이 속성을 배열)

```javascript
var drinks = [];
drinks.push('milk');
drinks.push('juice');
drinks.push('soju');

console.log(drinks.length); // 3

drinks['clear'] = '음료를 비우다'; // 이렇게 사용하는건 지양!

console.dir(drinks); 
```

### 객체의 속성에 접근하는 표기법
1. 점 기호를 통한 접근
2. 곽괄호를 사용하는 접근(각괄호 내부에 문자열을 넣어줘야 함)
: 일반적으로 자주 사용되지 않지만, 반복문(loop)내부에서 특정 변수 값을 순환할 때 종종 사용.

```javascript
console.log('표기법: drinks.clear', drinks.clear);

console.log("표기법: drinks['clear']", drinks['clear']);
```

### Array Links Object(유사배열 = Nodelist)
- 배열과 흡사해보이나, 배열은 아니다.
- length 속성을 가진다.

```html 
	<div class="show-hide-button-groud" role="group">
		<button type="button" class="btn-show-content">Show Content</button>
		<button type="button" class="btn-hide-content">Hide Content</button>
	</div>
```

```javascript
var button = document.getElementsByTagName('button');
console.log(button.length);
```
### 자바스크립트에 내장된 객체들
- 문자 객체
- 숫자 객체
- 불리언 객체
- 함수형 객체
- 배열 객체
- 위 객체(내장객체만)를 생성하는 구문보다는 리터럴을 바로 사용하는 것이 좋다.
- 생성자 객체는 'new' 키워드를 붙여야 한다.

### 객체 리터럴 표현식 
- 변수에 참조 => {};
- 프로퍼티 추가 (css 표현식과 유사) => {속성1(key):값(value), 속성2(key):값(value)}
- sass에서 map과 동일
- delete 키워드를 사용하면 객체의 속성을 제거할 수 있다. 
- 전역 공간에 정의된 변수는 지울 수 없다. 전역 변수를 사용하는 것은 좋은 습관이 아닙니다. 
- 모듈러레이션(모듈) : 모듈을 쪼개서 관리. 전역과 구분되는 공간을 만들다.
- 객체에 null, undefined 대입하면 기존의 참조되는 것을 끊어버리게 된다. 값을 비우게 된다.

```javascript
var css_props  = {
	'font-size' : '24px',
	'color' : '#ff0',
	'border-top-color' : 'currentColor'
}

delete css_props.color; // 정의한 속성 객체는 지울 수 있다.
delete css_props; // css_props는 제거되지 않는다. css_props는 전역 변수라서.
```
## 올바른 데이터 유형을 체크하는 방법
### typeof 키워드(함수가 아님)
- array, null: objcet로 나와 해당되는 정보 유형으로 나오지 않는다.

```javascript
var num, str, boo, fnc, arr, obj;

num = 100;
str = 'this is string';
boo = !false;
fnc = function() {};
arr = [];
obj = {};

console.log('typeof num', num);				// number
console.log('typeof str', str);				// string
console.log('typeof boo', boo);				// boolean
console.log('typeof fnc', fnc);				// function
console.log('typeof arr', arr);				// object ==> array로 제대로 출력이 안된다.
console.log('typeof obj', obj);				// object
console.log('typeof null', null);			// object ==> null로 제대로 출력이 안된다.
console.log('typeof undefined', undefined); // undefined
```

### typeof instanceof
- 설계 도면(클래스(Class), 생성자(constructor)) : ex.) 'sketch' Symbols
- 조각(실체화된 객체) instance : 생성자 함수를 사용하여 생성한 객체
- 인스턴스 instanceof 원형(모체) : return BOOLEAN {true, false}

```javascript
var playlist = new Array();
console.log(typeof playlist); //object => 데이터 유형이 제대로 체크가 되지 않아. 'instanceof'를 사용하면 제대로 나온다.
console.log(playlist instanceof Array); //true
```

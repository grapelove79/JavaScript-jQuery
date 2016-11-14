###### JJ_CAMP_Advanced

[＜ INDEX](../../README.md)

## DAY 06
- 자바스크립트 프로그래밍 방법론
- 객체의 종류
- 데이터 유형을 검증
	- `typeof` vs `instanceof` vs `.constructor`
- 네임스페이스(Namespace)
- for문 VS forEach문
- 정규 표현식

## 자바스크립트 프로그래밍 방법론
### 함수 지향 vs 객체 지향
1. 함수 지향 프로그래밍
	- 함수 중심의 프로그래밍 방법론

2. 객체 지향 자바스크립트
	- 객체를 중심으로 프로그래밍 방법론
	- "객체를 생성하다"
	- 어떻게 객체를 생성할 것인가?

### 객체의 종류
1. 언어에 내장된 객체(Native Objects) 
	- `원시 유형` String, Number, Boolean
	- `참조 유형` Object, Function, Array

2. 언어차원에서 지원하는 라이브러리 객체
	- Math, RegExp, Date, ...

3. 웹 브라우저에 정의된 객체(Browser Object Model) : BOM
	- window {}
	- screen {}
	- navigator {}
	- location {}
	- history {}

4. 사용자 정의 객체(Custom, User Defined Objects)
	- Creational Pattern
	- Object Literal
	- Constructor, Prototype
	- Object.create()
	- class 

### 데이터 유형을 검증
1. typeof
: `null`, `[]` 유형을 올바르게 체크해주지 않는다.

2. 생성된 객체의 생성자를 판단하는 코드 `instanceof`, `.constructor`<br>
	2-1. `instanceof` : 원시 데이터 유형의 경우는 올바르게 체크해주지 않는다. `객체 instanceof 생성자(함수)`<br>
	2-2. `.constructor` : 객체가 아닌 유형의 경우에서는 사용 불가 `객체.constructor === 생성자 (함수)`<br>

```javascript
var kor, jap;

// 객체를 생성할 생성자(Constructor) 함수 정의
function Subject(){}

// 객체 생성
kor = new Subject();
jap = new Subject();

// 1. typeof [ null, [] 유형을 올바르게 체크해주지 않는다. ]
console.log('typeof kor', typeof kor);
console.log('typeof jap', typeof jap);

// 2. 생성된 객체의 생성자를 판단하는 코드 (instanceof, .constructor)
console.log('kor instanceof Subject', kor instanceof Subject); //true
console.log('jap.constructor === Subject', jap.constructor === Subject); //true
```

---

### 네임스페이스(Namespace)
네임스페이스(Namespace)는 애플리케이션에서 요구하는 전역 변수의 개수를 줄이는 동시에 과도한 접두사를 사용하지 않고도 충돌나지 않게 해준다. (이름이 동일하면 덮어쓰게 되어 프로그래밍이 망가진다) Javascript 언어 자체에는 구현되어 있지 않지만, 네임스페이스를 사용하는 것은 어렵지 않다. 전역을 어지럽히는 변수, 함수, 객체 등을 애플리케이션이나 라이브러리를 위한 전역 객체 하나에 묶어주면 된다.

```javascript
(function(global, y9) {
	var Student = function(person, 
	grade, 
	graduation, 
	like_subject, 
	hate_subject
	) {
		if( !(person instanceof y9.Person) ) {
			throw new Error('첫번째 인자는 Preson 생성자는 사용하여 생성된 객체어야 합니다.');
		}
		this.person = person;
		this.grade = grade;
		this.graduation = graduation;
		this.like_subject = like_subject;
		this.hate_subject = hate_subject;
	}

	function studying(how) {
		return this.person.name + '은' + how + ' 공부를 한다.';
	}

	// global.Student = Student; // 모듈 공개
	y9.Student = Student;

})(this, (this.y9 = this.y9 || {}) );
```

---

### for문 VS forEach문

```html 
	<nav id="gnb">
	  <ul>
	    <li><a href rel="external">item 01</a></li>
	    <li><a href rel="external">item 02</a></li>
	    <li><a href rel="external">item 03</a></li>
	    <li><a href rel="external">item 04</a></li>
	    <li><a href rel="external">item 05</a></li>
	    <li><a href rel="external">item 06</a></li>
	    <li><a href rel="external">item 07</a></li>
	    <li><a href rel="external">item 08</a></li>
	  </ul>
	</nav>
```

```javascript
(function(global, $){
	'use strict';
	var gnb = document.querySelector('#gnb'),
		gnb_links = gnb.querySelectorAll('a');


	// for 구문 : `C문법`과 유사
	for ( var i=gnb_links.length, gnb_link; ( gnb_link = gnb_links[--i] ); ) {
		gnb_link.addEventListener('click', function(event) {
			// console.log(event.type);
			console.log(event.target);
			// 브라우저 기본 동작 차단
			event.preventDefault();
		});
	}

	// ES5 forEach 구문
	gnb_links.forEach(function(item, idx) {
		console.log(item, idx);
	});

	// 공개 
	global.gnb_links = gnb_links;
})(this, this.y9);
```

### 정규 표현식
`^ ` 시작 값을 검증 <br>
`$ ` 끝나는 값을 검증 <br>
`\s` 공백을 검증 <br>
`+ ` 1개 이상 <br>
> ※ new RegExp() 사용 시에는 문자열 내부의 `\s` 사용 시, Escape 처리를 해야 한다. ==> `\\s`
###### JJ_CAMP_Fundamental

[＜ INDEX](../../README.md)

## DAY 04
- 올바른 데이터 유형을 체크하는 방법
- 데이터 유형을 올바르게 체크해주는 `isDataType()` 헬퍼 함수
- 문서객체가 존재하는지 여부를 확인하는 `checkDOMElement()` 헬퍼 함수
- 조건문(Conditional statement)
- console {}

---

## 올바른 데이터 유형을 체크하는 방법
- 1. typeof 키워드
- 2. instanseof 키워드
- 3. .constructor 속성
- 4. 사용자 정의 헬퍼 함수 isDtatType()

### 1. typeof 키워드
- typeof의 치명적인 설계 오류 : null, []를 올바르게 인식하지 못한다.

```javascript
var nu  = null, arr = [];

console.log('null', typeof nu);		// object
console.log('arrary', typeof arr);  // object
``` 

### 2. instanseof 키워드
- 실체화된 객체`instance` <-> 객체를 생성하는 생성자`constructor`
- e.g. Adobe Flash,  Adobe Illustrator, Sketch => `Symbols` 개념
- {실체화된 객체} `instanceof` [객체를 생성하는 생성자]
- 객체가 동일 객체형의 인스턴스이면 `true`를 반환한다.

```javascript
var check_array_data = arr instanceof Array;
var is_check_array_data = arr instanceof Object;
```

- 객체만이 생성자를 가진다. `null` 객체가 아니다. `null` 유형은 instanceof 키워드를 사용하여 데이터 체크가 불가능
- 이유는 instanceof 키워드는 객체만 판별이 가능!!!
- 객체가 아닌 것들(`null`, `undefined`)에는 사용할 수 없다.
- instanceof 키워드 사용시 주의가 필요한 부분 : 원시데이터 유형(9, '문자', false)은 올바르게 체크할 수 없다.
- 원시데이터는 값이기 때문에. instanceof의 조각이 아니기 때문에 쓸 수가 없다. 

```javascript
var num = 10, 
	str = 'java vs javascript',
	boo = !false;

console.log('num instanceof Number', num instanceof Number);  // false
console.log('num instanceof Number', num instanceof String);  // false
console.log('num instanceof Number', num instanceof Boolean); // false
```

### 3. .constructor (생성자)
- 자바스크립트에 존재하는 실체화된 모든 객체(instance Object)는 기본적으로 가지고 있는 속성이다.
- {object}.constructor 속성(Property)
- 객체가 아닌 것들(null, undefined)에는 사용할 수 없다.

```javascript

var num = 10,
	str = 'java vs javascript',
	boo = !false,
	fnc = function() {},
	arr = [],
	obj = {};

console.log( 'num.constructor:', num.constructor ); // function Number() { [native code] }
console.log( 'num.constructor === Number:', num.constructor === Number ); // true

console.log( 'str.constructor:', str.constructor ); // function String() { [native code] }
console.log( 'str.constructor === String:', str.constructor === String ); // true

console.log( 'boo.constructor:', boo.constructor ); // function Boolean() { [native code] }
console.log( 'str.constructor === Boolean:', str.constructor === Boolean ); // true

console.log( 'fnc.constructor:', fnc.constructor ); // function Function() { [native code] }
console.log( 'fnc.constructor === Function:', fnc.constructor === Function ); // true

console.log( 'arr.constructor:', arr.constructor ); // function Array() { [native code] }
console.log( 'arr.constructor === Array:', arr.constructor === Array ); // true

console.log( 'obj.constructor:', obj.constructor ); // function Object() { [native code] }
console.log( 'arr.constructor === Object:', obj.constructor === Object ); // true
```

### 4. 데이터 유형을 올바르게 체크해주는 `isDataType()` 헬퍼 함수
- `Object` 모든 객체의 조상이자, 객체 생성자 함수
- 생성자 함수의 특징은 함수 이름의 첫 글자는 대문자.
- 생성자 함수는 `.prototype` 속성을 가짐.

#### [방법 1] `Object.prototype` 원형 객체의 능력 중에는 `.toString()` 함수가 있다.

```javascript
console.log(typeof Object.prototype.toString); // function
```

#### [방법 2] `Object.prototype.toString` 함수는 누군가 빌려쓸 수 있다. `메소드 빌려쓰기: call({data})`

```javascript
Object.prototype.toString.call({data}); // [Object {Date}]
```

#### [방법 3] 문자열에서 해당 데이터 이름을 가진 것을 잘라내야`slice` 한다.

```javascript
Object.prototype.toString.call({data}).slice(8, -1); // Data
```

#### [방법 4] 잘라낸 문자열(Data)을 `소문자`로 반환.

```javascript
Object.prototype.toString.call({data}).slice(8, -1).toLowerCase(); // data
```

#### [완성] 데이터 유형을 올바르게 체크해주는 `isDataType()` 헬퍼 함수

```javascript
function isDataType(data) {
	return Object.prototype.toString.call(data).slice(8, -1).toLowerCase(); 
}
``` 

---

## 문서객체가 존재하는지 여부를 확인하는 `checkDOMElement()` 헬퍼 함수

```javascript
function checkDOMElement(element) {
	if( isDataType(element) === 'null' ) {
		console.info('현재 문서에 선택하고자 하는 문서 요소객체는 존재하지 않습니다.');
	} else {
		console.log('<' + element.nodeName.toLowerCase() + '>는 문서 요소객체입니다.');
	}
}
``` 

---

## 조건문(Conditional statement)
- if, &&, ||, 3항식, 다중 3항식

### if문
- `if`문은 주어진 조건식을 평가하여 논리적 `참(true)`, `거짓(false)`을 구별하는 구문이다.
- 조건문의 평가 결과가 `참(true)`일 경우, if 문 직후에 존재하는 코드 블럭이 실행된다. `거짓(false)`일 경우, else 구문 직후에 존재하는 코드 블럭이 실행된다. (else if와 else 구문은 option이다.)

```javascript

var rank = 1
//rank 조건이 1이라면 블록문 {} 수행
if ( rank === 1 ) {  
	console.log('rank is One.');
} 
//rank 조건이 2이라면 블록문 {} 수행
else if( rank === 2 ) { 
	console.log('rank is Two.');
} 
//rank 조건이 3이라면 블록문 {} 수행
else if( rank === 3 ) { 
	console.log('rank is Three.');
} 
//rank 조건이 4이라면 블록문 {} 수행
else if( rank === 4 ) { 
	console.log('rank is Four.');
} 
//rank 조건이 1,2,3,4이 아니라면 블록문 {} 수행
else {
	console.log('rank isn\'t One, Two, Three, Four.');
}
```

### 논리 연산자 (Logical Operators)
#### 그리고(AND) && `A && B`
: 연산자 앞의 표현식과 뒤의 표현식이 모두 참일 때 true를 반환하고 그렇지 않을 때는 false를 반환한다.<br>
즉, 둘 중 하나라도 거짓이면 false를 반환한다.

#### 또는(OR)	 || `A || B`
: 연산자 앞의 표현식과 뒤의 표현식 중 하나라도 참이면 참인 값을 반환하고 그렇지 않을 때는 나중값을 반환한다.

```javascript
var drink;  // undefiend

// if(!drink) { console.log(default drink); }
drink = drink || 'default drink';

console.log('drink', drink);

// if(drink) { drink = 'another drink'; }
drink = drink && 'another drink';

console.log('drink', drink);
```

#### 부정 ! `!A` 
: 불리언 값으로 변경하되, 반전시킴

```javascrpt
var n1 = !true;  // false
var n2 = !false; // true
var n3 = !"Cat"; // false
```

### 3항 연산자
- 조건 ? 조건이 참일 경우 실행 : 조건이 거짓일 경우 실행

```javascript
im_hungry ? console.log('난 배고파') : console.log('난 배고프지 않아');
```

### 다중 3항 조건식

```javascript
var charactor = '마법사';

charactor === '사냥꾼' ?
	console.log('선택된 캐릭터는 사냥꾼입니다') :
	charactor === '엘프' ?
		console.log('선택된 캐릭터는 엘프입니다') :
		charactor === '두르이드' ?
			console.log('선택된 캐릭터는 두르이드입니다') :
				charactor === '궁수' ?
					console.log('선택된 캐릭터는 궁입니다') :
					charactor === '검사' ?
						console.log('선택된 캐릭터는 검사입니다') :
						console.log('그럼 넌!! 마법사이구나');

```

### 비교 연산자 (Compare Operators)
- > 보다 크다
- < 보다 작다
- >= 보다 크거나 같다
- <= 보다 작거나 같다
- == 값이 같다 ( 자동으로 형 변환 발생! 안티 패턴)
- === 값이 같다 ( 자동으로 형 변환 발생하지 않는다! 굿 패턴) 엄격!!
- != 같이 다르다 ( 자동으로 형 변환 발생! 안티 패턴)
- !== 값이 다르다 ( 자동으로 형 변환 발생하지 않는다! 굿 패턴) 엄격!!

```javascript
// 느슨한 비교 예
""           ==   "0"           // false
0            ==   ""            // true
0            ==   "0"           // true
false        ==   "false"       // false
false        ==   "0"           // true
false        ==   undefined     // false
false        ==   null          // false
null         ==   undefined     // true
" \t\r\n"    ==   0             // true

// 엄격한 비교 예
""           ===   "0"           // false
0            ===   ""            // false
0            ===   "0"           // false
false        ===   "false"       // false
false        ===   "0"           // false
false        ===   undefined     // false
false        ===   null          // false
null         ===   undefined     // false
" \t\r\n"    ===   0             // false
```

---

## console {} 
console.log() 	: 기록하다.<br>
console.info() 	: 정보를 표시하다.<br>
console.error() : 오류를 출력하다.<br>
console.dir() 	: 분석하다.
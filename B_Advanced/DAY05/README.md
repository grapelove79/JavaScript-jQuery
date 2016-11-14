###### JJ_CAMP_Advanced

[＜ INDEX](../../README.md)

## DAY 05
- `IIFE` 즉시 실행함수 패턴
- `call()`, `apply()` 매소드 빌려쓰기 패턴
- `arguments`
- ECMASCript 6 Edition (ECMAScript 2015)


## IIFE 즉시 실행함수 패턴
- 모듈을 사용하여 코드를 외부에서 조작할 수 없도록 처리 (굿패턴)

```javascript
 (function() {
 	// var creation => 지역변수
 	var creation = 'Creative Front-End Developer';
 	console.log('내부 - creation:', creation);
 }());
 	console.log('외부 - creation:', creation); // creation is not defined
```

## 메소드 빌려쓰기 패턴
- `.call()`, `.apply()`는 기능면에서는 유사하나, 전달 인자의 개수가 2개 이상일 때, `.call()`의 경우 낱개로 전달
- `.apply()`의 경우는 배열 유형으로 전달

```javascript
var a = {
  'name': 'alpha',
  'getName': function() {
    return this.name;
  }
};

var b = {
  'name': 'beta',
  'nickname': 'betago',
  'setName': function(name, nickname) {
    this.name = name;
    this.nickname = nickname;
  }
};

a.getName.call(b); // 'beta'
a.getName.apply(b); // 'beta'

b.setName.call(a, '알파', '알파고'); // a { 'name': '알파', ... }
b.setName.apply(a, ['알파', '알파고']); // a { 'name': '알파', ... }
```

## arguments 객체 - ES3 (ECMAScript 3rd Edition)
- 전달된 인자들의 집합
- arguments는 유사 배열(like Array Object)
- arguments 객체의 원소 개수: arguments.length 
- `length` 속성 값을 알고 있다면 순환 처리(for, do ~ while, while)가 가능
- arguments[0] = ''; 설정도 가능 
- `.length` 속성을 가짐, `.push()`, `.pop()` 배열 메소드는 가지고 있지 않음.

```javascript
function sum() {
    var k = 0, arg, l = arguments.length;
    while( (arg=arguments[--l]) ) {
      k += arg;
    }
    return k;
}

sum(213, -10, 90, 11, 1023); 
sum(1, 2, 3, 4, -109); 
```

## ECMASCript 6 Edition (ECMAScript 2015)
`var` 키워드를 사용할 경우는 블록문(if, for, while)은 `별도의 공간을 가지지 않는다`.<br>
단, ES6(ECMAScript 2015)에서는 `let` 키워드가 등장했는데 <br>
`let` 키워드를 블록문 내부에서 사용할 경우, `별도의 공간이 형성`이 된다.<br>

### [ES3] arguments VS [ES6] rest parameter
```javascript
// [ES3] arguments
function getSomeCoffe3(collection) {
    console.log(collection); // 1
    console.log('arguments: ', arguments); // [1, 23, 4, 5, 6, 7]
}
getSomeCoffe3(1,23,4,5,6,7);

// [ES6] rest parameter
function getSomeCoffe6(...collection) {
    console.log('collection', collection); //  [1, 23, 4, 5, 6, 7]
    console.log('arguments', arguments); // [1, 23, 4, 5, 6, 7]
}
getSomeCoffe6(1,23,4,5,6,7);
```

### [ES6] default parameter & template string & interpolation
- sass문법과 유사. `${radius}` 

```javascript
function borderRadious( radius = '4px' ) {
    return `
        -webkit-border-radius: ${radius};
        -moz-border-radius: ${radius};
        border-radius: ${radius};
    `;
}

borderRadious() // 초기값 4px
borderRadious('6px') // 6px로 들어감.
```

---

## 문서객체
- 생성
- 조작
- 탐색 
- 이벤트핸들링

### 작성한 헬퍼 함수를 사용하여 문서객체 생성/조작/이벤트 핸들링
#### 1. `<article>` 동적 생성 

```javascript
(function(global) {    
    'use strict';
    var body = query('body');
    var container = createEl({
        'element' : 'article',
        'attr' : { 'id' : 'lecture' },
        'text' : 'indipendency article',
        'finish' : function() {
            this.onmouseover = function() {
                this.style.background = '#fb4848';
            };
            appendTo(this, body);
        }
    });
}(this));
```

#### 2. 2초후 `<main>` 동적 생성

```javascript
(function(global) {
    var target_node = query('.container');

    // insert_node 생성
    var insert_node = createEl('main', {
          'role': 'main',
          'class': 'main-content'
        }, 'Main Area');

        // Native
        // target_node.parentNode.insertBefore(insert_node, target_node);

        // Custom
        // window.setTimeout(function() {
        //   insertBefore(insert_node, target_node);
        // }, 2000);

        // before(target_node, insert_node);
        
        window.setTimeout(function() {
          insertAfter(insert_node, query('#target'));
        }, 1000);
}(this));
```
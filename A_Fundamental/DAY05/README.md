###### JJ_CAMP_Fundamental

[＜ INDEX](../../README.md)

## DAY 05
- switch
- while
- do while
- for
- 오늘은 어떤 요일 일까?
- Simple Photo Gallery

---

## switch
switch case break default문

```javascript
var console_style = 'color: #7045cf; font-size: 1.2rem;'
var condition = 'remote';
switch(condition) {
	case 'cup': 
		console.log('case is... %cthis is cup.', console_style);
	break;
	case 'pen': 
		console.log('case is... %cthis is pen.', console_style);
	break;
	case 'double': 
	case 'remote': 
		console.log('case is... %cthis is remote and double.', console_style);
	break;
	default : 
		console.log('case is... %cthis isn\'t cup, pen, remote', console_style);
}
```
> `%c` 이용해서 console에 스타일을 입힐 수 있다. 

### 오늘은 어떤 요일 일까?
```html
<p id="print-today">오늘은 []요일입니다.</p>
```

```javascript
var print_today_el = document.querySelector('#print-today');
var today = '토';

switch( today ) { 
	case '일' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '일');
	break;
	case '월' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '월');
	break;
	case '화' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '화');
	break;
	case '수' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '수');
	break;
	case '목' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '목');
	break;
	case '금' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '금');
	break;
	case '토' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '토');
	break;
	default :
		console.info('"일, 월, 화, 수, 목, 금, 토" 중에 택 1');
}
```

> if문은 매번 조건문을 판단해야 하기에 switch문보다 느리다. <br> 
조건이 많아지면 switch문을 사용하는 것이 좋다.

## while
- while( 조건 ) { 조건이 참일 동안 코드를 반복 실행 }

### 무한반복에 빠지는 코드
```javascript
while(true) {
	console.log('this is true');
}
```

### 1회 반복
```javascript
var condition = true;
while(condition) {
	console.log('this is true');
	condition = !condition; //false
}
```

### 5회 반복
```javascript
var condition = true;
var count = 5;

while ( condition ) {
	// 5, 4, 3, 2, 1 ==> 해당하는 변수가 필요하다.
	console.log('this is true');
	count = count - 1;
	if( count <=0 ) {
		condition = !condition;
	}
}
```

## do while문 
- do { 조건의 참/거짓과 상관 없이 1회는 반드시 실행 } while(조건)

```javascript
var condition = false;
var count = 5;
do {
	// 5, 4, 3, 2, 1 ==> 해당하는 변수가 필요하다.
	console.log('this is true');
	count = count - 1; // --count;와 같다.
	if( count <=0 ) {
		condition = !condition;
	}
} while( condition ); 
```

## for문
- 편리하게 사용할 수 있는 반복문
- [실행 순서] 1. 초기 변수 선언, 2. 선언된 변수를 검증(조건: 참이면 계속, 거짓이면 그만!), 3. 실행문, 4. 변수의 값을 변화

```javascript
for(초기 변수 선언; 선언된 변수를 검증(조건: 참이면 계속, 거짓이면 그만!); 변수의 값을 변화) { 
	실행문
}
```

```javascript
var a = ['a', 'b', '', null, 'z'], b = [];

// 방법1.
for( var i=0; i<a.length; i++ ) {
    if ( i === 1 || i === 3 ) { continue; }
    // console.log(i);
    b.push(a[i]);
}
console.log('b []:', b); 

// 방법2. 위 처리 결과와 아래 처리 결과는 동일하다.
for( var i=0; i<a.length; i+=2 ) {
	console.log(i);
}
```

## 클릭 이벤트 핸들링

```hmtl 
	<div class="box-container">
		<div class="box flex-cm">
			<a role="button" href="#box1">box 1</a>
		</div>
		<div class="box flex-cm">
			<a role="button" href="#box2">box 2</a>
		</div>
		<div class="box flex-cm">
			<a role="button" href="#box3">box 3</a>
		</div>
		<div class="box flex-cm">
			<a role="button" href="#box4">box 4</a>
		</div>
		<div class="box flex-cm">
			<a role="button" href="#box5">box 5</a>
		</div>
		<div class="box flex-cm">
			<a role="button" href="#box6">box 6</a>
		</div>
		<div class="box flex-cm">
			<a role="button" href="#box7">box 7</a>
		</div>
		<div class="box flex-cm">
			<a role="button" href="#box8">box 8</a>
		</div>
	</div>
```

```javascript
// if문
var container = document.querySelector('.box-container');
var box_buttons = container.querySelectorAll('a');

var i = 0, btn_len=box_buttons.length;
for( ; i<btn_len; i++ ) {
	box_buttons[i].onclick = function() {
		console.log(this)
	};
}

// while문
// 계속 순환하면 함수가 계속 실행 - 좋지 않은 코드
var i = 0, btn_len=box_buttons.length;
while( i<btn_len ) {
	box_buttons[i].onclick = function() {
		console.log(this);
	};
	i++;
}

// 함수를 분리 - 좋은 코드
var i = 0, btn_len=box_buttons.length;
while( i<btn_len ) {
	box_buttons[i].onclick = actionButton;
	i++;
}

function actionButton() {
	console.log(this);
};
```

---

## Simple Photo Gallery

```html
  <div class="photo-gallery-container">
    <!-- Control -->
    <div class="photo-gallery-control">
      <a class="control-button" href role="button">
        <img src="images/thumb/01.jpg" title="머리 묶은 여성의 옆모습" alt="머리 묶은 여성의 옆모습" width="200" height="200">
      </a>
      <a class="control-button" href role="button">
        <img src="images/thumb/02.jpg" title="두 손모아 하늘로" width alt="두 손모아 하늘로" width="200" height="200">
      </a>
      <a class="control-button" href role="button">
        <img src="images/thumb/03.jpg" title="로모 카메라를 목에 걸고" alt="로모 카메라를 목에 걸고" width="200" height="200">
      </a>
    </div>
    <!-- View -->
    <div class="photo-gallery-view">
      <img src="images/big/01.jpg" alt="머리 묶은 여성의 옆모습" title="머리 묶은 여성의 옆모습" width="600" height="600">
    </div>
  </div>
```

```javascript
// .photo-gallery-container 요소를 찾아 변수에 할당
// var photo_gallery_container;
var container = document.querySelector('.photo-gallery-container');

// .photo-gallery-container 내부의 a 요소를 수집해서 이벤트 핸들링 (반복 처리)
var container_buttons = container.querySelectorAll('a');
var container_view = container.querySelector('.photo-gallery-view');

for(var i=0, l=container_buttons.length; i<l; i++) {
	var button = container_buttons[i];
	button.index = i+1;
	button.alt = button.querySelector('img').alt;
	button.onclick = changePhotoGalleryView;
}

function changePhotoGalleryView() {
	// view 컨테이너 내부의 이미지 교체
	// console.log(this.index);
	var view_img = container_view.querySelector('img');
	// src="http://placehold.it/600x620?text=01" alt="Big 01"
	// view_img.src = 'http://placehold.it/600x620?text=0'+this.index;
	view_img.src = 'images/big/0'+ this.index +'.jpg';
	view_img.alt = this.alt;
	view_img.title = view_img.alt;
	// 브라우저의 기본 동작 차단
	return false;
}
```
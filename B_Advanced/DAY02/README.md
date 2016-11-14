###### JJ_CAMP_Advanced

[＜ INDEX](../../README.md)

## DAY 02
- 브라우저 객체 모델(BOM : Browser Object Model)
	- window.screen
		- window.screen.height
		- window.screen.availHeight
		- window.screen.orientation
	- window.navigator
		- window.navigator.geolocation
		- window.navigator.platform
		- window.navigator.userAgent
	- window.location
		- window.location.hash
	- window.devicePixelRatio
- Closure
- IIFE 패턴(즉시 실행되는 함수)

## 브라우저 객체 모델(BOM)
### window.screen 객체
- 사용자의 스크린 화면의 대한 정보를 제공
- 화면의 가로/세로 폭 길이(px)
- 화면의 가용(Available) 가능한 실제 폭 길이(px)

> 전 세계 사용자의 스크린 가로 폭 평균치: 1366px (국내 평균 1920px)

#### 현재 사용자의 화면(Screen)에서 실제 사용가능하지 않은 공간의 폭은 얼마인가?

```javascript
var full_height    = window.screen.height;
var avail_height   = window.screen.availHeight;
var unavail_height = full_height - avail_height;

console.log('full_height - avail_height', unavail_height);
```

### window.navigator 객체
- 웹 브라우저의 정보 제공
	- 어떤 운영체제를 사용자가 쓰고 있나?
	- 플러그인은 무엇 무엇을 사용하나?
	- 웹 브라우저의 코드네임, 개발 엔진은 무엇인가?
- HTML5에 새로 추가
	- window.navigator.geolocation
	- window.localStorage

### 지도 기반 서비스를 황용하기 위한 geolocation 객체

```javasscript
var geo = navigator.geolocation;
geo.getCurrentPosition(geoSuccess, geoFail);

function geoSuccess(position) {
	console.log('지도 위도/경도 좌표 가져오기 성공!');
	console.dir('position:', position);
	console.log('position.coords:', position.coords);
	console.log('position.coords.accuracy:', position.coords.accuracy);
	console.log('position.coords.latitude:', position.coords.latitude);
	console.log('position.coords.longitude:', position.coords.longitude);
}

function geoFail(error) {
	console.log('geoFail 함수: 지도 위도/경도 좌표 가져오기 실패!');
}
```

### window.location 객체
- 현재 윈도우에 로드된 웹문서에 대한 정보를 제공

#### 1초마다 (URL)hash 부분 바뀜
```javascript
var _location = window.location;
var hashes = 'home about works contact'.split(' ');

function assignLocationHash(hash) {
	_location.hash = '!' + hash;
}

for( var h_index = hashes.length, item; (item=hashes[--h_index]); ) {
	window.setTimeout( (function(item) {
		return function() {
			// console.log(item);
			assignLocationHash(item);
		};
	})(item), h_index * 1000 ); 
}
```

### window.devicePixelRatio 객체
#### 기기의 픽셀 농도(Device Pixel Ratio) 체크

```javascript
var html = document.documentElement;

function assignHtmlClass(identifier) {
	if( !html ) { html = document.documentElement; }
	// 문자 유형만 전달 가능
	if( typeof identifier !== 'string' ) { throw new Error('문자 유형으로 전달인자를 설정해주세요.'); }
	var existed_class = html.className !== '';
	html.className += (existed_class ? ' ' : '') + identifier;
}

function detectDevicePixelRatio() {	
	var dpr 		= window.devicePixelRatio || 1;
	var is_retina   = dpr === 2;
	var is_retinaHD = dpr === 3;
	assignHtmlClass( '@' + 'x' + dpr );
	return {
		'retain': is_retina,
		'retinaHD': is_retinaHD
	}
}

detectDevicePixelRatio();
```

## Function
- 함수선언식(Function declaration)
- 함수표현식(Function expression)

### 함수선언식(Function declaration)
- 함수선언식을 사용한 함수 정의는 function 키워드와 이하의 내용으로 구성.

```javascrpt 
function square(number) {
  return number * number;
}
```

### 함수표현식(Function expression)
- 함수의 일급객체 특성을 이용하여 함수 리터럴 방식으로 함수를 정의하고 변수에 할당
- Yahoo 엔지니어 더글라스 크록포드 권장!

```javascrpt 
var square = function(number) {
  return number * number;
};
```

## IIFE 패턴 (즉시 실행되는 함수)
- 비용을 절감하는 형태로 클로저 함수를 만드는 방법
- 모던 자바스크립트 패턴 중 이 패턴이 가장 많이 사용되는 패턴
- 일반적인 함수의 호출과정과 달리 이름이 없는 함수를 즉시 호출하는 것을 말한다.

``` javascript
+function(){}();

~function(){}();

!function(){}();

(function(){
   // 외부와 단절된 독립된 공간이 형성
   // 캡슐화
}());

(function(){})();
```

## Closure
- 함수가 실행되어 내부에 존재하는 함수를 외부로 반환할 경우 클로저가 생성되며, 반환된 함수는 클로저 영역을 참조할 수 있다. 
이 때 반환된 함수를 클로저 함수라 명한다.

```html
<ul id="demo-nav">
	<li><a href="">home</a></li>
	<li><a href="">about</a></li>
	<li><a href="">portfolio</a></li>
	<li><a href="">contact</a></li>
</ul>
```

### A. Closuer
- [단점] 'linkClick' 변수를 하나 더 생성해야 한다. 
- IIFE 패턴을 사용하여 'B'코드로 리팩토링.

```javascript
var i=0, l=demo_nav_links.length; 
var linkClick = function(i) {
		return function() {
			console.log(i); // for문이 돌때 'i'값을 참조한다
			return false;  // 링크를 클릭했을 때 브라우저의 기본 동작을 차단
		}
};

for(; i<l; i++) {
	var link = demo_nav_links[i];
	// console.log('link'+i+':', link);
	link.onclick = linkClick(i); // 함수가 바로 실행 되어 값이 0,1,2,3 출력이 된다.
}
```

### B. IIFE + Closuer 
- IIFE (즉시 실행 함수) 패턴을 사용하여 Closuer 함수 구현/활용

```javascript
var i=0, l=demo_nav_links.length; 
for(; i<l; i++) {
	var link = demo_nav_links[i];
	link.onclick = ( function(idx) {
		return function(i){
			console.log(idx);
			return false;
		};
	}(i));
}
```
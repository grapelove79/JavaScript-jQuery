###### JJ_CAMP_Advanced

[＜ INDEX](../../README.md)

## DAY 03

## DOM API
- DOM (Document Object Model): 현재 DOM Level 4 사용.
- API: Application Programming Interface

### DOM Level 0 (Legacy DOM)
```javascript
console.log('문서에 존재하는 객체: 하이퍼링크', document.links);
console.log('문서에 존재하는 객체: 네임드앵커', document.anchors);
console.log('문서에 존재하는 객체: 이미지', document.images);
console.log('문서에 존재하는 객체: 폼', document.forms[0]);
console.log('문서에 존재하는 객체: 폼 컨트롤', document.forms[0].elements[1]);
```

### 과도기 DOM (1997년)
- 브라우저 전쟁시절로 서로간의 호환하지 못하게 기술을 사용하며 비표준이 난무 

```javascript
// 문서의 모든 객체에 접근, CSS 속성을 조작할 수 있는 API를 각 회사가 제공.
// NN(Netscape Navigator) : document.layers (현재 사라짐.)
// IE(Internet Explorer) : document.all  (아직도 살아 있음.) 
```

### DOM Level 1 (1998년)
- 화합: W3C 주관 양대 회사가(넷스케이프, 마이크로소프트)가 손은 잡고 표준화 작업 착수
- IE 6,7 안됨. IE8 이상만 호환

```javascript
document.getElementById('id-name');
document.getElementsByName();
document.getElementsByTagName('tag');
```

### DOM Level 2 (2000년)
- 불협화음 : 각기 다른 방식으로 발전된 진보 이벤트 모델

```javascript
W3C: .addEventListener() 	 표준, IE9+
W3C: .removeEventListener()  표준, IE9+
MS:  .attachEvent()			 비표준
MS:  .detachEvent()			 비표준
```

### 진보 이벤트 모델 
- onload 이벤트보다 DOMContentLoaded 이벤트가 더 빠르다.
- DOMContentLoaded 이벤트 (이미지 로드와 상관없이 이벤트 발생)

```javascript
window.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded');
}, false);
```

## 왜 개발자는 class 속성을 사용하지 말라고 말했나?
- [배경] IE6,7 (id 사용을 요구) 
- [CSS 제작자 입장] 모듈 디자인 : BEM / OOCSS / SMACSS
- [Javscript 개발자 입장] IE6,7 시대에는 탐색이 느리고 어려웠다. 
아래와 같은 방법으로 찾았다.

### [찾는 방법] class를 바로 찾을 수가 없었다.
- 1. 문서에서 모든 요소를 수집
- 2. 수집된 모든 요소를 순환하여
- 3. class 속성 값에 존재하고 값이 일치하는지를 확인 한 후 
- 4. 해당 요소를 반환해아 한다.

```javascript
// 1. 문서에서 모든 요소를 수집
var filtered_el_list = [];
var all_els = document.getElementsByTagName('*');
// console.log(all_els);

// 2. 수집된 모든 요소를 순환하여
for (var i = 0, l=all_els.length; i <l; i=i+1) {
	var el = all_els[i];
	// 3. class 속성 값에 존재하고 값이 일치하는지를 확인 한 후 
	// 4. 해당 요소를 반환해아 한다.
	// class가 'col-6'만 찾게 된다. 다른 class가 추가가 되면 찾을 수가 없다.
	if ( el.className === 'col-6' ) {
		filtered_el_list.push(el);
	}
}
console.log('filtered_el_list:', filtered_el_list);
```

### 요소노드 골라내기
- 노드리스트에서 요소노드만 골라내는 것 또한 상당한 수고가 든다.
- 이 점에 DOM 스크립트 사용 시, 탬색(Traversal) 이 사용되지 않았던 이유.

#### nodeType
- ELEMENT_NODE   === 1 (요소)
- ATTRIBUTE_NODE === 2 (속성)
- TEXT_NODE      === 3 (텍스트)
- COMMENT_NODE   === 8 (주석)

```javascript
var node_collection = document.body.childNodes;
var node_els = [];
for( var node, i = node_collection.length; (node = node_collection[--i]); ) {
	// if(node.nodeType === document.ELEMENT_NODE) {
	if(node.nodeType === 1) {
		node_els.push(node);
	}
}
console.log('node_els', node_els);
var el_node_collection = document.body.children;
console.log('el_node_collection', el_node_collection);
```

## queryAll(), query() 헬퍼함수
: 문서객체를 손쉽게 선택할 수 있도록 도와주는 함수

```javascript
function queryAll(selector, context) {
	// 첫번째 전달인자(Argument)의 유효성 검사
	if( typeof selector !== 'string' ) {
		consol.info('전달인자는 문자열로 전달해야 합니다.');
		return null;
	}

	// context가 없다면 
	// 사용자 정의 값이 없을 경우, 값을 초기화
	// context를 전달하지 않으면 undefined. !undefined=> true
	
	// [방식1]
	// if ( !context ) { document = document; }

	// [방식2]
	context = context || document;

	///////////////////////////////////////////////////////
	// 두번째 전달인자(Argument)의 유효성 검사
	if ( typeof context === 'string' ) {
		context = query(context);
	}

	if( context.nodeType !== 1 && context.nodeType !== 9 ) { // document.nodeType ==> 9
		// [방식1] error 메시지만 출력이 되어 return 해서 멈추는 방법.
		// consol.error('두번째 전달인자는 요소노드어야 합니다.');
		// return;

		// [방식2] 메시지도 전달하고 함수 멈추는 방법
		throw new Error('두번째 전달인자는 요소노드어야 합니다.')
	}
	return context.querySelectorAll(selector); // Nodelist []
}
```

```javascript
function query(selector, context) {
	return queryAll(selector, context)[0];
}
```
'use strict';

/**
 * --------------------------------
 * DOM API
 * -------------------------------- 
 * BOM
 * window.location 객체
 * window.screen 객체
 * window.navigator 객체
 * window.document 객체
 * --------------------------------------------------
 * DOM (Document Object Model) => 현재 DOM Level 4 사용.
 * API: Application Programming Interface
 * --------------------------------------------------
 */


/**
 * --------------------------------
 * DOM Level 0 (Legacy DOM)
 * 문서객체에 대한 제한적 접근
 * --------------------------------
 */

console.log('문서에 존재하는 객체: 하이퍼링크', document.links);
console.log('문서에 존재하는 객체: 네임드앵커', document.anchors);
console.log('문서에 존재하는 객체: 이미지', document.images);
console.log('문서에 존재하는 객체: 폼', document.forms[0]);
console.log('문서에 존재하는 객체: 폼 컨트롤', document.forms[0].elements[1]);

/**
 * -----------------------------------------------------------------------------
 * 과도기 DOM : 브라우저 전쟁시절로 서로간의 호환하지 못하게 기술을 사용하며 비표준이 난무 (1997년)
 * -----------------------------------------------------------------------------
 */

// 문서의 모든 객체에 접근, CSS 속성을 조작할 수 있는 API를 각 회사가 제공.
// NN(Netscape Navigator) : document.layers (현재 사라짐.)
// IE(Internet Explorer) : document.all  (아직도 살아 있음.) 

/**
 * --------------------------------------------------------------------
 * DOM Level 1 (1998년)
 * 화합: W3C 주관 양대 회사가(넷스케이프, 마이크로소프트)가 손은 잡고 표준화 작업 착수
 * IE 6,7 안됨. IE8 이상만 호환
 * --------------------------------------------------------------------
 */

// document.getElementById('id-name');
// document.getElementsByName();
// document.getElementsByTagName('tag');

/**
 * -----------------------------------------
 * DOM Level 2 (2000년)
 * 불협화음 : 각기 다른 방식으로 발전된 진보 이벤트 모델
 * -----------------------------------------
 */

// W3C: .addEventListener() 	표준, IE9+
// W3C: .removeEventListener()  표준, IE9+
// MS: .attachEvent()			비표준
// MS: .detachEvent()			비표준

/**
 * --------------------------------
 * DOM: Node Interface
 * --------------------------------
 */

/**
 * --------------------------------
 * 코드의 실행 시점을 늦춘다.
 * 창의 로드 이벤트 발생시, 함수 실행
 * --------------------------------
 */

function initial() {
	// DOM Legacy 과거의 방식
	var html = document.documentElement,
		head = document.head,
		body = document.body;

	// DOM Level1 방식
	// NodeList
	html = document.getElementsByTagName('html'); // [ <html> ]
	head = document.getElementsByTagName('head'); // [ <head> ]
	body = document.getElementsByTagName('body'); // [ <body> ]

	console.log(html); // <html> Document Object
	console.log(head); // <head> 
	console.log(body); // <body> 

	body.className = 'dom-legacy-method';

	html = document.getElementsByTagName('html').item(0); // [ <html> ] -> <html>
	head = document.getElementsByTagName('head').item(0); // [ <head> ] -> <head>
	body = document.getElementsByTagName('body')[0];      // [ <body> ] -> <body>

	console.log(html); // [ <html> ] NodeList, 유사 배열(Object like Array)
	console.log(head); // [ <head> ] 
	console.log(body); // [ <body> ] 

	// * NodeList의 경우 DOM API를 바로 사용할 수 있다.
	//   NodeList에서 Document Object를 빼내야 적용 가능하다.
	// setAttribute 권장. | className => form 요소 사용시 사용.
	body.setAttribute('class', 'dom-modern-method');
}

// 코드의 실행 시점을 늦춘다.
window.onload = initial; // / 창의 로드 이벤트 발생 시, 함수 실행

/**
 * ----------------------------------------------------
 * 진보 이벤트 모델 
 * onload 이벤트보다 DOMContentLoaded 이벤트가 더 빠르다.
 * DOMContentLoaded 이벤트 (이미지 로드와 상관없이 이벤트 발생)
 * ㄴ> 캡쳐링, 버블링... 
 * ----------------------------------------------------
 */

window.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded');
}, false);

/**
 * --------------------------------
 * 문서 노드(Node)에 접근
 * 요소 노드
 * 텍스트 노드(빈 공백, 들여쓰기, 탭...)
 * --------------------------------
 */

var target_node = document.getElementsByTagName('h3')[0];
var target_node = document.getElementsByTagName('h3')[1];
console.log('target_node의 정체:', Object.prototype.toString.call(target_node));
var target_node_first_child = target_node.firstChild;
var target_node_last_child = target_node.lastChild;

console.log(target_node);
console.log('target_node의 정체', Object.prototype.toString.call(target_node));
console.log('h3의 first_child', target_node_first_child);
console.log('h3의 last_child', target_node_last_child);

/**
 * ------------------------------------------------------------------------
 * 왜 개발자는 class 속성을 사용하지 말라고 말했나?
 * [배경] IE6,7 (id 사용을 요구) 
 * [CSS 제작자 입장] 모듈 디자인 : BEM / OOCSS / SMACSS
 * [Javscript 개발자 입장] (IE6,7 시대에는) 탐색이 느리고 어려웠다. 
 * 아래와 같은 방법으로 찾았다.
 * ------------------------------------------------------------------------
 */

// [찾는 방법] class를 바로 찾을 수가 없었다.
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

/**
 * --------------------------------
 * 요소노드 골라내기
 * 노드리스트에서 요소노드만 골라내는 것 또한 상당한 수고가 든다.
 * 이 점에 DOM 스크립트 사용 시, 탬색(Traversal) 이 사용되지 않았던 이유.
 * --------------------------------
 * nodeType
 * ELEMENT_NODE   === 1 (요소)
 * ATTRIBUTE_NODE === 2 (속성)
 * TEXT_NODE      === 3 (텍스트)
 * COMMENT_NODE   === 8 (주석)
 * --------------------------------
 */

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

/**
 * --------------------------------
 * lastChild 찾기
 * 부모의 length - 1 = lastChild
 * previousElementSibling, nextElementSibling => 하위브라우저 안됨
 * head, body 안에서는 공백만 노드로 취급
 * --------------------------------
 */

// document.body.lastChild
// document.body.lastChild.previousElementSibling
// document.body.childNodes[document.body.childNodes - 1] // 마지막 자식 노드에 접근 
// document.body.childNodes[0]

// document.body.children
// document.body.children[0]
// document.body.children[document.body.children.length - 1]
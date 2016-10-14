'use strict';

/**
 * ------------------------------------------------------------------------
 * 왜 개발자는 class 속성을 사용하지 말라고 말했나?
 * [배경] IE6,7 (id 사용을 요구) 
 * [CSS 제작자 입장] 모듈 디자인 : BEM / OOCSS / SMACSS
 * ㄴ> SMACSS : ID를 사용하지 말고 class를 사용하여 재사용성과 유지보수 측면에서 사용.
 * [Javscript 개발자 입장] (IE6,7 시대에는) 탐색이 느리고 어려웠다. 
 아래와 같은 방법으로 찾았다.
 * ------------------------------------------------------------------------
 */

 /**
  * -----------------------------------------------
  * [찾는 방법] class를 바로 찾을 수가 없었다.
  * 1. 문서에서 모든 요소를 수집
  * 2. 수집된 모든 요소를 순환하여
  * 3. class 속성 값에 존재하고 값이 일치하는지를 확인 한 후 
  * 4. 해당 요소를 반환해아 한다.
  * -----------------------------------------------
  */

// 1. 문서에서 모든 요소를 수집
var filtered_el_list = [];
var all_els = document.getElementsByTagName('*');
// console.log(all_els);

// 2. 수집된 모든 요소를 순환
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
 * --------------------------------------------------------------
 * 요소노드 골라내기
 * 노드리스트에서 요소노드만 골라내는 것 또한 상당한 수고가 든다.
 * 이 점에 DOM 스크립트 사용 시, 탬색(Traversal) 이 사용되지 않았던 이유.
 * --------------------------------------------------------------
 * nodeType
 * ELEMENT_NODE 	=== 1 (요소)
 * ATTRIBUTE_NODE 	=== 2 (속성)
 * TEXT_NODE 		=== 3 (텍스트)
 * COMMENT_NODE 	=== 8 (주석)
 * --------------------------------------------------------------
 */

var node_collection = document.body.childNodes;
var node_els = [];
for( var node, i = node_collection.length; ( node = node_collection[--i]); ) {
	// if(node.nodeType === document.ELEMENT_NODE) {
	if(node.nodeType === 1) {
		node_els.push(node);
	}
}
console.log('node_els', node_els);
var el_node_collection = document.body.children;
console.log('el_node_collection', el_node_collection);
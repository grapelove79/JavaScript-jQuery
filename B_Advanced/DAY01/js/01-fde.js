'use strict';
/**
 * --------------------------------
 * ex1. 스크립트 호출이 body 끝자락에 있으면 
 * --------------------------------
 */

// 문서에서 <p> 요소를 
// 노드 리스트에서 첫번째 인자 뽑아온다 --> item(0)
// var target_p = document.getElementsByTagName('p').item(0);
// console.log(target_p); 

/**
 * --------------------------------
 * ex2. 이벤트로 호출 
 * --------------------------------
 */

// function initialization() {
// 	var target_p = document.getElementsByTagName('p').item(0);
// 	// console.log(target_p); 

// 	// [단계1] <h1> 요소를 생성하고,
// 	var headline = document.createElement('h1');
// 	// 텍스트 내용으로 'javascript log'라고하는 텍스트를 동적으로 생성 
// 	var headline_content = document.createTextNode('Javascript Log');
// 	// console.log('headline', headline);
// 	// console.log('headline', headline_content);

// 	// [단계2] 노드를 합치기 (둘 중 하나는 부모노드, 자식 노드가 되어야 함)
// 	// DOM API : appendChild()
// 	// 부모노드.appendChild(자식노드)
// 	headline.appendChild(headline_content);
// 	// 합쳐진 노드 결과 검증
// 	// console.log('headline', headline);

// 	// [단계3] 'target_p'앞에 추가 
// 	// DOM API : insertBefore()
// 	// ~ 앞에 삽입
// 	// 목표노드.부모노드.insertBefore(삽입노드, 목표노드);
// 	target_p.parentNode.insertBefore(headline, target_p);
// }
// window.onload = initialization;


/**
 * --------------------------------
 * ex3. 비순차목록 ul > li x 3 생성
 * body 끝자리에 동적으로 추가
 * --------------------------------
 */

// // function initialization() {
// // 	var body = document.getElementsByTagName('body').item(0); // xml dom 방식
// //  var body = document.body; // HTML DOM 방식
// // 	var target_p = document.getElementsByTagName('p').item(0);
// // 	// console.log(target_p); 

// // 	// [단계1] <h1> 요소를 생성하고,
// // 	var headline = document.createElement('h1');
// // 	// 텍스트 내용으로 'javascript log'라고하는 텍스트를 동적으로 생성 
// // 	var headline_content = document.createTextNode('Javascript Log');
// // 	// console.log('headline', headline);
// // 	// console.log('headline', headline_content);

// // 	// [단계2] 노드를 합치기 (둘 중 하나는 부모노드, 자식 노드가 되어야 함)
// // 	// DOM API : appendChild()
// // 	// 부모노드.appendChild(자식노드)
// // 	headline.appendChild(headline_content);
// // 	// 합쳐진 노드 결과 검증
// // 	// console.log('headline', headline);

// // 	// [단계3] 'target_p'앞에 추가 
// // 	// DOM API : insertBefore()
// // 	// ~ 앞에 삽입
// // 	// 목표노드.부모노드.insertBefore(삽입노드, 목표노드);
// // 	target_p.parentNode.insertBefore(headline, target_p);

//// 	 * --------------------------------
//// 	 * ul 생성
//// 	 * li 생성 x 3
//// 	 * 콘텐츠 생성 x3
//// 	 * li + 콘텐츠 집합 x3
//// 	 * ul + li x3 접합
//// 	 * ul > target_p 뒤에 삽입
//// 	 * --------------------------------
 
// // 	var categories = 'IOT VAR IT'.split(' ');
// // 	// console.log(categories);
// // 	var ul = document.createElement('ul');

// // 	//////////////////////////////////////
// // 	// 방법1. for - Legacy 방법
// // 	// var a = 0, l = categories.length;
// // 	// for( ; a <l; a++) {
// // 	// 	console.log(categories[a], a);
// // 	// }

// // 	//////////////////////////////////////
// // 	// 방법2. for of - ES2015 
// // 	// index 출력하지 않는다. 내용만 출력 
// // 	// for (category of categories) {
// // 	//   console.log(category);
// // 	// }

// // 	//////////////////////////////////////
// // 	// 방법3. forEach - Modern 방법
// // 	categories.forEach(function(item, index) {
// // 		// console.log(item, index);
// // 		// <li>item</li>
// // 		var li = document.createElement('li');
// // 		var li_content = document.createTextNode(item);
// // 		li.appendChild(li_content);
// // 		// <ul> 요소 내부에 삽입
// // 		ul.appendChild(li);
// // 	});
// // 	body.appendChild(ul);
// // }
// // window.onload = initialization;

/**
 * --------------------------------
 * ex4. 
 * 2초후 <h1> Javascript Log </h1> 생성
 * --------------------------------
 */

// function initialization() {
// 	var body = document.getElementsByTagName('body').item(0); // xml dom 방식
//  	var body = document.body; // HTML DOM 방식
// 	var target_p = document.getElementsByTagName('p').item(0);
// 	// console.log(target_p); 

// 	window.setTimeout(function() {
// 		createHeadline('h1', 'javascript log', target_p);
// 	}, 2000);

// 	/**
// 	 * --------------------------------
// 	 * ul 생성
// 	 * li 생성 x 3
// 	 * 콘텐츠 생성 x3
// 	 * li + 콘텐츠 집합 x3
// 	 * ul + li x3 접합
// 	 * ul > target_p 뒤에 삽입
// 	 * --------------------------------
// 	 */

// 	var categories = 'IOT VAR IT'.split(' ');
// 	// console.log(categories);
// 	var ul = document.createElement('ul');

// 	//////////////////////////////////////
// 	// 방법1. for - Legacy 방법
// 	// var a = 0, l = categories.length;
// 	// for( ; a <l; a++) {
// 	// 	console.log(categories[a], a);
// 	// }

// 	//////////////////////////////////////
// 	// 방법2. for of - ES2015 
// 	// index 출력하지 않는다. 내용만 출력 
// 	// for (category of categories) {
// 	//   console.log(category);
// 	// }

// 	//////////////////////////////////////
// 	// 방법3. forEach - Modern 방법
// 	categories.forEach(function(item, index) {
// 		// console.log(item, index);
// 		// <li>item</li>
// 		var li = document.createElement('li');
// 		var li_content = document.createTextNode(item);
// 		li.appendChild(li_content);
// 		// <ul> 요소 내부에 삽입
// 		ul.appendChild(li);
// 	});
// 	body.appendChild(ul);
// }

// function createHeadline(h_lv, content, target) {
// 	// 검증
// 	if( typeof h_lv !== 'string' ) { throw new Error ('첫번째 인자는 문자열이어여 한다.'); }
// 	if( typeof content !== 'string' ) { throw new Error ('두번째 인자는 문자열이여 한다.'); }
// 	if( typeof target && target.nodeType !==1 ) { throw new Error ('세번째 인자는 요소노드여야 한다.'); }

// 	// [단계1] <h1> 요소를 생성하고,
// 	var headline = document.createElement('h1');
// 	// 텍스트 내용으로 'javascript log'라고하는 텍스트를 동적으로 생성 
// 	var headline_content = document.createTextNode('Javascript Log');
// 	// console.log('headline', headline);
// 	// console.log('headline', headline_content);

// 	// [단계2] 노드를 합치기 (둘 중 하나는 부모노드, 자식 노드가 되어야 함)
// 	// DOM API : appendChild()
// 	// 부모노드.appendChild(자식노드)
// 	headline.appendChild(headline_content);
// 	// 합쳐진 노드 결과 검증
// 	// console.log('headline', headline);어

// 	if ( target ) {
// 		// [단계3] 'target_p'앞에 추가 
// 		// DOM API : insertBefore()
// 		// ~ 앞에 삽입
// 		// 목표노드.부모노드.insertBefore(삽입노드, 목표노드);
// 		target.parentNode.insertBefore(headline, target);
// 	}
// 	return headline;
//  }

// window.onload = initialization;


/**
 * --------------------------------
 * ex5. 
 * 4초뒤에 비순차목록 생성
 * --------------------------------
 */
function initialization() {
  // var body = document.getElementsByTagName('body').item(0); // XML DOM 방식
  var body = document.body; // HTML DOM 방식
  // 문서에서 <p> 요소를 찾아 변수에 참조
  // 문서에서 첫번째 <p> 요소를 찾아온다.
  var target_p = document.getElementsByTagName('p').item(0);
  // console.log(target_p);

  // 지연 시켜 호출 할 함수 설정
  window.setTimeout(function() {
    createHeadline('h1', 'JavaScript Log', target_p);
    createHeadline('h2', 'JavaScript Star', target_p);
  }, 2000);

  var list = null;

  window.setTimeout(function() {
    list = createList('ul', 'IOT VR IT');
    var collection = createList('ol', 'HTML CSS JavaScript');
    body.appendChild(list);
    var t = body.firstElementChild;
    t.parentNode.insertBefore(collection, t);
  }, 4000);
}

// 2초후 <h1> Javascript Log </h1> 
function createHeadline(h_lv, content, target) {
  // 유효성 검사
  if( typeof h_lv !== 'string' ) { throw new Error('첫번째 인자는 문자열이어야 한다.'); }
  if( typeof content !== 'string' ) { throw new Error('두번째 인자도 문자열이어야 한다.'); }
  if( target && target.nodeType !== 1 ) { throw new Error('세번째 인자는 요소노드여야 한다.'); }
  // 단계 1.
  // <h1> 요소를 생성하고,
  var headline = document.createElement(h_lv);
  // 텍스트 내용으로 `JavaScript Log` 라고하는 텍스트를 동적으로 생성한다.
  var headline_content = document.createTextNode(content);
  // 생성된 각 노드(Node) 검증
  // console.log('headline:', headline);
  // console.log('headline_content:', headline_content);
  // 각 노드를 합치기(둘 중 하나는 부모 노드, 자식 노드가 되어야 함)

  // 단계 2.
  // DOM API: ~ 자식으로 삽입
  // 부모노드.appendChild(자식노드)
  headline.appendChild(headline_content);
  // 합쳐진 노드 결과 검증
  // console.log('headline:', headline);

  // 단계 3.
  // DOM API: ~ 앞에 삽입
  // 목표노드.부모노드.insertBefore(삽입노드, 목표노드);
  // if문 사용하지 않고 target.parentNode.insertBefore(headline, target); 사용할 경우
  // target는 undefined. if문을 써줘야 한다.
  if ( target ) {
    target.parentNode.insertBefore(headline, target);
  }
  return headline;
}

// 4초후 비순차목록 생성
function createList(list_type, contents, target) {
  var categories;
  // 유효성 검사
  if ( typeof list_type !== 'string' ) { throw new Error('첫번째 인자는 문자열이어야 합니다.'); }
  /**
   * --------------------------------
   * ul 생성
   * li 생성 x3
   * 콘텐츠 생성 x3
   * li + 콘텐츠 접합 x3
   * ul + li x3 접합
   * ul > target_p 뒤에 삽입
   */

  // <ul>
  //   <li>IOT</li>
  //   <li>VR</li>
  //   <li>IT</li>
  // </ul>
  if ( contents && typeof contents === 'string' ) {
    categories = contents.split(' ');
  }
  if ( contents && contents instanceof Array ) {
    categories = contents;
  }
  if ( target && target.nodeType !== 1 ) { throw new Error('세번째 인자는 요소노드여야 합니다.'); }

  // console.log(categories);

  // Legacy 방법
  // var a = 0, l = categories.length;
  // for( ; a<l; a=a+1 ) {
  //   console.log( categories[a], a );
  // }

  // 크로스 브라우징 이슈: ES5 Shim JS Library
  // Modern 방법

  var list = document.createElement(list_type);

  categories.forEach(function(item, index) {
    // console.log(item, index);
    // <li>item</li>
    var li = document.createElement('li');
    var li_content = document.createTextNode(item);
    li.appendChild(li_content);
    // <list> 요소 내부에 삽입
    list.appendChild(li);
  });

   // console.log(list);
  if ( target ) {
    target.appendChild(list);
  }
  return list;

  // ES2015
  // for (category of categories) {
  //   console.log(category);
  // }
}
// window.alert('excute javascript code');
// initialization(); // 함수는 언제 실행되어야 하는가? -> 문서가 로드된 이후

window.onload = initialization;
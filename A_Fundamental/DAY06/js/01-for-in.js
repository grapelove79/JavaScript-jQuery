'use strict';

/**
 * --------------------------------
 * for vs for in
 * --------------------------------
 */

 /**
  * --------------------------------------------
  * for (선언;확인;변경) {} => 값의 집합(배열)
  * [값의 집합] -> 배열, 유사 배열 순환할 때
  * --------------------------------------------
  */

var data_collection = [1, 'hammer', false, function() {}, [], {}];

console.log( 'data_collection.length:', data_collection.length );

for ( var i=0; i<data_collection.length; i=i+1 ) {
	console.log( 'data_collection['+ i +']:', data_collection[i] ); // 각 원소를 출력
}	

/**
 * --------------------------------------------------------------------
 * for (속성 in 객체)  => 속성의 집합(객체)
 * [값의 집합]에서는 사용하지 않는 것이 좋다.
 * 속성의 집합(객체)에서 사용하는 것이 좋다. 
 * 왜? 객체는 for문을 사용하여 순환할 수 없는가? 객체는 배열과 달리 length 속성이 없다.
 * in 구문을 통해서 속성값이 있는지 체크 가능하다.
 * --------------------------------------------------------------------
 */

// 객체 정의 (속성: 값 추가)
var zico = {
	'name' : '지코',
	'amount' : '300ml',
	'source' : 'cocoa oil'
}

// 객체의 속성 포함 유무를 확인할 때 in 키워드 사용
'name' in zico; // true

// 객체의 추가 
zico.length;

// 객체의 속성을 지울 때 delete 키워드 사용
delete zico.length;

// ex1.
// for ( 'name' in zico ) {
// 	console.log('name');
// }

// ex2.
// 속성값을 알수없어 변수(prop)로 처리.
// 객체의 속성을 순환하여 처리할 때 사용
for ( var prop in zico ) {
	console.log(prop); //'name', 'amount', 'source'
	// console.log(zico.source); // source: 속성이름이고 변수로 뺄 수 없다.
	// console.log(zico['source']); // source: 문자열이다. 
	var prop = 'source';
	console.log(zico[prop]); // 'source' 변수 prop로 처리해서 사용.
}

// ex2. 배열인 경우 'for in'을 사용하면 느리다.
var data_collections = [1, 'hammer', false, function() {}, [], {}];
for (var a in data_collections) {
	console.log(a, data_collections[a]);
}
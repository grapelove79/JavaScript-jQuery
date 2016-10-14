'use strict';

/**
 * --------------------------------
 * nodeName
 * --------------------------------
 */

document.onclick = function(event) {
	console.dir(event); // console.dir(객체명만 넣어야 한다.);
	// console.log('localName:', event.target.localName); // localName: 소문자로 문자형만 출력 <- 없어진 객체임.
	// console.log('nodeName:', event.target.nodeName); // nodeName: 대문자로 문자형만 출력
	console.log('nodeName:', event.target.nodeName.toLowerCase()); //toLowerCase() 소문자로 만듦.
}

/**
 * --------------------------------
 * ex.
 * --------------------------------
 */
 
 // var el = document.getElementById('element');
 // console.log(el.id);
 // console.log(el.title);
 // console.log(el.className);
 // console.log(el['data-cutom-attr']); // 새로운 속성은 '[]' 곽괄호 표기법으로도 가져올 수 없다. (예전 속성만 가져올 수 있다)
 // console.log(el.getAttribute('data-cutom-attr')); // getAttribute로 가져올 수 있다.


/**
 * --------------------------------
 * getElementsByClassName 
 * IE9+
 * --------------------------------
 */

// var col_six = document.getElementsByClassName('col-6');
// // console.log(col_six);

// for ( var i = col_six.length - 1; col_six[i--];) {
// 	console.log(col_six[i]);
// }

/**
 * --------------------------------
 * querySelector, querySelectorAll (IE8+)
 * querySelector: 단수 반환 (첫번째 요소 반환)
 * querySelectorAll : 복수 반환
 * --------------------------------
 */

// IE8+
// var heperlink = document.querySelector('#hyperlink');
// var heading_3 = document.querySelector('#heading_3');
// var container = document.querySelector('.container');
// var row		  = container.querySelector('.row'); // Document Object
// // var col_sixes = document.querySelector('.col-6');  
// var col_sixes = document.querySelectorAll('.col-6'); // Nodelist

// //IE8+
// // var container_h3_2 = container.querySelectorAll('h3')[1];

// // IE9+
// var container_h3_2 = container.querySelector('h2:nth-of-type(2)');
// console.log('container_h3_2', container_h3_2);

/**
 * --------------------------------
 * query() 헬퍼함수 사용
 * --------------------------------
 */

// IE 8+
var hyperlink = query('#hyperlink');
console.log(hyperlink);
var heading_3 = query('#heading_3');
var container = query('.container');

// 선택하는 4가지 방법
// var row		  = container.querySelector('.row');
// var row		  = query('.row', '.container'); 
// var row		  = query('.row', query('.container')); 
var row			  = query('.row', container );
var col_sixes	  = queryAll('.col-6'); // Nodelist

// IE 8
// var container_h3_2 = container.querySelectorAll('h3')[1];

// IE 9+
var container_h3_2 = container.querySelector('h3:nth-of-type(2)');
console.log('container_h3_2:', container_h3_2);
console.log('row:', row);
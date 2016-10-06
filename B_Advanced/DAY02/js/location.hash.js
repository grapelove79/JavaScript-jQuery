'use strict';

/**
 * --------------------------------
 * Location 객체 
 * [미션] 1초마다 (URL)hash 부분 바뀜
 * --------------------------------
 */

/**
 * --------------------------------
 * ex1. 실행하면 오류 
 * [이유]
 * for문 실행이 끝난 후('item') 'setTimeout'이 실행 되기 때문에
 * item의 값: contact -> works -> about -> home -> (다음 item이 없기 때문에) undefined.
 * 마지막값으로 undefined값 출력.
 * --------------------------------
 */

// var _location = window.location;
// var hashes = 'home about works contact'.split(' ');

// function assignLocationHash(hash) {
// 	_location.hash = '!' + hash;
// 	console.log(hash);
// }

// for( var h_index = hashes.length, item; (item=hashes[--h_index]); ) {
// 	// console.log(h_index);  // h_index: 3,2,1,0(index) / item: contact, works, about, home(item)
// 	window.setTimeout(function() {
// 		assignLocationHash(item); // undefined
// 	}, h_index * 1000);
// }


/**
 * --------------------------------
 * ex2. IIFE 실행
 * --------------------------------
 */

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
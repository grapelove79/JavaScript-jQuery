(function(global, $){
	'use strict';
	var gnb = document.querySelector('#gnb'),
		gnb_links = gnb.querySelectorAll('a');

	/**
	 * --------------------------------
	 * for문 VS forEach문
	 * --------------------------------
	 */

	// for 구문 : `C문법`과 유사
	for ( var i=gnb_links.length, gnb_link; ( gnb_link = gnb_links[--i] ); ) {
		gnb_link.addEventListener('click', function(event) {
			// console.log(event.type);
			console.log(event.target);
			// 브라우저 기본 동작 차단
			event.preventDefault();
		});
	}

	// ES5 forEach 구문
	gnb_links.forEach(function(item, idx) {
		console.log(item, idx);
	});

	// 공개 
	global.gnb_links = gnb_links;
})(this, this.y9);
(function(global, $) {
	'use strict';

	/**
	 * ------------------------------------------
	 * ex1. 끝에서 3번째 자리마다 콤마(,)를 추가하는 함수
	 * ------------------------------------------
	 */
	
	// var addComma = function(n) {
	// 	// 문자화 -> 배열화
	// 	n = (n + '').split('');
	// 	for( var i=n.length - 4; i>=0; i=i-3 ) {
	// 		n.splice(i, 0, ',');
	// 	}
	// 	return n.join('');
	// };

	/**
	 * --------------------------------
	 * 'ex1.' 리팩토링
	 * --------------------------------
	 */
	
	var addComma = function(n) {
		// 문자화 -> 배열화
		n = (n + '').split('');
		for( var i=n.length - 3; i>0; i=i-3 ) {
			n.splice(i, 0, ',');
		}
		return n.join('');
	};


	//////////////////////////////////////////////////////////////////////////////

	// 비공개
	/**
	 * -----------------------------------------------
	 * ex1. 통화(원)로 변경해주는 함수
	 * 결과 : $.currency(123456789) ==> 123,456,789
	 * -----------------------------------------------
	 */
	
	// var currency = function(n, sign, sign_position) {
	// 	sign_position = sign_position || 'after';
	// 	// 전달 받은 n값의 끝에서 33번째 자리마다 콤마(,)를 추가
	// 	// 통화 기호 '원',' 엔' 문자열 집합
	// 	var change_currency = '';
	// 	if ( sign_position !== 'after' ) {
	// 		change_currency = sign + addComma();
	// 	} else {
	// 		change_currency =  addComma() + sign;
	// 	}
	// 	return addComma() + sign;
	// };

	/**
	 * -----------------------------------------------
	 * ex2. 'ex1' 리팩토링
	 * 결과 : $.currency(123456789) ==> 123,456,789
	 * -----------------------------------------------
	 */

	var currency = function(n, sign, sign_position) {
		sign_position = sign_position || 'after';
		sign = sign || '원';
		// 전달 받은 n값의 끝에서 33번째 자리마다 콤마(,)를 추가
		// 통화 기호 '원',' 엔' 문자열 집합
		var change_currency = addComma(n);
		if ( sign_position !== 'after' ) {
			change_currency = sign + change_currency;
		} else {
			change_currency += sign;
		}
		return change_currency;
	};

	if( !$.currency ) {
		// 유틸리티 메소드 정의
		$.currency = currency;
	}

})(this, this.jQuery);
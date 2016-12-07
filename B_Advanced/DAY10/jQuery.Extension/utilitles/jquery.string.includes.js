(function(global, $) {
	'use strict';

	// 
	/**
	 * --------------------------------
	 * 문자열 포함 여부 확인 함수
	 * 비공개
	 * ex1. str 필수, compare 옵션
	 * --------------------------------
	 */
	// var includes = function(str, compare) {
	// 	if ( $.type(str) !== 'string' ) {
	// 		throw new Error('첫번째 인자는 무자 유형이어야 한다.');
	// 	}
	// 	// compare값이 전달 되지 않았을 경우 기본 값 사용
	// 	compare = compare || '';
	// 	return str.indexOf(compare) > -1;
	// };

	// 
	/**
	 * ---------------------------------------------
	 * 비공개
	 * ex2. 만약 둘다(str, compare) 필수일 경우 => ||
	 * ----------------------------------------------
	 */
	var includes = function(str, compare) {
		if ( $.type(str) !== 'string' ||  $.type(compare) !== 'string') {
			throw new Error('인자는 문 유형이어야 한다.');
		}
		return str.indexOf(compare) > -1;
	};

	/**
	 * ----------------------------------------------
	 * ES6에 추가된 String.prototype.includes 메소드
	 * : 내부에 텍스트가 포함 유무 체크 메소드
	 * ----------------------------------------------
	 */
	// 'hey you!'.includes('yo'); // true
	// 'hey you!'.includes('Yo'); // false

	/**
	 * -----------------------------------------------------
	 * 하위브라우저에도 사용가능한 String.prototype.includes 메소드
	 * -----------------------------------------------------
	 */
	// [존재 유무 검증] 이미 해당 유틸리티 메소드가 존재하는가?
	if( !$.includes ) {
		// 유틸리티 메소드 정의
		$.includes = includes;
	}
})(this, this.jQuery);
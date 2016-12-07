(function(global, $) {
	'use strict';

	/**
	 * --------------------------------------------------------------------
	 * 문자열 반복처리 반환 함수
	 * ES6 추가된 메소드 String.prototype.repeat 메소드 
	 * 'love'.repeat(3); // 'lovelovelove'
	 * 하위브라우저에도 사용 가능한 String.prototype.repeat 메소드 => repeat()
	 * --------------------------------------------------------------------
	 */

	var repeat = function(str, repeat_count) {
		// 전달 받은 문자를 repeat_count 만큼 반복하여 생성한 문자를 반환
		// 초기 값 설정 
		repeat_count = repeat_count || 1; 

		/**
		 * --------------------------------
		 * 검증
		 * --------------------------------
		 */
		if ( $.type(str) !== 'string' ) {
			throw new Error('인자는 문자 유형이어야 합니다.');
		}
		if ( $.type(repeat_count) !== 'number' ) {
			throw new Error('인자는 숫자 유형이어야 합니다.');
		}

		/**
		 * --------------------------------
		 * 반복 순환하여 문자열을 접합 로직
		 * --------------------------------
		 */
		 var processing_str = '';
		 // '--repeat_count' => 0이 되므로 거짓이 되서 '후감소'.
		 while( repeat_count-- ) {
			processing_str +=str;
		}
		return processing_str;
	};

	if( !$.repeat ) {
		// 유틸리티 메소드 정의
		$.repeat = repeat;
	}  
})(this, this.jQuery);
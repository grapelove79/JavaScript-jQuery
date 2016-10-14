'use strict';

/**
 * --------------------------------
 * queryAll() 헬퍼함수
 * --------------------------------
 */

function queryAll(selector, context) {
	// 첫번째 전달인자(Argument)의 유효성 검사
	if( typeof selector !== 'string' ) {
		consol.info('전달인자는 문자열로 전달해야 합니다.');
		return null;
	}

	// context가 없다면 
	// 사용자 정의 값이 없을 경우, 값을 초기화
	// context를 전달하지 않으면 undefined. !undefined=> true
	
	// [방식1]
	// if ( !context ) { document = document; }

	// [방식2]
	context = context || document;

	///////////////////////////////////////////////////////
	// 두번째 전달인자(Argument)의 유효성 검사
	if ( typeof context === 'string' ) {
		context = query(context);
	}

	if( context.nodeType !== 1 && context.nodeType !== 9 ) { // document.nodeType ==> 9
		// [방식1] error 메시지만 출력이 되어 return 해서 멈추는 방법.
		// consol.error('두번째 전달인자는 요소노드어야 합니다.');
		// return;

		// [방식2] 메시지도 전달하고 함수 멈추는 방법
		throw new Error('두번째 전달인자는 요소노드어야 합니다.')
	}
	return context.querySelectorAll(selector); // Nodelist []
}

/**
 * --------------------------------
 * query() 함수헬퍼 함수
 * --------------------------------
 */

function query(selector, context) {
	return queryAll(selector, context)[0];
}
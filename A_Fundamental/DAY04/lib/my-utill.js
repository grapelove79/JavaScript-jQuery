'use strict';

/**
 * --------------------------------
 * 사용자 정의 헬퍼 함수 isDataType()
 * --------------------------------
 */

function isDataType(data) {
	return Object.prototype.toString.call(data).slice(8, -1).toLowerCase(); 
}

/**
 * -----------------------------------------
 * 문서객체가 존재하는지 여부를 확인하는 헬퍼 함수 
 * -----------------------------------------
 */

function checkDOMElement(element) {
	if( isDataType(element) === 'null' ) {
		console.info('현재 문서에 선택하고자 하는 문서 요소객체는 존재하지 않습니다.');
	} else {
		console.log('<' + element.nodeName.toLowerCase() + '>는 문서 요소객체입니다.');
	}
}
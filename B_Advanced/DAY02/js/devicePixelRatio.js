'use strict';

/**
 * --------------------------------
 * 기기의 픽셀 농도(Device Pixel Ratio)
 * --------------------------------
 */

/**
 * --------------------------------
 * 방식1
 * --------------------------------
 */

// var html 		= document.documentElement;
// var dpr			= window.devicePixelRatio || 1; //devicePixelRatio값이 없으면 기본값 '1'
// var is_retina	= dpr === 2; // > 1.5
// var is_retinaHD	= dpr === 3;

// function assignHtmlClass(identifier) {
// 	if( !html ) { html = document.documentElement; }
// 	// 문자 유형만 전달 가능
// 	if( typeof identifier !== 'string' ) { throw new Error('문자 유형으로 전달인자를 설정해주세요.'); }
// 	var existed_class = html.className !== '';
// 	html.className += (existed_class ? ' ' : '') + identifier;
// }

// // console.log(dpr);
// // assignHtmlClass( 'x' + dpr );
// // 혹은 apple식 네임 @.
// assignHtmlClass1( '@' + 'x' + dpr );

/**
 * --------------------------------
 * 방식2. 함수
 * --------------------------------
 */
var html = document.documentElement;

function assignHtmlClass(identifier) {
	if( !html ) { html = document.documentElement; }
	// 문자 유형만 전달 가능
	if( typeof identifier !== 'string' ) { throw new Error('문자 유형으로 전달인자를 설정해주세요.'); }
	var existed_class = html.className !== '';
	html.className += (existed_class ? ' ' : '') + identifier;
}

function detectDevicePixelRatio() {	
	var dpr 		= window.devicePixelRatio || 1;
	var is_retina   = dpr === 2;
	var is_retinaHD = dpr === 3;
	assignHtmlClass( '@' + 'x' + dpr );
	return {
		'retain': is_retina,
		'retinaHD': is_retinaHD
	}
}

detectDevicePixelRatio();
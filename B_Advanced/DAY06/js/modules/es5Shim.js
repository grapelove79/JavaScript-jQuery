'use strict';

/**
 * --------------------------------
 * @String.prototype trim()
 * 구형브라우저 사용 가능한 trim Methods
 * --------------------------------
 */

// 정규 표현식
// ^ :    시작 값을 검증
// $ :    끝나는 값을 검증
// \s:    공백을 검증
// + :    1개 이상
// ※ new RegExp() 사용 시에는 문자열 내부의 `\s` 사용 시, Escape 처리를 해야 한다. ==> \\s

if( !String.prototype.trim ) {
	String.prototype.trimBefore = function() {
		return this.replace(/^\s+/,'');
	};
	String.prototype.trimAfter = function() {
		return this.replace(/\s+$/,'');
	};
	String.prototype.trim = function() {
		return this.trimBefore().trimAfter();
	};
}

/**
 * --------------------------------------------------------------------------------
 * @Array.prototype forEach() 
 * 구형브라우저 사용 가능한 forEach Methods
 * 크롬 최신 브라우저에서는 `NodeList`에서는 `arrary`에서만 사용 가능한 `forEach`를 사용할 수 있다. 
 * ----------------------------------------------------------------------------------
 */

if ( !Array.prototype.forEach ) {
	Array.prototype.forEach = function(callback) {
		// this; <= Array Instance Object
		var _this = this;
		for ( var i=0, l=_this.length; i<l; i++ ) {
			callback.call(null, _this[i], i, _this);
		}
	}
}
'use strict';

/**
 * -----------------------------------------------
 * 네이티브에 없는 prototype에 능력을 확장.
 * Element에 'addClass, removeClass' 능력 확장. - `지양`.
 * -----------------------------------------------
 */

// if( !('addClass' in Element.prototype) ) {
// 	var old_this = null;

// 	$.radioClass = function(name) {
// 		// 기존에 name 변수에 복사된 문자 값을 class 속성으로 가진 요소에서는 해당 클래스 속서을 제거해야 한다.
// 		this.addClass(name);
// 		old_this = this;
// 		return this;
// 	}


// 	$.hasClass = function(name) {

// 		/**
// 		 * --------------------------------
// 		 * ES3
// 		 * --------------------------------
// 		 */		
// 		var has_check_class = new RegExp('(^|\\s+)' + name + '(\\s+|$)' );

// 		/**
// 		 * --------------------------------
// 		 * ES6(2015) String Template
// 		 * --------------------------------
// 		 */
// 		 // var has_check_class =

// 		 return has_check_class.test( this.getAttribut('class') );
// 	};


// 	$.toggleClass = function(name) {
// 		/**
// 		 * --------------------------------
// 		 * 방식1. 삼항식
// 		 * --------------------------------
// 		 */
		
// 		// return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);

// 		/**
// 		 * --------------------------------
// 		 * 방식2. if문 
// 		 * --------------------------------
// 		 */
// 		if( this.hasClass(name) ) {
// 			this.removeClass(name);
// 		} else {
// 			this.addClass(name);
// 		}
// 	};

// 	$.addClass = function(name) {
// 		name = name.split(' ');
// 		for( var i = 0, l=name.length; i<l; i++ ) {
// 			this.classList.add(name[i]);
// 		}
// 		// 메소드를 연결(메소드 체이닝)해서 사용하려면 'return this;'
// 		return this;
// 	};

// 	$.removeClass = function(name) {
// 		name = name || '*';
// 		if ( name === '*' ) {
// 			this.className = '';
// 			// 메소드를 연결(메소드 체이닝)해서 사용하려면 'return this;'
// 			return this;
// 		}
// 		name = name.split(' ');
// 		for( var i = 0, l=name.length; i<l; i++ ) {
// 			this.classList.remove(name[i]);
// 		}
// 	};
// }

/**
 * --------------------------------
 * IIFE 캡술화
 * --------------------------------
 */

(function(global, $){
	
	/**
	 * -----------------------------------------------
	 * prototype에 능력을 확장.
	 * element에 'addClass, removeClass' 능력 확장. - 지양.
	 * -----------------------------------------------
	 */

		var old_this = null
		$.radioClass = function(name) {
			// 기존에 name 변수에 복사된 문자 값을 class 속성으로 가진 요소에서는 해당 클래스 속성을 제거해야 한다.
			if ( old_this !== null ) {
				old_this.removeClass(name);
			}

			this.addClass(name);
			old_this = this;

			// 메소드를 연결(메소드 체이닝)해서 사용하려면 'return this;'
			return this;
		};
		$.hasClass = function(name) {
			/**
			 * --------------------------------
			 * ES3
			 * --------------------------------
			 */
			var has_check_class = new RegExp( '(^|\\s+)' + name + '(\\s+|$)' );

			/**
			 * --------------------------------
			 * ES6(2015) String Template
			 * --------------------------------
			 */
			 // var has_check_class = new RegExp( `(^|\\s+)${name}(\\s+|$)` );

			return has_check_class.test( this.getAttribute('class') );
		};
		$.toggleClass = function(name) {
			/**
			 * --------------------------------
			 * [방식1] 삼항식
			 * --------------------------------
			 */
			
			// return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);

			/**
			 * --------------------------------
			 * [방식2] if문 
			 * --------------------------------
			 */
			if( this.hasClass(name) ) {
				this.removeClass(name);
			} else {
				this.addClass(name);
			}
		};		$.addClass = function(name) {
			// this // DOM ElementNode
			name = name.split(' ');
			for( var i = 0, l=name.length; i<l; i++ ) {
				this.classList.add(name[i]);
			}
			// 메소드를 연결(메소드 체이닝)해서 사용하려면 'return this;'
			return this;
		};		$.removeClass = function(name) {
			name = name || '*';
			if ( name === '*' ) {
				this.className = '';
				// 메소드를 연결(메소드 체이닝)해서 사용하려면 'return this;'
				return this;
			}
			name = name.split(' ');
			for( var i = 0, l=name.length; i<l; i++ ) {
				this.classList.remove(name[i]);
			}
		};
})(this, Element.prototype);
'use strict';

/**
 * ----------------------------------------------------------------------------
 * [INDEX] DOM Helper Functions
 * ----------------------------------------------------------------------------
 * [Utility Helper Functions]
 * ㄴ isDataType()       : Javascript의 모든 데이터 유형을 올바르게 감지.
 * ㄴ isEmptyObject()    : 빈 객체 체크.
 * ㄴ validate()         : 오류 메시지를 띄움과 동시에 코드를 정지.
 * ㄴ isValidate()
 * ㄴ isString(), isNumber(), isBoolean()
 * ㄴ isFunction(), isArray(), isObject()
 * ㄴ isElement(), isDocument()
 * ----------------------------------------------------------------------------
 * [DOM API] Selection
 * ----------------------------------------------------------------------------
 * id()                 : id 찾는 함수
 * tag()                : element 찾는 함수
 * classEls()           : class 찾는 함수
 * queryAll(), query()  : 문서객체를 손쉽게 선택할 수 있도록 도와주는 함수
 * ----------------------------------------------------------------------------
 * [DOM API] Creation
 * ----------------------------------------------------------------------------
 * createEl()           : element 생성 함수
 * ----------------------------------------------------------------------------
 * [DOM API] Manipulation
 * ----------------------------------------------------------------------------
 * attrs() : properties 생성 함수 
 * ----------------------------------------------------------------------------
 * ----------------------------------------------------------------------------
 * detectFeature() : 신기술을 체크하는 헬퍼함수
 * ----------------------------------------------------------------------------
 */

/**
 * --------------------------------
 * Utility Helper Functions
 * ----------------------------- */

/** isDataType() : Javascript의 모든 데이터 유형을 올바르게 감지할 수 있는 헬퍼 함수 */
function isDataType(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}

/** @function isString() */
function isString(data) { return isDataType(data) === 'string'; }

/** @function isNumber() */
function isNumber(data) { return isDataType(data) === 'number'; }

/** @function isBoolean() */
function isBoolean(data) { return isDataType(data) === 'boolean'; }

/** @function isFunction() */
function isFunction(data) { return isDataType(data) === 'function'; }

/** @function isArray() */
function isArray(data) { return isDataType(data) === 'array'; }

/** @function isObject() */
function isObject(data) { return isDataType(data) === 'object'; }

/** @function isEmptyObject(): 빈 객체 체크함수 */
// [사용 예] isEmptyObject({}); // true , isEmptyObject({a:1}); // false
function isEmptyObject(data) { 
  // 속성이 존재하는지 확인(검증)
  // 속성이 존재하지 않는다면? 텅 빈 객체
  // for ~ in : 
  var prop_length = 0;
  for( var prop in data) { 
    // console.log(prop);
    prop_length++; 
  }
  return isObject(data) && !prop_length;
}

/** @function isElement() */
function isElement(node) {
  if (!node) { return false; }
  return node.nodeType === 1;
}
/** @function isDocument() */
function isDocument(node) {
	return node.nodeType === 9;
}

/** @function validate() */
// 조건 확인 후, 조건이 참이면 오류 메시지를 띄움과 동시에 코드를 정지시킴.
function validate(condition, error_message) {
  if (condition) { throw new Error(error_message); }
}

/** @function isValidate() */
function isValidate(condition, success, fail) {
	// condition 조건이 참이고,
	// 사용자가 success 인자를 전달했고,
	// 그 인자가 함수 유형이라면 success 함수를 실행하라.
	if ( condition && success && isFunction(success) ) { success(); }
	if ( !condition && fail && isFunction(fail) ) { fail(); }
	return condition ? true : false;
}

//////////////////////////////////////////////////////////////////////////

/**
 * --------------------------------
 * detectFeature() 
 * --------------------------------
 */

// function detectFeature(element, property) {
// 	validate( element.nodeType !== 1, '첫번째 인자는 문서 요소객체가 아닙니다.');
// 	validate( isDataType(property), '두번째 인자는 문자 유형이어야 합니디.');
// 	return property in element.style;
// }

/**
 * ---------------------------------------------
 * [리팩토링1.] detectFeature() 
 * isElement(), isString() 함수 사용
 * ---------------------------------------------
 */

// function detectFeature(element, property) {
// 	validate( !isElement(element), '첫번째 인자는 문서 요소객체가 아닙니다.');
// 	validate( !isString(property), '두번째 인자는 문자 유형이어야 합니디.');
// 	return property in element.style;
// }

// detectFeature() 예
// detectFeature( tag('h3')[0], 'font-size');
// detectFeature( tag('h3')[0], 'background-origin');

/**
 * --------------------------------
 * [리팩토링2.] detectFeature() 
 * 메모이제이션 패턴 사용
 * --------------------------------
 */

// function detectFeature(property, element) {
// 	element = element || detectFeature.dummy;
// 	validate( !isElement(element), '두번째 인자는 문서 요소객체가 아닙니다.');
// 	validate( !isString(property), '첫번째 인자는 문자 유형이어야 합니디.');
// 	var result = property in element.style;
// 	return result;

// }
// // 메모이제이션 패턴
// detectFeature.dummy = document.createElement('div');


/**
 * --------------------------------
 * [리팩토링4.] detectFeature() 
 * --------------------------------
 */

// function detectFeature(property) {
//   validate( !isString(property), '첫번째 인자는 문자 유형이어야 합니다.' );
//   return property in detectFeature.dummy.style;
// }
// // 메모이제이션 패턴
// detectFeature.dummy = document.createElement('div');

/**
 * --------------------------------
 * [리팩토링4.] detectFeature() 
 * --------------------------------
 */

function detectFeature(property) {
    validate( !isString(property), '첫번째 인자는 문자 유형이어야 합니디.');
    return property in detectFeature.style;
}
// 메모이제이션 패턴
detectFeature.style = createEl('div').style;

/**
 * ----------------------------------------------------------------------------
 * detectFeatures()
 * 사용 예. 
 * detectFeatures(['animation', 'transition', 'transform, transform-style']);
 * ----------------------------------------------------------------------------
 */

// function detectFeatures(properties, element) {
// 	element = ( element && isElement(element)) || detectFeatures.root_element;
// 	validate( !isArray(properties), 'properties는 배열 유형이어야 합니다.');
// 	for (var property, i=properties.length; (property = properties[--i]);) {
// 		// console.log(property);
// 		console.log( detectFeature(property));
// 	}
// }
// // 메모이제이션 패턴
// detectFeatures.root_element = document.documentElement; 

/**
 * ---------------------------------------------------------------------------------------
 * [리팩토링1.] detectFeatures()
 * 사용 예.
 * detectFeatures(['animation', 'transition', 'grid', transform, transform-style']);
 * ㄴ> 두번째 인자값을 전달하지 않으면 html에 class 추가가 된다.
 * ---------------------------------------------------------------------------------------
 */

// properties ==> 배열로 던져야 한다.
// function detectFeatures(properties, element) {
// 	element = ( element && isElement(element)) || detectFeatures.root_element;
// 	validate( !isArray(properties), 'properties는 배열 유형이어야 합니다.' );
// 	for( var property, i=properties.length; (property = properties[--i]); ) {
// 		// console.log( detectFeature(property));
// 		isValidate ( detectFeature(property), function(){
// 			element.classList.add(property);
// 		}, function() {
// 			element.classList.add('no-' + property);
// 		});
// 	}
// }
// // 메모이제이션 패턴
// detectFeatures.root_element = document.documentElement; 

/**
 * ---------------------------------------------------------------------------------------
 * [리팩토링2.] detectFeatures()
 * 사용 예.
 * detectFeatures(['animation', 'transition', 'grid', transform, transform-style']);
 * ㄴ> 두번째 인자값을 전달하지 않으면 html에 class 추가가 된다.
 * ---------------------------------------------------------------------------------------
 */

// // properties ==> 배열로 던져야 한다.
// function detectFeatures(properties, element) {
// 	element = ( element && isElement(element)) || detectFeatures.root_element;
// 	validate( !isArray(properties), 'properties는 배열 유형이어야 합니다.' );
// 	for( var property, i=properties.length; (property = properties[--i]); ) {
// 		// console.log( detectFeature(property));
// 		isValidate ( detectFeature(property), detectFeature.success, detectFeature.property );
// 	}
// }
// detectFeatures.element = null;
// detectFeatures.property = null;
// detectFeatures.root_element = document.documentElement; 
// detectFeatures.success = function(){
//   detectFeatures.element.classList.add(detectFeatures.property);
// };
// detectFeatures.fail = function(){
//   detectFeatures.element.classList.add('no-' + detectFeatures.property);
// };

/**
 * --------------------------------
 * [리팩토링3.] detectFeatures()
 * 함수 선언식 + 메모이제이션
 * --------------------------------
 */

// function detectFeatures(properties, element) {
//   detectFeatures.element = (element && isElement(element)) || detectFeatures.root_element;
//   validate( !isArray(properties), 'properties는 배열 유형이어야 합니다.' );
//   for( var property, i=properties.length; (property = properties[--i]); ) {
//     detectFeatures.property = property;
//     isValidate( detectFeature(property), detectFeatures.success, detectFeatures.fail );
//   }
// }
// detectFeatures.element = null;
// detectFeatures.property = null;
// detectFeatures.root_element = document.documentElement; // <html>
// detectFeatures.success = function(){
//   detectFeatures.element.classList.add(detectFeatures.property);
// };
// detectFeatures.fail = function(){
//   detectFeatures.element.classList.add('no-' + detectFeatures.property);
// };

/**
 * --------------------------------
 * [리팩토링4.] detectFeatures()
 * 함수 표현식 + 클로저
 * --------------------------------
 */

/**
 * ------------------------------------------------------------------------------------------------------
 * 방식2. 함수 표현식 + 클로저 
 * 클로저 함수에 한줄 인라인으로 && 로 표기 ==> el = ((element && isElement(element)) && element) || root_element;
 * ------------------------------------------------------------------------------------------------------
 */

var detectFeatures = (function(){
	// 외부와 단절된 독립된 공간이 형성
	// 지역(Local Scope)
	var el           = null;
	var property     = null;
	var root_element = document.documentElement; 
	function success(){ el.classList.add(property); }
	function fail(){ el.classList.add('no-' + property); }

	// 클로저 함수
	function _detectFetures(properties, element) {
		el = ((element && isElement(element)) && element) || root_element;
		validate( !isArray(properties), 'properties는 배열 유형이어야 합니다.' );
		for( var i=properties.length; properties[--i]; ) {
			property = properties[i];
			isValidate( detectFeature(property), success, fail );
		}
	}
	// 클로저 함수 반환
	return _detectFetures;
}());


//////////////////////////////////////////////////////////////////////////

/**
 * --------------------------------
 * --------------------------------
 * DOM API : Selection
 * --------------------------------
 * --------------------------------
 */

/**
 * --------------------------------
 * id() 
 * id 찾는 헬퍼 함수
 * document.getElementById
 * --------------------------------
 */

// function id(name) {
// 	// 타입 검증
// 	if ( typeof name !== 'string' ) {
// 		throw new Error ('전달된 인자는 문자 유형이어야 합니다.');
// 	}
// 	return document.getElementById(name);
// }

/**
 * --------------------------------
 * [리팩토링1.] validate() 사용
 * --------------------------------
 */

function id(name) {
	// 타입 검증
	validate( typeof name !== 'string', '전달된 인자는 문자 유형이어야 합니다.');
	return document.getElementById(name);
}


/**
 * --------------------------------
 * tag()
 * element 찾는 헬퍼 함수
 * document.getElementsByTagName
 * --------------------------------
 */

// function tag(name, context) {
// 	// 타입 검증
// 	if ( typeof name !== 'string' ) {
// 		throw new Error ('전달된 인자는 문자 유형이어야 합니다.');
// 	}

// 	// document.ELEMENT_NODE === 1
// 	// if ( context && context.nodeType === 1 ) {
// 	if ( context && context.nodeType !== document.ELEMENT_NODE ) {
// 		throw new Error ('context 객체는 문서 요소 객체여야만 합니다. ');
// 	}

// 	// 만약 사용자가 context 객체를 전달했고, 
// 	// context 객체는 문서 요소객체라면 
// 	// context를 사용한다 
// 	// 하지만 context 객체가 없다면 
// 	// 기본값으로 document객체를 사용한다.
// 	if ( !context ) {
// 		context = document;
// 	}
// 	return context.getElementsByTagName(name);
// }

/**
 * --------------------------------
 * [리팩토링1.] validate() 사용
 * --------------------------------
 */

// function tag(name, context) {
// 	// 타입 검증
// 	validate( typeof name !== 'string', '전달된 인자는 문자 유형이어야 합니다.');
// 	validate( context && context.nodeType !== document.ELEMENT_NODE, 'context 객체는 문서 요소 객체여야만 합니다.');
// 	// 만약 사용자가 context 객체를 전달했고, 
// 	// context 객체는 문서 요소객체라면 
// 	// context를 사용한다 
// 	// 하지만 context 객체가 없다면 
// 	// 기본값으로 document객체를 사용한다.
// 	if ( !context ) {
// 		context = document;
// 	}
// 	return context.getElementsByTagName(name);
// }

/**
 * -------------------------------------------
 * [리팩토링2.] isString(), isElement() 사용
 * -------------------------------------------
 */

function tag(name, context) {
  // 타입 검증
  validate(!isString(name), '전달된 인자는 문자 유형이어야만 합니다.');
  validate( context && !isElement(context), 'context 객체는 문서 요소 객체여야만 합니다.' );
  return (context || document).getElementsByTagName(name);
}

/**
 * --------------------------------------------------------------------
 * classEls()
 * document.getElementsByClassName // IE9+ 이상만 사용하기 때문 - 녹음4
 * 하위브라우저도 호환할 수 있는 헬퍼함수 
 * --------------------------------------------------------------------
 */

// function classEls(name) {
//     // 검증
//     validate( isString(name), 'name 인자는 문자열이어야 합니다.' );
//     // 최신 웹브라우저라면 .getElementsByClassName() 사용
//     if( !document.getElementsByClassName ) {
//         return document.getElementsByClassName(name);
//     }
//     // [예전 구형 브라우저인 IE7,8 시절] class 속성 쓰지마! 느리다!
//     // ==> 지금은 ie9에선 'getElementsByClassName' 지원하기 때문에 느리지 않다.
//     // 그렇지 않다면... (구형 브라우저: IE7,8)
//     // 문서 객체를 순환하여 class 속성 값이 일치하는 집합을배열로 반환하는 함수
//     else {
//         var all_els = tag('*', document.body);
//         var all_els_length = all_els.length; // 6
//         var el = null;
//         var class_name = '';
//         var filtered_els = [];
//         // 정규 표현식 사용
//         // ^ :    시작 값을 검증
//         // $ :    끝나는 값을 검증
//         // \s:   공백을 검증
//         // + :    1개 이상
//         // ※ new RegExp() 사용 시에는 문자열 내부의 \s 사용 시, Escape 처리를 해야 한다. ==> \\s
//         var reg = new RegExp('(^|\\s)+' + name + '(\\s|$)+');
//         while(all_els_length--) { // 6, 5, 4, 3, 2, 1, 0
//             // 5, 4, 3, 2, 1, 0
//             el = all_els[all_els_length];
//             class_name = el.getAttribute('class');
//             if( reg.test(class_name) ) {
//                 filtered_els.push(el);
//             }
//         }
//         return filtered_els;
//   };
// }

/**
 * --------------------------------------------------------------
 * [리팩토링1.] classEls()
 * context 추가와 검증 추가 - 비효율적인 classEls() (개선 전) - 녹음4
 * --------------------------------------------------------------
 */

// function classEls(name, context) {
//     // 검증
//     validate( isString(name), 'name 인자는 문자열이어야 합니다.' );
//     // 최신 웹브라우저라면 .getElementsByClassName() 사용.
//     //
//     if( !document.getElementsByClassName ) {
//         return ( ((context && isElement(context)) && context) || document).getElementsByClassName(name);
//     }
//     // [예전 구형 브라우저인 IE7,8 시절] class 속성 쓰지마! 느리다!
//     // ==> 지금은 ie9에선 'getElementsByClassName' 지원하기 때문에 느리지 않다.
//     // 그렇지 않다면... (구형 브라우저: IE7,8)
//     // 문서 객체를 순환하여 class 속성 값이 일치하는 집합을배열로 반환하는 함수
//     else {
//         var all_els = tag('*', ((context && isElement(context)) && context) || document.body);
//         var all_els_length = all_els.length; // 6
//         var el = null;
//         var class_name = '';
//         var filtered_els = [];
//         // 정규 표현식 사용
//         // ^ :    시작 값을 검증
//         // $ :    끝나는 값을 검증
//         // \s:   공백을 검증
//         // + :    1개 이상
//         // ※ new RegExp() 사용 시에는 문자열 내부의 \s 사용 시, Escape 처리를 해야 한다. ==> \\s
//         var reg = new RegExp('(^|\\s)+' + name + '(\\s|$)+');
//         while(all_els_length--) { // 6, 5, 4, 3, 2, 1, 0
//             // 5, 4, 3, 2, 1, 0
//             el = all_els[all_els_length];
//             class_name = el.getAttribute('class');
//             if( reg.test(class_name) ) {
//                 filtered_els.push(el);
//             }
//         }
//         return filtered_els;
//   };
// }

/**
 * --------------------------------------------------------------------------
 * [리팩토링2.] 효율적인 classEls() (개선 후) - 녹음4
 * 효과적으로 리펙토링. 한번만 묻기!: 초기에 1회만 getElementsByClassName 검증 
 * 함수 표현식 + 클로저 사용
 * --------------------------------------------------------------------------
 */

var classEls = (function() {
    var _classEls = null;

    if( document.getElementsByClassName  ) {
        _classEls = function(name, context) {
            validate( !isString(name), 'name 인자는 문자열이어야 합니다.' );
            return ( ((context && isElement(context)) && context) || document).getElementsByClassName(name);
        };
    } else {
        _classEls = function(name, context) { 
            validate( !isString(name), 'name 인자는 문자열이어야 합니다.' );
            var all_els = tag('*', ((context && isElement(context)) && context) || document.body);
            var all_els_length = all_els.length; // 6
            var el = null;
            var class_name = '';
            var filtered_els = [];
            // 정규 표현식 사용
            // ^ :    시작 값을 검증
            // $ :    끝나는 값을 검증
            // \s:   공백을 검증
            // + :    1개 이상
            // ※ new RegExp() 사용 시에는 문자열 내부의 `\s` 사용 시, Escape 처리를 해야 한다. ==> \\s
            var reg = new RegExp('(^|\\s)+' + name + '(\\s|$)+');
            while(all_els_length--) { // 6, 5, 4, 3, 2, 1, 0
                // 5, 4, 3, 2, 1, 0
                el = all_els[all_els_length];
                class_name = el.getAttribute('class');
                if( reg.test(class_name) ) {
                    filtered_els.push(el);
                }
            }
            return filtered_els;
        }
    }
}());

/**
 * ------------------------------------
 * queryAll()
 * 문서객체를 손쉽게 선택할 수 있도록 도와주는 함수
 * ------------------------------------
 */

// function queryAll(selector, context) {
// 	// 첫번째 전달인자(Argument)의 유효성 검사
// 	if( typeof selector !== 'string' ) {
// 		consol.info('전달인자는 문자열로 전달해야 합니다.');
// 		return null;
// 	}

// 	// context가 없다면 
// 	// 사용자 정의 값이 없을 경우, 값을 초기화
// 	// context를 전달하지 않으면 undefined. !undefined=> true
	
// 	// [방식1]
// 	// if ( !context ) { document = document; }

// 	// [방식2]
// 	context = context || document;

// 	///////////////////////////////////////////////////////
// 	// 두번째 전달인자(Argument)의 유효성 검사
// 	if ( typeof context === 'string' ) {
// 		context = query(context);
// 	}

// 	if( context.nodeType !== 1 && context.nodeType !== 9 ) { // document.nodeType ==> 9
// 		// [방식1] error 메시지만 출력이 되어 return 해서 멈추는 방법.
// 		// consol.error('두번째 전달인자는 요소노드어야 합니다.');
// 		// return;

// 		// [방식2] 메시지도 전달하고 함수 멈추는 방법
// 		throw new Error('두번째 전달인자는 요소노드어야 합니다.')
// 	}
// 	return context.querySelectorAll(selector); // Nodelist []
// }

/**
 * --------------------------------
 * 리팩토링1.
 * --------------------------------
 */

function queryAll(selector, context) {
	// 첫번째 전달인자(Argument)의 유효성 검사
	var _ex = function(){
		console.info('전달인자는 문자열로 전달해야 합니다.');
		return null;
	}

	isValidate(typeof selector !== 'string', _ex)

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

	validate(
		context.nodeType !== 1 && context.nodeType !== 9,
		'두번째 전달인자는 요소노드여야 합니다.'
	);
	return context.querySelectorAll(selector); // Nodelist []
}

/**
 * -----------------------------------
 * query() 
 * 문서객체를 손쉽게 선택할 수 있도록 도와주는 함수
 * -----------------------------------
 */

function query(selector, context) {
	return queryAll(selector, context)[0];
}

/**
 * --------------------------------
 * DOM API : Creation
 * --------------------------------
 */

 /**
  * --------------------------------
  * createEl() - 녹음4
  * --------------------------------
  */
 
// function createEl(node_name, prop_id, prop_class) {
//     validate( !isString(node_name), 'node_name 전달인자는 문자열 이어야 합니다.' );
//     validate( prop_id && !isString(prop_id), 'prop_id 전달인자는 문자열 이어야 합니다.' );
//     validate( prop_class && !isString(prop_class), 'prop_class 전달인자는 문자열 이어야 합니다.' );

//     // 요소노드 새성
//     var created_el = document.createElement(node_name);
//     // 속성 설정
//     prop_id && created_el.setAttribute('id', prop_id);
//     prop_class && created_el.setAttribute('class', prop_class);
//     return created_el;
// }

/**
 * --------------------------------
 * [리팩토링1.]
 * --------------------------------
 */

function createEl(node_name, properties) {
  validate(!isString(node_name), 'node_name 전달인자는 문자열 이어야 합니다.');
  validate(properties && !isObject(properties), 'properties는 객체 유형이 전달되어야 합니다.');
  // 요소노드 생성
  var created_el = document.createElement(node_name);
  // 속성 설정
  properties && attrs(created_el, properties);
  return created_el;
}

/**
 * --------------------------------
 * DOM API: Manipulation
 * ----------------------------- */

/**
 * --------------------------------------------------
 * attrs()
 * 속성 추가 헬퍼 함수 : properties 추가하거나 추가하지 않거나.
 * --------------------------------------------------
 */

function attrs(element, properties) {
    validate( !isElement(), 'element는 요소노드어여야 합니다.' );
    validate( !isObject(properties), 'properties는 객체 유형이어야 합니다.' );
    // console.log('element', element);
    // console.log('properties', properties);

    // 객채 순환
    for( var prop in properties ) {
        var value = properties[prop];
        element.setAttribute(prop, value);
    }
}
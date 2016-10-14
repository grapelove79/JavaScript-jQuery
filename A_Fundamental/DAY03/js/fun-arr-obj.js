'use strict';

/**
 * --------------------------------
 * Function
 * 참조형 데이터 
 * : 변수의 값을 할당할 경우 복사가 아닌, 값 참조가 수행된다 
 * 참조가 되는 데이터 유형은 객체이다.
 * - 일반적인 객체 (Planin Object)
 * - 배열 객체 (Array Ojbect)
 * - 함수 객체 (Fucntion Ojbect)
 * --------------------------------
 */

/**
 * --------------------------------
 * 함수 객체 (Fucntion Ojbect)
 * 이름이 있는 함수(기명 함수) VS 이름이 없는 함수 (무명, 익명 함수)
 * 함수 선언식(Function declaration) VS 함수 표현식(Function expression)
 * --------------------------------
 */

/**
 * --------------------------------
 * 함수 표현식(Function expression)
 * --------------------------------
 */

var getSomeMoney = function() {};

/**
 * --------------------------------
 * 함수 선언식(Function declaration)
 * Yahoo 엔지니어 더글라스 크록포드 권장!
 * --------------------------------
 */

function isNumber(value) {
	return !isNumber(value);
}

/**
 * --------------------------------
 * 함수를 사용하는 방법 3가지
 * 1. new Function ('함수 실행 코드');
 * 2. 익명(무명)함수: 이름이 없는 함수 
 ㄴ> var fn = function() {};  
 * 3. 기명함수: 이름이 정의(선언) 함수.
 ㄴ> function fn() {}
 * --------------------------------
 */

/**
 * --------------------------------
 * 객체를 생성하는 권한을 가진 함수
 * 생성자(Constructor) 함수
 * 생성된 객체(Instance)
 * new Creater('person');
 * --------------------------------
 */


/**
 * ------------------------------------------
 * 변수와 함수를 객체가 소유하게 되면
 * 변수는 객체의 `속성`이라고 불리게 된다.
 * 함수는 객체의 속성임과 동시에 특별히 `메소드`라고 부른다.
 * ------------------------------------------
 */

// 변수
var eyes = '눈';
var ears = '귀';

// 함수
var crying = function() {
 console.log('울다');
};

// 객체 
var person = {};
person.eyes = eyes; // 속성
person.crying = crying; // 메소드

/**
 * --------------------------------------------------------
 * 배열 객체(Array Object)
 * 배열 객체는 여러 개의 데이터를 기억할 수 있는 공간을 제공하는 객체이다 
 * 생성된 배열 객체는 기억하기 위해 변수에 할당한다. 
 * --------------------------------------------------------
 */

// 배열을 사용하지 않았을 때 데이터 관리
var navigation_item_01 = 'Home';
var navigation_item_02 = 'About';
var navigation_item_03 = 'Works';
var navigation_item_04 = 'Products';
var navigation_item_05 = 'Contact';

// 배열을 사용할 때 연관된 복수 데이터 관리 (쉽고 효율적이다.)

// 방법1.
// var navigation_items = new Array('Home', 'About', 'Works', 'Products','Contact');

// 방법2. 
var navigation_items =[];
navigation_items.push('Home');
navigation_items.push('About');
navigation_items.push('Works');
navigation_items.push('Products');
navigation_items.push('Contact');

/**
 * --------------------------------
 * 연관배열(문자 유형이 속성을 배열)
 * --------------------------------
 */

var drinks = [];
drinks.push('milk');
drinks.push('juice');
drinks.push('soju');

console.log(drinks.length); // 3
drinks['clear'] = '음료를 비우다'; // 이렇게 사용하는건 지양!
console.dir(drinks); 

/**
 * ------------------------------------------------------------------------
 * 객체의 속성에 접근하는 표기법
 * 1. 점 기호를 통한 접근
 * 2. 곽괄호를 사용하는 접근(각괄호 내부에 문자열을 넣어줘야 함)
 ㄴ> 일반적으로 자주 사용되지 않지만, 반복문(loop)내부에서 특정 변수 값을 순환할 때 종종 사용.
 * ------------------------------------------------------------------------
 */

// 1. 점 기호를 통한 접근
console.log('표기법: drinks.clear', drinks.clear);

// 2.곽괄호를 사용하는 접근(각괄호 내부에 문자열을 넣어줘야 함)
console.log("표기법: drinks['clear']", drinks['clear']);

/**
 * --------------------------------
 * Array Links Object(유사배열 = Nodelist)
 * : 배열과 흡사해보이나, 배열은 아니다.
 * length 속성을 가진다.
 * --------------------------------
 */

var button = document.getElementsByTagName('button')[0];
console.log(button);
// pop() 매소드는 array에 메소드라서 유사배열에선 사용할 수 없다.
// console.log(button.pop());


/**
 * --------------------------------
 * 자바스크립트에 내장된 객체들
 * 문자 객체
 * 숫자 객체
 * 불리언 객체
 * 함수형 객체
 * 배열 객체
 * 위 객체(내장객체만)를 생성하는 구문보다는 리터럴을 바로 사용하는 것이 좋다.
 * 생성자 객체는 'new' 키워드를 붙여야 한다.
 * --------------------------------
 */

var num, str, boo, fnc, arr, obj;

num = 100;
str = 'this is string';
boo = !false;
fnc = function() {};
arr = [];
obj = {};

/**
 * ------------------------------------------------------------------------
 * 객체 리터럴 표현식 
 * ㄴ 변수에 참조 => {};
 * ㄴ 프로퍼티 추가 (css 표현식과 유사) => {속성1(key):값(value), 속성2(key):값(value)}
 * sass에서 map과 동일
 * delete 키워드를 사용하면 객체의 속성을 제거할 수 있다. 
 * 전역 공간에 정의된 변수는 지울 수 없다. 전역 변수를 사용하는 것은 좋은 습관이 아닙니다. 
 * > 모듈러레이션(모듈) : 모듈을 쪼개서 관리. 전역과 구분되는 공간을 만들다.
 * 객체에 null, undefined 대입하면 기존의 참조되는 것을 끊어버리게 된다. 값을 비우게 된다.
 * ------------------------------------------------------------------------
 */

var css_props  = {
	'font-size' : '24px',
	'color' : '#ff0',
	'border-top-color' : 'currentColor'
}

delete css_props.color; // 정의한 속성 객체는 지울 수 있다.
delete css_props; // css_props는 제거되지 않는다. css_props는 전역 변수라서.

/**
 * ------------------------------------------
 * 자바스크립트 자료형(Data Type)
 * 숫자형, 문자형, 불리언형, null, undefiend
 * 객체형, 배열형, 함수형
 * -> length 속성을 가지는 건 : 배열, 문자, 유사배열
 * ------------------------------------------
 */

// console.dir(); // ==> 'dir' 숨어있는 객체를 볼 수 있다. 
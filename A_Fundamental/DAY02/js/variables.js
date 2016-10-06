/**
 * --------------------------------
 * 자바스크립트 변수 정의 패턴
 * --------------------------------
 */

/**
 * --------------------------------------------------
 * 패턴 1. 선언한 하는 경우
 * undefined 원시 데이터 유형 값으로 변수에 할당(복제)된다.
 * --------------------------------------------------
 */

// var 키워드를 한 번만 사용하는 방법
var tisue, remote_control, cup, mike;

// var 키워드를 변수 이름마다 사용하는 방법
var tisue; 
var remote_control; 
var cup; 
var mike;

// 선언된 이후에 값(Data)을 변수에 할당한다.
tisus           = '티슈'; // 문자열
remote_control  = true;  // 불리언(논리)
cup             = 320;   // 숫자
mike            = null;  // Null "비어 있다"

// 런타임중에 값을 변경이 가능한다.

/**
 * ----------------------------------------
 * 패턴2. 선언과 동시에 값을 할당(대입, =)하는 경우
 * ----------------------------------------
 */

var html = document.documentElement;  // <html> 문서 객체 {참조형 데이터, 값 참조}
var body = document.body; // Legacy(웹의 초창기에 사용. 지금도 빈번하게 사용되는 유물)

// 방식1. var 키워드를 한 번만 사용할 경우
var html = document.documentElement,
    body = document.body;

// 방식2. 아래코드와 '방식1'의 코드는 역활은 동일하나, 사용하는 방법의 차이가 있을 뿐.
var html, body;
html = document.documentElement
body = document.body;

 /**
  * ------------------------------------------------------
  * 원시 데이터(primitive type) 유형 5가지 
  * : 값이 그대로 복사되는 자료형
  * 1. undefined    (정의되지 않았다, 부정)
  * 2. Null         (비어있다, 부정)
  * 3. String       (문자형 데이터)
  * 4. Number       (숫자형 데이터)
  * 5. Boolean      (논리형 데이터)
  * ------------------------------------------------------
  */

var study_name;                                     // undefined
var no_exist_el = document.getElementById('no-ex'); // null
var pre_count = -12;                                // Number
var course_name = 'JJ 첫걸음 CAMP';                   // String
var is_continue = true;                             // Boolean

var copy_sn = study_name; // copy_sn ????

 /** 
  * ------------------------------------------------------
  * 참조 데이터 (reference type) 유형 3가지
  * : 값의 주소(메모리에서 값이 있는 곳을 가리키는 값)만 복사되는 자료형. 
  * 1. 객체(Plain Object, `{}`)
  * 2. 함수(Function Object, `function(){}`)
  * 3. 배열(Array Object, `[]`)
  * ------------------------------------------------------
  */
 
var a = 10,
    b = b,
    c = { x : a },
    d = c; // c에 참조된 객체를 d도 참조함.

console.log('a의 값은', a);
console.log('b의 값은', b);
console.log('c의 값은', c);
console.log('d의 값은', d);

a = 100, b = 200, c.x = 300;

console.log('a의 값은', a);
console.log('b의 값은', b);
console.log('c의 값은', c);
console.log('d의 값은', d); // c에 참조된 객체를 d도 참조하고 있기에 값이 변경됨.

// 가비지 컬렉션 생: 변수가 참조하지 않으면 지워비린다. 
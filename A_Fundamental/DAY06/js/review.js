
/**
 * --------------------------------
 * review
 * --------------------------------
 */

// * 자바스크립트 변수
// - 런타임(실행) 중에 값을 임의로 자유롭게 변경 가능
// `var 변수 이름;`

// * 자바스크립트 자료 유형
// 1. 원시 데이터 유형 (복사)
// 	1-1. null
// 	1-2. undefined
// 	1-3. number literal 9, 10
// 	1-4. string literal 'string'
// 	1-5. boolean literal true
// 2. 참조 데이터 유형 (참조)
// 	2-1. Object {}
// 	2-2. Array []
// 	2-3. Function function(){}

// * 데이터 유형을 검증
// 1. typeof [ null, [] 유형을 올바르게 체크해주지 않는다. ]
// 2. instanceof [ 원시 데이터 유형의 경우는 올바르게 체크해주지 않는다. ]
// 3. .constructor [ 객체가 아닌 유형의 경우에서는 사용 불가 ]
// 4. 언어 차원에서 지원해주지 않는 유형 체크 함수 (사용자가 제작)

// * 자바스크립트 구문 
// 1. 조건 구문
// 	1-1. if, else, else if
// 	1-2. switch case break default
// 	1-3. ? :
// 	1-4. &&, ||

// 2. 반복 구문
// 2-1. while () {}
// 2-2. do {} while ();
// 2-3. for (선언;확인;변경) {} => 값의 집합(배열)
// 2-4. for (속성 in 객체) => 속성의 집합(객체)

// * 자바스크립트 흐름
// - ECMASCript 3 Edition 	: ECMA-262 3rd edition (1999.12) 가장 범용적으로 지원되는 버전이다.
// - ECMASCript 4 Edition 	: 개발 중단
// - ECMASCript 5 Edition 	: ECMA-262 5th edition (2009.12) HTML5와 함께 출현한 표준안이다. 인터넷 익스플로러 9이상이나 그 외 브라우저에서만 작동한다.
// - ECMAScript 5.1 Edition: 2011년 승인
// - ECMASCript 6 Edition 	:ECMA-262 6th edition (2015.06) Symbol type, let keyword, module system, Arrow Function, class 등이 추가되었다. #ES2015
// - TypeScript : Microsoft ( `C#` 만든 사람이 `TypeScript` 만듬.)
// - Angular2 : Google
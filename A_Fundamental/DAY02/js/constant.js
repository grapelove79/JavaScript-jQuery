'use strict';

/**
 * --------------------------------
 * 변수(Variable) VS 상수(Constant)
 * --------------------------------
 */

var bim_project = 'LG Bim';
const HOUR_T0_MINIUTE = 60;

// 변수는 실행 중인 상황에서 값을 변경할 수 있는 반면
console.log('bim_project', bim_project);
// 상수는 실행 중인 상황에서 값을 변경할 수 없다.
// 변수와 구분하기 위한 목적으로 상수의 이름은 모두 대문자로 작성 표기한다.
// 상수를 공식적으로 지원하는 것은 ECMAScript 2015 버전부터 지원.
console.log('HOUR_T0_MINIUTE', HOUR_T0_MINIUTE); 

bim_project = 'Samsung Mini Bim'; // 바뀜
HOUR_T0_MINIUTE = '60분' // 오류 발생
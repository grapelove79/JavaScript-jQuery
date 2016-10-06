'use strict';

 /**
  * ---------------------------------------------------------
  * 브라우저 객체 모델
  * window.screen
  * ㄴ 사용자의 스크린 화면의 대한 정보를 제공
  * ㄴ 화면의 가로/세로 폭 길이(px)
  * ㄴ 화면의 가용(Available) 가능한 실제 폭 길이(px)
  * ---------------------------------------------------------
  * 해상도(Resolution) : 1280 X 800
  * 전 세계 사용자의 스크린 가로 폭 평균치: 1366px (국내 평균 1920px)
  * ---------------------------------------------------------
  */
 
 // console.log('window screen', window.screen);

 /**
  * --------------------------------------------------------------------
  * [미션] 현재 사용자의 화면(Screen)에서 실제 사용가능하지 않은 공간의 폭은 얼마인가?
  * --------------------------------------------------------------------
  */

var full_height    = window.screen.height;
var avail_height   = window.screen.availHeight;
var unavail_height = full_height - avail_height;

console.log('full_height', full_height);
console.log('avail_height', avail_height);
console.log('full_height - avail_height', unavail_height);

var orient = window.screen.orientation // 인스턴스 객체 Object <- ScreenOrientation 생성자 함수

// 크로스브라우징 체크 필요!
// orient.angle; // 각도
// orient.lock(); // 회전 차단
// orient.onchange = function() {
//   // 스크린 회전 이벤트 감지
// };
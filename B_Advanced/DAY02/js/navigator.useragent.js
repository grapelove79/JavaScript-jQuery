'use strict';

/**
 * -----------------------------------------------------
 * [미션] 모바일 기기인지? 어떤 기기인지? - 기기 감지 함수 
 * navigator.userAgent; 웹 브라우저의 식별자를 문자열로 반환 
 * -----------------------------------------------------
 */

/**
 * --------------------------------
 * 방식1
 * --------------------------------
 */

// function detection(device) {
//     // 전달받은 인자값의 유효성 검사
//     if( typeof device !== 'string' ){
//         throw new Error('문자열을 넣어주세요');
//     }
//     return navigator.userAgent.toLowerCase().indexOf(device) > -1;
// }

// // 유지보수를 고려한 배열로.. 순환
// var device_check = 'iemobile kindle iphone ipad android nexus sm-g'.split(' ');
// var device_len = device_check.length;

// while( device_len ) {
//     device_len = device_len - 1;
//     detectMobileDevice(device_check[device_len]);
// }

// function detectMobileDevice(device) {
//     console.log(device);
// }

/**
 * --------------------------------------------------
 * 방식2. 각각의 작은 역할마다 함수를 분리하여 관리 (분리 전/후 비교) 
 * --------------------------------------------------
 */

var html = document.documentElement;

function detectPlatform() {
  var is_window = navigator.platform.toLowerCase().indexOf('win') > -1; // 'mac', 'win'
  var identifier = is_window ? 'win' : 'mac';
  assignHtmlClass(identifier);
}

function assignHtmlClass(identifier) {
  if ( !html ) { html = document.documentElement; }
  // 문자 유형만 전달 가능
  if( typeof identifier !== 'string' ) { throw new Error('문자 유형으로 전달인자를 설정해주세요.'); }
  var existed_class = html.className !== '';
  html.className += (existed_class ? ' ' : '') + identifier;
}

function detection(device) {
  // 문자 유형만 전달 가능
  if( typeof device !== 'string' ) { throw new Error('문자 유형으로 전달인자를 설정해주세요.'); }
  return navigator.userAgent.toLowerCase().indexOf(device) > -1;
}

function detectMobileDevice(device) {
  if ( detection(device) ) { assignHtmlClass(device); }
}

function loopDetectDevices(checking_devices, divider) {
  var is_string, device_len;
  // 사용자가 전달한 값이 없을 경우, ' '으로 초기화
  // 사용자 전달 값이 있으면 사용자가 전달한 값으로 설정
  divider = divider || ' ';
  // 검증
  // checking_devices 전달인자가 존재하는가?
  if ( !checking_devices ) { throw new Error('전달인자는 필수입니다.'); }
  is_string = typeof checking_devices === 'string';
  // 배열 또는 문자 유형인가?
  if ( !is_string && !(checking_devices instanceof Array) ) {
    throw new Error('전달인자는 문자 또는 배열만 가능합니다.');
  }
  // 만약 문자라면? 처리
  if (is_string) {
    // 문자 데이터 유형을 배열 데이터 유형으로 변경
    checking_devices = checking_devices.split(divider);
  }
  device_len = checking_devices.length;
  while(device_len) {
    device_len = device_len - 1;
    detectMobileDevice(checking_devices[device_len]);
  }
}

detectPlatform();

loopDetectDevices( 'iemobile,kindle,iphone,ipad,android,nexus,sm-g', ',' );
// loopDetectDevices( 'iemobile kindle iphone ipad android nexus sm-g' ); // 문자열인 경우
// loopDetectDevices( ['iemobile','kindle','iphone','ipad','android','nexus','sm-g'] ); // 배열인 경우 


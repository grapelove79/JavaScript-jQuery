'use strict';

/**
 * ------------------------------------------
 * 지도 기반 서비스를 황용하기 위한 geolocation 객체 
 * 서버에서 체크해야 한다.
 * ------------------------------------------
 */

var geo = navigator.geolocation;
geo.getCurrentPosition(geoSuccess, geoFail);

function geoSuccess(position) {
 console.log('지도 위도/경도 좌표 가져오기 성공!');
 console.dir('position:', position);
 console.log('position.coords:', position.coords);
 console.log('position.coords.accuracy:', position.coords.accuracy);
 console.log('position.coords.latitude:', position.coords.latitude);
 console.log('position.coords.longitude:', position.coords.longitude);
}

function geoFail(error) {
 console.log('geoFail 함수: 지도 위도/경도 좌표 가져오기 실패!');
}

// 온라인 환경 확인
var is_online = navigator.onLine;
console.log('is_online:', is_online);

'use strick';

/**
 * -----------------------------------------
 * 자바스크립트 반복구문 1. while문
 * : (조건이 참인) ~하는 동안 반복수행
 * while( 조건 ) { 조건이 참일 동안 코드를 반복 실행 }
 * -----------------------------------------
 */

// ex1. 무한반복 코드
// while(true) {
// 	console.log('this is true');
// }

// ex2. 1회 반복.
var condition = true;
while(condition) {
	console.log('this is true');
	condition = !condition; //false
}

//ex3. 5회 반복 후에 반복문이 종료.
var condition = true;
var count = 5;

while ( condition ) {
	// 5, 4, 3, 2, 1 ==> 해당하는 변수가 필요하다.
	console.log('this is true');
	count = count - 1;
	if( count <=0 ) {
		condition = !condition;
	}
}


// var n = 0;
// n = n + 1;
// n = n + 1;
// n = n + 1;

// n+=1
// n++, n-- : 후증감 => 값이 다음 단계에서 증가
// ++n, --n : 선증감 => 값이 바로 증가

/**
 * -----------------------------------------------------
 * do while문 
 * 조건이 거짓이라도 1회 실행
 * do { 조건의 참/거짓과 상관 없이 1회는 반드시 실행 } while(조건)
 * -----------------------------------------------------
 */

var condition = false;
var count = 5;
do {
	// 5, 4, 3, 2, 1 ==> 해당하는 변수가 필요하다.
	console.log('this is true');
	count = count - 1; // --count;와 같다.
	if( count <=0 ) {
		condition = !condition;
	}
} while( condition ); 

/**
 * --------------------------------
 * for문
 * 편리하게 사용할 수 있는 반복문
 * --------------------------------
 */

// 방법
// for(초기 변수 선언 - 순서1; 선언된 변수를 검증(조건: 참이면 계속, 거짓이면 그만!) - 순서2; 변수의 값을 변화 - 순서4) { 
// 	실행문 - 순서3
// }


// 반복자: interator
// 방법1. 최종 i값은 10.
for ( var i=0; i<10; ) {
	console.log('i:', i);
	i++;
}

// 방법2. 최종 i값은 10. (방법1과 동일하다)
var i = 0;
for ( ; i<10; i++) {
	console.log('i:', i);
}

// 방법3. ECMAScript 2015 (ES6): let 지역변수로 개념이 바뀐다.
for ( let i = 0; i<10; i++) {
	console.log('i:', i);
}

// 방법4. i +=1, i++, i = i+1
var i =0, ten=10;
for ( ; i<ten; i +=1) {
	console.log('i:', i);
}

/**
 * ----------------------------------------------------------------
 * for continue
 * continue만나면 continue아래 구문 실행하지 않는다. 증가시키는 구문으로 간다.
 * ----------------------------------------------------------------
 */

// 방법1. 0, 1, 2, 4 출력
var a = ['a', 'b', '', null, 'z'];
for (var i = 0, len=a.length; i<len; i++) {
	if( i === 3 ) {
		continue; // 3값이면 증가값으로 간다.
	}
	console.log(i); // 0, 1, 2, 4
}


// 방법2. continue: 0, 2, 4 출력
var a = ['a', 'b', '', null, 'z'];
for (var i = 0, len=a.length; i<len; i++) {
	if( i === 1 || i === 3 ) {
		continue; 
	}
	console.log(i);
}

// 방법3. 0, 2, 4 출력
var a = ['a', 'b', '', null, 'z'];
for (var i = 0, len=a.length; i<len; i+=2) {
	console.log(i);
}

// 방법4. '', z 출력
var a = ['a', 'b', '', null, 'z'], b = [];
for (var i = 0, len=a.length; i<len; i+=2) {
	b.push(a[i]);
}
console.log('b []:', b);


// 방법5. for break : a만 출력
var a = ['a', 'b', '', null, 'z'], b = [];
for (var i = 0, len=a.length; i<len; i++) {
	// continue와 달리 break를 만나면 for문은 종료된다.
	if( i === 1 || i === 3 ) {
		break;
	}
	b.push(a[i]); // a
}
console.log('b []:', b);
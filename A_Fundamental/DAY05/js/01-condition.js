'use strick';

/**
 * ----------------------------------------------------------
 * switch case break default문
 * 어떤 상황에 따라서(case) on/off (switch)
 * switch(expression) : 'expression'는 boolean 값으로 처리된다.
 * switch문은 엄격한 비교한다. 
 * ----------------------------------------------------------
 */


// if vs switch
// if(조건) {실행문}

// switch(expression) {
// 	(case) 1:
// 	(case) 2:
// 	(case) 3:
// }

///////////////////////////////////////////////////////////////

// ex1.
// var condition = 'memory';
// switch(condition) {
// 	case 'cup': console.log('this is cup.');
// 	case 'pen': console.log('this is pen.');
// 	case 'remote': console.log('this is remote.');
// 	default : console.log('this isn\'t cup, pen, remote');
// }

//ex2. default를 위로 올리면 다 실행이된다. 가장 하단에 위치하는 것이 좋다.
// var condition = 'memory';
// switch(condition) {
// 	default : console.log('this isn\'t cup, pen, remote');
// 	case 'cup': console.log('this is cup.');
// 	case 'pen': console.log('this is pen.');
// 	case 'remote': console.log('this is remote.');
// }


//ex3. remote 와 default까지 출력이 된다. 필요한것 break가 필요하다.
// var condition = 'remote';
// switch(condition) {
// 	case 'cup': 
//		console.log('this is cup.');
//	break;
// 	case 'pen': 
//		console.log('this is pen.');
//	break;
// 	case 'remote': 
//		console.log('this is remote.');
//	break;
// 	default : 
//		console.log('this isn\'t cup, pen, remote');
// }

// ex4. 상황이 2개 이상일 경우 아래와 같이 case 구문을 사용할 수 있다다
var console_style = 'color: #7045cf; font-size: 1.2rem;'
var condition = 'remote'; //cup, pen, double....
switch(condition) {
	case 'cup': 
		console.log('case is... %cthis is cup.', console_style);
	break;
	case 'pen': 
		console.log('case is... %cthis is pen.', console_style);
	break;
	case 'double': 
	case 'remote': 
		console.log('case is... %cthis is remote and double.', console_style);
	break;
	default : 
		console.log('case is... %cthis isn\'t cup, pen, remote', console_style);
}


// ex1.
// var count = 9;
// switch(count) {
// 	case count > 10: // boolean 값으로 처리되서 count 비교시 다르기 때문에 실행이 되지 않는다.
// 		console.log('count는 10보다 크다');
// 	break;
// 	case count < 10:
// 		console.log('count는 10보다 크다');
// }


// ex2. switch문은 엄격한게 비교한다. 
// '9' === 9 -> false 염격한 비교를 해서 switch문이 실행 되지 않는다.
// var count = '9';
// var counter = [8, 5, 2, -10, 9];
// switch(count) {
// 	case counter[counter.length - 1] : //마지막값이 9.
// 		console.log('count는 숫자 9이다');
// 	break;
// 	case count < 10:
// 		console.log('count는 10보다 크다');
// }


////////////////////////////////////////////////////////////////////////

/**
 * --------------------------------
 * 오늘은 어떤 요일 일까?
 * --------------------------------
 */

// if문
// var print_today_el = document.querySelector('#print-today');
// // console.log(print_today_el.innerHTML.replace('[ ]', 토));

// var today = '토';
// if( today === '일' ) { 
// 	print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '일'); 
// }
// else if ( today === '월' ) { 
// 	print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '월'); 
// }
// else if ( today === '화' ) { 
// 	print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '화'); 
// }
// else if ( today === '수' ) { 
// 	print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '수'); 
// }
// else if ( today === '목' ) { 
// 	print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '목'); 
// }
// else if ( today === '금' ) { 
// 	print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '금'); 
// }
// else if ( today === '토' ) { 
// 	print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '토'); 
// }
// else { 
// 	console.info('"일, 월, 화, 수, 목, 금, 토" 중에 택 1');
// }


// switch문
var print_today_el = document.querySelector('#print-today');
var today = '토';

switch( today ) { 
	case '일' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '일');
	break;
	case '월' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '월');
	break;
	case '화' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '화');
	break;
	case '수' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '수');
	break;
	case '목' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '목');
	break;
	case '금' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '금');
	break;
	case '토' :
		print_today_el.innerHTML = print_today_el.innerHTML.replace('[]', '토');
	break;
	default :
		console.info('"일, 월, 화, 수, 목, 금, 토" 중에 택 1');
}
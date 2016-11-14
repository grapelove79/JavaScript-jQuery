'use strict';

/**
 * -----------------------------------------
 * ex1. 함수형태로 리팩토링 
 * -----------------------------------------
 */

// head 내부에서 script 코드를 실행할 경우,
// 문서가 준비가 안된 상태이기 때문에, 오류 발생
// 고로 이벤트가 필요.
// window.onload = init;

// // 캐러셀 컴포넌트 초기화(Init, Initialization)
// function init() {
// 	var container, controls, view, active_index;
// 	container = document.querySelector('.carousel-container');
// 	controls  = container.querySelector('.carousel-controls');
// 	view      = container.querySelector('.carousel-view');

// 	// 현재 활성화된 콘텐츠의 인덱스
// 	active_index = 0;
// 	// view 영역 내부의 img 의 폭을 가져와서
// 	// 이미지 개수만큼의 폭을 view 영역에 설정한다.
// 	var view_contents        = view.querySelectorAll('img');
// 	var view_contents_length = view_contents.length;
// 	var view_content_width   = container.clientWidth;
// 	var view_width           = view_content_width * view_contents_length;	
// 	// console.log(view_content_width, view_contents_length, view_width);

// 	// .carousel-view 영역의 가로 폭을 포함하는 이미지 개수의 폭의 합 만큼 설정
// 	view.style.width = view_width + 'px';

// 	// 각 이미지를 순환 처리하여 컨테이너 요소의 너비 만큼 이미지 너비를 설정한다.
// 	for (var i=0; i<view_contents_length; i++ ) {
// 		var view_content = view_contents.item(i);
// 		// console.log(view_content); // 각 <img> 출력
// 		view_content.style.width = view_content_width + 'px';
// 	}

// 	// 버튼 이벤트 연결
// 	// 버튼의 부모 요소에게 이벤트 위임
// 	var prev_btn = controls.querySelector('.carousel-previous-btn');
// 	var next_btn = controls.querySelector('.carousel-next-btn');

// 	prev_btn.onclick = prevMoveCarouselContentView;
// 	next_btn.onclick = nextMoveCarouselContentView;

// 	// 이전 버튼
// 	function prevMoveCarouselContentView(){
// 		active_index = --active_index % view_contents_length; // 0 -> 1 -> 2 -> 3 -> 0
// 		if ( active_index < 0) {
// 		  active_index = view_contents_length - 1;
// 		}
// 		view.style.transform = 'translateX('+ (-1 * view_content_width * active_index) +'px)';
// 	}

// 	// 다음 버튼
// 	function nextMoveCarouselContentView(){
// 		active_index = ++active_index % view_contents_length; // 3 -> 2 -> 1 -> 0 -> 3

//     *
//      * -----------------------------------------------------
//      * [방식1] transform
//      * IE하위브라우저 호환이 안된다. -> (방식2) left로 사용
//      * CPU 사용하지 않음 / GPU 사용 => GPU를 사용하기 때문에 빠르다.
//      * -----------------------------------------------------
     
// 		view.style.transform = 'translateX('+ (-1 * view_content_width * active_index) +'px)';

//     /**
//      * --------------------------------------------------------
//      * [방식2] left 
//      * IE하위브라우저 호환. 
//      * CPU 사용 / GPU 사용하지 않음
//      * left는 그림을 다시 그린다. (Reflow Repaint)
//      * --------------------------------------------------------
//      */
// 		// view.style.position = 'absolute';
// 		// view.style.top = '0px';
// 		// view.style.left = -1 * view_content_width * active_index +'px';
// 	}

//    /**
//    * --------------------------------------------------------------------------------------
//    * indicator Abstract(추상화)
//    * indicator를 사용자가 클릭 했을 때, 이벤트 발생하는 일
//    * ㄴ 수행하는 일 1. 이전에 활성화되었던 인디케이터는 비 활성화, 클릭한 인디케이터는 활성화
//    * ㄴ 수행하는 일 2. 뷰(carousel-view) 영역이 클릭한 인디케이터의 인덱스(순서)에 해당하는 위치로 이동
//    * --------------------------------------------------------------------------------------
//    */

// 	// '.active-tab' 추출하여 해당 요소에 붙인다. 
// 	// classList : IE10+
// 	// .classList.remove('active-tab');, .classList.add('active-tab');

// 	var indicator_items = controls.querySelectorAll('.carousel-tab');
// 	// console.log(indicator_items);

// 	for ( var i = 0, l=indicator_items.length; i<l; i++ ) {
// 		// console.log(indicator_items[i]);
// 		var item = indicator_items[i];
// 		item.index = i;
// 		indicator_items[i].onclick = activeSelectedItem;
// 	}

// 	var selected_item = null; // 아직 사용자는 아무 것도 선택하지 않았다.

// 	function activeSelectedItem() {
// 		var item = this;
// 		if ( selected_item !== null ) {
// 			// selected_item : 전에 클릭한 아이템을 기억하는 변수 
// 			selected_item.classList.remove('active-tab');
// 		} 
// 		// this : indicator_items. 함수를 실행시킨 주체.(= 사용자가 클릭한 아이템.)
// 		this.classList.add('active-tab');
// 		selected_item = item;
// 		// console.log(view_content_width); // 1000
// 		// console.log(item.index); 

// 		var distance = view_content_width * item.index;
// 		view.style.transform = 'translateX('+ (-1 * distance) +'px)';
// 	}
// } 


/**
 * -------------------------------------------
 * ex2. 인디케이터와 이전/다음 버튼 싱크
 * -------------------------------------------
 */

// window.onload = init;

// // 캐러셀 컴포넌트 초기화(Init, Initialization)
// function init() {
// 	var container, controls, view, active_index;
// 	container = document.querySelector('.carousel-container');
// 	controls  = container.querySelector('.carousel-controls');
// 	view      = container.querySelector('.carousel-view');

// 	// 현재 활성화된 콘텐츠의 인덱스
// 	active_index = 0;
// 	// view 영역 내부의 img 의 폭을 가져와서
// 	// 이미지 개수만큼의 폭을 view 영역에 설정한다.
// 	var view_contents        = view.querySelectorAll('img');
// 	var view_contents_length = view_contents.length;
// 	var view_content_width   = container.clientWidth;
// 	var view_width           = view_content_width * view_contents_length;	
// 	// console.log(view_content_width, view_contents_length, view_width);

// 	// .carousel-view 영역의 가로 폭을 포함하는 이미지 개수의 폭의 합 만큼 설정
// 	view.style.width = view_width + 'px';

// 	// 각 이미지를 순환 처리하여 컨테이너 요소의 너비 만큼 이미지 너비를 설정한다.
// 	for (var i=0; i<view_contents_length; i++ ) {
// 		var view_content = view_contents.item(i);
// 		// console.log(view_content); // 각 <img> 출력
// 		view_content.style.width = view_content_width + 'px';
// 	}

// 	// 버튼 이벤트 연결
// 	// 버튼의 부모 요소에게 이벤트 위임
// 	var prev_btn = controls.querySelector('.carousel-previous-btn');
// 	var next_btn = controls.querySelector('.carousel-next-btn');

// 	prev_btn.onclick = prevMoveCarouselContentView;
// 	next_btn.onclick = nextMoveCarouselContentView;

// 	// 이전 버튼
// 	function prevMoveCarouselContentView(){
// 		active_index = --active_index % view_contents_length;
// 		if ( active_index < 0) {
// 		  active_index = view_contents_length - 1;
// 		}
// 		// 인디케이터와 동일한 일을 하므로 아래 코드는 없어도 된다.
// 		// view.style.transform = 'translateX('+ (-1 * view_content_width * active_index) +'px)';
// 		indicator_items[active_index].onclick();
// 	}

// 	// 다음 버튼
// 	function nextMoveCarouselContentView(){
// 		active_index = ++active_index % view_contents_length;

// 		// 인디케이터와 동일한 일을 하므로 아래 코드는 없어도 된다.
// 		// 방식1. transform
// 		// view.style.transform = 'translateX('+ (-1 * view_content_width * active_index) +'px)';

// 		// 방식2. left
// 		// view.style.position = 'absolute';
// 		// view.style.top = '0px';
// 		// view.style.left = -1 * view_content_width * active_index +'px';
// 		indicator_items[active_index].onclick();
// 	}

//    /**
//    * --------------------------------------------------------------------------------------
//    * indicator Abstract(추상화)
//    * indicator를 사용자가 클릭 했을 때, 이벤트 발생하는 일
//    * ㄴ 수행하는 일 1. 이전에 활성화되었던 인디케이터는 비 활성화, 클릭한 인디케이터는 활성화
//    * ㄴ 수행하는 일 2. 뷰(carousel-view) 영역이 클릭한 인디케이터의 인덱스(순서)에 해당하는 위치로 이동
//    * --------------------------------------------------------------------------------------
//    */

// 	// '.active-tab' 추출하여 해당 요소에 붙인다. 
// 	// classList : IE10+
// 	// .classList.remove('active-tab');, .classList.add('active-tab');

// 	var indicator_items = controls.querySelectorAll('.carousel-tab');
// 	// console.log(indicator_items);

// 	for ( var i = 0, l=indicator_items.length; i<l; i++ ) {
// 		// console.log(indicator_items[i]);
// 		var item = indicator_items[i];
// 		item.index = i;
// 		indicator_items[i].onclick = activeSelectedItem;
// 	}

// 	var selected_item = null; // 아직 사용자는 아무 것도 선택하지 않았다.

// 	function activeSelectedItem() {
// 		var item = this;
// 		if ( selected_item !== null ) {
// 			// selected_item : 전에 클릭한 아이템을 기억하는 변수 
// 			selected_item.classList.remove('active-tab');
// 		} 
// 		// this : indicator_items. 함수를 실행시킨 주체.(= 사용자가 클릭한 indicator_items.)
// 		this.classList.add('active-tab');
// 		selected_item = item;
// 		// console.log(view_content_width); // 1000
// 		// console.log(item.index); // indicator_items 인덱

// 		var distance = view_content_width * item.index;

// 		// 인디케이터를 클릭했을 때 활성화 인덱스도 변경(싱크 작업)
// 		active_index = item.index;
// 		console.log('ind', active_index);
// 		view.style.transform = 'translateX('+ (-1 * distance) +'px)';
// 	}
// }

/**
 * --------------------------------
 * ex3. 'ex2' 리팩토링 - 완성
 * --------------------------------
 */

// 전역 공간
window.onload = init;

function init() {
  // 지역 공간

  var selected_num    = 0;
  var selected_tab    = null;
  var container       = document.querySelector('.carousel-container');
  var container_width = container.clientWidth;
  var view            = container.querySelector('.carousel-view');
  var view_contents   = view.querySelectorAll('img');
  var tabs            = container.querySelectorAll('.carousel-tab');
  var tabs_total      = tabs.length;
  var prev_button     = document.querySelector('.carousel-previous-btn');
  var next_button     = document.querySelector('.carousel-next-btn');

  view.style.width = container_width  * tabs_total + 'px';

  for ( var k=0, j=view_contents.length; k<j; k++ ) {
    view_contents[k].style.width = container_width + 'px';
  }

  for (var i=0, l=tabs_total; i<l; i++) {
    var tab = tabs[i];
    tab.num = i;
    tab.onclick = function() {
      selected_num = this.num;
      activeViewContent( this, selected_num );
    };
  }

  prev_button.onclick = prevViewContent;
  next_button.onclick = nextViewContent;

  function prevViewContent() {
    selected_num = --selected_num % tabs_total;
    if ( selected_num < 0 ) {
      selected_num = tabs_total - 1;
    }
    activeViewContent( tabs[selected_num], selected_num );
  }
  function nextViewContent() {
    selected_num = ++selected_num % tabs_total;
    activeViewContent( tabs[selected_num], selected_num );
  }

  function activeViewContent(tab, num) {
    if ( selected_tab !== null ) {
      selected_tab.classList.remove('active-tab');
    }
    tab.classList.add('active-tab');
    selected_tab = tab;
    // --------------------------------------------------------------
    view.style.left = -1 * num * container_width + 'px';
  }

  // 사용자 액션 시뮬레이션
  tabs[0].onclick();
}
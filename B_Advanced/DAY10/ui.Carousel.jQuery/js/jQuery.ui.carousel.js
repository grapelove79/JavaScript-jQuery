// --------------------------------------------------------------------------------------------
// TO DO:
// 0. 캐러셀 탭 패널을 감싼 `래퍼 요소의 너비`를 `탭 패널 너비 × 탭 패널 개수`로 설정한다.
// 1. 인디케이터 탭 버튼을 누르면 캐러셀 콘텐츠는 해당 콘텐츠를 보여준다.
// 2. 이전/다음 탐색 버튼을 누르면 캐러셀 콘텐츠는 슬라이드 되어 콘텐츠를 보여준다. (인디케이터 탭 업데이트)
// 3. 3초마다 자동으로 다음 콘텐츠를 보여줄 수 있도록 설정한다.
// 4. 마우스가 캐러셀 영역으로 들어가면 자동 넘김이 멈추고, 마우스가 캐러셀 영역 밖으로 나가면 자동 넘김이 다시 시작한다.
// 5. 인디케이터 탭 또는 이전/다음 탐색 버튼에 포커스가 되면 자동 넘김이 멈춰야 한다.
// 6. 자동 넘김 또는 넘김 시간 등은 옵션으로 설정할 수 있도록 변경한다.
// 7. 객체 지향 자바스크립트 방식으로 코드를 변경한다. (e.g: new Carousel('#bs3-headphone') )
// --------------------------------------------------------------------------------------------

(function(global, $) {
	'use strict';

	// 문서객체 참조
	var document = global.document;

	// 전역에 공개하여 사용하는 공통 함수 
	global.playAnimation = function(callback, time) {
		time = time || 3000;
		return global.setInterval(callback, time);
	}

	global.stopAnimation = function(stop_id) {
		global.clearInterval(stop_id);
	}

	// 플러그인 모듈 내부 어디에서든 참조 가능하도록 초기 변수 설정
	var $widget,
		$wrapper,
		$panels,
		$tablist,
		$tabs,
		$button_group,
		panel_width,
		// 초기 변수 
		stop_id 	 	= 0,
		// 옵션 설정
		settings,
		defaults = {
			'active_index'    : 0,
			'usign_animation' : true,
			'usign_autoPlay'  : true,
			'rolling_time'    : 2000
		};

	// 플러그인 : 인스턴스 메소드
	var carousel = function(options) {
		// 객체 합성. $.extend()
		settings = $.extend({}, defaults, options);
		$widget  = this; 
		// 컴포넌트 구현 초기화
		init();
		// 이벤트 연결
		bindEvents();
	};

	// 초기화 함수
	var init = function() {
		// this === jQuery {} => this는 jQuery 인스턴스
		// console.log('this:', this); // [article#bs3-headphone.ui-carousel]

		// 캐러셀 컴포넌트 객체 참조
		$tablist 		= $widget.find('.ui-carousel-tablist');
		$tabs    		= $widget.find('.ui-carousel-tab');
		$button_group   = $widget.find('.ui-carousel-button-group');
		$wrapper 		= $widget.find('.ui-carousel-tabpanel-wrapper');
		$panels  		= $wrapper.find('.ui-carousel-tabpanel');

		// 초기 실행
		settingWrapperSize();
		resizeCarouselHeight();
		settings.usign_autoPlay && autoPlay();
	};

	// 이벤트 연결 함수
	var bindEvents = function() {
		// 리사이즈 이벤트 핸들링
		$(global).on({
			'resize.change_carousel' : resizeCarouselHeight,
			'resize.change_wrapper'  : settingWrapperSize
		});

		/**
		 * -------------------------------------------------------------------
		 * 탭 이벤트 핸들링
		 * [문제 발생!] 아래 코드는 index를 가지고 오지 못한다. 
		 * jquery index() 메소드는 형제들 중에 몇번째 인지 반환. => a요소는 형제가 없다.
		 * -------------------------------------------------------------------
		 */
		// $tabs.on('click', activeTabPanel);

		/**
		 * -------------------------------------------------------------------
		 * [bad code] function이 중첩이 여러번 되어 클로저가 발생이 된다. 메모리 누수발생
		 * -------------------------------------------------------------------
		 */
		// $.each($tabs, function(index) {
		// 	var $tab = $tabs.eq(index);
		// 	$tab.on('click', function() {... });
		// });

		/**
		 * ------------------------------------------------------------
		 * [good code] 함수를 분리, index값을 가져오기 위해 proxy 사용
		 * ------------------------------------------------------------
		 * 1. [ES5] bind() 사용
		 * $tab.on('click', activeTabPanel.bind());
		 * ㄴ> 함수를 실행시키지 않고, 컨텍스트객체와 전달인자를 던질수 있다.
		 * ㄴ> 크로스 브라우징 이슈가 발생!
		 * ------------------------------------------------------------
		 * 2. jQuery.proxy() 사용
		 * ------------------------------------------------------------
		 * $tab.on('click', $.proxy(activeTabPanel, 컨텍스트객체, 인덱스));
		 * ㄴ> $.proxy() 프록시 우회 메소드를 사용하여 this 컨텍스트 참조 변수 설정. 
		 * ㄴ> 크로스 브라우징이 가능.
		 * ------------------------------------------------------------
		 */

		// [방법1] 
		// 매번 클릭할 때마다 '$(this)' 팩토리함수를 사용하기 때문에 비효적인 코드
		// 함수 안에 함수 안에 함수.. 함수가 중첩이 되는 구조가 됨. 
		// $.each($tabs, function(index) {
		// 	var $tab = $tabs.eq(index);
		// 	$tab.on('click', function(e) {
		// 		e.preventDefault();
		// 		console.log(index);
		// 		console.log($(this));
		// 	});
		// });

		// [방법2] '방법1'과 동일한 코드이지만 'jQuery.proxy()' 사용하는 것이 효율적
		$.each($tabs, function(index) {
			var $tab = $tabs.eq(index);
			// $tab.on('click', activeTabPanel.bind());
			// 컨텐스트객체로 '$tab'은 내부의 this는 jquery 인스턴스를 가리킴.
			$tab.on({
				'click' : $.proxy(activeTabPanel, $tab, index),
				'focus' : stopPlay
			});
		});

		///////////////////////////////////////////////////////////

		// 버튼 이벤트 핸들링
		$button_group.on('click', 'button', function(e) {
			// console.log('this', this);
			// console.log('e.target', e.target);
			// console.log($.$(this).index()); // button 형제중에 먼저 나온 것이 '0', 뒤에 있는 것이 '1'

			/**
			 * --------------------------------
			 * 방식1. if문
			 * 0번 인덱스는 previous, 1번 인덱스 next
			 * $.$(this).index()값이 '0'이며 거짓. 
			 * $.$(this).index()값이 '1'이며 참. 
			 * --------------------------------
			 */
			// if ( $.$(this).index() ) {
			// 	nextContent();
			// } else {
			// 	prevConent();
			// }

			/**
			 * -------------------------------------------------------------------
			 * 방식2. 삼항식
			 * 사용자 정의 `$.$()` 유틸리티 메소드 사용 : jQuery 인스턴스 캐시(1회만 생성)
			 * -------------------------------------------------------------------
			 */
			$.$(this).index() ? nextContent() : prevConent();
		});

		/**
		 * --------------------------------------------------------------------------------------
		 * 자동재생 이벤트 핸들링
		 * 사용자가 멈출수 없으면 접근성의 '운용의 용이성(Operable)'의 '충분한 시간 제공'하는 지침에 위배된다.
		 * 멈출 수 있게 하는 방법은 마우스가 캐로셀에 올라가면 멈춤. 
		 * ==> $widget에 이벤트를 설정. 
		 * --------------------------------------------------------------------------------------
		 */
	    $widget.on({
	      'mouseenter': stopPlay,
	      'mouseleave': autoPlay
	    });
	};

	// 래퍼 객체의 너비 설정 함수 
	var settingWrapperSize = function() {
		// 컴포넌트 폭
		panel_width = $widget.width();
		// 패널 폭 설정
		$panels.width( panel_width );

		// console.log(panel_width); // 탭 패널 너비
		// console.log($panels.length); // 이미지 개수 -> 8개
		// [To Do 1.] 탭 패널 너비 × 탭 패널 개수
		// 래퍼 폭 설정
		var wrapper_width = panel_width * $panels.length
		$wrapper.width(wrapper_width);

		// 현재 활성화된 페이지를 재정렬
		activeTabPanel(settings.active_index);
	};

	// 창 크기 조정에 따른 캐러셀 높이 조정 함수
	var resizeCarouselHeight = function() {
		$widget.height( $panels.height() );
	};

	// 탭패널 활성화하는 함수 
	var activeTabPanel = function(index, e) {
		e && e.preventDefault();
		// console.log(this); // this는 실제 dom객체다. 
		// console.log(index, this, this.jquery); // index번호, jquery인스턴스, jquery버전
		
		// 현재 활성화된 인덱스 
		// (인디케이트)를 클릭할 때만다 인덱스 값이 바뀐다. 
		// active_index를 통해서 값을 증감을 시킨다.
		settings.active_index = index; // 인디케이트 인덱스값.(활성화된 인덱스값 )
		moveWrapperPosX( settings.active_index );
		updateIndicators( settings.active_index );
	};

	// 래퍼 객체를 이동시키는 함수 
	var moveWrapperPosX = function( active_index ) {
		var distance_x = -panel_width * active_index + 'px';

		/**
		 * --------------------------------
		 * 애니메이션 설정
		 * usign_animation : true  => Animation
		 * usign_animation : false => NO Animation
		 * --------------------------------
		 */

		// 방식1.
		// // NO Animation : usign_animation 거짓이면 아래 코드 실행 
		// usign_animation || $wrapper.css('left', distance_x);
		// // Animation : usign_animation 참이면 아래 코드 실행 
		// usign_animation && $wrapper.animate({ 'left' : distance_x }, 600);

		// 방식2. 삼항식
		settings.usign_animation ?
			$wrapper.stop().animate({ 'left' : distance_x }, 600) :
			$wrapper.css('left', distance_x);
	}

	// 업데이트 인디케이터 함수 
	var updateIndicators = function( active_index ) {
		// $tabs.eq( active_index ).parent().addClass('active');
		// 만든 `radioClass()` 플러그인 사용
		$tabs.eq(active_index).parent().radioClass('active');
	}

	// 다음 콘텐츠 보기 함수 : 'active_index' 1씩 증가
	var nextContent = function() {
		// 0,1,2,3,4,5,6,7 다음에 다시 0 ==> 나머지 연산자 사용.
		settings.active_index = ++settings.active_index % $panels.length;
		activeTabPanel(settings.active_index);
	};

	// 이전 콘텐츠 보기 함수 : 'active_index' 1씩 감소
	var prevConent = function() {
		// 7,6,5,4,3,2,1,0 다음에 다시 7 ==> 나머지 연산자 사용.
		settings.active_index = --settings.active_index < 0 ? ($panels.length - 1) : settings.active_index;
		activeTabPanel(settings.active_index);
	};

	// 자동 재생 함수 
	var autoPlay = function() {
		stop_id = global.playAnimation(nextContent ,settings.rolling_time);
	};

	// 멈춤 함수
	var stopPlay = function() {
		global.stopAnimation(stop_id);
	};

	// 플러그인으로 함수 연결
	if ( !$.fn.carousel ) {
		$.fn.carousel = carousel;
		// 초기 옵션 설정(외부에서 접근 가능)
		$.fn.carousel.defaults = defaults;
	}

})(this, this.jQuery);
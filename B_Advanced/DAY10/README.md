###### JJ_CAMP_Advanced

[＜ INDEX](../../README.md)

## DAY 10
- jQuery Extenstion
- UI Components `carousel` (jQuery Plugin)

### jQuery Extenstion
- utilitles (사용자 정의 유틸리티 메소드)<br>
	-`$.includes()` jquery.string.includes.js   : 문자열 포함 여부 확인<br>
	-`$.repeat()`   jquery.string.repeat.js     : 문자열 반복처리 반환<br>
	-`$.currency()` jquery.currency.js 		    : 통화(원)로 변경<br>
	-`$.includes()` jquery.cache.js 			: jQuery 인스턴스 캐시(1회만 생성)<br>
- plugins<br>
	-`$radioClass`  jquery.radioClass.js 		: `addClass` / `removeClass` 토글

---

#### 1. 문자열 포함 여부 확인
```html
<p class="compare-string">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```

##### 사용자 정의 `$.includes()` 유틸리티 메소드 사용
```javascript
	(function(global, $) {
	'use strict';

		var includes = function(str, compare) {
		if ( $.type(str) !== 'string' ||  $.type(compare) !== 'string') {
			throw new Error('인자는 문 유형이어야 한다.');
			}
			return str.indexOf(compare) > -1;
		};

		if( !$.includes ) {
			// 유틸리티 메소드 정의
			$.includes = includes;
		}
	})(this, this.jQuery);
```

```javascript
	var $compare 		   = $('.compare-string');
	var include_text_abc   = $.includes( $compare.text(), 'abc' );
	console.log('include_text_abc', include_text_abc); // 'abc' 문자열이 없기 때문에 false

	var include_text_abc   = $.includes( $compare.text(), 'Lorem' );
	console.log('include_text_abc', include_text_abc); // 'Lorem' 문자열이 있기 때문에 true
```

#### 2. 문자열 반복처리 반환
```html
	<div class="assign-repeat-zone">
		<label>repeat <input type="text" class="repeat-str"></label>
		<label>count <input type="number" class="repeat-count" min="1" max="10" value="5" step="1"></label>
		<button type="button" class="process-btn">Processing</button>
	</div>
```

##### 사용자 정의 `$.repeat()` 유틸리티 메소드 사용
```javascript
	(function(global, $) {
	'use strict';
	var repeat = function(str, repeat_count) {
		// 전달 받은 문자를 repeat_count 만큼 반복하여 생성한 문자를 반환
		// 초기 값 설정 
		repeat_count = repeat_count || 1; 

		/**
		 * --------------------------------
		 * 검증
		 * --------------------------------
		 */
		if ( $.type(str) !== 'string' ) {
			throw new Error('인자는 문자 유형이어야 합니다.');
		}
		if ( $.type(repeat_count) !== 'number' ) {
			throw new Error('인자는 숫자 유형이어야 합니다.');
		}

		/**
		 * --------------------------------
		 * 반복 순환하여 문자열을 접합 로직
		 * --------------------------------
		 */
		 var processing_str = '';
		 // '--repeat_count' => 0이 되므로 거짓이 되서 '후감소'.
		 while( repeat_count-- ) {
			processing_str +=str;
		}
		return processing_str;
	};

	if( !$.repeat ) {
		// 유틸리티 메소드 정의
		$.repeat = repeat;
	}  

	})(this, this.jQuery);
```

```javascript
	var $compare 	  = $('.compare-string');
	var $repeat_zone  = $('.assign-repeat-zone');
	var $repeat_str   = $('.repeat-str', $repeat_zone);
	var $repeat_count = $repeat_zone.find('.repeat-count');
	var $repeat_btn   = $repeat_zone.children('button');

	var processingRepeatProcess = function() {
		var input_str     = $repeat_str.val();
		var input_count   = Number( $repeat_count.val() );
		var processed_str = $.repeat( input_str, input_count );
		$compare.text(processed_str);
	};

	$repeat_btn.on('click', processingRepeatProcess);
```

#### 3. 통화 변경 처리
```html
	<p data-currency>267000</p>
	<p data-currency="$">128000</p>
	<p data-currency="₩">3201290</p>
	<p data-currency="¥">510</p>
	<p data-currency>9012510000</p>
	<p data-currency="¥">1245510</p>
```

##### 사용자 정의 `$.repeat()` 유틸리티 메소드 사용
```javascript
(function(global, $) {
	'use strict';

	// 끝에서 3번째 자리마다 콤마(,)를 추가
	var addComma = function(n) {
		// 문자화 -> 배열화
		n = (n + '').split('');
		for( var i=n.length - 3; i>0; i=i-3 ) {
			n.splice(i, 0, ',');
		}
		return n.join('');
	};

	// 통화(원)로 변경
	var currency = function(n, sign, sign_position) {
		sign_position = sign_position || 'after';
		sign = sign || '원';
		// 전달 받은 n값의 끝에서 33번째 자리마다 콤마(,)를 추가
		// 통화 기호 '원',' 엔' 문자열 집합
		var change_currency = addComma(n);
		if ( sign_position !== 'after' ) {
			change_currency = sign + change_currency;
		} else {
			change_currency += sign;
		}
		return change_currency;
	};

	if( !$.currency ) {
		// 유틸리티 메소드 정의
		$.currency = currency;
	}
})(this, this.jQuery);
```

```javascript
	var $currencies = $('[data-currency]');

	// jQuery 반복순환문 처리 유틸리티 메소드 ($.each)
	$.each($currencies, function(index) {
		var $c_el = $currencies.eq(index);
		// console.log($c_el);
		// console.log( $c_el.attr('data-currency') ); //
		// console.log( !!$c_el.attr('data-currency') ); //true

		var currency;
		var sign = $c_el.attr('data-currency');
		// sign 값이 true라면
		if ( !!sign ) {
			// 사용자 정의 유틸리티 메소드 $.currency() 사용.
			currency = $.currency( $c_el.text(), sign, 'before' );
		} else {
			currency = $.currency( $c_el.text() );
		}
		$c_el.text( currency );
	});
```

#### 4. `href` 속성 출력
```html
	<div class="wrapper">
		<ul class="javascript-library-frameworks">
			<li><a href="http://jquery.com/">jQuery Library</a></li>
			<li><a href="http://angular.io/">Angular.js Framework</a></li>
			<li><a href="https://facebook.github.io/react/">React.js Framework</a></li>
			<li><a href="https://vuejs.org/">Vue.js Framework</a></li>
			<li><a href="http://vanilla-js.com/">Vanilla JavaScript</a></li>
		</ul>
		<p class="print-web-address">print-web-address</p>
	</div>
```

##### 사용자 정의 `$.cache()` 유틸리티 메소드 사용
```javascript
(function(global, $) {
	'use strict';

	var cache = function(dom_el) {
		// [검증] dom_el --> dom element여야 한다 
		if ( dom_el.nodeType !== 1 ) {
			throw new Error('문서객체여야 합니다');
		}

		/**
		 * -----------------------------------------------
		 * 메모리 대상
		 * jQuery() 팩토리 함수를 사용(1회)한 결과를 저장
		 * -----------------------------------------------
		 * jQuery.data() 유틸리티 메소드 활용
		 * <설정할 때> jQuery.data(dom_el, key, value)
		 * <가져올 때> jQuery.data(dom_el, key)
		 * -----------------------------------------------
		 */
		var $this = $.data(dom_el, '$this');
		console.log('$this', $this); // 한번은 undefined 되고 다시 클릭하면 [a].
		return $this ? $this : $.data(dom_el, '$this', $(dom_el));
	};

	if( !$.cache ) {
		// 유틸리티 메소드 정의
		$.cache = cache;
		// 별칭 -> Alias
		$.$ = $.cache;
	}
})(this, this.jQuery);
```

```javascript
	var $web_address_list  = $('.javascript-library-frameworks');
	var $web_address_links = $('a', $web_address_list);
	var $print_web_address = $('.print-web-address');

	$web_address_links.on('click', function(e) {
		// 브라우저 기본 차단
		e.preventDefault();
		// console.log(this); // DOM Element, not jQuery Instance

		// 1. $.cache()
		// var href = $.cache(this).attr('href');

		// 2. $.$() => 별칭 사용
		var href = $.$(this).attr('href');
		$print_web_address.text(href);
	});
```

---

### UI Components `carousel` (jQuery Plugin)

```html
  <article id="bs3-headphone" class="ui-carousel">
    <h1 class="ui-carousel-headline">Beats Solo3 Wireless On-Ear Headphones – Rose Gold</h1>
    <div role="tablist" class="ui-carousel-tablist">
      <ul role="presentation">
        <li class="active"><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View Front"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 1"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 2"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 3"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 4"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 5"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 6"></a></li>
        <li><a class="ui-carousel-tab" href="" role="tab" aria-label="Headphone View 7"></a></li>
      </ul>
    </div>
    <div class="ui-carousel-button-group" role="group">
      <button type="button" class="ui-carousel-prev-button" aria-label="previous content"></button>
      <button type="button" class="ui-carousel-next-button" aria-label="next content"></button>
    </div>
    <div role="group" class="ui-carousel-tabpanel-wrapper">
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2.jpeg" alt="MNET2">
      </figure>
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2_AV1.jpeg" alt="MNET2_AV1">
      </figure>
      <figure class="ui-carousel-tabpanel active" role="tabpanel">
        <img src="images/MNET2_AV2.jpeg" alt="MNET2_AV2">
      </figure>
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2_AV3.jpeg" alt="MNET2_AV3">
      </figure>
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2_AV4.jpeg" alt="MNET2_AV4">
      </figure>
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2_AV5.jpeg" alt="MNET2_AV5">
      </figure>
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2_AV6.jpeg" alt="MNET2_AV6">
      </figure>
      <figure class="ui-carousel-tabpanel" role="tabpanel">
        <img src="images/MNET2_AV7.jpeg" alt="MNET2_AV7">
      </figure>
    </div>
  </article>
```

#### TO DO
0. 캐러셀 탭 패널을 감싼 `래퍼 요소의 너비`를 `탭 패널 너비 × 탭 패널 개수`로 설정한다.
1. 인디케이터 탭 버튼을 누르면 캐러셀 콘텐츠는 해당 콘텐츠를 보여준다.
2. 이전/다음 탐색 버튼을 누르면 캐러셀 콘텐츠는 슬라이드 되어 콘텐츠를 보여준다. (인디케이터 탭 업데이트)
3. 3초마다 자동으로 다음 콘텐츠를 보여줄 수 있도록 설정한다.
4. 마우스가 캐러셀 영역으로 들어가면 자동 넘김이 멈추고, 마우스가 캐러셀 영역 밖으로 나가면 자동 넘김이 다시 시작한다.
5. 인디케이터 탭 또는 이전/다음 탐색 버튼에 포커스가 되면 자동 넘김이 멈춰야 한다.
6. 자동 넘김 또는 넘김 시간 등은 옵션으로 설정할 수 있도록 변경한다.
7. 객체 지향 자바스크립트 방식으로 코드를 변경한다. (e.g: new Carousel('#bs3-headphone') )

```javascrpt
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

		$.each($tabs, function(index) {
			var $tab = $tabs.eq(index);
			// $tab.on('click', activeTabPanel.bind());
			// 컨텐스트객체로 '$tab'은 내부의 this는 jquery 인스턴스를 가리킴.
			$tab.on({
				'click' : $.proxy(activeTabPanel, $tab, index),
				'focus' : stopPlay
			});
		});

		// 버튼 이벤트 핸들링
		$button_group.on('click', 'button', function(e) {
			$.$(this).index() ? nextContent() : prevConent();
		});

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

		settings.usign_animation ?
			$wrapper.stop().animate({ 'left' : distance_x }, 600) :
			$wrapper.css('left', distance_x);
	}

	// 업데이트 인디케이터 함수 
	var updateIndicators = function( active_index ) {
		// $tabs.eq( active_index ).parent().addClass('active');
		// 만든 radioClass 플러그인 사용
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
```

```javascript
(function(global, $){
	'use strict';
	// console.log('jquery.fn.carousel', $.fn.carousel);

	// 사용자 옵션 설정
	$('#bs3-headphone').carousel({
		'active_index'    : 0,
		'usign_animation' : true,
		'usign_autoPlay'  : true,
		'rolling_time'    : 1000
	});

})(this, this.jQuery);
```
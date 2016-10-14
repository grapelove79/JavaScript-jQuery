'use strict';

	/**
	 * --------------------------------------------------------------
	 * [TO DO] 함수 리터럴과 간단한 문서객체 제어
	 * [STEP 1] .content 요소를 선택하여 화면에서 보이지 않도록 만든다.
	 * [STEP 2] 문서에서 .btn-show-content 버튼을 선택한다.
	 * [STEP 3] 선택한 버튼을 사용자가 클릭하면 .content요소를 화면에 보이게 만든다. 
	 * --------------------------------------------------------------
	 */


	/**
	 * --------------------------------
	 * 방법 1.
	 * --------------------------------
	 */

	// var content = document.querySelector('.content');
	// content.style.display = 'none';
	// var btn_show_content = document.querySelector('.btn-show-content');
	// var btn_hide_content = document.querySelector('.btn-hide-content');

	// btn_show_content.onclick = function() {
	// 	content.style.display = 'block';
	// };

	// btn_hide_content.onclick = function() {
	// 	content.style.display = 'none';
	// };


	/**
	 * --------------------------------
	 * 방법 2. onclick();
	 * --------------------------------
	 */

	var content = document.querySelector('.content');
	// content.style.display = 'none';
	var btn_show_content = document.querySelector('.btn-show-content');
	var btn_hide_content = document.querySelector('.btn-hide-content');

	btn_show_content.onclick = function() {
		content.style.display = 'block';
	};

	// 값을 참조하는 유형
	// 참조된 값을 다른 변수에 할당한다면
	// 그 값을 복사가 아닌 참조로 동일한 데이터를 가리키게 된다.
	btn_show_content.onmouseover = btn_show_content.onclick;

	btn_hide_content.onclick = function() {
		content.style.display = 'none';
	};

	btn_hide_content.onclick(); 
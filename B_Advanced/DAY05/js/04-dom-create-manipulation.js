// 'use strict';

/**
 * --------------------------------
 * native 작성
 * --------------------------------
 */

// var target_node = query('.container');
// var taret_parent = target_node.parentNode;
// var insert_node;

// // insert_node로 <main role="main" class="main-content">main area</main> 동적 생성
// insert_node = createEl({
//     'role' : 'main',
//     'class' : 'main-content'
//     }, 'Main Area');
//     target_node.parentNode.insertBefore(insert_node, target_node);

// /**
//  * --------------------------------
//  * Custom
//  * --------------------------------
//  */

// var target_node = query('.container');
// var taret_parent = target_node.parentNode;
// var insert_node;

// // insert_node로 <main role="main" class="main-content">main area</main> 동적 생성
// insert_node = createEl({
//     'role' : 'main',
//     'class' : 'main-content'
//     }, 'Main Area');

//     // target_parent.insertBefore(insert_node, target_node);
//     insertBefore(insert_node, target_node);
//     before(target_node, insert_node);


/**
 * --------------------------------
 * ex1. 2초뒤 동작
 * --------------------------------
 */

// var target_node = query('.container');

// insert_node = createEl('main', {
//     'role' : 'main',
//     'class' : 'main-content'
//     }, 'Main Area');

//     window.setTimeout(function() {
//         insertBefore(insert_node, target_node);
//     }, 2000);


/**
 * --------------------------------
 * ex2. 2초후 main 동적 생성
 * <main role="main" class="main-content">Main Area</main>
 * --------------------------------
 */

(function(global) {
    var target_node = query('.container');
// insert_node 생성
var insert_node = createEl('main', {
      'role': 'main',
      'class': 'main-content'
    }, 'Main Area');

    // Native
    // target_node.parentNode.insertBefore(insert_node, target_node);

    // Custom
    // window.setTimeout(function() {
    //   insertBefore(insert_node, target_node);
    // }, 2000);
    // before(target_node, insert_node);
    window.setTimeout(function() {
      insertAfter(insert_node, query('#target'));
    }, 1000);
}(this));




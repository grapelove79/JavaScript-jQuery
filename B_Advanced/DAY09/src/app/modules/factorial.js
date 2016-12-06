/**
 * --------------------------------
 * ex. ES3
 * --------------------------------
 */

// 'use strict';
// var temp = 'factorial.js';

// // factorial 함수 정의
// function factorial(n) {
// 	// factorial
// 	return n < 2 ? 1 : n * factorial( n - 1 );
// }

// module.exports = factorial;

/**
 * --------------------------------
 * ex. ECMAScript 2015: ES6 6th Edition
 * --------------------------------
 */

let temp = 'factorial.js';

// factorial 함수 정의
let factorial = (n) => n < 2 ? 1 : n * factorial( n - 1 );

module.exports = factorial;



















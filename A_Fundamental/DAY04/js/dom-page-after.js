'use strict';

/**
 * --------------------------------
 * ex1.
 * --------------------------------
 */

// var page, article, brand, slogan;
// page = document.querySelector('#page');
// article = document.querySelector('.article');
// brand = document.querySelector('.brand');
// slogan = document.querySelector('.slogan');

// console.log('%c---------------------------', 'color: #3d9a21');

// if( isDataType(page) !== 'null') { console.log('page는 null이 아닙니다'); } 
// if( isDataType(article) !== 'null') { console.log('article null이 아닙니다'); } 
// if( isDataType(brand) !== 'null') { console.log('brand는 null이 아닙니다'); } 
// if( isDataType(slogan) !== 'null') { console.log('slogan는 null이 아닙니다'); } 

/**
 * --------------------------------
 * ex2. checkDOMElement() 헬퍼 함수 이용
 * --------------------------------
 */
var page, article, brand, slogan;
page = document.querySelector('#page');
article = document.querySelector('.article');
brand = document.querySelector('.brand');
slogan = document.querySelector('.slogan');

console.log('%c---------------------------', 'color: #3d9a21');

checkDOMElement(page);
checkDOMElement(article);
checkDOMElement(brand);
checkDOMElement(slogan);
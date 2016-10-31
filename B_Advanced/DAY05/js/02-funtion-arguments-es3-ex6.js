'use strict';

// [ES3] arguments
function getSomeCoffe3(collection) {
    console.log(collection); // 1
    console.log('arguments: ', arguments); // [1, 23, 4, 5, 6, 7]
}
getSomeCoffe3(1,23,4,5,6,7);

// [ES6] rest parameter
function getSomeCoffe6(...collection) {
    console.log('collection', collection); //  [1, 23, 4, 5, 6, 7]
    console.log('arguments', arguments); // [1, 23, 4, 5, 6, 7]
}
getSomeCoffe6(1,23,4,5,6,7);


// [ES3] arguments룰 0번 인덱스를 빼서 메서드 빌려쓰기 call. 
function getSomeCoffe3() {
    var who = arguments[0];
    var people_counts = [].slice.call(arguments, 1)
    console.log('who', who); // yamoo
    console.log('people_counts', people_counts); // [2, 3, 4, 5]
}
getSomeCoffe3('yamoo', 2,3,4,5);


// [ES6] rest parameter
// chrome, firefox
function getSomeCoffe6(who, ...people_counts) {
    console.log('who', who); // yamoo
    console.log('people_counts', people_counts); // [2, 3, 4, 5]
}
getSomeCoffe6('yamoo', 2,3,4,5);


// [ES6] default parameter & template string & interpolation
// sass문법과 유사. ${radius}; => interpolation
function borderRadious( radius = '4px' ) {
    return `
        -webkit-border-radius: ${radius};
        -moz-border-radius: ${radius};
        border-radius: ${radius};
    `;
}

borderRadious() // 초기값 4px
borderRadious('6px') // 6px로 들어감.
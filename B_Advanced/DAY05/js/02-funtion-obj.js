'use strict';

/**
 * --------------------------------
 * call(), apply() 매소드 빌려쓰기 패턴
 * --------------------------------
 */

var a = {
  'name': 'alpha',
  'getName': function() {
    return this.name;
  }
};

var b = {
  'name': 'beta',
  'nickname': 'betago',
  'setName': function(name, nickname) {
    this.name = name;
    this.nickname = nickname;
  }
};

// .call(), .apply()는 기능면에서는 유사하나,
// 전달 인자의 개수가 2개 이상일 때, .call()의 경우 낱개로 전달
// .apply()의 경우는 배열 유형으로 전달

// a.getName.call(b); // 'beta'
// a.getName.apply(b); // 'beta'

// b.setName.call(a, '알파', '알파고'); // a { 'name': '알파', ... }
// b.setName.apply(a, ['알파', '알파고']); // a { 'name': '알파', ... }

/**
 * ----------------------------------------------
 * arguments 객체, ES3 (ECMAScript 3rd Edition)
 * arguments 객체(전달된 인자들의 집합)
 * arguments 객체의 원소 개수: arguments.length 
 * length 속성 값을 알고 있다면 순환 처리(for, do ~ while, while)가 가능
 * arguments[0] = ''; // 설정도 가능.
 * arguments: 유사 배열(like Array Object)
 * .length 속성을 가짐, .push(), .pop() 배열 메소드는 가지고 있지 않음.
 * ----------------------------------------------
 */

// function sumArg() {
//     var i=0, m=i, l=arguments.length;
//     for(; i<l; i++) {
//      m += arguments[i];
//     }
//     return m;  
// }

function sum() {
    var k = 0, arg, l = arguments.length;
    while( (arg=arguments[--l]) ) {
      k += arg;
    }
    return k;
}

sum(213, -10, 90, 11, 1023); 
sum(1, 2, 3, 4, -109); 
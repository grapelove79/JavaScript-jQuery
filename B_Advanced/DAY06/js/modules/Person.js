'use strict';

/**
 * --------------------------------
 * 사람(person)
 *   - 이름(name)
 *   - 성별(gender)
 *   - 나이(age)
 *   - 키(height)
 *   - 몸무게(weight)
 *   - 취미(hobby)
 *   - 건강(health)
 *   - 질병(sickness)
 * --------------------------------
 */

/**
 * --------------------------------
 * [공개] Golbal Function
 * 안티패턴. 전역을 오염시키는 행위
 * --------------------------------
 */

// // 생성자 함수 @consturctor Person
// function Person(name, gender, age, height, weight, hobby, health, sickness) {
// 	this.name 		= name;
// 	this.gender 	= gender;
// 	this.age 		= age;
// 	this.height 	= height;
// 	this.weight 	= weight;
// 	this.hobby 		= hobby;
// 	this.health 	= health;
// 	this.sickness 	= sickness;

// 	// Methods
// 	this.eat		= eat;
// 	this.run 		= run;
// 	this.sleep		= sleep;
// }

// // Golbal Function
// function eat(what) {
// 	return this.name + '은 ' + what + '먹었다';
// }

// function run(how_much) {
// 	return this.name + '은 ' + how_much + '만큼 달렸다.';
// }

// function sleep(time) {
// 	return this.name + '은 ' + time + '만큼 잤다.';
// }


/**
 * --------------------------------------------------------------
 * [비공개] IIFE 패턴 (클로저 활용)
 * 자바스크립트 모듈 패턴
 * 모듈이 존재하지 않았기 때문에 이와 같은 방법을 사용하여 모듈을 생성한다.
 * 단, ES6에서는 공식으로 모듈을 언어 차원에서 지원한다.
 * --------------------------------------------------------------
 */

// (function(global) {
// 	// 생성자 함수 @consturctor Person
// 	function Person(name, gender, age, height, weight, hobby, health, sickness) {
// 		this.name 		= name;
// 		this.gender 	= gender;
// 		this.age 		= age;
// 		this.height 	= height;
// 		this.weight 	= weight;
// 		this.hobby 		= hobby;
// 		this.health 	= health;
// 		this.sickness 	= sickness;

// 		// Methods
// 		this.eat		= eat;
// 		this.run 		= run;
// 		this.sleep		= sleep;
// 	}

// 	// Local Scope Function
// 	// Private Members
// 	function eat(what) {
// 		return this.name + '은 ' + what + '먹었다';
// 	}

// 	function run(how_much) {
// 		return this.name + '은 ' + how_much + '만큼 달렸다.';
// 	}

// 	function sleep(time) {
// 		return this.name + '은 ' + time + '만큼 잤다.';
// 	}

// 	// 모듈 공개
// 	global.Person = Person;

// }(this));

/**
 * --------------------------------
 * 네임스페이스 
 * --------------------------------
 */

// (function(global, y9) {
// 	// 생성자 함수 @consturctor Person
// 	function Person(name, gender, age, height, weight, hobby, health, sickness) {
// 		this.name 		= name;
// 		this.gender 	= gender;
// 		this.age 		= age;
// 		this.height 	= height;
// 		this.weight 	= weight;
// 		this.hobby 		= hobby;
// 		this.health 	= health;
// 		this.sickness 	= sickness;

// 		// Methods 
// 		this.eat		= eat;
// 		this.run 		= run;
// 		this.sleep		= sleep;
// 	}

// 	// Local Scope Function
// 	// Private Members
// 	function eat(what) {
// 		return this.name + '은 ' + what + '먹었다';
// 	}

// 	function run(how_much) {
// 		return this.name + '은 ' + how_much + '만큼 달렸다.';
// 	}

// 	function sleep(time) {
// 		return this.name + '은 ' + time + '만큼 잤다.';
// 	}

// 	// 모듈 공개
// 	// global.Person = Person;
// 	y9.Person = Person;

// })(this, (this.y9 = this.y9 || {}) );


/**
 * --------------------------------
 * 네임스페이스
 * prototype 능력 확장 
 * --------------------------------
 */

(function(global, y9) {
	// 생성자 함수 @consturctor Person
	function Person(name, gender, age, height, weight, hobby, health, sickness) {
		this.name 		= name;
		this.gender 	= gender;
		this.age 		= age;
		this.height 	= height;
		this.weight 	= weight;
		this.hobby 		= hobby;
		this.health 	= health;
		this.sickness 	= sickness;

		// Methods ( 공통 : 생성된 객체가 모두 함께 사용 )
		// this.eat			= eat;
		// this.run 		= run;
		// this.sleep		= sleep;
	}

	// 프로토타입 객체
	// 생성자함수의 prototype 속성으로 프로토타입 객체에 접근 가능
	// 자바스크립트의 모든 함수는 선언과 동시에 기본적으로 프로토타입 객체도 함께 생성

	// 생성자함수.prototype
	// Methods (공통: 생성된 객체가 모두 함께 사용)
	// Person.prototype; // {}
	Person.prototype.eat = eat;
	Person.prototype.run = run;
	Person.prototype.sleep = sleep;

	// Local Scope Function
	// Private Members
	function eat(what) {
		return this.name + '은 ' + what + '먹었다';
	}

	function run(how_much) {
		return this.name + '은 ' + how_much + '만큼 달렸다.';
	}

	function sleep(time) {
		return this.name + '은 ' + time + '만큼 잤다.';
	}

	// 모듈 공개
	// global.Person = Person;
	y9.Person = Person;

})(this, (this.y9 = this.y9 || {}) );

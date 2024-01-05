"use strict";
// 1  
function test() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++;
	};
}

let func1 = test(); // первый счетчик
func1();  //выведет 1
func1();  //выведет 2

let func2 = test(); // второй счетчик
func2();  //выведет 1
func2();  //выведет 2

// 2
function test() {
	let num = 10;
	
	return function() {
		console.log(num);
		num--;
	};
}

let func11 = test(); // первый счетчик
func11();  //выведет 1
func11();  //выведет 2

// 3
function test() {
	let num = 10;
	
	return function() {
		if (num > 0 ) {
			console.log(num);
			num--;
		}
		if (num <= 0) {
			console.log('Отсчет окончен');
		}
	};
}

let func111 = test(); // первый счетчик
func111();  //выведет 1
func111();  //выведет 2
func111();  //выведет 1
func111();  //выведет 2
func111();  //выведет 1
func111();  //выведет 2
func111();  //выведет 1
func111();  //выведет 2
func111();  //выведет 1
func111();  //выведет 2
func111();  //выведет 1
func111();  //выведет 2



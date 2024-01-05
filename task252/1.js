"use strict";
// 1 Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
function func(num1) {
	return function(num2) {
		return function(num3) {
			return num1 + num2 + num3;
		};
	};
}
console.log(func(2)(3)(4)); 

// 2 Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
function func(num1) {
	return function(num2) {
		return function(num3) {
			return function(num4) {
				return function(num5) {
					return  arr = [num1, num2,  num3, num4, num5];
				};
			};
		};
	};
}
let arr = [];
console.log(func(2)(3)(4)(5)()); 
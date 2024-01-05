"use strict";
// 1 Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

let math = {
	n1: function(num) {
		let sum = 0;
		for (let elem of num) {
			sum += elem;
		}
		return sum;
	},
	n2: function(num) {
		let sum = 0;
		for (let elem of num) {
			sum += elem * elem;
		}
		return sum;
	},
	n3: function(num) {
		let sum = 0;
		for (let elem of num) {
			sum += Math.pow(elem, 3);
		}
		return sum;
	},
};

let arr = [1, 2, 3]
console.log(math.n1(arr)); // выведет 6
console.log(math.n2(arr));
console.log(math.n3(arr));
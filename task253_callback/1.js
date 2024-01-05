"use strict";
// 1  Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}
let result = each([1, 2, 3, 4, 5], function(num) {
	return num ** 2;
});
console.log(result);

// 2 Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
function each(arr, callback) {
	let result2 = [];
	for (let elem of arr) {
		result2.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result2;
}
let result2 = each(['123', 'abc'], function(num) {
	return num.split("").reverse().join("");
});
console.log(result2);

// 3 Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
function each(arr, callback) {
	let result3 = [];
	for (let elem of arr) {
		result3.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result3;
}
let result3 = each(['123', 'abc'], function(num) {
	let splitted = num.split("");
	return splitted[0].toUpperCase();
});
console.log(result3);
"use strict";
// 1 Код должен найти сумму результатов работы двух функций:
function func1() {
	return 3;
}
function func2() {
	return 5;           //заменила console.log на return
}console.log(func1() + func2());

// 2 Код должен найти сумму элементов массива:
function sum(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;
	}return res;
}console.log(sum([1, 2, 3, 4, 5]));

// 3 Код должен найти сумму элементов массива, однако, ничего не выводит в консоль:
let arr = [1, 2, 3, 4, 5];
function func(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;
	}
	console.log(res);
}func(arr);

// 4 Код должен найти сумму результатов работы двух функций:
function func11() {
	return 3;
}
function func22() {
	return 5;
}console.log(func11() + func22());

// 5 Код должен найти сумму элементов массива:
function summ(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  return sum;
}console.log(summ([1, 2, 3, 4, 5]));



"use strict";
// 1 Определите, не запуская код, что выведется в консоль:
function func(localNum) {
	console.log(localNum);
}func(1); //  1

// 2 Определите, не запуская код, что выведется в консоль:
function func(localNum) {
	console.log(localNum);
}
let num2 = 1;
func(num2); // 1

// 3 
function func(localNum) {
	console.log(localNum);
}
let num3 = 1;
func(num3);  // 1 тк функция была вызвана до присваивания 2
num3 = 2;

// 4 
let num4 = 1;
function func(localNum) {
	console.log(localNum);
}
num4 = 2;
func(num4); //2 тк мы поменяли значение вне функции и передали уже его до вызова

// 5
function func(localNum) {
	localNum = 2;
}
let num5 = 1;
func(num5);
console.log(num5); // 1 

// 6
function func(localNum) {
	num = 2;
}
let num = 1;
func(num);
console.log(num); // 2 тк это глобальная переменная и мы просто поменяли ее значение в функции


"use strict";
// 1 Даны числа. Найдите минимальное и максимальное число.
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// 187 Выведите на экран случайное целое число от 1 до 100.

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
} console.log(getRandomInt(1, 100));


// 182 -2 С помощью цикла заполните массив 10-ю случайными целыми числами.
let zxc = [];
for (let i = 0; i < 10; i++){
  function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  zxc.push(getRandomInt(1, 100));
}
console.log(zxc);
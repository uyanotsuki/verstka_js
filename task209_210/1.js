"use strict";
// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата

function zxc(num) {
  let iter = 0;
  while (num >= 10){
    num = num / 2;
    iter++;
  }return iter;
}
console.log(zxc(25));

// 210 Перепишите ее в сокращенной форме согласно изученной теории.
function func(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}
console.log(func(3, 4));
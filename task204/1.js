"use strict";
// 1 
function func(num = 5) {
	console.log(num * num);
}
func(2);
func(3);
func();
// 1. func(2) - выведет в консоль 4, так как 2 * 2 = 4.
// 2. func(3) - выведет в консоль 9, так как 3 * 3 = 9.
// 3. func() - выведет в консоль 25, так как значение по умолчанию для параметра num равно 5, и функция выведет 5 * 5 = 25.

// 2
function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}
func(2, 3);
func(3);
func();

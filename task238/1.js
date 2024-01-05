"use strict";
// 1 Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел.
let obj = {
	func1: function() {return 1},
	func2: function() {return 2},
	func3: function() {return 3},
};
let x = obj.func1() + obj.func2() + obj.func3();

console.log(x);

// 2 Переберите созданный объект циклом и выведите результаты работы функций в консоль.
for (let elem in obj) {
	console.log(obj[elem]());
}

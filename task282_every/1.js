"use strict";
// 1  Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
let arr = [1, 2, 3, 4, 5];
let check = arr.every(function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});
console.log(check);

// 2 Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
let arr2 = [1, 2, 3, 4, 5];
let check2 = arr2.every(function(elem, index) {
	if (elem * (index + 1) < 30) {
		return true;
	} else {
		return false;
	}
});
console.log(check2);


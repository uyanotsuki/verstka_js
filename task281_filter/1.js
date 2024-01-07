"use strict";
// 1  Дан массив с числами. Оставьте в нем только положительные числа.
let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
let res = arr.filter(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});
console.log(res);

// 2 Дан массив с числами. Оставьте в нем только отрицательные числа.
let arr2 = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
let res2 = arr2.filter(function(elem) {
	if (elem < 0) {
		return true;
	} else {
		return false;
	}
});
console.log(res2);

// 3 Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.
let arr3 = [-2, 5, 1, -5, -1, 1, 3, 4, -1, 9];
let res3 = arr3.filter(function(elem) {
	if (elem > 0 && elem < 10) {
		return true;
	} else {
		return false;
	}
});
console.log(res3);

// 4 Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arr4 = ['shinzou', 'wo', 'sasageyo'];
let res4 = arr4.filter(function(elem) {
	if (elem.length >= 5) {
		return true;
	} else {
		return false;
	}
});
console.log(res4);

// 5 Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
let arr5 = [-2, 5, 1, -5, -1, 1, 3, 4, -1, 9];
let res5 = arr5.filter(function(elem, index) {
		if (elem * (index + 1) < 30) {
			return true;
		} else {
			return false;
		}
});
console.log(res5);

// 6 Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.
let arr6 = [1, 2, [3, 4], 5, [6, 7]];
let res6 = arr6.filter(function(elem) {
		if (typeof elem == 'object') {
			return false;
		} else {
			return true;
		}
});
console.log(res6);


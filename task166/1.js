"use strict";
// 1 
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

// 2
for (let i = 10; i >= 0; i--) {
	console.log(i);
}
// 3
for (let i = 10; i >= 0; i--) {
	console.log(i);
}
// 4
let i = 0;
while (i <= 10) {
	console.log(i);
	i++;
}
// 5 Код должен найти сумму целых чисел от 1 до 10:
let res1 = 0;
for (let i = 1; i <= 10; i++) {
	res1 += i;
}console.log(res1);

// 6
let res2 = 1;
for (let i = 1; i <= 10; i++) {
	res2 *= i;
}console.log(res2);

// 7
let arr1 = [1, 2, 3, 4, 5];
let sum1 = 0;

for (let elem of arr1) {
	sum1 += elem;
}console.log(sum1); // должно вывести 15

// 8 Код должен найти сумму элементов массива:

let arr2 = ['1', '2', '3', '4', '5'];
let sum2 = 0;
for (let elem of arr2) {
	sum2 += +elem;
}console.log(sum2); // должно вывести 15

// 9 Код должен найти сумму элементов массива:

let arr3 = ['1', '2', '3', '4', '5'];
let sum3 = 0;
for (let elem of arr3) {
	sum3 += +elem;
}
console.log(sum3); // должно вывести 15


// 10 Код должен найти сумму элементов массива, однако, всегда выводит NaN:
let arr4 = ['1', '2', '3', '4', '5'];
let sum4 = 0;
for (let i = 0; i < arr4.length; i++) {
	sum4 += +arr4[i];
}console.log(sum4); 

// 11 Код должен найти сумму элементов массива:
let arr5 = ['1', '2', '3', '4', '5'];
let sum5 = 0;
for (let i = 0; i <= arr5.length - 1; i++) {
	sum5 += +arr5[i];
}console.log(sum5); 

// 12 Код должен найти сумму элементов массива:
let arr123 = ['1', '2', '3', '4', '5'];
let sumy = 0;
for (let i = 0; i < arr123.length; i++) {
    sumy += +arr123[i];
}console.log(sumy);

// 13 Код должен возвести в квадрат каждый элемент массива:
let arr6 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr6.length; i++) {
	arr6[i] = arr6[i] ** 2;
}console.log(arr6);


// 14 Код должен заполнить массив числами от 1 до 5:
let arr7 = [];
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}console.log(arr7);

// 15 Код должен найти сумму элементов объекта:
let obj8 = {a: 1, b: 2, c: 3};
let sum8 = 0;
for (let elem in obj8) {
	sum8 += obj8[elem];
}console.log(sum8);

// 16 Код должен найти сумму элементов объекта:
let obj = {a: 1, b: 2, c: 3};
let sum = 0;
for (let key in obj) {
	sum += +obj[key];
}console.log(sum);

// 17 Код должен проверить, есть ли в массиве число 3 или нет:
let arr9 = [1, 2, 3, 4, 5];
let res9 = '';
for (let elem of arr9) {
	if (elem === 3) {
		res9 = '+++';
    break
	} else {
		res9 = '---';
	}
}console.log(res9);

// 18 Код должен заполнить массив числами от 1 до 5:
let z = [];
for (let i = 1; i <= 5; i++) {
	z.push(i);
}console.log(z);

// 19 Код должен проверить, есть ли в массиве число 3 или нет:
let arr11 = [1, 2, 3, 4, 5];
let res11 = false;
for (let elem of arr11) {
	if (elem === 3) {
		res11 = true;
		break;
	}
}console.log(res11);

// 20 Код должен вывести только четные элементы из массива:
let arr12 = [1, 2, 3, 4, 5];
for (let elem of arr12) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
}

// 21 Код должен записать в новый массив только нечетные элементы старого массива:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [];
for (let elem of arr) {
	if (elem % 2 != 0) {
		res.push(elem);
	}
}console.log(res);
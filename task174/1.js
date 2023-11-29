"use strict";
// 1
let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = []; // не был создан подмассив
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}console.log(arr);

// 2
let arr2 = [];
for (let i = 0; i < 3; i++) {
	arr2[i] = [];  // вместо массива записывалась строка ''
	for (let j = 1; j <= 5; j++) {
		arr2[i].push(j);
	}
}console.log(arr2);

// 3
let arr3 = [];
for (let i = 0; i < 3; i++) {
	arr3[i] = []; //массив был не инициализирован
	for (let j = 1; j <= 5; j++) {
		arr3[i].push(j);
	}
}console.log(arr3);


// 4
let ar = [];
for (let i = 0; i < 3; i++) {
	ar[i] = []; //проходились не по i а по j
	for (let j = 1; j <= 5; j++) {
		ar[i].push(j);
	}
}console.log(ar);

// 5
let arr5 = [];
for (let i = 0; i < 3; i++) {
	arr5[i] = []; //создавался такой же пустой массив когда нужно было проходиться по индексам и создавать подмассивы в основном массиве
	for (let j = 1; j <= 5; j++) {
		arr5[i].push(j);
	}
}console.log(arr5);

// 6
let arr6 = [];
for (let i = 0; i < 3; i++) {
	arr6[i] = [];	
	for (let j = 1; j <= 5; j++) {
		arr6[i].push(j); //добавлял значения в основной массив а не в подмассивы
	}
}console.log(arr6);
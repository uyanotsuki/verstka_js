"use strict";
// 1 убрать let в цикле

let age = 17;
let adult;
if (age >= 18) {
	adult = true;
} else {adult = false;}
console.log(adult);

// 2 убрать let в цикле
let age2 = 17;
let adult2;
if (age2 >= 18) {
	adult2 = true;
} else {
	adult2 = false;
}

console.log(adult2);

// 3
let age3 = 17;
let res;

if (age >= 18) {
	if (age3 <= 23) {
		res = 'от 18 до 23';
	} else {res = 'больше 23';}
} else {res = 'меньше 18';}
console.log(res);

// 4
let age4 = 19;
let res4;

if (age4 >= 18) {
	if (age4 <= 23) {
		res4 = 'от 18 до 23';
	} else {
		res4 = 'больше 23';
	}
} else {
	res4 = 'меньше 18';
}

console.log(res4);
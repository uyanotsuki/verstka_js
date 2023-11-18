"use strict";
// 1 все верно
let num1 = 1;
let num2 = 2;
if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}   

// 2
let num11 = '1';
let num22 = '2';

if (Number(num11) + Number(num22) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

// 3 верно
let num = '1';
let num222 = '2';

if (Number(num) + Number(num222) == 3) {
	console.log('+++');
} else {
	console.log('---');
}

// 4 
let numm = 123;
let st = String(numm)[0];
if (st == 1) {
	console.log('+++');
} else {
	console.log('---');
}

// 5 - неверно
let nnum = 123;
let st2 = String(numm)[0];
if (st2 == 1) {            //- исправила
	console.log('+++');
} else {
	console.log('---');
}

// 6 - неверно
let nums = 123;

if (String(nums)[0] === '1') {   // сравниваеv строку с числом а надо со строкой
	console.log('+++');
} else {
	console.log('---');
}

// 7 - верно
let nuum = 123;
let first = String(nuum)[0];
if (first == 1) {      
	console.log('+++');
} else {
	console.log('---');
}

// 8 - неверно
let a = 12;
if (String(a).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// 9 - неверно
let q = 12;
let str = String(q);

if (str.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// 10   - неверно
let aa = 12;
if (String(aa).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// 11 - неверно
let m = 12;
if (String(m).length === 2) {
	console.log('da dve');
} else {
	console.log('---');
}

// 12 - верно
// 13 -  верно

"use strict";

// 1
// Значения, которые при приведении к логическому типу дают false, включают в себя:
// - false
// - 0
// - NaN
// - null
// - undefined
// - "" (пустая строка)

//2
let test1 = 1;
if (test1 == true) {
	console.log('+++');
} else {
	console.log('---'); 
}//+++

//3
let test2 = 0;
		
if (test2 == true) {
	console.log('+++');
} else {
	console.log('---'); 
}//---

//4
let test3 = 1;
		
if (test3 == false) {
	console.log('+++');
} else {
	console.log('---'); 
}//---


//5
let test4 = 1;
		
if (test4 != true) {
	console.log('+++');
} else {
	console.log('---');
} //---

//6
let test5 = '';
		
if (test5 == false) {
	console.log('+++');
} else {
	console.log('---'); 
}//+++

//7
let test6;
if (test6 == true) {
	console.log('+++');
} else {
	console.log('---'); 
}//---

//8
let test7 = 3 * 'a';
if (test7 == true) {
	console.log('+++');
} else {
	console.log('---'); 
}//---
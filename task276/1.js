"use strict";
// 1  
function func(arr) {
	for (elem in arr) {
		if (typeof elem == 'object') {
			func(elem);
		} else {
			console.log(elem);
		}
	}
}

func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});

// 2
function func(arr) {
	for (let elem of arr) {
		if (typeof elem == 'object') {
			func(elem);
		} else {
			mass += elem + ' ';
		}
	}
}
let mass = [];
func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
console.log(mass);

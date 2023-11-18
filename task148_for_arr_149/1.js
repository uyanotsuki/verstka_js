"use strict";

// 1
let arr = ['a', 'b', 'c', 'd', 'e'];
for ( let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 2
for (let i = 1; i < arr.length - 1; i++) {
  console.log(arr[i]);
}

// 3
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

// 4
let arr2 = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i < arr2.length; i++) {
	console.log(arr2[i]);
}

// 149 - 1
let zxc = [2, 5, 9, 15, 1, 4];
for (let a of zxc){
  if (a > 3 && a <10){
    console.log(a);
  }
}

// 149 - 2
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

for (let key in obj) {
  if (obj[key] % 2 !== 0) {
    console.log(key);
  }
}

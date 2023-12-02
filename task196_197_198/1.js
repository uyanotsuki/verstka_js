"use strict";
// 1  
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(1, 2);
console.log(arr1); // [1, 4, 5]

// 2. 
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(3, 0, 'a', 'b', 'c');
console.log(arr2); // [1, 2, 3, 'a', 'b', 'c', 4, 5]

// 3. 
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr); // [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

// 197
let arr11 = [1, 2, 3, 4, 5];
let res = arr11.includes(3);
console.log(res);

// 198 
let obj = {'a': 1, 'b': 2, 'c': 3};
console.log(Object.keys(obj));
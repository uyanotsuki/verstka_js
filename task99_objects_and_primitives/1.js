"use strict";

// 1
let test = {x: 1, y: 2, z: 3};
console.log(typeof [test]);  
// выведет обджект 

// 2
let test2 = {x: 1, y: 2, z: 3};
console.log(test2.x);
// выведется (1) number - это примитив 

// 3
let test3 = [1, 2, 3];
console.log(test3);
// выведется обджект - это объект

// 4
let test4 = [1, 2, 3];
console.log(test[1]);
// в консоль выведется undefind - это примитив

// 5
let test11 = [1, 2, 3];
let test22 = 1;

console.log(test11);
// в консоль выведется объект, потому что массив явл-ся объектом

// 6
let test111 = [1, 2, 3];
let test222 = 1;

console.log(test111[test222]);

// вывеедтся 2, а это примитив
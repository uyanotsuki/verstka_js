"use strict";
//  1 выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
document.write(arr[3][2]);
document.write(arr[1][1]);
document.write(arr[2][0]);
document.write(arr[0][0]);

// 2 Дан следующий массив: Обращаясь к каждому элементу массива найдите сумму всех его элементов.

let arr2 = [[1, 2], [3, 4], [5, 6]];
let sum = 0;
for(let i = 0; i < arr2.length; i++){
  for (let j = 0; j < arr2[i].length; j++) {
    sum += arr2[i][j];
  }
}console.log(sum);


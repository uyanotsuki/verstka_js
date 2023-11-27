"use strict";
// 1 С помощью вложенных циклов найдите сумму элементов этого массива.
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i of arr){
  for (let j of i){
    sum = sum + j;
  }
}console.log(sum);

// 2 
let arr2 = [[[1, 2], [3, 4]], [[5, 
	6], [7, 8]]]; 
let sum2 = 0;
for (let i of arr2){
  for (let j of i){
    for (let k of j){
      sum2 += k;
    }
  }
}console.log(sum2);
 
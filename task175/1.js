"use strict";
// 1
let one = [];
for (let i=0, k = 1; i < 4; i++){
  one[i] = [];
  for (let j = 0; j < 2; j++){
    one[i].push(k++);
  }
}console.log(one);

// 2 Сформируйте с помощью двух вложенных циклов следующий массив: [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
let two = [];
for (let i=0, k = 0; i < 4; i++){
  two[i] = [];
  for (let j = 0; j < 3; j++){
    two[i].push(k+=2);
  }
}console.log(two);

// 3 [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
let three = [];
for (let i = 0, k = 1; i < 2; i++) {
  three[i] = [];
  for (let j = 0; j < 2; j++) {
    three[i][j] = [];
    for (let h = 0; h < 2; h++) {
      three[i][j].push(k++);
    }
  }
}
console.log(three);

// 4 
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = k;
    k++;
  }
}console.log(arr);

// 5 
let arr2 = [];
for (let i = 0, s = 1; i < 3; i++) {
  arr2[i] = [];
  for (let j = 0; j < 3; j++) {
    arr2[i][j] = s;
    s++;
  }
}

console.log(arr2);




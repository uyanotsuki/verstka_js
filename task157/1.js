"use strict";
// 1 
let arr = [];
for (let i = 1; i <= 10; i++){
  arr.push(i);
}
console.log(arr);

// 2
let arr2 = [];
for (let i = 1; i <= 10; i++){
  arr2.push('x');
}
console.log(arr2);

// 3 Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
let arr3 = [1,-34,5,-100,78,-23];
let arr4 = [];
for (let number of arr3){
  if (number > 0){
    arr4.push(number);
  }
}
console.log(arr4);

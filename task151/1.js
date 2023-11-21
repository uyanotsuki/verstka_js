"use strict";
// 1
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let i of arr){
  res += i;
}console.log(res);

// 2 сумма четных
let res2 = 0;
for (let i of arr){
  if (i % 2 === 0) {
    res2 += i;
  }
}console.log(res2);

// 3 сумма квадратов элементов (a+b)2=a2+2ab+b2
let sumOfSquares = arr.reduce((total, current) => {
  return total + current * current;
}, 0);

console.log(sumOfSquares); // Output: 104 (сумма квадратов элементов массива)

//  метод reduce, чтобы пройтись по каждому элементу массива. В колбэке мы возводим каждый элемент в квадрат и добавляем результат к общей сумме. В итоге выводим сумму квадратов элементов массива


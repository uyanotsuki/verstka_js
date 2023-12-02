"use strict";
// 1  
let num = 12345;
let arr = Array.from(String(num), Number);
let sum = 0;
for (let digit of arr) {
  sum += digit;
}
console.log(sum);

// 2
let num2 = 12345;
let arr2 = String(num2).split('');
let sum2 = 0;
for (let digit of arr2) {
  sum2 += Number(digit);
}
console.log(sum2);

// 3
let num3 = 12345;
let arr3 = String(num3).split('');
let sum3 = 0;
for (let digit of arr3) {
  sum3 += Number(digit);
}
console.log(sum3);

// 4 let num = 12345;
let num4 = 12345;
let arr4 = String(num4).split('');
let prod = 1; // начальное значение должно быть 1, не 0
for (let digit of arr4) {
  prod *= Number(digit);
}console.log(prod);




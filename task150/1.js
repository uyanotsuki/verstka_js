"use strict";
// 1 найдите сумму четных чисел от 2 до 100.
let sum = 0;
for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);
;

// 2 Найдите сумму нечетных чисел от 1 до 99.
let sum2 = 0;
for (let i = 1; i < 100; i+=2) {
  sum2 += i;
}
console.log(sum2);

// 3 Найдите произведение целых чисел от 1 до 20.
let a = 1;
for (let i = 1; i <= 20; i++) {
  a *= i;
}
console.log(a);
"use strict";
// 1 Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную res.

function zxc(num) {
  return num ** 3;
}
let res = zxc(3);
console.log(res);

// 2 Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.

function cxz(nums) {
  return Math.sqrt(nums);
}
let res2 = cxz(3) + cxz(4);
console.log(res2); 
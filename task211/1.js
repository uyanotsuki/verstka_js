"use strict";
// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
function asd(arr) {
  for (let i of arr){
    if (i % 2 != 0){
      return false;
    }
  }
  return true;
}
console.log(asd([2, 6, 4]));

// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
function zxc(num) {
  let str = String(num);
  for (let i=0; i < str.length; i++){
    if (Number(str[i]) % 2 == 0){
      return false
    }
  }return true
}console.log(zxc(23));

// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
function asd2(arr) {
  for (let i = 0; i < arr.length - 1; i++){
    if (arr[i] == arr[i+1]){
      return true;
    }
  }
  return false;
}
console.log(asd2([2, 2, 4]));
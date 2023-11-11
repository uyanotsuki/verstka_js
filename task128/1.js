"use strict";
// 1 - 2
let num = 14;
let sum = 0;
if (num >= 10 && num <= 99){
  while (num > 0) {
    sum += num % 10
    num = Math.floor(num/10)
  }
  if (sum <= 9){
    console.log("Сумма цифр однозначна");
  } 
  else if (sum > 9){
    console.log("Сумма цифр двухзначна");
  }
  else {
    console.log("Число не попадает в диапазон от 10 до 99");
  }
} 
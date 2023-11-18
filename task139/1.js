"use strict";

// 1 Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.

let a = 492;
let last = String(a)[a.length - 1];

if (last  == 0 ) {
  console.log('last number = 0');
} else{
  console.log('last number not 0');
}

// 2 пусть в переменной num хранится число. Определите, четное число или нет. 

let num = 49273;
let last2 = String(num)[num.length - 1];

if (last2 == 0 || last2 == 2 || last2 == 4 || last2 == 6 || last2 == 8) {
  console.log('четное число');
} else{
  console.log('число нечетное');
}

"use strict";
// 1
for (let i = 10; i <= 1000; i++) {
  let number = i; // сохраняем оригинальное число
  while (number >= 10) {
    number = number / 10; // делим на 10, пока не найдем первую цифру
  }
  console.log(number);
}

// 2 Переберите циклом числа от 10 до 1000 и выведите в консоль сумму первой и второй цифры каждого числа.
for (let i = 10; i <= 1000; i++) {
  let number = i;
  let firstDigit = 0;
  let lastDigit = 0;
  
  while (number >= 10) {
    firstDigit = number / 10; // находим первую цифру
    lastDigit = number % 10; // находим вторую цифру
    number = Math.floor(number / 10);
  }
  let sum = firstDigit + lastDigit; // сумма
  console.log(sum);
}

// 3 
for (let i = 10; i <= 1000; i++) {
	let str = String(i); // преобразуем число в строку
	if (str[0] === '1') {
		console.log(i);
	}
}

// 4 выведите на экран те числа, сумма двух первых цифр которых равна 5.
for (let i = 10; i <= 1000; i++) {
	let str = String(i); 
	if (Number(str[0]) + Number(str[1]) == 5) {
		console.log(i);
	}
}

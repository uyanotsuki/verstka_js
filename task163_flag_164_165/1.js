"use strict";
// 1 Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'.
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let i = 0; i < arr.length; i++){
  if (arr[i] == 'c'){
    flag = true;
    break;
  } 
}
if (flag == true){
  console.log('+++');
} else {
  console.log("---");
}

// 2 Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится только на единицу и на само себя, и не делится на другие числа.
let num = 37;
let flag2 = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    flag2 = false;
    break;
  }
}
if (flag2) {
  console.log(num + ' - простое число');
} else {
  console.log(num + ' - не простое число');
}

// 164 Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.   

let array = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;
for (let i = 0; i < array.length; i++){
  if (String(array[i])[0] == 1 || String(array[i])[0] == 2){
    sum = sum + array[i];
  }
}console.log(sum);

// 165
let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let summ = 0;
for (let elem in obj) {
	if (elem[0] === '1' || elem[0] === '2') {
		summ += obj[elem]; //заменила +elem на obj[elem] для получения значения свойства объекта по ключу elem.
	}
}

console.log(summ);

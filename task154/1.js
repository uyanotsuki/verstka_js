"use strict";
// 1 Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

let arr = [2,45,6,12,0,9,11];
for (let i of arr){
  console.log(i);
  if (i == 0){
    break;
  }
}

// 2
let arr2 = [2, 45, 6, -12, 0, 9, 11];
let sum = 0;
for (let i of arr2) {
  if (i < 0) {
    break;
  }
  sum += i;
}

console.log(sum); 

// 3 Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве)

let arr3 = [2, 5, 9, 3, 1, 4];
let position = -1;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] === 3) {
    position = i;
    break;
  }
}
console.log(position); 

// 4 
let summ = 0;
let count = 0;

while (summ <= 100) {
  count++;
  summ += count;
}

console.log(count); // Выведет количество чисел, которые были сложены

"use strict";
// 1 Выведите с помощью цикла столбец чисел от 1 до 100.
for (let i = 1; i <= 100; i++){
  console.log(i);
}
 
// 2 Выведите с помощью цикла столбец чисел от 100 до 1.
for (let i = 100; i >= 0; i--){
  console.log(i);
}
 
// 3 Выведите с помощью цикла столбец четных чисел от 1 до 100.
for (let i = 0; i <= 110; i++){
  if (i % 2 == 0){
     console.log(i);
  }
}

// 4 Заполните массив 10-ю иксами с помощью цикла.
let arr = [];
for (let i = 0; i < 10; i++){
  arr.push('x');
}console.log(arr);

// 5 Заполните массив числами от 1 до 10 с помощью цикла.
let arr2 = [];
for (let i = 1; i <= 10; i++){
  arr2.push(i);
}console.log(arr2);

// 6 Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
let arr3 = [12, 4, 67,234, 11, 100, 7, 0];
for (let i of arr3){
  if (i > 0 && i < 10){
    console.log(i);
  } 
}

// 7 Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
let arr4 = [12, 4, 5, 100, 7, 0];
let a = '';
for (let i of arr4){
  if (i === 5 ){
    a = '+++';
    break;
  } else {
    a = '---';
  }
}console.log(a);

// 8 Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
let arr5 = [12, 4, 5, 100, 7, 0];
let sumh = 0;
for (let i of arr5){
  sumh += i
}console.log(sumh);

// 9 Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
let arr6 = [1, 2, 3, 4];
let sum2 = 0;
for (let i of arr6){
  sum2 += i**2
}console.log(sum2);


// 10 Дан массив с числами. Найдите среднее арифметическое его элементов.
let arr7 = [1, 2, 3, 4, 5];
let sum7 = 0;
for (let elem of arr7) {
    sum7 += elem;
}
let average = sum7 / arr7.length;
console.log(average);


// 11 Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа.
let number = 3;
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}console.log(factorial);

// 12 Заполните массив числами от 10 до 1 с помощью цикла.
let m = [];
for (let i = 10; i > 0; i--){
  m.push(i);
}console.log(m);

// 13 Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
let aa = [1, -3, 56, -2, 9, 0];
let sum = 0;
for (let i of aa){
  if (i > 0){
    sum += i; 
  }
}console.log(sum);

// 14 Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
let array = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < array.length; i++){
  if (String(array[i])[0] == 1 || String(array[i])[0] == 2 || String(array[i])[0] == 5) {
    console.log(array[i]);
  }
}

// 15 Дан массив с числами. Выведите элементы этого массива в обратном порядке.
let array2 = [10, 20, 30, 50, 235, 3000];
let rev = [];
for (let i = array2.length - 1; i >= 0; i--){
  rev.push(array2[i]);
}console.log(rev);

// 16 Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
let sixteen = [0, 34, 2, 54, 7, 5];
for (let i = 0; i < sixteen.length; i++) {
  if (i === sixteen[i]) {
    console.log(sixteen[i]);
  }
}

// 17 Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.
let qq = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < qq.length; i++){
  document.write('<p>' + qq[i] + '</p>')
}

// 18 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
let week = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
for (let i of week){
  if (i == 'Saturday' || i == 'Sunday'){
    document.write('<p>' + '<b>' + i + '</b>' + '</p>')
  } else{
    document.write('<p>' + i + '</p>')
  }
}

// 19 Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.
let myArray = [10, 20, 30, 40, 50];
for (let i = 0; i < myArray.length; i++) {
  document.write(myArray[i] + '<br>');
}

// 20 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.
let week2 = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let day = week2[4];
for (let i = 0; i < week2.length; i++){
  if (day === week2[i]){
    document.write('<b>' + week2[i] + '</b>' + '<br>')
  } else{
    document.write(week2[i] + '<br>')
  }
}

// 21 Дан следующий объект с работниками и их зарплатами: Увеличьте зарплату каждого работника на 10%.

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let key in obj) {
    obj[key] = obj[key] * 1.1; 
}
console.log(obj);

// 22 Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.
let obj2 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let key in obj2) {
  if (obj2[key] <= 400){
    obj2[key] *= 1.1; 
  }
}console.log(obj2);

// 23 Даны следующие массивы: С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
let arr111 = [1, 2, 3, 4, 5];
let arr222 = [6, 7, 8, 9, 10];
let objjj = {};
for (let i = 0; i < arr111.length; i++){
  objjj[arr111[i]] = arr222[i];
}console.log(objjj);

// 24 Найдите сумму ключей этого объекта и поделите ее на сумму значений.
let objw = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let s4m1 = 0, s4m2 = 0;
let result = 0;
for (let i in objw){
  s4m1 += +i;
  s4m2 += objw[i];
} result = s4m1 / s4m2;
console.log(result);

// 25 Запишите ключи этого объекта в один массив, а значения - в другой.
let zxc = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let first = [], second = [];
for (let i in zxc){
  first += i;
  second += zxc[i];
} console.log(first, second);

// 26 Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2
let ooo = {1: 125, 2: 225, 3: 128, 4: 356, 5: 145, 6: 281, 7: 452,
};
let newarray = [];
for (let i in ooo){
  if (String(ooo[i])[0] == 1 || String(ooo[i])[0] == 2 ) {
    newarray.push(ooo[i]);
  }
}console.log(newarray);

// 27 Создайте из этого массива следующий объект
let rg = ['a', 'b', 'c', 'd', 'e'];
let rb = {};
for (let i = 0; i < rg.length; i++){
  rb[i+1] = rg[i]; 
}console.log(rb);

// 28 
let ss = ['a', 'b', 'c', 'd', 'e'];
let rbs = {};
for (let i = 0; i < ss.length; i++) {
    rbs[ss[i]] = i + 1;
}
console.log(rbs);

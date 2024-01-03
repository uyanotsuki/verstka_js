"use strict";
// 1 сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов
function sumArr(arr) {
  let sum = 0;
  for (let i of arr){
    sum += i;
  }return sum;
}console.log(sumArr([1,2,3,4,5]));

// 2 Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
function findDivisors(num) {
  let divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }return divisors;
}console.log(findDivisors(12)); 

// 3 Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
function symbArr(str) {
  let symb = [];
  for (let i=0; i < str.length; i++){
    symb.push(str[i]);
  }return symb;
}console.log(symbArr('privet'));

// 4 Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
function symbArr2(str) {
  let rev = '';
  for (let i = str.length - 1; i >= 0; i--){
    rev += str[i];
  }return rev;
}console.log(symbArr2('privet'));

// 5 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
function appercase(str) {
  return str[0].toUpperCase() + str.substring(1);
}console.log(appercase('pomogite'));

// 6 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.
// разбиваем строку на слова с помощью split,проходим по каждому слову и делаем заглавной первую букву, а затем объединяем слова обратно в строку с помощью join
function appercase2(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  } return words.join(' ');
}console.log(appercase2('kak eto sdelatь'));

// 7 Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
function array(num) {
  let arr = [];
  for (let i=1; i <= num; i++){
    arr.push(i);
  }return arr;
}console.log(array(12));

// 8 cделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
function sum8(num) {
  let zxc = String(num);
  let summa = 0;
  for (let i = 0; i < zxc.length; i++){
    summa += Number(zxc[i]);
  }return summa;
}console.log(sum8(23));


// 9 Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}console.log(isLeapYear(2024)); 


// 10 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
function secondsToDays(seconds) {
  let secondsInDay = 86400;
  let days = Math.floor(seconds/secondsInDay);
  return days;
}console.log(secondsToDays(172800)); 

// 11 Сделайте функцию, которая будет возвращать случайный элемент из массива.
function getRandomElement(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
console.log(getRandomElement([1, 2, 3, 4, 5])); 


// 12 Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(17)); 
//  делится ли число number нацело на какое-либо число от 2 до его квадратного корня? если число number делится нацело хотя бы на одно из этих чисел, то оно не является простым, и функция возвращает false. Если же ни одно из чисел от 2 до квадратного корня number не делит его нацело, то функция возвращает true, что означает, что число number является простым
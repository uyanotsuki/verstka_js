"use strict";
// 1 В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень)

let month = 8;
if (month >= 0 && month < 2 || month === 12){
  console.log('зима');
} else if (month >= 3 && month <= 5){
  console.log('весна');
} else if (month >= 6 && month <= 8){
  console.log('лето');
} else if (month >= 9 && month <= 11){
  console.log('осень');
} else {
  console.log('error :(');
} 

// 2 дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

let str = 'abcde'
if (str[0] == 'a') {
  console.log('da');
}else {console.log('no');} 

// 3 Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

let a = 12345;
if (String(a)[0] == 1 || String(a)[0] == 2 || String(a)[0] == 3 ){
  console.log('yes');
} else {
  console.log('no');
}

// 4 Дано трехзначное число. Найдите сумму цифр этого числа.

let q = '356';
let sum = Number(q[0]) + Number(q[1]) + Number(q[2]);
console.log(sum);

// 5 Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'

let w = '123123';
let sum1 = Number(w[0]) + Number(w[1]) + Number(w[2]); 
let sum2 = Number(w[3]) + Number(w[4]) + Number(w[5]); 

if (sum1 === sum2) {
  console.log('yes');
} else {
  console.log('no');
}


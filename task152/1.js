"use strict";
// 1
let str = ''
for (let i = 0; i <= 5; i++){
  str += '-';
}console.log(str);

// 2
let str2 = ''
for (let i = 1; i < 10; i++){
  str2 += i;
}console.log(str2);

// 3
let str3 = ''
for (let i = 9; i > 0; i--){
  str3 += i;
}console.log(str3);

// 4 С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let str4 = '-'
for (let i = 1; i < 10; i++) {
  str4 += i;
  str4 += "-";
}console.log(str4);
"use strict";
const str = 'http://www.example.com/page.html';
console.log(str.startsWith('http://')); // true
console.log(str.endsWith('.html')); // true

// 192 Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.
let str1 = '1-2-3-4-5';
let def = '-';
while (str1.includes(def)){
  str1 = str1.replace(def, '.');
}
console.log(str1);


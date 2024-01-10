"use strict";
// 1 
let now  = new Date(); // получаем текущий момент 
let date = new Date(now.getFullYear() + 1, 11, 31); // получаем нашу дату 
console.log(date.getDay());

// 2
let now2  = new Date(); // получаем текущий момент 
let date2 = new Date(now2.getFullYear() + 1, now2.getMonth(), now2.getDate()); // получаем нашу дату 
console.log(date2.getDay());

// 3
let now3  = new Date(); 
let date3 = new Date(now3.getFullYear() - 1, now3.getMonth(), now3.getDate()); 
console.log(date3.getDay());

"use strict";
// 1 
let date1 = new Date(2000, 8, 1);     // 1 сентября 2000 года
let date2 = new Date(2010, 1, 15);    // 15 февраля 2010 года
let diff = date2 - date1;             // вычитаем два объекта с датами друг от друга
console.log(diff);                    // увидим разницу в миллисекундах.
 
// 2
let date11 = new Date(2000, 8, 1); 
let date21 = new Date(2010, 1, 15);
let diff1 = Math.floor((date21 - date11) / (1000 * 60 * 60 * 24)); // вычитаем два объекта с датами друг от друга и переводим разницу в днях
console.log(diff); 

// 3
let date111 = new Date(2000, 8, 1);                             
let date222 = new Date(2010, 1, 15);                            
let diffYears = date222.getFullYear() - date111.getFullYear();  // разница в годах
let diffMonths = date222.getMonth() - date111.getMonth();       // разница в месяцах
let totalDiff = diffYears * 12 + diffMonths;                    // общая разница в месяцах
console.log(totalDiff);                                         

// 4
let date10 = new Date(2000, 8, 1); // 1 сентября 2000 года
let date20 = new Date(2010, 1, 15); // 15 февраля 2010 года
let diffYears0 = date20.getFullYear() - date10.getFullYear(); // разница в годах
console.log(diffYears0); // увидим разницу в годах.
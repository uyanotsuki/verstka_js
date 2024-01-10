"use strict";
// 1 
let Date1 = new Date();
let Date2 = new Date();
Date2.setHours(12, 0, 0, 0);
if (Date1.getTime() >= Date2.getTime()) {
  console.log('Полдень уже был');
} else {
  console.log('Полдень еще не наступил');
}

// 2
let Date11 = new Date();
let Date21 = new Date(2023, 10, 15);
if (Date11.getTime() >= Date21.getTime()) {
  console.log('Половина месяца уже прошла');
} else {
  console.log('Половина месяца еще не прошла');
}


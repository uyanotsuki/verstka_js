"use strict";
// 1 
let now  = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate()); 
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getSeconds());
console.log((date1 - date) / 1000);

// 2
let now2 = new Date();
let endOfDay = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate(), 23, 59, 59);
let secondsLeft = Math.floor((endOfDay - now2) / 1000);
console.log("Seconds left until the end of the day: " + secondsLeft);

// 3
let now3 = new Date();
let newyear3 = new Date(2023, 11, 32);
let noow3 = new Date(now3.getFullYear(), now3.getMonth(), now3.getDate());

console.log((newyear3 - noow3) / (1000 * 60 * 60 * 24));

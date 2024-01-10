"use strict";
// 1  Определите, какой день недели будет 31 декабря текущего года.
let now  = new Date(); // получаем текущий момент 
let date = new Date(now.getFullYear(), 11, 31); // получаем нашу дату 
console.log(date.getDay());

"use strict";
// 2 Определите, какой день недели был месяц назад в такой же день месяца, как сегодня. 
let now  = new Date(); // получаем текущий момент 

let date = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate()); // получаем нашу дату 

console.log('Проблем не возникнет')
console.log(date.getDay());

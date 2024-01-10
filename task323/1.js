"use strict";
// 1 Сделайте функцию checkDate, которая будет выполнять описанную проверку. Пусть функция возвращает true, если дата корректна и false, если нет. Пример работы этой функции для 31 января и 32 января
let year  = 2025;
let month = 0;
let day   = 32;

let date = new Date(year, month, day);
console.log(checkDate(date));

function checkDate() {
    if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
        return true;
    } else {
        return false;
    }
}

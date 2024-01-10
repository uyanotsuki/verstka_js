"use strict";
// 1 Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, если этого год високосный, и false - если нет.
let date = new Date(2020, 2, 0);
console.log(isLeap(date));

function isLeap() {
    if (date.getDate() == 29) {
        return true;
    } else {
        return false;
    }
}

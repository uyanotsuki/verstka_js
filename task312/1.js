"use strict";
// 1 
let date = new Date();
console.log(
    addZero(date.getHours()) +
 ':' + 
    addZero(date.getMinutes()) +
  ':' + 
    addZero(date.getSeconds()));
console.log(
    addZero(date.getDate()) + 
    '.' + 
    addZero(date.getMonth() + 1) + 
    '.' +
    addZero(date.getFullYear()));

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

 
 
 
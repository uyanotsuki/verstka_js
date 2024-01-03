"use strict";
// 1
function func() {
  return 'deftones';
}console.log(func()); // 2
console.log(func); //3 
func = '123';
console.log(func);

// 225
function zxc() {
  return 3;
}
let func2 = zxc;
console.log(zxc() + func2());

// 226
let noname = function () {
  return 1;
}
let noname2 = function () {
  return 2;
}
alert(noname() + noname2());
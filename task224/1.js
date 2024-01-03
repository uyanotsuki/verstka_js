"use strict";
// 1
function func() {
  return 'deftones';
}console.log(func()); // 2
console.log(func); //3 
func = '123';
console.log(func);
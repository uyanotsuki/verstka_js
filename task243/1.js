"use strict";
test(
  3, 
  function(num){return num * num;}, 
  function (num){return num * num * num;}
  );

function test(num, func1, func2) {
	console.log(func1(num) + func2(num));
}

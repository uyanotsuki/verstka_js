"use strict";
// 1 Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.
test(function(num) {
	return Math.pow(num, 3);
});
function test(func) {
	console.log(func(3));
}

// 2 Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.
test(func);

function func(num) {
  return Math.pow(num, 3);
}
function test(func) {
  console.log(func(3));
}

// 3 Переделайте передаваемую функцию на Function Expression с тем же именем func.
let func = function(num1, num2) {
  return num1 + num2;
}
function test(func) {
  alert(func(2, 3));
}
test(func);



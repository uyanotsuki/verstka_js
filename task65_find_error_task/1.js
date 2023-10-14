'use strict';

// 1 (обернули выражение num1 + num2 в скобки, чтобы сначала выполнить операцию сложения, а затем уже объединить строку с результатом)
let num1 = 1;
let num2 = 2;
console.log('сумма: ' + (num1 + num2));

// 2
let a = 1;
let b = 2;
let c = 0;
console.log(a + b + c);

// т.к. переменная с не была объявлена код был неисправен, объявили переменную и присволили ей значение 0.       

// 3 (методом Number() преобразовала каждую цифру из строки в числовой тип данных)

let numm = '123';
let sum = Number(numm[0]) + Number(numm[1]) + Number(numm[2]);
console.log(sum);


// 4 (код не сможет вывести первую цифру, т.к. нам было дано число. с помощью функции String преобразовали его в строку)
let nums = String(123);
console.log(nums[0]);

// 5 (код сначала выводил 0 в консоль, потому что стоял постфиксный инкремент, т.е. сначала выводится значение а, а потом уже добавляется к нему 1.  чтобы код сразу выводил значение а в консоль нужно поменять инкремент на префиксный)
let aa = 0;
console.log(++aa);

// 6 Код должен вывести количество цифр в числе:
// (чтобы код заработал мы число должны заменить на строку, тк функция length выводит длину СТРОКИ)
let numb = "12345";
console.log(numb.length);


// 7 всё верно

let aaz = 24 / 60 / 60;
console.log(aaz);


// 8 Код должен вывести количество цифр в числе:
// (в консоли мы должны выводить длину переменной str (потому что в нёё записана переменная num5 как строка, а не num5.length, когда num5 ещё число)

let num5 = 123;
let str1 = String(num5);
console.log(str1.length);

// 9 Код должен вывести последнюю цифру числа:
// (индексация начинается с 0, поэтому последняя цифра числа должна быть получена так: console.log(str[str.length-1]);)

let num6 = 123;
let str2 = String(num6);
console.log(str2[str2.length -1]);

// 10 Код должен вывести последнюю цифру числа:
// (В коде опечатка в слове length, поэтому он выведет undefined, исправили на правильное написание)

let numx = 122343;
let strx = String(numx);
console.log(strx.length);

// 11 Код должен вывести последнюю цифру числа:
// (нужно дописать - 1 в индексе)

let numd = 123;
let strd = String(numd);
console.log(strd[strd.length - 1]);

// 12 Код должен найти сумму чисел:
// (чтобы найти сумму чисел нужно переменую b1 превратить в числo с помощью функции Number, а не String)

let a1 = '123';
let b1 = '456';
let s1 = Number(a1) + Number(b1);
console.log(s1);


// 13 Код должен найти сумму чисел:
// (переменная ccc была записана рускими буквами, исправила)

let aaa = 1;
let bbb = 2;
let ccc = 3;
console.log(aaa + bbb + ccc);
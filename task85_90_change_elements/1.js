"use strict";
// 85
let obj = {x: 1, y: 2, z: 3};
obj.x = 1**2;
obj.y = 2**2;
obj.z = 3**2;
console.log(obj.x);
console.log(obj.y);
console.log(obj.z);

// 86
let empty = {};
empty.a = 'ichigo';
empty.b = 'kurosaki';
empty.c = 'shinigami';

alert(empty.a + ' ' + empty.b + ' ' + empty.c);

// 87

let obj3 = {3: 'c', 1: 'a', 2: 'b'};
console.log(obj3[1]); // выведет 'a'
console.log(obj3[2]); // выведет 'b'
console.log(obj3[3]); // выведет 'c'

// 88
let obj2 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj2);
console.log(keys);

// 89 Найдите количество элементов
alert(keys.length);

//90
let obj4 = {x: 178, y: 22, z: 345};
let key = 'z';
alert(obj4[key]);
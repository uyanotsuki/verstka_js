"use strict";
// 1 Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	obj[key] = obj[key] * 2;
} console.log(obj);


// 2 Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.
let ob = {x: 1, y: 2, z: 3};
for (let i in ob){
  ob[i]++;
} console.log(ob);


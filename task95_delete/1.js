"use strict";

// 1

let obj = {x: 1, y: 2, z: 3};
delete obj.x;

console.log('x' in obj);

// в консоль выведется false т.к. мы удалили данный ключ
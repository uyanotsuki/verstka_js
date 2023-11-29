"use strict";
// 1
let obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};
let sum = 0;
// Перебираем внешние ключи объекта
for (let i in obj) {
  // Перебираем внутренние ключи вложенных объектов
  for (let j in obj[i]) {
    // Суммируем значения элементов
    sum += obj[i][j];
  }
}console.log(sum);


//2 
let obj2 = {
	1: {
		1: 'a1',
		2: 'a2',
		3: 'a3',
	},
	2: {
		1: 'b1',
		2: 'b2',
		3: 'b3',
	},
	3: {
		1: 'c1',
		2: 'c2',
		3: 'c3',
	},
}
console.log(obj2[2][2]); 
console.log(obj2[3][1]); 
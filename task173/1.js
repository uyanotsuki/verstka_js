"use strict";
// 1 Сформируйте с помощью двух вложенных циклов следующий массив: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

let arr  = [];
for (let i = 0; i < 3; i++){
  arr[i] = [];  // создаем подмассив
  for (let j = 1; j <= 5; j++){
    arr[i].push(j); // заполняем подмассив числами
  }
}console.log(arr);

// 2
let zxc = [];
for (let i = 0; i < 3; i++){
  zxc[i] = [];
  for (let j = 0; j < 4; j++){
    zxc[i].push('x');
  }
}console.log(zxc);


// 3
let zx = [];
for (let i = 0; i < 3; i++){
  zx[i] = [];
  for (let j = 0; j < 2; j++){
    zx[i][j] = [];
    for (let k = 1; k <= 5; k++){
      zx[i][j].push(k);
    }
  }
}console.log(zx);

"use strict";
// 36

let min = 16;
if (min >= 0 && min <= 19) {
	console.log('1 треть');
} else if (min >= 20 && min <= 39) {
	console.log('2 треть');
} else if (min >= 40 && min <= 60) {
	console.log('3 треть');
} else {
  console.log('false');
}

// 37
let arr = [1, 2, 45, 6, 110];
let sum = 0;
if (arr.length == 3){
  sum = arr[0] + arr[1] + arr[2];
  console.log(sum);
} else{
  console.log('в массиве больше трёх значений');
}


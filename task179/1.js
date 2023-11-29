"use strict";
// 1
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
	],
	4: [
		'data41',
		'data42',
		'data43',
	],
};
for (let i in data){
  for (let j of data[i]){
    console.log(j);
  }
}

// 2
let two = [
	{ 1: 'data11', 2: 'data12', 3: 'data13', },
	{ 1: 'data21', 2: 'data22', 3: 'data33',},
	{ 1: 'data31', 2: 'data32', 3: 'data33',},];
for (let i of two){
  for (let j in i){  //переменная i будет непосредственно элементом массива, а не его индексом
    console.log(i[j]);
  }
}

// 3
let zxc = [
  {
    1: [ 'data111', 'data112', 'data113',],
    2: [ 'data121', 'data122', 'data123',],
  },
  {
    1: [ 'data211', 'data212', 'data213',],
    2: [ 'data221', 'data222', 'data223',],
  },
  {
    1: [ 'data411', 'data442', 'data413',],
    2: [ 'data421', 'data442', 'data423',],
  },
];

for (let i = 0; i < zxc.length; i++) {
  for (let key in zxc[i]) {
    for (let j = 0; j < zxc[i][key].length; j++) {
      console.log(zxc[i][key][j]);
    }
    console.log('---'); // Разделитель между строками
  }
}

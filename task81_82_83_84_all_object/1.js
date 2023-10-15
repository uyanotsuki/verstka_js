"use strict";
// 1
let obj = {
1: 'январь', 
2: 'ферваль', 
3: 'март', 
4: 'апрель', 
5: 'май', 
6: 'июнь', 
7: 'июль', 
8: 'август',
9: 'сентябрь', 
10: 'октябрь', 
11: 'ноябрь', 
12: 'декабрь'
};
console.log(obj);

// 82
let user = {name: 'Зараки ', surname: 'Кенпачи ', patronymic: '(Отсутствует отчество)'};
alert(user['name'] + user['surname'] + user['patronymic']);

// 83
let date = {year: '2023 ', month: 'October ', day: '15'};

alert(date.year + date.month + date.day);

// 84 (1) Для каких ключей данного объекта кавычки обязательны, а для каких нет?
let obj2 = {
	'1a': 1,    //обязательны 
	'b2': 2,    //не обязательны
	'с-с': 3,   //обязательны
	'd 4': 4,   //обязательны
	'e5': 5     //не обязательны
};

// 2
let obj3 = {
	'1a': 1,
	'b2': 2,
	'с-с': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj3['1a']);
console.log(obj3.b2);
console.log(obj3['c-c']);
console.log(obj3['d 4']);
console.log(obj3.e5);
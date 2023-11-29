"use strict";
// 1
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
for (let i of employees){
  console.log(i.name + '-' + i.salary);
}

// 2
let empl = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
let sum = 0;
for (let i of empl){
  sum += i.salary;
}console.log(sum);

// 3
let sss = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
let sums = 0;
for (let i of sss){  //перебирает каждый элемент массива sss и присваивает его переменной i
  if (i.age >= 30){
    sums += i.salary;
  }
}console.log(sums);
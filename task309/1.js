"use strict";
// 1 
function func(employee) {
	console.log(employee);  // выведет 2025
}
func( ['John', 'Smit', 'development', 
	'programmer', 2000] ); 

// 2
function func2(employee) {
	console.log(employee[0]);
	console.log(employee[1]); 
	console.log(employee[2]); 
}

func2( ['John', 'Smit', 'development', 
	'programmer', 2000] ); 
 
// 3
function func3(employee) {
	let position;
	if (employee[3] !== undefined) {
	  position = employee[3];
	} else {
	  position = 'bankai';
	}
	console.log(position);
  }
func3( ['Kurosaki', 'Ichigo', 'shinigami'] );

// 4
function func4(department, employee, hired) {
	console.log(employee[0]);
	console.log(employee[1]);
	console.log(hired[0]);
	console.log(hired[1]);
	console.log(hired[2]);
}
func4('shinigami', ['Kurosaki', 'Ichigo'], 
	[2006, 1, 1]); 














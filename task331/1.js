"use strict";
// 1 
let now  = new Date();
let year = now.getFullYear();

for (let month = 0; month <= 11; 
	month++) { 
	let date = new Date(year, month, 1);
	
	if (date.getDay() == 0 || date.getDay() == 6) {
		console.log(year + '-' + month 
			+ '-1'); 
	}
}


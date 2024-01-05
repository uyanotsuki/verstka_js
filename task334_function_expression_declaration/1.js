"use strict";
// 1
func1();
let test = function func1() {
	console.log('!');
} //Function Expression

// 2 
func2();
console.log(
	function func2() {
		console.log('!');
	}
);//Function Expression

// 3 
func3();
+function func3() {
	console.log('!');
}//Function Expression

// 4
func4();
function func4() {
	console.log('!');
}//Function Declaration
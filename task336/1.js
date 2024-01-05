"use strict";
// 1
func();
function func() {
	console.log('!');
}
+1;
//Function Declaration

// 2
func2();
function func2() {
	console.log('!');
} +1;
//Function Declaration

// 3
func3();
+function func3() {
	console.log('!');
} + 1;
//Function Expression

// 4
func4();
+
function func4() {
	console.log('!');
} + 1;
//Function Expression

// 5 
func5();
+ 1
function func5() {
	console.log('!');
} + 1;
//Function Declaration

// 6 
func6();
function func6() {
	console.log('!');
} + console.log('!');
//Function Declaration
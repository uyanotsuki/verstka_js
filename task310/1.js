"use strict";
// 1 
function func(color, width, height) {
	console.log(color); 
	console.log(width); 
	console.log(height); 
}
func( {color: 'red', width: 400, height: 500} );

// 2
function func2(options) {
	let color;
	if (options.color !== undefined) {
		color = options.color;
	} else {
		color = 'black';
	}
	console.log(color);
}
func2( {color: 'red', width: 400, height: 500} );



 
 
"use strict";
// 1  
(function() {
	return function() {
		return function() {
			console.log('!');
		};
	};
})()()();

// 2
(function(a) {
	return function(b) {	
		return function(c) {	
			console.log(a + b + c);
	};
	};
})(1)(2)(3);
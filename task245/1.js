function func(num1, num2) {
	function square(num) {
		return num * num;
	}
  function cube(num) {
		return num ** 3;
	}
	
	return square(num1) + cube(num2);
}

console.log(func(2, 4)); // выдаст ошибку
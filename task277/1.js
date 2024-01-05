// 1
let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}; 
 
function func(obj) { 
  let sum = 0; 
  for(let elem in obj) { 
    if(typeof obj[elem] == 'object') { 
      sum += func(obj[elem]); // рекурсивный вызов для вложенных объектов 
    } else { 
      sum += obj[elem]; 
    } 
  } 
  return sum; 
} 
 
console.log(func(obj)); // Вывод: 45

// 2
function func(arr) {
	let sum = [];
	
	for (let elem of arr) {
		if (typeof elem == 'object') {
			sum += func(elem);
		} else {
			sum += elem;
		}
	}
	
	return sum;
}

console.log(func(['a', ['b', 'c', 'd'], ['e', 'f', 
['g', ['j', 'k']]]] )); 

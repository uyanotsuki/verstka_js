// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let sq = Math.sqrt(379);
console.log(sq);
console.log(Math.round(sq));
console.log(sq.toFixed([2]));
console.log(sq.toFixed([3]));

// 2 Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

let sqr = Math.sqrt(587);
let a = Math.ceil(sqr), b = Math.floor(sqr);
console.log(sqr);
console.log(a);   //в большую 
console.log(b);  // в меньшую
let obj = {};
obj['ceil'] = a;
obj['floor'] = b;
console.log(obj);
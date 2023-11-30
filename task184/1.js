// 1 Возведите 2 в 10 степень.
console.log(Math.pow(2, 10));
// 2
console.log(Math.sqrt(245));

// 3
let array = [4, 2, 5, 19, 13, 0, 10];
let sumOfCubes = 0;
// Вычисление суммы кубов элементов массива
for (let i = 0; i < array.length; i++) {
    sumOfCubes += Math.pow(array[i], 3);
}
// Нахождение квадратного корня из суммы кубов
let squareRoot = Math.sqrt(sumOfCubes);
console.log(squareRoot);


"use strict";
// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

// Используя метод substr:
let str = 'я учу javascript!';
let word1 = str.substr(2, 3); // вырезаем слово 'учу'
let word2 = str.substr(6, 10); // вырезаем слово 'javascript'
// Метод substr используется для извлечения подстроки из строки. Первый параметр указывает начальную позицию, а второй параметр указывает количество символов для извлечения. В случае с word1, мы начинаем с позиции 2 и извлекаем 3 символа, что дает нам слово 'учу'. В случае с word2, мы начинаем с позиции 6 и извлекаем 10 символов, что дает нам слово 'javascript'.

// Используя метод substring:
let word11 = str.substring(2, 5); // вырезаем слово 'учу'
let word12 = str.substring(6, 16); // вырезаем слово 'javascript'
// Метод substring также используется для извлечения подстроки из строки. Однако, в отличие от substr, второй параметр указывает конечную позицию вместо количества символов. Таким образом, в случае с word1 мы указываем начальную позицию 2 и конечную позицию 5, чтобы получить слово 'учу', а в случае с word2 начальная позиция 6 и конечная позиция 16, чтобы получить слово 'javascript'.

// Используя метод slice:
let word21 = str.slice(2, 5); // вырезаем слово 'учу'
let word22 = str.slice(6, 16); // вырезаем слово 'javascript'
// Метод slice также используется для извлечения подстроки из строки. Он также принимает начальную и конечную позиции, но в случае отрицательных значений он интерпретирует их как отсчет с конца строки. Таким образом, в случае с word1 мы указываем начальную позицию 2 и конечную позицию 5, чтобы получить слово 'учу', а в случае с word2 начальная позиция 6 и конечная позиция 16, чтобы получить слово 'javascript'.





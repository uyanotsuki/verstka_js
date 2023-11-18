"use strict";
// 1 Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a'.

let zxc = 'afiget'
if (zxc[0] == 'a'){
  console.log('true');
} else{
  console.log('false');
}

// 2 Дана переменная, содержащая некоторую строку. Проверьте, что эта строка заканчивается на символ 'x'

let ss = 'anime'
if (ss[ss.length - 1] == 'x'){
  console.log('true');
} else{
  console.log('false');
}

// 3 Дана переменная, содержащая некоторую строку. Проверьте, что эта строка начинается на символ 'a' или символ 'b'.

let ghoul = 'kaneki'
if (ghoul[0] == 'a' || ghoul[0] == 'b' ){
  console.log('true');
} else{
  console.log('not a and not b');
}
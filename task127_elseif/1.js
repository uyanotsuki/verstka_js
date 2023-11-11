"use strict";
// 1 - 2
let day = 14;
if (day >= 1 && day <= 10){
  console.log('первая декада');
} else if (day > 10 && day <= 20){
  console.log('вторая декада');
} else if (day > 20 && day <= 31){
  console.log('третья декада');
} else{
  console.log('не существует');
}
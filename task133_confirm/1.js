"use strict";
let ok = confirm('Вам уже есть 18 лет?');
if (ok) {
  alert('Текст для взрослых?')
} else {
  alert('Доступ пользователю запрещен')
}
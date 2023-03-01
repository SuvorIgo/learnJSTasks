/*Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5*/

function randomInteger(min, max) {
    return parseInt(min + Math.random() * (max - min));
}

alert( randomInteger(1, 290) ); // 1
alert( randomInteger(1, 20) ); // 3
alert( randomInteger(1, 190000) ); // 5
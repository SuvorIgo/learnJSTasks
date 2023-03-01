/*Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

Запустить демо

P.S. Есть «подводный камень» при работе с типами.*/
const sum = (numOne, numTwo) => (numOne + numTwo).toFixed(2);

let numOne, numTwo;

numOne = +prompt("Введите первое число", 0);
numTwo = +prompt("Введите второе число", 0);

alert(sum(numOne, numTwo));


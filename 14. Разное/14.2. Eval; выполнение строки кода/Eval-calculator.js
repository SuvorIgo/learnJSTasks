/*Создайте калькулятор, который запрашивает ввод какого-нибудь арифметического выражения и возвращает результат его вычисления.

В этой задаче нет необходимости проверять полученное выражение на корректность, просто вычислить и вернуть результат.*/

let arifmzn = prompt("Введите арифметическое выражение", 0);

let result = eval(arifmzn.trim());

alert(result);
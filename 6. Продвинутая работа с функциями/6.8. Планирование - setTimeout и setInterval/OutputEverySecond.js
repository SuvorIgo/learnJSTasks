/*Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.*/

function printNumbers(from, to) {
    let currentNumber = from;

    let timerId = setInterval(function() {
        console.log(currentNumber);

        if (currentNumber == to) {
            clearInterval(timerId);
        }

        currentNumber++;
    }, 1000);
}

function printNumbers(from, to) {
    let currentNumber = from;

    setTimeout(function next() {
        console.log(currentNumber);
        if (currentNumber < to) {
            setTimeout(next, 1000);
        }
        currentNumber++;
    }, 1000);
}

printNumbers(5, 10);
/*апишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";*/

const ucFirst = (str) => str.at(0).toUpperCase() + str.slice(1);

console.log(ucFirst("аркадий"));
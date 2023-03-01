/*Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.*/

function Human(name) {
    this.name = name;
}

// Human.prototype = {}; так работать не будет

let human = new Human('Artem');
let human2 = new human.constructor('Afanasii');

console.log(human2);
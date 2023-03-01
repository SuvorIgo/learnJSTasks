/*Обычно при чтении несуществующего свойства из объекта возвращается undefined.

Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.

Это может помочь обнаружить программные ошибки пораньше.

Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, добавляющий в него этот аспект функциональности.

Вот как это должно работать:

let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
      /* ваш код   });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // Ошибка: такого свойства не существует*/

let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
      get(target, prop, receiver) {
        if (prop in target)
            return target[prop];
        else
            throw "Ошибка: такого свойства не существует";
      }
  });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует
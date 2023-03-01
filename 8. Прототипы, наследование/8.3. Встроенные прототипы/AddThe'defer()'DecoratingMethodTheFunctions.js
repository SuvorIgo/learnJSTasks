/*Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.*/

if (!Function.prototype.defer) {
    Function.prototype.defer = function(ms) {
        let func = this;

        return function(...args) {
            setTimeout(() => func.apply(this, args), ms);
        }
    };
}

function f(a, b) {
    console.log( a + b );
  }
  
  console.log(f.defer(1000)(1, 2)); // выведет 3 через 1 секунду.
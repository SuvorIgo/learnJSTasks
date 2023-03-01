/*Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};*/

let user = {
    name: "Василий Иванович",
    age: 35
  };

let jsonUser = JSON.stringify(user);

console.log(jsonUser);

let objUser = JSON.parse(jsonUser);

console.log(objUser);
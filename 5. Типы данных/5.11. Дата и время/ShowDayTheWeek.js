/*Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ*/

const arrayWeekdays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

function getWeekDay(date) {
    for (let i = 0; i < arrayWeekdays.length; i++) {
        if (i == date.getDay()) {
            return arrayWeekdays[i];
        }
    }
}
let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );       // нужно вывести "ВТ"

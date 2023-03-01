/*Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/

function getSecondsToday() {
    let now = new Date();

    let dateToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return Math.round((Date.now() - dateToday) / 1000);
}

console.log(getSecondsToday())
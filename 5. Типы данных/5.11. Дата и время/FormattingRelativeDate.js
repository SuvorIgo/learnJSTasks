/*Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) */

function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) {
        return 'прямо сейчас';
    }
    else if (Math.round(diff / 1000) < 60) {
        return diff / 1000 + ' сек. назад';
    }
    else if (Math.round(diff / 60000) < 60) {
        return Math.round(diff / 60000) + ' мин. назад';
    }
    else {
        let formDate = date;
        formDate = [
            '0' + formDate.getDate(),
            '0' + (formDate.getMonth() + 1),
            '' + formDate.getFullYear(),
            '0' + formDate.getHours(),
            '0' + formDate.getMinutes()
        ].map(component => component.slice(-2));

        return `${formDate[0]}.${formDate[1]}.${formDate[2]}, ${formDate[3]}:${formDate[4]}`;
    }
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
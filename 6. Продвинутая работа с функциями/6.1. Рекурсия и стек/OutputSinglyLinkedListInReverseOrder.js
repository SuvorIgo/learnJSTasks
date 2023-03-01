/*Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.*/

function printList(list) {
    let arr = [];

    while(list) {
        arr.push(list.value);
        list = list.next;
    }

    for (let value of arr.reverse()) {
        console.log(value);
    }
}

function printList(list) {
    if (list.next) {
        printList(list.next);
    }

    console.log(list.value);
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  console.log(printList(list));
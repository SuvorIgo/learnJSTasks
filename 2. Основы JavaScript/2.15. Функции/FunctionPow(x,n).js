/*Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1*/

function pow(x, n)
{
    let result = x;

    for(let i = 2; i <= n; i++)
    {
        result *= x;
    }

    return result;
}

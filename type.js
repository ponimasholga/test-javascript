let str = "Привет";

str.test = 5;

console.log(str.test);

//////////////////////////////////////////////////
/*
Сумма пользовательских чисел
важность: 5
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
*/

function sumPrompt() {
    let num1 = +prompt("Число 1:", "");
    let num2 = +prompt("Число 2:", "");

    console.log(num1 + num2)
}

//////////////////////////////////////////////////
/*
Ввод числового значения
важность: 5
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.*/

function readNumber() {
    let number;

    while(true) {
        number = prompt("Введите число!!!", "");
        if (number === null || number.trim() === "") return null;
        return +number;
    }
}


//////////////////////////////////////////////////
/*
Сделать первый символ заглавным
важность: 5
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
*/

function ucFirst(str) {
 return str[0].toUpperCase() + str.slice(1);
}
  

//////////////////////////////////////////////////
/*Проверка на спам
важность: 5
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:*/

function checkSpam(str) {
    let result = str.toLowerCase();
  
    return result.includes('viagra') || result.includes('xxx');
  }

//////////////////////////////////////////////////
/*Усечение строки
важность: 5
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:*/

function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

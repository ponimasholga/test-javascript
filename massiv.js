//////////////////////////////////////////////////
/*Операции с массивами
важность: 5
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
Массив по ходу выполнения операций:*/

let styles = ['Джаз', 'Блюз'];

console.log("styles = " , styles);

styles.push('Рок-н-ролл');

console.log("styles = " , styles);

styles[Math.floor((styles.length - 1) / 2)] = "Классика";

console.log("styles = " , styles);

styles.push('Рэп', 'Регги');

console.log("styles = " , styles);

//////////////////////////////////////////////////
/*
Переведите текст вида border-left-width в borderLeftWidth
важность: 5
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.
*/
function camelize(str) {
    return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

console.log(camelize("background-color"))

//////////////////////////////////////////////////
/*
Фильтрация по диапазону
важность: 4
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.

Например:*/

function filterRange(arr, a, b) {
    return arr.filter((item) => (a <= item && item <=b ))
}
let massiv = [45, 88, 2, 44]
console.log(filterRange(massiv, 30, 100))


//////////////////////////////////////////////////
/*Фильтрация по диапазону "на месте"
важность: 4
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например:*/

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        if (item < a || item > b) {
            arr.splice(i, 1);
            i--;
        }

    }

    return arr;
}

let arr = [5, 3, 8, 1];
console.log(filterRangeInPlace(arr, 1, 4))


//////////////////////////////////////////////////
/*Сортировать в порядке по убыванию
важность: 4*/

function sort(arrSort) {

    return arrSort.sort((a, b) => b - a)
}

console.log(sort([5, 3, 8, 1]))


//////////////////////////////////////////////////
/*Скопировать и отсортировать массив
важность: 5
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.*/
function copySorted(arr) {
    return  arr.slice().sort();
}
let arr3 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr3);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)

//////////////////////////////////////////////////
/*Трансформировать в массив имён
важность: 5
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.*/
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log( names );


//////////////////////////////////////////////////
/*Оставить уникальные элементы массива
важность: 4
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:
*/
function unique(arr) {
    let massiv = [];

    for (let str of arr) {
        if (!massiv.includes(str)) {
            massiv.push(str);
        }
    }

    return massiv;
}
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
console.log( unique(strings) );

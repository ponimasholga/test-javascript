/*Типы данных*/
let nameUser = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${nameUser}` ); // hello Ilya



/*Взаимодействие: alert, prompt, confirm*/

/*Создайте страницу, которая спрашивает имя у пользователя и выводит его.*/
let yourname = prompt("Ваше имя?", "");
alert(yourname);

/*Базовые операторы, математика*/
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1


/*Операторы сравнения*/

/*5 > 4
"ананас" > "яблоко"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"*/

5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

/*
Перепишите 'if' в '?'
важность: 5
Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}*/
result = (a + b < 4) ? 'Мало' : 'Много';


/*
Что выведет alert (ИЛИ)?
важность: 5
Что выведет код ниже?

alert( null || 2 || undefined );*/
2


/*
Что выведет alert (И)?
важность: 5
Что выведет код ниже?

alert( 1 && null && 2 );*/

null

/*
Что выведет этот код?
важность: 5
Что выведет код ниже?

alert( null || 2 && 3 || 4 );*/
3


/*Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

В чём ошибка? Исправьте её. Результат должен быть 3.

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12*/

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b);





/* МАссивы
Операции с массивами
важность: 5
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
Массив по ходу выполнения операций:
*/

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
styles.shift()
styles.unshift("Рэп", "Регги");
console.log (styles)


/*Map и Set
    Фильтрация уникальных элементов массива
    важность: 5
    Допустим, у нас есть массив arr.

    Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

*/


function unique(arr) {
    return Array.from(new Set(arr));
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
console.log( unique(values) );










/* !! Object.keys, values, entries !!


Сумма свойств объекта
важность: 5
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:


*/

function sumSalaries(obj) {
    let sum = 0;

    for (let value of Object.values(obj)) {
        sum = sum + value;
    }

    return sum;
}

let salaries2 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  console.log ( sumSalaries(salaries) ); 


  /* Подсчёт количества свойств объекта
важность: 5
Напишите функцию count(obj), которая возвращает количество свойств объекта: */

let user2 = {
    name: 'John',
    age: 30
};
  
function count (user2) {
    return Object.entries(user2).length;
} 


console.log ( count(user2) );


/* !! Деструктурирующее присваивание !!

Деструктурирующее присваивание 
важность: 5
У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:
*/


let user3 = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user;

console.log ( name ); // John
console.log ( age ); // 30
console.log ( isAdmin ); // false



/* 
Создайте дату
важность: 5
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert.
*/

let date = new Date(2012, 1, 20, 3, 12);
console.log ( date );


/*
Сумма свойств объекта
важность: 5
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:


*/

function sumSalaries(obj) {
    return Object.values(obj).reduce((sum, a) => sum + a, 0);
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
  
console.log ( sumSalaries(salaries) ); 


  /* Подсчёт количества свойств объекта
важность: 5
Напишите функцию count(obj), которая возвращает количество свойств объекта: */

let user = {
    name: 'John',
    age: 30
};
  
function count (user) {
    return Object.entries(user).length;
} 


console.log ( count(user) );


/*
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

function Destructuring() {
    let user = { name: "John", years: 30 };

    let {name, years: age, isAdmin = false} = user;

    console.log ( name ); // John
    console.log ( age ); // 30
    console.log ( isAdmin ); // false
}

Destructuring();

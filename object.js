/*test 1
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.

*/

let user = {};

user.name = "John";
user.surname = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);



/////////////////////////////////////////////////

/*test 2
Проверка на пустоту
важность: 5
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

*/

function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
      } else {
        return false;
    }
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false


/////////////////////////////////////////////////


/* Сумма свойств объекта
важность: 5
У нас есть объект, в котором хранятся зарплаты нашей команды:
*/


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let item in  salaries) {
    sum = sum + salaries[item];
}

console.log (sum)

/////////////////////////////////////////////////

/*
Умножаем все числовые свойства на 2
важность: 3
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
*/
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  

function multiplyNumeric (ob) {
  for (let key in ob) {
    if (typeof(ob[key]) == 'number') {
        ob[key] = ob[key]*2
    }
  }
}

multiplyNumeric(menu);
console.log(menu)


/////////////////////////////////////////////////

/*Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?*/

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let usermake = makeUser();

console.log( usermake.ref.name ); // ошибка


/////////////////////////////////////////////////

/*Создайте калькулятор
важность: 5
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/
let calculator = {
   sum() {
    return this.a + this.b
   },
   mul() {
    return this.a * this.b
   },
   read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
   }
};

/////////////////////////////////////////////////
/*
Создайте калькулятор при помощи конструктора, new Calculator
важность: 5
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:*/

function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };


  this.sum = function() {
    return this.a + this.b
  };

  this.mul = function() {
    return this.a * this.b
  };
}

let calculator2 = new Calculator();/*
calculator2.read();

console.log( "Sum=" + calculator2.sum() );
console.log( "Mul=" + calculator2.mul() );*/


//////////////////////////////////////////////////
/*
Создайте new Accumulator
важность: 5
Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:*/

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('value?', 0);
  };

}
let accumulator = new Accumulator(1); // начальное значение 1

//accumulator.read();  прибавляет введённое пользователем значение к текущему значению
//accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

//alert(accumulator.value);

//////////////////////////////////////////////////
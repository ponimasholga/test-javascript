/* Работа с прототипами
важность: 5
В приведённом ниже коде создаются и изменяются два объекта.

Какие значения показываются в процессе выполнения кода?*/
function test1() {


let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  console.log( rabbit.jumps ); // true
  
  delete rabbit.jumps;
  
  console.log( rabbit.jumps ); //null
  
  delete animal.jumps;
  
  console.log( rabbit.jumps ); //undefined
}

test1();


  /* Алгоритм поиска
важность: 5
Задача состоит из двух частей.

У нас есть объекты:

С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно 
возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

*/

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    __proto__: bed,
    money: 2000
};

console.log(pockets.pen)
console.log(bed.glasses)


/* 
Почему наедаются оба хомяка?
важность: 5
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
*/


let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    stomach: [],
    __proto__: hamster
  };
  
  let lazy = {
    stomach: [],
    __proto__: hamster
  };
  
  // Этот хомяк нашёл еду
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // У этого хомяка тоже есть еда. Почему? Исправьте
  console.log( lazy.stomach ); // apple



/*Добавить функциям метод "f.defer(ms)"
важность: 5
Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

После этого должен работать такой код:*/
Function.prototype.defer = function(ms) {
setTimeout(this, ms);
};

function f() {
console.log("Hello!");
}

f.defer(1000); 

/*
Добавьте функциям декорирующий метод "defer()"
важность: 4
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:*/

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
  };
  
  function f(a, b) {
    console.log( a + b );
  }
  
  f.defer(1000)(1, 2);



/* 
Добавьте toString в словарь
важность: 5
Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
*/

let dictionary = Object.create(null, {
    toString: { 
      value() { 
        return Object.keys(this).join();
      }
    }
  });
  
  dictionary.apple = "Apple";
  dictionary.__proto__ = "test";
  for(let key in dictionary) {
    console.log(key); 
  }
  
  
  console.log(dictionary);
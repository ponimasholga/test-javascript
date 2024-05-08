
/* Связанная функция как метод
важность: 5
Что выведет функция?*/

function f() {
  console.log( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();

/*Повторный bind
важность: 5
Можем ли мы изменить this дополнительным связыванием?

Что выведет этот код? Вася*/
function ff1() {
    console.log(this.name);
}

ff1 = ff1.bind( {name: "Вася"} ).bind( {name: "Петя" } );

ff1();
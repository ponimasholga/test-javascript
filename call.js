/*  Декоратор-шпион
важность: 5
Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.*/

function work(a, b) {
    console.log( a + b ); 
  }

  function spy(func) {

    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
  
    wrapper.calls = [];
  
    return wrapper;
  }
  
  work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  for (let args of work.calls) {
    console.log( 'call:' + args.join() );
  }
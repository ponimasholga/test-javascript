/* 
Вычислить сумму чисел до данного
важность: 5
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
*/

/* №1 С использованием цикла. */

function sumTo(n) { 
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log( sumTo(100) );


/* №2 Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1. */
function sumTo2(n) {
  if (n == 1) return 1;
  return n + sumTo2(n - 1);
}

console.log( sumTo2(100) );


/* №3 С использованием формулы арифметической прогрессии. */
function sumTo3(n) {
  return n * (n + 1) / 2;
}

console.log( sumTo3(100) );

/* 
Числа Фибоначчи
важность: 5
Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
*/

function fib(n) { 
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(7)); 


/* 
Вывод односвязного списка
важность: 5
Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):
*/

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

function printList(list) {
  let tmp = list;

  while (tmp) {
    
    console.log(tmp.value);
    tmp = tmp.next;
  }

}

printList(list);



function printList2(list) {
  while(list) {
    console.log(list.value);
    list = list.next;
  }

}

printList2(list);
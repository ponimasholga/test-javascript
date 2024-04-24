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


/*Отфильтруйте анаграммы
важность: 4
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/
function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        // разбиваем слово на буквы, сортируем и объединяем снова в строку
        let sorted = word.toLowerCase().split("").sort().join(""); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );
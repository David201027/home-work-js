const array = [2, 21, 34, 89, 144];
console.log('Array: ', array);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i}: ${element}`);
};

//todo: Приклад-2: створення об'єкта:
let object = {0: 2, 1: 21, 2: 34, 3: 89, 4: 144};
console.log('object ', object);

//? Змінемо запис об'єкта не змінюючи його властивостей:
object = {
    1: 2,
    2: 21,
    3: 34,
    4: 89,
    5: 144
};
console.log('object 1', object);

//? Замінемо "індекси"(властивості (properties)) на інші:
const object2 = {
    перший: 2,
    другий: 21,
    третій: 34,
    четвертий: 89,
    "п'ятий": 144,
    // перший: 6765, //! ❓❓❓
};
console.log('object 2', object2);
// console.log('п'ятий)

//? Замінемо послідовність "індексів"(властивостей (properties))
//? та їх знаачень на іншу:
const object3 = {
    "п'ятий": 144,
    четвертий: 89,
    перший: 2,
    третій: 34,
    другий: 21
};
console.log('object 3', object3);

const object4 = {
    "п'ятий": 144,
    wight: 89,
    перший: 2,
    color: 34,
    flex: 21
};
console.log('object 4', object4);

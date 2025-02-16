console.log('Lesson-7 JS');

// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

console.log(
  "%c [1] ",
  "color: yellow; background-color: #2274A5",
);

const array1 = [1, 2, 3];

console.log('Масив 1:', array1)

array1[1] = array1[1] + 10;

console.log('Масив 1 після додавання:', array1)

console.log("-------------------------------------------");


// Створити масив із трьох рядків. Додати до масиву ще одну рядків.

console.log(
  "%c [2] ",
  "color: yellow; background-color: #2274A5",
);

const array2 = ['hello', 'js', 'world']

console.log('Масив 2: ', array2);

array2.push('add')

console.log('Масив 2 після додавання: ', array2);

console.log("-------------------------------------------");


// Створити скрипт який поверне суму всіх чисел в масиві.

console.log(
  "%c [3] ",
  "color: yellow; background-color: #2274A5",
);

const array3 = [1, 2, 3];
let sum = 0;

console.log('Масив 3: ', array3)
for (let i = 0; i < array3.length; i+=1) {
  sum += array3[i];
}

console.log('Сумма 3 масиву: ', sum)

console.log("-------------------------------------------");


// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

console.log(
  "%c [4] ",
  "color: yellow; background-color: #2274A5",
);

const array4 = [1, 2, 3, 4, 5];

console.log('Масив 4 ↵')

for (let i = 0; i < array4.length; i+=1) {
  console.log(array4[i]);
}

console.log("-------------------------------------------");


// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

console.log(
  "%c [5] ",
  "color: yellow; background-color: #2274A5",
);
const array5 = ['elefant', 'cap', 'javascript', 'bananas', 'pen'];

console.log('Масив 5: ', array5)

console.log('Слова в яких більше 5 букв ↵')
for (let i = 0; i < array5.length; i+=1) {
  if (array5[i].length > 5) {
      console.log(array5[i]);
  }
}

console.log("-------------------------------------------");


// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

console.log(
  "%c [6] ",
  "color: yellow; background-color: #2274A5",
);

const array6 = [1, 15, 37, 23, 101, 67, 46, 89, 54, 92];

console.log('Масив 6: ', array6)

const max = Math.max(...array6);

console.log('Найбільше число в масиві 6: ', max);

console.log("-------------------------------------------");


// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

console.log(
  "%c [7] ",
  "color: yellow; background-color: #2274A5",
);

const array7 = [2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
console.log('Масив 7: ', array7)
console.log('Всі парні числа в масиві 7 ↵')

for (let i = 0; i < array7.length; i+=1) {
    if (array7[i] % 2 === 0) {
        console.log(array7[i]);
    }
}
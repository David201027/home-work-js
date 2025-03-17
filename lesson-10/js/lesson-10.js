console.log('Lesson-10 JS');

//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію вищого порядку яка буде виводити 
//? на екран повідомлення “Hello World!”. 
//? Зроби 2 варіанта виклика функції вищого порядку:
//? - з використання стрілкової колбек-функції
//? - з використання анонімної стрілкової колбек-функції з неявним поверненням.
//! Код виконаного завдання

function helloPrint(){
  console.log('Hello')
}

function worldPrint(){
  console.log('World!')
}

function helloWorldPrint(a, b){
  a();
  b();
}

helloWorldPrint(() => helloPrint(), () => worldPrint());

helloWorldPrint(() => console.log('Hello'), () => console.log('World!'));

console.log("--------------------------------------------------");


//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Створи стрілкову колбек-функцію generatesRandomNumber з неявним поверненням, 
//? яка генерує та повертає випадкове число від min = 1 до max = 10.
//? Зроби функцію вищого порядку guessNumber, яка приймає чотири аргумента:
//? - дві змінні, які визначають диапазон випадкових чисел, це min та max,
//? - будь яке число число randomNumber від 1 до 10 і 
//? - колбек-функцію generatesRandomNumber,
//? та повертає повідомлення: "✅ Ви вгадали число!",
//? якщо число randomNumber дорівнює числу, 
//? яке генерує та повертає колбек-функція generatesRandomNumber.
//? Якщо числа не дорівнюють одне одному,
//? повертається повідомлення: "❌ Ви НЕ вгадали число"
//! Код виконаного завдання

function guessNumber(min, max, randomNumber, generatesRandomNumber) {
  const generatedNumber = generatesRandomNumber(min, max);

  if (generatedNumber === randomNumber) {
    return "✅ Ви вгадали число!";
  } else {
    return `❌ Ви НЕ вгадали число. Випадкове число було: ${generatedNumber}`;
  }
}

function generatesRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 1;
const max = 10;
const randomNumber = 5; 

console.log(guessNumber(min, max, randomNumber, generatesRandomNumber));


console.log("--------------------------------------------------");


//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Створи стрілкову колбек-функцію generatesRandomNumber1to5 з неявним поверненням,
//? яка генерує та повертає випадкове число від 1 до 5.
//? Створи стрілкову колбек-функцію convertSize з неявним поверненням,
//? яка приймає будь яке числове значення, додає до нього "px" 
//? та повертає результат у такому вигляді:
//? наприклад, приймає 2 -> повертає 2px, або приймає 5 -> повертає 5px.
//? Зроби функцію вищого порядку convertRandomNumberSize, 
//? яка приймає два аргумента:
//? функцію generatesRandomNumber1to5 та функцію convertSize яка приймає
//? випадкове число від 1 до 5 від функції generatesRandomNumber1to5.
//? Функція convertRandomNumberSize повертає результат 
//? перетворення випадкового числа від 1 до 5 від функції convertSize.
//! Код виконаного завдання

console.log("--------------------------------------------------");


//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши функцію, applyCallbackToEachElement яка приймає масив чисел і колбек-функцію.
//? Функція повинна застосовувати колбек-функцію
//? до кожного елементу масиву та повертати новий масив,
//? що містить результати застосування колбек-функції до кожного елементу.
//! Код виконаного завдання
const applyCallbackToEachElement = (array, callback) => {
    //todo: написати тіло функції
};
const array = [1, 2, 3, 4, 5];
// const squareCallback = ; //todo: написати код функції
const result = applyCallbackToEachElement(array, squareCallback);
console.log("result:", result); //! [1, 4, 9, 16, 25]

console.log("--------------------------------------------------");
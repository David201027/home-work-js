console.log('Lesson-9 JS');

console.log("--------------------------------------------------");

// Завдання 1
console.log('Завдання 1 :')

// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i +1} - ${array[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);

console.log("--------------------------------------------------");

// Завдання 2
console.log('Завдання 2 :')
// Напиши скрипт підрахунку вартості гравірування прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравірування одного слова, і повертає ціну гравірування всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' '); 
  const numberOfWords = words.length;
  return numberOfWords * pricePerWord;
}

const message = "I love Java Script";
const pricePerWord = 5;
const totalPrice = calculateEngravingPrice(message, pricePerWord);
console.log(`Ваші слова для гравірування - ${message};`);
console.log(`Ціна - ${totalPrice}`)


console.log("--------------------------------------------------");

// Завдання 3
console.log('Завдання 3 :')
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає ПЕРШЕ найдовше слово в цьому рядку.

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}


const sentence = "The longest word in the English language is Pneumonultramicroscopicsilicicvulcanoconiosis , which has 45 letters.";
const longest = findLongestWord(sentence);
console.log(longest);


console.log("--------------------------------------------------");

// Завдання 4
console.log('Завдання 4 :')

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.

// •  Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// •  Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

function formatString(string) {
  const maxWords = 40;
  if (string.length <= maxWords) {
    return string;
  }else {
    return string.slice(0, maxWords) + '...';
  }
}

const shortString = "The cat sleeps on the sunny windowsill.";
const longString = "Under the moonlight, the waves crash gently on the shore, creating a peaceful rhythm.";

console.log(formatString(shortString));
console.log(formatString(longString));

console.log("--------------------------------------------------");

// Завдання 5
console.log('Завдання 5 :')
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam або sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes('спам') || lowerCaseMessage.includes('розпродажа');
}

console.log('true = повідомлення зі спамом, false = повідомлення без спаму');

console.log('Це повідомлення містить СПАМ');
console.log(checkForSpam('Це повідомлення містить СПАМ'));

console.log('Велика РОЗПРОДАЖА тільки зараз!');
console.log(checkForSpam('Велика РОЗПРОДАЖА тільки зараз!'));

console.log('Це звичайне повідомлення');
console.log(checkForSpam('Це звичайне повідомлення'));


console.log("--------------------------------------------------");

// Завдання 6
console.log('Завдання 6 :')
// Напиши скрипт з наступним функціоналом:

// •  При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// •  Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// •  Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

let numbers = [];
let input;
let total = 0;

while (true) {
  input = prompt('Введіть число:');

  if (input === null) {
    break;
  }

  const number = Number(input);
  if (isNaN(number)) {
    alert('Було введено не число, спробуйте ще раз.');
  } else {
    numbers.push(number);
  }
}

if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log('Масив порожній, сума не обчислюється.');
}

console.log('Lesson-8 JS');

//todo [1]
console.log(
   "%c [1] ",
   "color: yellow; background-color: #2274A5",
);
//? Перетворюємо масив на рядок:
//? Напиши скрипт, який об'єднує всі елементи массиву [friends] в один рядок.
//? Або створи свій масив де елементів може бути довільна кількість. 
//? Нехай елементи массива в створеному рядку будут розділені комою.
//? Зроби два варіанта створеня такого рядку:
//?  - Спочатку за допомогою циклу for (var.1)
//?  - Потім за допомогою метода join() (var.2)
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
console.log("string:", string);
console.log("friends:", friends);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");

//todo: var.1 - через for
console.warn("var.1 - через for");

for (let i = 0; i < friends.length; i+=1) {
   string += friends[i];
   if (i !== friends.length - 1) {
     string += ', ';
   }
}
console.log(string);

console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");

//todo: var.2 - через join()
console.warn("var.2 - через join()");

string = friends.join(', ');
console.log(string);

console.log("--------------------------------------------------");

//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
 );
//? Створюємо колекцією карток:
//? Використовуючи будь який з вивчених методів масивів 
//? створи масив [cards] такий як в цьому прикладі:
// cards = ['Картка-1', 'Картка-2', 'Картка-3', 'Картка-4', 'Картка-5'];
//? Можна використовувати будь-які з вивчених методів,
//? наприклад, рush(), splice(), concat() або інші методи.

const cards = [];
for (let i = 1; i < 6; i+=1) {
    cards.push(`Картка-${i}`);
}
console.log(cards)

console.log("---------------------------------------------");


//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Видаляємо картку за її їндексом:
//? Знайди їндекс цієї картки за допомогою метода indexOf():
const cardToRemove = 'Картка-3';
//? та видали її з існуючого вже масив [cards] за допомогою метода масиву.

const indexToRemove = cards.indexOf(cardToRemove);

if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
  console.log('Картка видалена:', cards);
} else {
  console.log('Картка не знайдена');
}

console.log("---------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Додаємо картку за її їндексом:
//? Додай таку картку: 
const cardToInsert = 'Картка-6';
//? в кінець існуючого вже масиву [cards]
//?  за допомогою будь-якого метода масиву.

cards.push(cardToInsert);

console.log('Картка додана:', cards);

console.log("---------------------------------------------");


//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Оновлення картки за її їндексом:
//? Знайди таку картку в існуючому вже масиві [cards].
const cardToUpdate = 'Картка-4';
const newCard = 'Картка-4_new';
//? Потім онови її, змінивши на 'Картка-4_new'.

const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
  cards[indexToUpdate] = newCard;
  console.log('Оновлений масив:', cards);
} else {
  console.log('Картка не знайдена');
}

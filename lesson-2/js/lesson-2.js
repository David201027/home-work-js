console.log('Lesson-2 JS');

// Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
//! Код виконаного завдання
const tempCelsius = 25;
const tempFahrenheit = (tempCelsius * 9/5) + 32;
console.log(`Температура: ${tempCelsius}°C = ${tempFahrenheit}°F`);


// Створити змінну для зберігання кількості днів у місяці. Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
//! Код виконаного завдання
const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(`У ${daysInMonth} днях: ${hoursInMonth} годин, ${minutesInMonth} хвилин`);


// Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
//! Код виконаного завдання
let playerHealth = 100;
let playerEnergy = 80;
playerHealth -= 10;
playerEnergy -= 7;
console.log(`Рівень здоров'я: ${playerHealth}, рівень енергії: ${playerEnergy}`);


// Створити змінну для зберігання суми покупки в магазині. Застосувати знижку в розмірі 10% до цієї суми за допомогою оператора множення та вивести результат в консоль.
//! Код виконаного завдання
const purchaseAmount = 150;
const discount = 0.1;
const discountedAmount = purchaseAmount * (1 - discount);
console.log(`Сума покупки після знижки: ${discountedAmount}`);


// Створити змінну для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.
//! Код виконаного завдання
const floatNumber = 7.85;
const roundedNumber = Math.floor(floatNumber);
console.log(`Округлене число: ${roundedNumber}`);


// Створити змінну для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.
//! Код виконаного завдання
const floatString = "3.14159";
const parsedFloat = parseFloat(floatString);
console.log(`Перетворене число: ${parsedFloat}`);


// Створити змінну для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.
//! Код виконаного завдання
const intString = "42";
const parsedInt = parseInt(intString);
console.log(`Ціле число: ${parsedInt}`);


// Створити змінну для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.
//! Код виконаного завдання
const number = 16;
const sqrtNumber = Math.sqrt(number);
console.log(`Квадратний корінь числа ${number}: ${sqrtNumber}`);


// Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.
//! Код виконаного завдання
const intValue = 993;
const stringValue = "171";
const convertedToInt = parseInt(stringValue);
const convertedToString = intValue.toString();
console.log(`Рядок у число: ${convertedToInt}, число у рядок: "${convertedToString}"`);

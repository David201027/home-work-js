console.log('Lesson-5 JS');

// Створити роз мітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.
const promptSelect = prompt('Виберіть один напой: Кава, Чай або Сік').toLowerCase();
let selected;
switch(promptSelect) {
  case 'сік' :selected = 'Сік'; break;
  case 'кава' :selected = 'Кава'; break;
  case 'чай' :selected = 'Чай'; break;
  default: selected = 'Ви не вибрали напой';
}
if (selected === 'Ви не вибрали напой') {
  selected = 'Ви не вибрали напой';
  console.log('Ви не вибрали напой')
}else {
  console.log('Ви вибрали:', selected)
}

// Створити розмітку з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.
const promtDay = prompt('Напишіть один день з неділі').toLowerCase();
let weekDay;
let ifHoliDay;
switch(promtDay) {
  case 'понеділок' :
    weekDay = 'Понеділок';
    ifHoliDay = 'будній день';
     break;
  case 'вівторок' :
    weekDay = 'Вівторок';
    ifHoliDay = 'будній день';
     break;
  case 'середа' :
    weekDay = 'Середа';
    ifHoliDay = 'будній день';
     break;
  case 'четверг' :
    weekDay = 'Четверг';
    ifHoliDay = 'будній день';
     break;
  case 'пʼятниця' :
    weekDay = 'Пʼятниця';
    ifHoliDay = 'будній день';
     break;
  case 'субота' :
    weekDay = 'Субота';
    ifHoliDay = 'вихідний день';
     break;
  case 'неділя' :
    weekDay = 'Неділя';
    ifHoliDay = 'вихідний день';
     break;
  default: weekDay = 'Ви не вибрали день неділі';
}
if (weekDay === 'Ви не вибрали день неділі') {
  selected = 'Ви не вибрали день неділі';
  console.log('Ви не вибрали день неділі')
}

else {
  console.log('Ви вибрали:', weekDay, 'це', ifHoliDay)
}

// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.
let promptMonth = prompt('Напишіть номер одного з місяців року').toLowerCase();
let month;
let monthYear;
switch(promptMonth) {
  case '1' :
    month = 'Січень';
    monthYear = 'Зимі';
     break;
  case '2' :
    month = 'Лютий';
    monthYear = 'Зимі';
     break;
  case '3' :
    month = 'Березень';
    monthYear = 'Весні';
     break;
  case '4' :
    month = 'Квітень';
    monthYear = 'Весні';
     break;
  case '5' :
    month = 'Травень';
    monthYear = 'Весні';
     break;
  case '6' :
    month = 'Червень';
    monthYear = 'Літі';
     break;
  case '7' :
    month = 'Липень';
    monthYear = 'Літі';
     break;
  case '8' :
    month = 'Серпень';
    monthYear = 'Літі';
     break;
  case '9' :
    month = 'Вересень';
    monthYear = 'Осені';
      break;
  case '10' :
    month = 'Жовтень';
    monthYear = 'Осені';
     break;
  case '11' :
    month = 'Листопад';
    monthYear = 'Осені';
     break;
  case '12' :
    month = 'Грудень';
    monthYear = 'Зимі';
     break;
  default: month = 'Ви не вибрали місяць';
}
if (month === 'Ви не вибрали місяць') {
  month = 'Ви не вибрали місяць';
  console.log('Ви не вибрали місяць')
}

else {
  console.log('Ви вибрали:', month, 'він знаходится у', monthYear)
}

// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці.
promptMonth = prompt('Напишіть номер одного з місяців року');
let numberMonth;
switch(promptMonth) {
  case '1' :
    month = 'Січень';
    numberMonth = 31;
     break;
  case '2' :
    month = 'Лютий';
    numberMonth = 28;
     break;
  case '3' :
    month = 'Березень';
    numberMonth = 31;
     break;
  case '4' :
    month = 'Квітень';
    numberMonth = 30;
     break;
  case '5' :
    month = 'Травень';
    numberMonth = 31;
     break;
  case '6' :
    month = 'Червень';
    numberMonth = 30;
     break;
  case '7' :
    month = 'Липень';
    numberMonth = 31;
     break;
  case '8' :
    month = 'Серпень';
    numberMonth = 31;
     break;
  case '9' :
    month = 'Вересень';
    numberMonth = 30;
      break;
  case '10' :
    month = 'Жовтень';
    numberMonth = 31;
     break;
  case '11' :
    month = 'Листопад';
    numberMonth = 30;
     break;
  case '12' :
    month = 'Грудень';
    numberMonth = 31;
     break;
  default: month = 'Ви не вибрали місяць';
}
if (month === 'Ви не вибрали місяць') {
  month = 'Ви не вибрали місяць';
  console.log('Ви не вибрали місяць')
}

else {
  console.log('Ви вибрали:', month, 'у ньому', numberMonth, 'днів')
}


// Створити розмітку з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".
const promptColor = prompt('Оберіть один з кольорів світлофору: червоний, жовтий або зелений').toLowerCase();
let colorSwitch
let ifColor;
switch(promptColor) {
  case 'червоний' :
    colorSwitch = 'Чероний';
    ifColor = 'СТОП';
     break;
  case 'жовтий' :
    colorSwitch = 'Жовтий';
    ifColor = 'ЗАЧЕКАЙ';
     break;
  case 'зелений' :
    colorSwitch = 'Зелений';
    ifColor = 'МОЖНА ЙТИ';
     break;
  default: colorSwitch = 'Ви не вибрали кольор';
}
if (colorSwitch === 'Ви не вибрали кольор') {
  colorSwitch = 'Ви не вибрали кольор';
  console.log('Ви не вибрали кольор')
}

else {
  console.log('Ви вибрали:', colorSwitch, 'це значить', ifColor)
}

// Створити розмітку з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль.
const number1 = Number(prompt('Введіть перше число для віконаннʼя мітематичної дії, можна ділити на нуль'));
const math = prompt('Введіть одну з математичних операцій наприклад (*, /, +, -)');
const number2 = Number(prompt('Введіть друге число для віконаннʼя мітематичної дії'));

let result;

switch(math) {
  case '+' :
    result = number1 + number2;
     break;
  case '-' :
    result = number1 - number2;
     break;
  case '*' :
    result = number1 * number2;
     break;
  case '/' :
    result = number1 / number2;
     break;
  default: colorSwitch = 'Ви не вибрали знак';
}

if (result === Infinity) {
  result = 0;
}

else if (result === undefined){
  console.log('Ви ввели НЕ число')
}

else {
  console.log('Результат:', result)
}
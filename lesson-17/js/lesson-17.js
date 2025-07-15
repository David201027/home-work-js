//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку з кнопкою та текстовим полем. 
//? За допомогою JavaScript отримати доступ до кнопки 
//? та текстового поля за їх ідентифікаторами 
//? та змінити текст на кнопці на значення текстового поля.
//! Код виконаного завдання

const input = document.getElementById('textInput');
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  button.textContent = input.value;
});

console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку з заголовком та зображенням. 
//? За допомогою JavaScript отримати доступ до зображення 
//? та змінити значення атрибута "src" на шлях до іншого зображення.
//! Код виконаного завдання

const image2 = document.getElementById('myImage');
const button2 = document.getElementById('changeImageBtn');
const button22 = document.getElementById('resetImageBtn');


button2.addEventListener('click', function() {
  image2.src = "https://decorel.by/wp-content/uploads/2017/02/08178.jpg";
});
button22.addEventListener('click', function() {
  image2.src = "https://i.pinimg.com/736x/cc/11/66/cc11665c0f6565ab973907a73fa7d8b5.jpg";
});

console.log("--------------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку  з посиланням та зображенням. 
//? За допомогою JavaScript отримати доступ до посилання 
//? та змінити значення атрибута "href" на нову URL-адресу. 
//? Також отримати доступ до зображення 
//? та додати новий атрибут "alt" з описом зображення.
//! Код виконаного завдання
const link = document.getElementById('myLink');
const image = document.getElementById('myImage3');
const button3 = document.getElementById('changeBtn');

button3.addEventListener('click', function() {
  link.href = "https://www.netflix.com/browse";

  image.setAttribute("alt", "Гора");
});


console.log("--------------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Створити розмітку  зі списком елементів. 
//? За допомогою JavaScript отримати доступ 
//? до першого елемента списку 
//? та змінити його вміст на новий текст. 
//! Код виконаного завдання

const list4 = document.getElementById('myList');
const firstItem = list4.firstElementChild;

if (firstItem) {
  firstItem.textContent = "Новий текст для першого елемента";
}

console.log("--------------------------------------------------");
console.log('Lesson-11 JS');

//todo [1]
console.log(
  "%c [1] ",
  "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "bankAccount" з трьома властивостями:
//?  "ownerName", "accountNumber", "balance"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "deposit",
//? який, використовуючи методи взаємодії з користувачем,
//? додає гроші на рахунок,
//? та виводить повідомлення про залишок на рахунку
//? дублюючи його в консоль.
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод "withdraw",
//? який, використовуючи методи взаємодії з користувачем,
//? дозволяє знімати гроші з рахунку,
//? якщо на рахунку достатньо коштів,
//? та виводить повідомлення про залишок на рахунку,
//? дублюючи його в консоль.
//? Якщо на рахунку не вистачає коштів, то він виводить повідомлення:
//? "⛔️ Не достатньо коштів на вашому рахунку!",
//? дублюючи його в консоль.
//? ✳️ За допомогою виклика методу "deposit" об'єкта "bankAccount" додай кошти на рахунок.
//? ✳️ За допомогою виклика методу "withdraw" об'єкта "bankAccount" зніми кошти з рахунку.
//! Код виконаного завдання


const bankAccount = {
  ownerName: 'John Applessed',
  accountNumber: '5646 0002 7753 7333',
  balance: 100,
  
  deposit() {
    let amount = Number(prompt("Введіть суму для депозиту:"));
    if (!isNaN(amount) && amount > 0) {
      this.balance += amount;
      alert(`Залишок на рахунку: ${this.balance} $`);
      console.log(`Залишок на рахунку: ${this.balance} $`);
      balance.textContent = `Ваш баланс: ${this.balance} $`;
    } else {
      alert("Некоректна сума. Спробуйте ще раз.");
    }
  },

  withdraw() {
    let amount = Number(prompt("Введіть суму для зняття коштів:"));
    if (!isNaN(amount) && amount > 0) {
      this.balance -= amount;
      if (this.balance < 0) {
        this.balance += amount
        alert("⛔️ Не достатньо коштів на вашому рахунку!")
        console.log("⛔️ Не достатньо коштів на вашому рахунку!")
      } else {
        alert(`Залишок на рахунку: ${this.balance} $`);
        console.log(`Залишок на рахунку: ${this.balance} $`);
        balance.textContent = `Ваш баланс: ${this.balance} $`;
      }
    }  else {
      alert("Некоректна сума. Спробуйте ще раз.");
    }
  }
};
//ChatGPT!!!!!    ↓↓↓↓
const balance = document.getElementById('balance');

const deposit = document.getElementById('myButton1');

deposit.addEventListener("click", function() {
  bankAccount.deposit();
});


const withdraw = document.getElementById('myButton2');

withdraw.addEventListener("click", function() {
  bankAccount.withdraw();
});

//ChatGPT!!!!!    ↑↑↑↑

console.log(bankAccount)

console.log("--------------------------------------------------");


//todo [2]
console.log(
  "%c [2] ",
  "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "weather" з трьома властивостями:
//? "temperature", "humidity", "windSpeed"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод,
//? який, використовуючи методи взаємодії з користувачем,
//? отримує значення температури та повертає "true",
//? якщо температура нижче 0 градусів Цельсія,
//? та "false", якщо температура вище або дорівнює 0 градусів Цельсія.
//? ✳️ Якщо метод повернув "true" вивести повідомлення
//? “Температура нижче 0 градусів Цельсія” і навпаки,
//? дублюючи ці повідомлення  в консоль.
//! Код виконаного завдання

const weather = {
  temperature: 18,
  humidity: '71%',
  windSpeed: '6 mph',

  сelsius() {
    if (this.temperature >= 0) {
      confirm('Температура више 0 або 0');
    } else if (this.temperature < 0){
      confirm('Температура нижче 0');
    } else {
      confirm('Невідоме значення температури')
    }
  }
}

const checkTemperature = document.getElementById('checkTemperature');

checkTemperature.addEventListener("click", function() {
  weather.сelsius();
});


console.log(weather)

console.log("--------------------------------------------------");

//todo [3]
console.log(
  "%c [3] ",
  "color: yellow; background-color: #2274A5",
);
//? Створіть об’єкт "user" з трьома властивостями:
//? "name", "email", "password"
//? та додайте їм будь-яких логічних значень значень.
//? ✴️ За допомогою додавання властивостей
//? додайте до об'єкту метод "login",
//? який який буде перевіряти правильність
//? введеного name, email та password на такі умови:
//?  - ім'я <name> містить не менше 3 символів,
//?  - електронна пошта <email> містить символ @ та крапку після неї,
//?  - пароль <password> містить не менше 6 символів.
//? ❌ Якщо введені дані не пройшли ці перевірки
//? треба вивести в консоль відповідні повідомлення з помилками(помилкою).
//? ✅ Якщо ВСІ введені дані пройшли перевірки,
//? треба послідовно вивести в косоль значення ВСІХ цих даних.
//! Код виконаного завдання

const user = {
  name: 'david',
  email: 'shtokdavid2010@gmail.com',
  password: 'JavaScript',

  login() {
    if (this.name.length < 3) {
      confirm('Іʼмя закоротке');
      console.log('Іʼмя закоротке');
      return;
    } else if (!this.email.includes("@") || !this.email.includes(".", this.email.indexOf("@")) || this.email.indexOf("@") < 5 ||  !(this.email.endsWith("gmail.com") || this.email.endsWith("icloud.com"))){
      confirm("Email має містити не менше 5 символів перед '@' і бути у форматі 'gmail.com' або 'icloud.com'.");
      console.log("Email має містити не менше 5 символів перед '@' і бути у форматі 'gmail.com' або 'icloud.com'.")
      return;
    } else if (this.password.length < 6) {
      confirm('Пароль має містити не меньше 6 симболів');
      console.log('Пароль має містити не меньше 6 симболів');
      return;
    } else {
      confirm('Усе введено правильно');
      console.log('Усе введено правильно');
    }
  }
}

const logIn = document.getElementById('logIn');

logIn.addEventListener("click", function() {
  user.login();
});

console.log(user)

console.log("--------------------------------------------------");


//todo [4]
console.log(
  "%c [4] ",
  "color: yellow; background-color: #2274A5",
);
//? ✴️ Створіть об'єкт "movie" з чотирма властивостями:
//? "title", "director", "year", "rating".
//? ✴️ За допомогою додавання властивостей,
//? додайте до об'єкту метод,
//? який повертає "true",
//? якщо рейтинг фільму вище 8,
//? та "false",
//? якщо рейтинг фільму 8 або нижче.
//? Послідовно вивести значення ВСІХ властивостей в косоль
//? Якщо метод повернув "true",
//? то колір тексту поля title в консолі повинен бути зелений.
//? Якщо метод повернув "false",
//? то колір тексту поля title в консолі повинен бути червоний.
//! Код виконаного завдання

const movie = {
  title: 'Гаррі Поттер в фвлосовській камінь',
  director: 'Кріс Коламбус',
  year: '2001',
  rating: 8,

  ratingIf() {
    if (this.rating <= 8) {
      console.log(false);
    } else if (this.ratin > 8) {
      console.log(true);
    } else {
      console.log('Невідомий рейтинг')
    }
  }
}

const raitingButton = document.getElementById('raiting');

raitingButton.addEventListener("click", function() {
  movie.ratingIf();
});

console.log(movie)

console.log("--------------------------------------------------");
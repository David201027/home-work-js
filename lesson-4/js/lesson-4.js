console.log('Lesson-4 JS');

// Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".

const modal1 = prompt("Введіть символ").trim();
const modal2 = prompt("Введіть символ").trim();

if (modal1 && modal2) {
  alert("Ви ввели симбол в обох полях, дякую")
  console.log(`Ви ввели симбол в обох полях, дякую`)
} else {
  alert("Ви не ввели символ в одному з полів")
  console.log(`Ви не ввели символ в одному з полів`)
}

// Створити розмітку з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти, чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".

const number1 = Number(prompt("Введить перше число:"));
const number2 = Number(prompt("Введить друге число:"));

if (isNaN(number1) || isNaN(number2)) {
  alert("Ви ввели не число");
  console.log("Ви ввели не число");
} else {
  if ((number1 + number2) > 10) {
    alert("Число більше 10");
    console.log(`Число більше 10:`, number1 + number2);
  } else {
    alert("Число не більше 10");
    console.log("Число не більше 10");
  }
}

// Створити розмітку з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".

const javaScript = prompt("Введіть текст:");

if (javaScript.includes("JavaScript") || javaScript.includes("javascript") || javaScript.includes("JS") || javaScript.includes("js")) {
  alert("Текст містить слово JavaScript, javascript, JS, js");
  console.log(`Текст містить слово JavaScript`)
} else {
  alert("Текст не містить слово JavaScript");
  console.log(`Текст не містить слово JavaScript`)
}

// Створити розмітку з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".

const input = prompt('Введіть число').trim();
const tenTwenty = Number(input);

if (input === "" || isNaN(tenTwenty)) {
    alert("Ви ввели не число");
    console.log("Ви ввели не число");
} else if (tenTwenty >= 10 && tenTwenty <= 20) {
    alert("Число входить в діапазон від 10 до 20");
    console.log(`Число входить в діапазон від 10 до 20`);
} else {
    alert("Число не входить в діапазон від 10 до 20");
    console.log(`Число не входить в діапазон від 10 до 20`);
}


// Створити розмітку з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.

const name = prompt("Введіть ім'я:").trim();
const email = prompt("Введіть email:").trim();
const password = prompt("Введіть пароль:").trim();

if (name.length < 3) {
  alert("Ім'я повинно містити не менше 3 .");
  console.log("Ім'я повинно містити не менше 3 .")
} 

else if (!email.includes("@") || !email.includes(".", email.indexOf("@")) || email.indexOf("@") < 5 ||  !(email.endsWith("gmail.com") || email.endsWith("icloud.com"))) {
  alert("Email має містити не менше 5 символів перед '@' і бути у форматі 'gmail.com' або 'icloud.com'.");
  console.log("Email має містити не менше 5 символів перед '@' і бути у форматі 'gmail.com' або 'icloud.com'.")
} 

else if (password.length < 6) {
  alert("Пароль має містити не менше 6 символів.");
  console.log("Пароль має містити не менше 6 символів.")
} 

else {
  console.log(`Ваше імʼя`, name)
  console.log(`Ваша пошта`, email)
  console.log(`Ваш пароль`, password)

    let proceed = confirm("Бажаєте перейти на іншу сторінку?");
  
    if (proceed) {
      location.href = "./example.html";
    } else {
      alert("Як забажаете 😉👌");
    }
}

console.log('Lesson-5 JS');

//? Hапиши скрипт перевірки типу змінної <emptyString1>
  //? за допомогою конструкції «if...else» або «if...else...if».
  let emptyString1;
  let number = 1;
  emptyString1 = "";
  emptyString1 = " ";
  // emptyString1 = "1";
//   emptyString1 = 1;
//   emptyString1 = null;
//   emptyString1 = false;
//   emptyString1 = true;
//   emptyString1 = 0;
//   emptyString1 = "0";
  // emptyString1 = prompt('Введіть будь яку інформацію')

  console.log("emptyString1:", emptyString1); //! 
  console.log("typeof emptyString1:", typeof emptyString1); //! string
  console.log("Number(emptyString1):", Number(emptyString1)); //! 0
  console.log("-------------------");

  //? Перевірка на "що це" (який тип значення)?:

if (typeof emptyString1 === 'string') {
  if (emptyString1 === "") {
    console.log('Змінна — це порожній рядок (string, "")');
  } else if (emptyString1 === "0") {
    console.log('Змінна — це рядок "0" (zero)');
  } else if (!isNaN(Number(emptyString1))) {
    console.log(`Змінна — це рядок, який містить "${emptyString1}" (string)`);
  } else {
    console.log('Тип змінної: рядок (string)');
  }
} else if (typeof emptyString1 === 'number') {
  if (emptyString1 === 0) {
    console.log('Змінна — це число 0 (zero)');
  } else {
    console.log(`Змінна — це число ${emptyString1} (number)`);
  }
} else if (typeof emptyString1 === 'boolean') {
  if (emptyString1 === true) {
    console.log('Змінна — це логічне значення true (boolean)');
  } else if (emptyString1 === false) {
    console.log('Змінна — це логічне значення false (boolean)');
  }
} else if (emptyString1 === null) {
  console.log('Змінна — це null');
} else if (typeof emptyString1 === 'undefined') {
  console.log('Змінна — це невизначене значення (undefined)');
} else {
  console.log('Невідомий тип змінної');
}
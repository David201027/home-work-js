//todo [1]
console.log(
  "%c [1] ",
  "color: yellow; background-color: #2274A5",
);
//? Напиши скрипт, який, для об'єкта user, послідовно:
//? - додає поле mood зі значенням 'happy'
//? - замінює значення hobby на 'skydiving'
//? - замінює значення premium на false
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
//! Код виконаного завдання

user.mood = 'happy';

user.hobby = 'skydiving'

user.premium = false;

console.log(user);


console.log("--------------------------------------------------");


//todo [2]
console.log(
  "%c [2] ",
  "color: yellow; background-color: #2274A5",
);
//? Напиши функцію countProps(obj),
//? яка рахує кількість властивостей в об'єкті.
//? Функція повертає число — кількість властивостей.
//! Код виконаного завдання
const countProps = function (obj) {
  return Object.keys(obj).length;
};

//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(countProps({})); //! 0
console.log(countProps({ name: 'Mango', age: 2 })); //! 2
console.log("--------------------------------------------------");


//todo [3]
console.log(
  "%c [3] ",
  "color: yellow; background-color: #2274A5",
);
//? Напиши функцію findBestEmployee(employees), 
//? яка приймає об'єкт співробітників 
//? і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). 
//? Співробітники і кількість виконаних завдань містяться 
//? як властивості об'єкта в форматі "ім'я":"кількість задач".
//! Код виконаного завдання
const findBestEmployee = function (employees) {
  let bestEmployee = '';
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
};


function declaretion () 
{}

//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(
  findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
  }),
); //! lorence

console.log(
  findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
  }),
); //! mango

console.log(
  findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
  }),
); //! lux
console.log("--------------------------------------------------");


//todo [4]
console.log(
  "%c [4] ",
  "color: yellow; background-color: #2274A5",
);
//? Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. 
//? Функція рахує загальну суму зарплати працівників і повертає її. 
//? Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
//! Код виконаного завдання
const countTotalSalary = function (employees) {
  let total = 0;

  for (const salary of Object.values(employees)) {
    total += salary;
  }

  return total;
};


//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(countTotalSalary({})); //! 0

console.log(
  countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
  }),
); //! 330

console.log(
  countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
  }),
); //! 400
console.log("--------------------------------------------------");


//todo [5]
console.log(
  "%c [5] ",
  "color: yellow; background-color: #2274A5",
);
//? Напиши функцію getAllPropValues(arr, prop), 
//? яка отримує масив об'єктів і ім'я властивості. 
//? Повертає масив значень певної властивості prop 
//? з кожного об'єкта в масиві.
//! Код виконаного завдання
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const values = [];

  for (const item of arr) {
    if (prop in item) {
      values.push(item[prop]);
    }
  }

  return values;
};


//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(getAllPropValues(products, 'name')); //! ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(getAllPropValues(products, 'quantity')); //! [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); //! []
console.log("--------------------------------------------------");

//todo [6]
console.log(
  "%c [6] ",
  "color: yellow; background-color: #2274A5",
);
//? Напиши функцію calculateTotalPrice(allProdcuts, productName), 
//? яка отримує масив об'єктів та ім'я продукту (значення властивості name). 
//? Повертає загальну вартість продукту (ціна * кількість).
//? Викличи функції для перевірки працездатності твоєї реалізації.
//! Код виконаного завдання
const calculateTotalPrice = function (allProdcuts, productName) {
  for (const product of allProdcuts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }

  return 0;
};


//! Викличи функції для перевірки працездатності твоєї реалізації.
console.log(calculateTotalPrice(products, 'Радар')); //! 5200
console.log(calculateTotalPrice(products, 'Дроїд')); //! 2800
console.log("--------------------------------------------------");



//todo [7] - додаткове
console.log(
  "%c [7] - додаткове ",
  "color: yellow; background-color: #2274A5",
);
//? Напиши сценарій керування особистим кабінетом інтернет-банку. 
//? Є об'єкт account в якому необхідно реалізувати методи 
//? для роботи з балансом та історією транзакцій.
//! Код виконаного завдання

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  _generateId() {
    return this.transactions.length + 1;
  },

  createTransaction(amount, type) {
    return {
      id: this._generateId(),
      type,
      amount,
    };
  },

  deposit(amount) {
    if (amount <= 0) {
      console.log('Сума має бути більшою за 0');
      return;
    }

    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount <= 0) {
      console.log('Сума має бути більшою за 0');
      return;
    }

    if (amount > this.balance) {
      console.log('Недостатньо коштів для зняття');
      return;
    }

    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return this.transactions.find(transaction => transaction.id === id) || null;
  },

  getTransactionTotal(type) {
    return this.transactions
      .filter(transaction => transaction.type === type)
      .reduce((total, transaction) => total + transaction.amount, 0);
  },
};


account.deposit(100);
account.withdraw(200);
account.deposit(300);

console.log('Баланс:', account.getBalance());

console.log('Транзакція #1:', account.getTransactionDetails(1));

console.log('Загальна сума поповнень:', account.getTransactionTotal('deposit'));
console.log('Загальна сума зняття:', account.getTransactionTotal('withdraw'));


console.log("--------------------------------------------------");
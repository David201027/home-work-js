//todo [1]
console.log(
  "%c [1] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userA = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
//! Код виконаного завдання

const { name, age, hobby, premium } = userA;

console.log(name);
console.log(age);
console.log(hobby);
console.log(premium);

console.log("--------------------------------------------------");



//todo [2]
console.log(
  "%c [2] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const userB = { 
  name: 'Mango', 
  age: 2 
};
//! Код виконаного завдання

const { name: nameB, age: ageB } = userB

console.log(nameB);
console.log(ageB);

console.log("--------------------------------------------------");



//todo [3]
console.log(
  "%c [3] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeePerformance = {
  count: 11,
  employeePerformanceLists: [
      {
          ann: 29,
          david: 35,
          helen: 1,
          lorence: 99,
      },
      {
          poly: 12,
          mango: 17,
          ajax: 4,
      },
      {
          lux: 147,
          david: 21,
          kiwi: 19,
          chelsy: 38,
      }
  ],
};
//! Код виконаного завдання

const {
  count,
  employeePerformanceLists: [
    { ann, david: david1, helen, lorence },
    { poly, mango, ajax },
    { lux, david: david2, kiwi, chelsy }
  ]
} = employeePerformance;

console.log(count);     

console.log(ann);       
console.log(david1);    
console.log(helen);    
console.log(lorence);   

console.log(poly);     
console.log(mango);    
console.log(ajax);    

console.log(lux);       
console.log(david2);   
console.log(kiwi);     
console.log(chelsy);   


console.log("--------------------------------------------------");



//todo [4]
console.log(
  "%c [4] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const employeeSalaries = {
  count: 6,
  employeeSalaryLists: [
      {
          mango: 100,
          poly: 150,
          alfred: 80,
      },
      {
          kiwi: 200,
          lux: 50,
          chelsy: 150,
      }
  ],
};
//! Код виконаного завдання

const {
  count: salaryCount,
  employeeSalaryLists: [
    {
      mango: mangoSalary,
      poly: polySalary,
      alfred: alfredSalary
    },
    {
      kiwi: kiwiSalary,
      lux: luxSalary,
      chelsy: chelsySalary
    }
  ]
} = employeeSalaries;

console.log(salaryCount);   

console.log(mangoSalary);  
console.log(polySalary);   
console.log(alfredSalary); 

console.log(kiwiSalary);    
console.log(luxSalary);   
console.log(chelsySalary);   


console.log("--------------------------------------------------");



//todo [5]
console.log(
  "%c [5] ",
  "color: yellow; background-color: #2274A5",
);
//? Зроби глибоку деструктуризацію об’єкта
//? та виведи вконсоль всі властивості 
//? як змінні з такими ж іменами,
//? або заміни імена на схожі, якщо це необхідно.
const products = [
  {
      name: 'Радар',
      price: 1300,
      quantity: 4
  },
  {
      name: 'Сканер',
      price: 2700,
      quantity: 3
  },
  {
      name: 'Дроїд',
      price: 400,
      quantity: 7
  },
  {
      name: 'Захоплення',
      price: 1200,
      quantity: 2
  },
];
//! Код виконаного завдання

const [
  { name: productName1, price: productPrice1, quantity: productQty1 },
  { name: productName2, price: productPrice2, quantity: productQty2 },
  { name: productName3, price: productPrice3, quantity: productQty3 },
  { name: productName4, price: productPrice4, quantity: productQty4 }
] = products;

console.log(productName1);
console.log(productPrice1); 
console.log(productQty1);   

console.log(productName2); 
console.log(productPrice2); 
console.log(productQty2);   

console.log(productName3); 
console.log(productPrice3); 
console.log(productQty3);   

console.log(productName4);
console.log(productPrice4); 
console.log(productQty4);

console.log("--------------------------------------------------");



//todo [6]
console.log(
  "%c [6] ",
  "color: yellow; background-color: #2274A5",
);
//? ✴️ Напиши сценарій керування особистим кабінетом інтернет-банку.
//? Є об'єкт account в якому необхідно реалізувати методи 
//? для роботи з балансом та історією транзакцій.
//? ✳️ Типів транзацкій всього два.
//? Можна покласти або зняти гроші з рахунку.
const Transaction1 = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

//todo: Кожна транзакція - це об'єкт з властивостями: id, type і amount

const account1 = {
  //todo: Поточний баланс рахунку
  balance: 0,
  //todo:  Історія транзакцій
  transactions: [],

  //todo:  Метод створює і повертає об'єкт транзакції.
  //todo:  Приймає суму і тип транзакції.
  createTransaction(amount, type) { },

  //todo:  Метод відповідає за додавання суми до балансу.
  //todo:  Приймає суму танзакції.
  //todo:  Викликає createTransaction для створення об'єкта транзакції
  //todo:  після чого додає його в історію транзакцій
  deposit(amount) { },
      //todo:  Метод відповідає за зняття суми з балансу.
    //todo:  Приймає суму танзакції.
    //todo:  Викликає createTransaction для створення об'єкта транзакції
    //todo:  після чого додає його в історію транзакцій.
    //todo:  Якщо amount більше, ніж поточний баланс, виводь повідомлення
    //todo:  про те, що зняття такої суми не можливо, недостатньо коштів.
    withdraw(amount) { },

    //todo:  Метод повертає поточний баланс
    getBalance() { },

    //todo:  Метод шукає і повертає об'єкт транзакції по id
    getTransactionDetails(id) { },

    //todo:  Метод повертає кількість коштів
    //todo:  певного типу транзакції з усієї історії транзакцій
    getTransactionTotal(type) { },
};
//! Код виконаного завдання

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],
  _transactionId: 1,

  createTransaction(amount, type) {
    return {
      id: this._transactionId++,
      type,
      amount,
    };
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('❌ Недостатньо коштів для зняття');
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
    return this.transactions.find(tx => tx.id === id) || null;
  },

  getTransactionTotal(type) {
    return this.transactions
      .filter(tx => tx.type === type)
      .reduce((total, tx) => total + tx.amount, 0);
  }
};

account.deposit(500);
account.withdraw(200);
account.withdraw(400);

console.log("Поточний баланс:", account.getBalance());
console.log("Історія транзакцій:", account.transactions);
console.log("Сума всіх депозитів:", account.getTransactionTotal(Transaction.DEPOSIT));
console.log("Сума всіх зняттів:", account.getTransactionTotal(Transaction.WITHDRAW));
console.log("Транзакція з ID 1:", account.getTransactionDetails(1));
console.log("--------------------------------------------------");


console.log("--------------------------------------------------");
//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас Account з властивостями login і email.
//? Додай метод getInfo(), 
//? який виводить в консоль значення полів 
//? login і email об'єкта який його викликав.
//! Код виконаного завдання ⤵️

//! Код виконаного завдання ⤴️

class Account {
    constructor({ login, email }) {
        this.login = login;
        this.email = email;
    }

    getInfo() {
        console.log(`Login: ${this.login}, Email: ${this.email}`);
    }
}

// console.log(Account.prototype.getInfo); //! function

const mango1 = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});

mango1.getInfo(); //! Login: Mangozedog, Email: mango@dog.woof

const poly1 = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});

poly1.getInfo(); //! Login: Poly, Email: poly@mail.com
console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас User для створення користувача 
//? з наступними властивостями:
//? 🔸 name - рядок
//? 🔸 age - число
//? 🔸 followers - число
//? Додай метод getInfo(), який, виводить рядок: 
//? User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers
//! Код виконаного завдання ⤵️

//! Код виконаного завдання ⤴️

class User {
    constructor({ name, age, followers }) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }

    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
    }
}

const mango2 = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});

console.log(mango2.getInfo()); //! User Mango is 2 years old and has 20 followers

const poly2 = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});

console.log(poly2.getInfo()); //! User Poly is 3 years old and has 17 followers
console.log("--------------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас Storage, 
//? який буде створювати об'єкти для управління складом товарів. 
//? При виклику буде отримувати один аргумент 
//? - початковий масив товарів, і записувати його у властивість items. 
//? Додай методи класу:
//? 🔸 getItems() - повертає масив поточних товарів
//? 🔸 addItem(item) - отримує новий товар і додає його до поточних
//? 🔸 removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
//! Код виконаного завдання ⤵️

//! Код виконаного завдання ⤴️

class Storage {
    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); //! [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); //! [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); //! [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
console.log("--------------------------------------------------");

//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас StringBuilder. 
//? На вхід він отримує один параметр 
//? - рядок, який записує у властивість _value. 
//? Додай класу наступний функціонал:
//? 🔸 Геттер value - повертає поточне значення поля _value
//? 🔸 Метод append(str) - отримує параметр str (рядок) і додає його в кінець _value
//? 🔸 Метод prepend(str) - отримує параметр str (рядок) і додає його на початок _value
//? 🔸 Метод pad(str) - отримує параметр str (рядок) і додає його на початок і в кінець _value
//! Код виконаного завдання ⤵️

//! Код виконаного завдання ⤴️

class StringBuilder {
    constructor(initialValue) {
        this._value = initialValue;
    }

    get value() {
        return this._value;
    }

    append(str) {
        this._value += str;
    }

    prepend(str) {
        this._value = str + this._value;
    }

    pad(str) {
        this._value = str + this._value + str;
    }
}

const builder = new StringBuilder('.');
console.log(builder.value); //! '.'

builder.append('^');
console.log(builder.value); //! '.^'

builder.prepend('^');
console.log(builder.value); //! '^.^'

builder.pad('=');
console.log(builder.value); //! '=^.^='
console.log("--------------------------------------------------");



//todo [5]
console.log(
    "%c [5] ",
    "color: yellow; background-color: #2274A5",
);
//? Напиши клас Car із зазначеними властивостями і методами.
class Car {
    // ✅ Статический метод для вывода характеристик
    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
    }

    constructor({ maxSpeed, price }) {
        this.speed = 0;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    accelerate(value) {
        if (this.speed + value <= this.maxSpeed) {
            this.speed += value;
        } else {
            this.speed = this.maxSpeed;
        }
    }

    decelerate(value) {
        if (this.speed - value >= 0) {
            this.speed -= value;
        } else {
            this.speed = 0;
        }
    }

    drive(hours) {
        if (this.isOn) {
            this.distance += hours * this.speed;
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang); //! maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang); //! maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); //! 2000
mustang.price = 4000;
console.log(mustang.price); //! 4000
console.log("--------------------------------------------------");
//todo [0 - Робота з масивом об’єктів]
console.log(
    "%c [0 - Робота з масивом об’єктів] ",
    "color: yellow; background-color: #2274A5",
);
//! Для виконання всіх завдань вкористовуй цей масив об'єктів:
const users = [
    {
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        id: '249b6175-5c30-44c6-b154-f120923736f5',
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        id: '150b00fb-dd82-427d-9faf-2879ea87c695',
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        id: 'e1bf46ab-7168-491e-925e-f01e21394812',
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
];
console.log("users:", users);
console.log("--------------------------------------------------");

//todo [1]
console.log(
    "%c [1] ",
    "color: yellow; background-color: #2274A5",
);
//? Отримати загальну суму балансу (поле balance) всіх користувачів.
const calculateTotalBalance = users => {
    return users.reduce((total, user) => total + user.balance, 0);
};

console.log(calculateTotalBalance(users)); //! 20916
console.log("--------------------------------------------------");



//todo [2]
console.log(
    "%c [2] ",
    "color: yellow; background-color: #2274A5",
);
//? Отримати масив імен всіх користувачів у яких є друг із зазначеним ім'ям.
const getUsersWithFriend = (users, friendName) => {
    return users
        .filter(user => user.friends.includes(friendName))
        .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); //! [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); //! [ 'Elma Head', 'Sheree Anthony' ]
console.log("--------------------------------------------------");



//todo [3]
console.log(
    "%c [3] ",
    "color: yellow; background-color: #2274A5",
);
//? Отримати масив імен (поле name) людей,
//? відсортованих в залежності від кількості їх друзів (поле friends)
const getNamesSortedByFriendsCount = users => {
    return [...users]
        .sort((a, b) => a.friends.length - b.friends.length)
        .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users)); //! [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
console.log("--------------------------------------------------");



//todo [4]
console.log(
    "%c [4] ",
    "color: yellow; background-color: #2274A5",
);
//? Отримати масив всіх умінь всіх користувачів (поле skills), 
//? при цьому не має бути повторюваних умінь 
//? і вони повинні бути відсортовані в алфавітному порядку.
const getSortedUniqueSkills = users => {
    const allSkills = users.flatMap(user => user.skills);
    const uniqueSkills = [...new Set(allSkills)];
    return uniqueSkills.sort();
};

console.log(getSortedUniqueSkills(users)); //! [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
console.log("--------------------------------------------------");
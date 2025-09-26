const baseUrl = "https://jsonplaceholder.typicode.com/";
const endPoint = "posts"

// const url = `${baseUrl}${endPoint}`;

// console.log(url);

// const requestBody = {
//     author: "Fay Rodis",
//     title: "Treatise on Inferno",
// };

// const options = {
//     method: "POST", //! операція CREATE, створення
//     body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//     },
// };

// console.log("options", options);

// fetch(url, options)
//     .then(response => response.json()) 
//     .then(post => console.log("Відповідь сервера на POST:", post))


const requestBody = {
    id: 9,
    author: "David",
    title: "Treatise on Inferno",
};

const options = {
    method: "PUT", //! операція UPDATE, оновлення
    body: JSON.stringify(requestBody), //! конвертація даних у JSON-формат
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    },
};

const url = `${baseUrl}${endPoint}/${requestBody.id}`;

console.log(url)

fetch(url, options)
    .then(response => response.json()) 
    .then(post => console.log("Відповідь сервера на PUT:", post))
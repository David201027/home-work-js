const loadButton = document.getElementById('loadButton');
const perPageInput = document.getElementById('perPageInput');
const postsContainer = document.getElementById('postsContainer');

let currentPage = 1;  // текущая «страница»
let postCounter = 0;  // нумерация постов

loadButton.addEventListener('click', () => {
  const perPage = parseInt(perPageInput.value);

  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${perPage}&_page=${currentPage}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        loadButton.disabled = true;
        loadButton.textContent = "Більше постів немає";
        return;
      }

      data.forEach(post => {
        postCounter++;
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h3>${postCounter}. ${post.title}</h3><p>${post.body}</p>`;
        postsContainer.appendChild(postDiv);
      });

      currentPage++; // подготовка к следующему блоку
      loadButton.textContent = 'Завантажити ще';

      // скролим страницу к кнопке, чтобы она была видна
      loadButton.scrollIntoView({ behavior: 'smooth' });
    })
    .catch(error => console.error('Помилка завантаження:', error));
});

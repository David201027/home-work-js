const API_KEY = '52887659-4efcc0eb61b049777b1538cb6';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;

const form = document.getElementById('search-form');
const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('load-more');
const searchContainer = document.getElementById('search-container');

let query = '';
let page = 1;

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function fetchImages(searchQuery, pageNum) {
  const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${encodeURIComponent(
    searchQuery
  )}&page=${pageNum}&per_page=${PER_PAGE}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Помилка HTTP: ' + response.status);
    }

    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Помилка завантаження зображень: ', error);
    return [];
  }
}

function renderImages(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
        tags,
      }) => `
    <li>
      <div class="photo-card">
        <a href="${largeImageURL}" target="_blank">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="stats">
          <p class="stats-item">
            <i class="material-icons">thumb_up</i>
            ${likes}
          </p>
          <p class="stats-item">
            <i class="material-icons">visibility</i>
            ${views}
          </p>
          <p class="stats-item">
            <i class="material-icons">comment</i>
            ${comments}
          </p>
          <p class="stats-item">
            <i class="material-icons">cloud_download</i>
            ${downloads}
          </p>
        </div>
      </div>
    </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}

async function onSearch(event) {
  event.preventDefault();
  query = event.currentTarget.elements.query.value.trim();
  if (query === '') return;

  searchContainer.classList.add('active');

  gallery.classList.add('active');

  page = 1;
  gallery.innerHTML = '';
  const images = await fetchImages(query, page);

  if (images.length === 0) {
    loadMoreBtn.style.display = 'none';
    alert('Нічого не знайдено 😔');
    return;
  }

  renderImages(images);
  loadMoreBtn.style.display = 'block';
}

async function onLoadMore() {
  page += 1;
  const images = await fetchImages(query, page);
  renderImages(images);

  const lastCard = gallery.lastElementChild;
  if (lastCard) {
    lastCard.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }

  if (images.length < PER_PAGE) {
    loadMoreBtn.style.display = 'none';
  }
}

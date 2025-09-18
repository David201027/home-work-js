const elementsPerPageInput = document.getElementById('per-page');
const elementAfterWhichInput = document.getElementById('element-after-which');

const fetchElementsBtn = document.querySelector(".fetch-btn");

const infoNumberElements = document.querySelector(".number-elements");
const infoPage = document.querySelector(".page");
const infoNumberOfPages = document.querySelector(".number-of-pages");

const elementsList = document.querySelector(".elements-list");

const fetchElementsPrevBtn = document.getElementById("prev");
const fetchElementsNextBtn = document.getElementById("next");

//! Кількість елементів N у групі (на сторінці):
let perPage;

//! Кількість елементів після якого показуємо наступні N елементів:
let elementAfterWhich;

//! Кількість елементів у колекції:
let numberElements;

//! Номер сторінки
let page = 1;

//! Кількість груп (сторінок):
let numberPages;

//! url-адреса попередньої сторінки
let urlPrev = "";

//! url-адреса наступної сторінки
let urlNext = "";

//! Лічильник для гортання сторінок
let countPage = 0;

fetchElementsBtn.addEventListener("click", fetchElements);
fetchElementsPrevBtn.addEventListener("click", fetchElementsPrev);
fetchElementsNextBtn.addEventListener("click", fetchElementsNext);


async function fetchElements() {
  perPage = +elementsPerPageInput.value;
  elementAfterWhich = +elementAfterWhichInput.value;

  const url = `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${elementAfterWhich}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    numberElements = data.count;
    numberPages = Math.ceil(numberElements / perPage);

    urlPrev = data.previous;
    urlNext = data.next;

    countPage = Math.floor(elementAfterWhich / perPage) + 1;

    renderElements(data.results);
    updateInfo();
  } catch (err) {
    console.error("Error fetching Pokémon:", err);
  }
}

async function fetchElementsPrev() {
  if (!urlPrev) return;

  try {
    const res = await fetch(urlPrev);
    const data = await res.json();

    urlPrev = data.previous;
    urlNext = data.next;

    elementAfterWhich = getOffsetFromUrl(urlPrev, urlNext, false);
    countPage--;

    renderElements(data.results);
    updateInfo();
  } catch (err) {
    console.error("Error fetching prev page:", err);
  }
}

async function fetchElementsNext() {
  if (!urlNext) return;

  try {
    const res = await fetch(urlNext);
    const data = await res.json();

    urlPrev = data.previous;
    urlNext = data.next;

    elementAfterWhich = getOffsetFromUrl(urlPrev, urlNext, true);
    countPage++;

    renderElements(data.results);
    updateInfo();
  } catch (err) {
    console.error("Error fetching next page:", err);
  }
}

function renderElements(pokemons) {
  elementsList.innerHTML = "";

  pokemons.forEach(pokemon => {
    const li = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = pokemon.name;

    const urlSpan = document.createElement("span");
    urlSpan.textContent = ` (${pokemon.url})`;
    urlSpan.style.color = "gray";

    li.appendChild(nameSpan);
    li.appendChild(urlSpan);

    elementsList.appendChild(li);
  });
}



function updateInfo() {
  infoNumberElements.textContent = numberElements;
  infoPage.textContent = countPage;
  infoNumberOfPages.textContent = numberPages;
}

function getOffsetFromUrl(prev, next, isNext) {
  let url = isNext ? next : prev;
  if (!url) return 0;
  const params = new URL(url).searchParams;
  return +params.get("offset");
}

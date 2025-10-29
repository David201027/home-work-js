let currentPage = 1;
let perPage = 5;
let totalItems = 0;
let allData = [];

const API_URL = "http://localhost:3000/todos";

const dataList = document.getElementById("dataList");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const pageInfo = document.getElementById("pageInfo");
const fetchBtn = document.getElementById("fetchBtn");
const addBtn = document.getElementById("addBtn");
const postsPerPageInput = document.getElementById("postsPerPage");
const pageNumberInput = document.getElementById("pageNumber");
const searchInput = document.getElementById("searchInput");

const modal = document.getElementById("editModal");
const closeBtn = modal.querySelector(".close");
const editForm = document.getElementById("editForm");

const addModal = document.getElementById("addModal");
const addCloseBtn = document.querySelector(".add-close");
const addForm = document.getElementById("addForm");

let editingCard = null;

async function fetchData() {
  const res = await fetch(API_URL);
  allData = await res.json();
  totalItems = allData.length;
  renderPosts();
}

function renderPosts() {
  const search = searchInput.value.toLowerCase();
  const filtered = allData.filter(item => item.title.toLowerCase().includes(search));
  totalItems = filtered.length;

  const totalPages = Math.ceil(totalItems / perPage) || 1;
  if (currentPage > totalPages) currentPage = totalPages;

  pageNumberInput.value = currentPage;
  const start = (currentPage - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  dataList.innerHTML = "";
  paginated.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${card.title}</h3>
      <p>User ID: ${card.userId}</p>
      <p>Post ID: ${card.id}</p>
      <p>Completed: ${card.completed}</p>
      <p>Comments: ${card.comments ? card.comments.join(", ") : ""}</p>
      <button class="comment-btn">Добавить комментарий</button>
      <button class="edit-btn">Редактировать</button>
      <button class="delete-btn">Удалить</button>
    `;
    dataList.appendChild(div);

  
    div.querySelector(".delete-btn").onclick = async () => {
      await fetch(`${API_URL}/${card.id}`, { method: "DELETE" });
      await fetchData();
    };

  
    div.querySelector(".edit-btn").onclick = () => {
      editingCard = card;
      openModal(modal);
      editForm.userId.value = card.userId;
      editForm.id.value = card.id;
      editForm.title.value = card.title;
      editForm.completed.value = card.completed;
    };

  
    div.querySelector(".comment-btn").onclick = async () => {
      const comment = prompt("Введите комментарий:");
      if (comment) {
        const updatedComments = [...(card.comments || []), comment];
        await fetch(`${API_URL}/${card.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ comments: updatedComments })
        });
        await fetchData();
      }
    };
  });

  updatePagination(totalPages);
}

function updatePagination(totalPages) {
  pageInfo.textContent = `Страница ${currentPage} / ${totalPages}`;
  btnPrev.disabled = currentPage <= 1;
  btnNext.disabled = currentPage >= totalPages;
}

btnPrev.onclick = () => { if (currentPage > 1) { currentPage--; renderPosts(); } };
btnNext.onclick = () => { currentPage++; renderPosts(); };

searchInput.oninput = () => { currentPage = 1; renderPosts(); };
fetchBtn.onclick = fetchData;

postsPerPageInput.addEventListener("change", () => {
  perPage = Math.max(1, Number(postsPerPageInput.value) || 5);
  currentPage = 1;
  renderPosts();
});

pageNumberInput.addEventListener("change", () => {
  const val = Number(pageNumberInput.value);
  const totalPages = Math.ceil(totalItems / perPage) || 1;
  if (val >= 1 && val <= totalPages) {
    currentPage = val;
    renderPosts();
  } else pageNumberInput.value = currentPage;
});

addBtn.onclick = () => openModal(addModal);
addCloseBtn.onclick = () => closeModal(addModal);
closeBtn.onclick = () => closeModal(modal);
window.onclick = (e) => {
  if (e.target === modal) closeModal(modal);
  if (e.target === addModal) closeModal(addModal);
};

function openModal(m) { m.classList.add("show"); }
function closeModal(m) { m.classList.remove("show"); }

addForm.onsubmit = async (e) => {
  e.preventDefault();
  const newCard = {
    userId: Number(addForm.addUserId.value),
    title: addForm.addTitle.value,
    completed: addForm.addCompleted.value === "true",
    comments: []
  };
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCard)
  });
  closeModal(addModal);
  addForm.reset();
  await fetchData();
};

editForm.onsubmit = async (e) => {
  e.preventDefault();
  if (!editingCard) return;
  const updatedCard = {
    userId: Number(editForm.userId.value),
    id: editingCard.id,
    title: editForm.title.value,
    completed: editForm.completed.value === "true"
  };
  await fetch(`${API_URL}/${editingCard.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedCard)
  });
  closeModal(modal);
  await fetchData();
};

fetchData();

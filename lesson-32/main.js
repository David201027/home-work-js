// main.js (type=module)
const templateSource = document.getElementById("student-template").innerHTML;
const template = Handlebars.compile(templateSource);

// DOM-елементи
const addBtn = document.getElementById("add-student-btn");
const studentsList = document.getElementById("students-list");

const modal = document.getElementById("modal");
const studentForm = document.getElementById("student-form");
const formTitle = document.getElementById("form-title");
const cancelFormBtn = document.getElementById("cancel-form");

const confirmModal = document.getElementById("confirm-modal");
const confirmYes = document.getElementById("confirm-yes");
const confirmNo = document.getElementById("confirm-no");

// Дані
let dataArray = [];
let dataJSON = "[]";
let editId = null;
let pendingDeleteId = null;

// --- Показати / приховати модал ---
function openModal() {
  modal.setAttribute("aria-hidden", "false");
  modal.style.display = "flex";
}
function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  modal.style.display = "none";
}

// --- Показати / приховати confirm ---
function openConfirm() {
  confirmModal.setAttribute("aria-hidden", "false");
  confirmModal.style.display = "flex";
}
function closeConfirm() {
  confirmModal.setAttribute("aria-hidden", "true");
  confirmModal.style.display = "none";
}

// Відкрити форму (Додати)
addBtn.addEventListener("click", () => {
  editId = null;
  formTitle.textContent = "Додати студента";
  studentForm.reset();
  openModal();
});

// Закрити модал по кнопці Скасувати
cancelFormBtn.addEventListener("click", () => closeModal());

// Закрити модал по кліку на фон
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
  if (e.target === confirmModal) closeConfirm();
});

// --- Обробка відправки форми ---
studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    const student = {
      id: editId ?? Date.now().toString(),
      firstName: document.getElementById("firstName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      age: parseInt(document.getElementById("age").value.trim(), 10),
      course: document.getElementById("course").value.trim(),
      faculty: document.getElementById("faculty").value.trim(),
    };

    if (!student.firstName || !student.lastName || Number.isNaN(student.age)) {
      throw new Error("Будь ласка, заповніть ім'я, прізвище та коректний вік.");
    }

    if (editId) {
      const idx = dataArray.findIndex((s) => s.id === editId);
      if (idx !== -1) dataArray[idx] = { ...dataArray[idx], ...student };
    } else {
      dataArray.push(student);
    }

    dataJSON = JSON.stringify(dataArray);
    renderStudents();
    closeModal();
    editId = null;
  } catch (err) {
    alert("Помилка: " + err.message);
  }
});

// --- Рендер списку студентів ---
function renderStudents() {
  try {
    const students = JSON.parse(dataJSON);
    studentsList.innerHTML = "";
    students.forEach((student) => {
      const html = template(student);
      studentsList.insertAdjacentHTML("beforeend", html);
    });
  } catch (err) {
    alert("Помилка JSON: " + err.message);
  }
}

// --- Делегування подій для Edit / Delete ---
studentsList.addEventListener("click", (e) => {
  const card = e.target.closest(".student-card");
  if (!card) return;
  const id = card.getAttribute("data-id");

  if (e.target.classList.contains("edit-btn")) {
    const student = dataArray.find((s) => s.id === id);
    if (!student) return alert("Студента не знайдено.");
    editId = id;
    formTitle.textContent = "Редагувати студента";
    document.getElementById("firstName").value = student.firstName;
    document.getElementById("lastName").value = student.lastName;
    document.getElementById("age").value = student.age;
    document.getElementById("course").value = student.course;
    document.getElementById("faculty").value = student.faculty;
    openModal();
    return;
  }

  if (e.target.classList.contains("delete-btn")) {
    pendingDeleteId = id;
    openConfirm();
  }
});

// --- Підтвердження видалення ---
confirmYes.addEventListener("click", () => {
  if (!pendingDeleteId) return closeConfirm();
  dataArray = dataArray.filter((s) => s.id !== pendingDeleteId);
  dataJSON = JSON.stringify(dataArray);
  renderStudents();
  pendingDeleteId = null;
  closeConfirm();
});

confirmNo.addEventListener("click", () => {
  pendingDeleteId = null;
  closeConfirm();
});

dataJSON = JSON.stringify(dataArray);
renderStudents();

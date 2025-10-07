let dataArray = [];
const studentsList = document.getElementById("students-list");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const form = document.getElementById("student-form");
const addBtn = document.getElementById("add-student-btn");
const cancelBtn = document.getElementById("cancel-btn");

// шаблон із HTML
const templateSource = document.getElementById("student-template").innerHTML;
const template = Handlebars.compile(templateSource);

// Ініціалізація
function initApp() {
  if (!localStorage.getItem("students")) {
    fetch("students.json")
      .then((res) => res.json())
      .then((data) => {
        dataArray = data;
        updateStorage();
        renderList();
      })
      .catch((err) => console.error("Помилка завантаження students.json:", err));
  } else {
    try {
      dataArray = JSON.parse(localStorage.getItem("students"));
    } catch (err) {
      console.error("Помилка читання localStorage:", err);
      dataArray = [];
    }
    renderList();
  }
}

function getNextId() {
  if (dataArray.length === 0) return 1;
  return Math.max(...dataArray.map((s) => s.id)) + 1;
}

function updateStorage() {
  try {
    localStorage.setItem("students", JSON.stringify(dataArray));
  } catch (err) {
    alert("Помилка при збереженні у JSON!");
  }
}

function renderList() {
  studentsList.innerHTML = "";
  dataArray.forEach((student) => {
    studentsList.innerHTML += template(student);
  });

  document.querySelectorAll(".edit-btn").forEach((btn) => btn.addEventListener("click", onEdit));
  document.querySelectorAll(".delete-btn").forEach((btn) => btn.addEventListener("click", onDelete));
}

function openModal(title) {
  modalTitle.textContent = title;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

addBtn.addEventListener("click", () => {
  form.reset();
  document.getElementById("student-id").value = "";
  openModal("Додати студента");
});

cancelBtn.addEventListener("click", closeModal);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = document.getElementById("student-id").value;
  const student = {
    id: id ? Number(id) : getNextId(),
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    age: Number(document.getElementById("age").value),
    course: document.getElementById("course").value.trim(),
    faculty: document.getElementById("faculty").value.trim(),
  };

  try {
    JSON.stringify(student);
  } catch {
    alert("Некоректні дані!");
    return;
  }

  if (id) {
    const i = dataArray.findIndex((s) => s.id == id);
    dataArray[i] = student;
  } else {
    dataArray.push(student);
  }

  updateStorage();
  renderList();
  closeModal();
});

function onEdit(e) {
  const id = e.target.closest("li").dataset.id;
  const student = dataArray.find((s) => s.id == id);
  document.getElementById("student-id").value = student.id;
  document.getElementById("firstName").value = student.firstName;
  document.getElementById("lastName").value = student.lastName;
  document.getElementById("age").value = student.age;
  document.getElementById("course").value = student.course;
  document.getElementById("faculty").value = student.faculty;
  openModal("Редагувати студента");
}

function onDelete(e) {
  const id = e.target.closest("li").dataset.id;
  if (confirm("Видалити картку?")) {
    dataArray = dataArray.filter((s) => s.id != id);
    updateStorage();
    renderList();
  }
}

initApp();

import './style.css';                          // побочный импорт (CSS)
import greet, { exclaim } from './greeter.js'; // default + именованный
import circleArea, { add as sum, mul } from './math.js'; // default + rename
import * as Utils from './utils/index.js';     // namespace import
import todos from './data/todos.json';         // импорт JSON

// Выводим приветствие
document.querySelector('#greet').textContent =
  exclaim(greet('Vite user'));

// Используем именованные и default-экспорты
document.querySelector('#sum').textContent = String(sum(2, 3));
document.querySelector('#area').textContent = String(circleArea(5));

// Показываем, что utils реэкспортирует разные вещи
console.log('Utils.add(4,5)=', Utils.add(4,5));
console.log('Utils.circleArea(3)=', Utils.circleArea(3));
console.log('Utils.constants.APP_NAME=', Utils.constants.APP_NAME);
console.log('Utils.greet("World")=', Utils.greet('World'));
console.log('Utils.shout("hello")=', Utils.shout('hello'));

// Импорт JSON и рендер списка
const ul = document.querySelector('#todoList');
todos.forEach(t => {
  const li = document.createElement('li');
  li.textContent = t.title;
  if (t.done) li.classList.add('done');
  ul.appendChild(li);
});

// Динамический импорт (import()) по клику
document.getElementById('lazyBtn').addEventListener('click', async () => {
  // динамический импорт модуля
  const mod = await import('./modules/asyncModule.js');
  const out = document.getElementById('lazyOut');
  out.textContent = `Lazy square(12) = ${mod.default(12)}, timestamp = ${mod.timestamp()}`;
});

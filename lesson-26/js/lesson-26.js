const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');
const resizeImage = (value) => {
  image.style.width = value * 5 + 'px';
};
const debouncedResize = _.debounce((event) => {
  resizeImage(event.target.value);
});
slider.addEventListener('input', debouncedResize);







const box = document.getElementById('box');
const container = document.querySelector('.container');

const containerRect = container.getBoundingClientRect();
const boxWidth = box.offsetWidth;
const boxHeight = box.offsetHeight;

const moveBox = (x, y) => {
  const maxX = containerRect.width - boxWidth;
  const maxY = containerRect.height - boxHeight;

  let newX = x - containerRect.left;
  let newY = y - containerRect.top;

  newX = Math.max(0, Math.min(newX, maxX));
  newY = Math.max(0, Math.min(newY, maxY));

  box.style.transform = `translate(${newX}px, ${newY}px)`;
};

const debouncedMove = _.debounce((event) => {
  moveBox(event.clientX, event.clientY);
}, 100);

container.addEventListener('mousemove', debouncedMove);

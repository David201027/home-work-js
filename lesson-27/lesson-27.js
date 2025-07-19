document.addEventListener("DOMContentLoaded", () => {
  // Я шукаю всі картинки з класом 'lazy' для ленивого завантаження
  const lazyImages = document.querySelectorAll('img.lazy');
  console.log('Найдено картинок:', lazyImages.length);

  // Я створюю новий IntersectionObserver, щоб слідкувати за появою картинок у вікні браузера
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      // Якщо картинка стала видимою (перетинається з вікном перегляду)
      if (entry.isIntersecting) {
        const img = entry.target;
        console.log('Загружаю картинку:', img.dataset.src);
        
        // Я заміняю src картинки на адресу з data-src, щоб почати її завантаження
        img.src = img.dataset.src;
        
        // Коли картинка завантажилася, я додаю клас 'loaded' для анімації чи стилів
        img.onload = () => {
          img.classList.add('loaded');
          console.log('Картинка завантажена:', img.dataset.src);
        };
        
        // Тепер я перестаю спостерігати цю картинку, бо вона вже завантажена
        obs.unobserve(img);
      }
    });
  }, {
    rootMargin: '100px 0px',  // Я підстраховуюсь, щоб підвантажити картинку трохи раніше, ніж вона з’явиться
    threshold: 0.1            // Порог видимості — коли 10% картинки видно у вікні, починаю завантаження
  });

  // Я починаю спостерігати за всіма картинками для ленивого завантаження
  lazyImages.forEach(img => observer.observe(img));

  // Я додаю обробник події на кнопку 'load-all' для примусової загрузки всіх картинок
  document.getElementById('load-all').addEventListener('click', () => {
    console.log('Кнопка завантажити всі натиснута');
    lazyImages.forEach(img => {
      // Якщо картинка ще не завантажена (немає класу 'loaded')
      if (!img.classList.contains('loaded')) {
        console.log('Примусово завантажую:', img.dataset.src);
        
        // Я змінюю src, щоб почати її загрузку
        img.src = img.dataset.src;
        
        // І після загрузки додаю клас 'loaded'
        img.onload = () => {
          img.classList.add('loaded');
          console.log('Картинка завантажена:', img.dataset.src);
        };
      }
    });
  });
});

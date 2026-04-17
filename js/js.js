const chatBtn = document.querySelector('.chat-btn');
const chatMenu = document.querySelector('.chat-menu');
const chatOverlay = document.querySelector('.chat-overlay');

chatBtn.addEventListener('click', () => {
  chatMenu.style.opacity = '1';
  chatMenu.style.pointerEvents = 'auto';
  chatOverlay.style.opacity = '1';
  chatOverlay.style.pointerEvents = 'auto';
});

chatOverlay.addEventListener('click', () => {
  chatMenu.style.opacity = '0';
  chatMenu.style.pointerEvents = 'none';
  chatOverlay.style.opacity = '0';
  chatOverlay.style.pointerEvents = 'none';
});
// Находим все карточки
const products = document.querySelectorAll('.product');

// Модалка
const modalOverlay = document.querySelector('.modal-overlay');
const modalImg = document.querySelector('.modal-img');
const modalTitle = document.querySelector('.modal-title');
const modalText = document.querySelector('.modal-text');
const modalPrice = document.querySelector('.modal-price');
const modalClose = document.querySelector('.modal-close');

// При клике на карточку
products.forEach(product => {
    product.addEventListener('click', () => {
        const imgSrc = product.querySelector('img').src;
        const title = product.querySelector('h2').innerText;
        const text = product.querySelector('p').innerText;
        const price = product.querySelector('.price').innerText;

        modalImg.src = imgSrc;
        modalTitle.innerText = title;
        modalText.innerText = text;
        modalPrice.innerText = price;

        modalOverlay.style.display = 'flex';
    });
});

// Закрытие модалки
modalClose.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

// Закрытие при клике на фон
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeBtn = document.querySelector('.close');
    const modalClose = document.getElementById('modal-close');

    // Функция открытия модального окна с сообщением
    function showModal(message) {
        modalMessage.textContent = message;
        modal.classList.remove('hidden');
    }

    // Закрытие модального окна
    function closeModal() {
        modal.classList.add('hidden');
    }

    // Обработчики закрытия
    closeBtn.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    // Клик вне модального окна тоже закрывает
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Обработка кнопок "Купить"
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const pkg = this.getAttribute('data-package');
            const price = this.getAttribute('data-price');
            // В реальном проекте здесь может быть редирект на платёжную систему
            // Например: window.location.href = 'https://example.com/pay?package=' + pkg;
            showModal(`Вы выбрали пакет "${pkg}" за ${price} руб.\nВ реальном проекте здесь будет переход к оплате.`);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeBtn = document.querySelector('.close');
    const modalClose = document.getElementById('modal-close');

    function showModal(message) {
        modalMessage.textContent = message;
        modal.classList.remove('hidden');
    }

    function closeModal() {
        modal.classList.add('hidden');
    }

    closeBtn.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const pkg = this.getAttribute('data-package');
            const price = this.getAttribute('data-price');
            showModal(`Вы выбрали пакет "${pkg}" за ${price} руб.\nДонат будет доступен ближе к 8 марта!`);
        });
    });
});

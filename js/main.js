const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close');

document.querySelectorAll('.service-card .btn').forEach(button => {
  button.addEventListener('click', function() {
    const card = this.parentElement;
    modalTitle.textContent = card.querySelector('h3').textContent;
    modalDescription.textContent = card.querySelector('p').textContent;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
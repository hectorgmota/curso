// Selecionar elementos
const openModalBtn1 = document.getElementById('openModal1'); // Botão de abrir modal
const openModalBtn2 = document.getElementById('openModal2'); // Botão de abrir modal
const modal = document.getElementById('modal'); // Modal
const closeModalBtn = document.getElementById('closeModalBtn'); // Botão de fechar modal

// Abrir modal
openModalBtn1.addEventListener('click', () => {
  modal.style.display = 'flex';
});

openModalBtn2.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Fechar modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar modal ao clicar fora da área de conteúdo
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

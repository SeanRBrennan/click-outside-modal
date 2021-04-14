const cardButtons = document.querySelectorAll('.card button');

const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');
  // grab the image src
  const imgSrc = card.querySelector('img').src;
  const description = card.dataset.description;
  console.log(description)
  const name = card.querySelector('h2').textContent;
  // populate the modal with the new info
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '600')}" alt=${name}"/>
  <p>${description}</p>
  `;
  // show modal
  modalOuter.classList.add('open');
}

cardButtons.forEach(button => 
  button.addEventListener('click', handleCardButtonClick))

  function closeModal() {
    modalOuter.classList.remove('open');
  }

  modalOuter.addEventListener('click', function(e) {
    const isOutside = !e.target.closest('.modal-inner');
    if (isOutside) {
      closeModal();
    }
  })

  window.addEventListener('keydown', event => {
    if (event.key === "Escape") {
      closeModal();
    }
  })
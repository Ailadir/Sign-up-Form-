const input = document.querySelectorAll('.signup__form-input');

input.forEach((item) =>
  item.addEventListener('keydown', (event) => {
    item.classList.add('signup__form-input-active');
  })
);

input.forEach((item) =>
  item.addEventListener('keyup', (event) => {
    item.classList.remove('-active');
  })
);

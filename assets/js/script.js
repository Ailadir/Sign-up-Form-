const input = document.querySelectorAll('.signup__form-input');
const firstPassword = document.querySelector('.first_password');
const secondPassword = document.querySelector('.second_password');

input.forEach((item) =>
  item.addEventListener('focusout', (event) => {
    item.classList.add('signup__form-input-active');
  })
);

// input.forEach((item) =>
//   item.addEventListener('keyup', (event) => {
//     item.classList.remove('-active');
//   })
// );

// Check passwords
secondPassword.addEventListener('focusout', (event) => {
  if (firstPassword.textContent !== secondPassword.textContent) {
    secondPassword.attributes.removeNamedItem(':valid');
    secondPassword.setCustomValidity('Hey, its not working');
  }
});

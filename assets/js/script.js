const contentBox = document.getElementById('content_container');
const btnCreate = document.getElementById('create_account');
const firstPassword = document.getElementById('password');
const secondPassword = document.getElementById('conf_password');
const inputs = document.querySelectorAll('input');

window.addEventListener('load', (event) => {
  contentBox.classList.remove('animated');
});

btnCreate.addEventListener('click', (event) => {
  if (firstPassword.value !== secondPassword.value) {
    // btnCreate.disabled = true;
    console.log('blocked');
  } else {
    console.log('working');
  }
});

const arr = [];

inputs.forEach((item) => {
  if (item.checkValidity()) {
    console.log(item);
  }
  console.log(item.value);
  arr.push(item.value);
});

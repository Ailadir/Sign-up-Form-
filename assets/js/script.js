const input = document.querySelectorAll(".signup__form-input");
const firstPassword = document.querySelector(".first_password");
const secondPassword = document.querySelector(".second_password");
const button = document.querySelector(".btn");
const registrationPage = document.getElementById("home");
const registredPage = document.getElementById("success");
const checker = (arr) => arr.every(Boolean);

input.forEach((item) =>
  item.addEventListener("focusout", (event) => {
    item.classList.add("signup__form-input-active");
  })
);

// Check passwords
secondPassword.addEventListener("keyup", (event) => {
  if (firstPassword.value !== secondPassword.value) {
    secondPassword.setCustomValidity(
      "Error: Passwords do not match, please ensure both entries are identical."
    );
  } else {
    secondPassword.setCustomValidity("");
  }
});

// Show another page when all input field are valid and person click on create account button

button.addEventListener("click", (event) => {
  const checkArray = [];
  console.log(checkArray);
  input.forEach((item) => {
    checkArray.push(item.validity.valid);
  });
  if (checker(checkArray)) {
    registredPage.style.opacity = 1;
    registrationPage.style.display = "none";
  }
});

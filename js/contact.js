const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameErrorContainer = document.querySelector(".input-name .error-container");
  const subjectErrorContainer = document.querySelector(".input-subject .error-container");
  const emailErrorContainer = document.querySelector(".input-email .error-container");
  const addressErrorContainer = document.querySelector(".input-address .error-container");

  name.onkeyup = () => {
  };
  subject.onkeyup = () => {
  };
  email.onkeyup = () => {
  };
  address.onkeyup = () => {
  };

  nameErrorContainer.innerHTML = "";
  subjectErrorContainer.innerHTML = "";
  emailErrorContainer.innerHTML = "";
  addressErrorContainer.innerHTML = "";

  if (checkLength(name.value, 0) && checkLength(subject.value, 9) && validateEmail(email.value) && checkLength(address.value, 24)) {
    document.querySelector("form .success-container").innerHTML = displayValidationMessage();
    form.reset()
  } else if (!checkLength(name.value, 0)) {
    nameErrorContainer.innerHTML = displayValidationMessage("validation-error", "Name is required")
  } else if (!checkLength(subject.value, 9)) {
    subjectErrorContainer.innerHTML = displayValidationMessage("validation-error", "Subject is too short")
  } else if (!validateEmail(email.value)) {
    emailErrorContainer.innerHTML = displayValidationMessage("validation-error", "Email is invalid")
  } else if (!checkLength(address.value, 24)) {
    addressErrorContainer.innerHTML = displayValidationMessage("validation-error", "Address is too short")
  }
})

function checkLength(value, len) {
  return value.trim().length > len;
}

function validateEmail(email) {
  const regExp = /\S+@\S+\.\S+/;
  return regExp.test(email);
}
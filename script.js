let nameError = document.querySelector("#name-error");
let PhoneError = document.querySelector("#Phone-error");
let EmailError = document.querySelector("#Email-error");
let MessageError = document.querySelector("#Message-error");
let SubmitError = document.querySelector("#submit-error");

function validateName() {
  let name = document.querySelector("#contact-name").value;
  if (name.length == "") {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  let phone = document.querySelector("#contact-Phone").value;
  if (phone.length == 0) {
    PhoneError.innerHTML = "Phone number is required";
    return false;
  }
  if (phone.length !== 10) {
    PhoneError.innerHTML = "Phone number should be 10 digit";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    PhoneError.innerHTML = "only digit please";
    return false;
  }
  PhoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let Email = document.querySelector("#contact-Email").value;
  if (Email.length == "") {
    EmailError.innerHTML = "Email is required";
  }
  if (!Email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    EmailError.innerHTML = "Invalid Email";
    return false;
  }
  EmailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  let message = document.querySelector("#contact-Message").value;
  let required = 30;
  let left = required-message.length;
  if (left > 0) {
    MessageError.innerHTML = "you have " + left + " characters left";
    return false;
  }
  MessageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    SubmitError.style.display = "block";
    SubmitError.innerHTML = "Please fix the error";
    setTimeout(function () {
      SubmitError.style.display = "none";
    }, 3000);
    return false;
  }
}

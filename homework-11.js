import Form from "./Form.js";
import Modal from "./Modal.js";

const subscribeForm = new Form("subscribeForm");

subscribeForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(subscribeForm.getValues());

  subscribeForm.reset();
});

const registrationButton = document.getElementById("open-registration");

const registrationModal = new Modal("registration-modal");

registrationButton.addEventListener("click", () => {
  registrationModal.open();
});

const registrationForm = new Form("registration-form");

let user;

registrationForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.isValid()) {
    alert("Регистрация отклонена: заполните поля корректно.");
    registrationForm.form.reportValidity();
    return;
  }

  const values = registrationForm.getValues();

  if (values.password !== values.confirmPassword) {
    alert("Регистрация отклонена: пароли не совпадают.");
    document.getElementById("confirmPassword").focus();
    return;
  }

  user = values;
  user.createdOn = new Date();

  console.log(user);

  registrationForm.reset();
  registrationModal.close();
});

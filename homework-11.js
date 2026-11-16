const subscribeForm = document.getElementById("subscribeForm");

subscribeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("subscribeEmail").value;

  console.log({ email: email });

  subscribeForm.reset();
});

const registrationButton = document.getElementById("open-registration");
const registrationModal = document.getElementById("registration-modal");
const closeRegistrationButton = document.getElementById("close-registration");

function openRegistrationModal() {
  registrationModal.classList.add("modal-showed");
  registrationModal.setAttribute("aria-hidden", "false");
}

function closeRegistrationModal() {
  registrationModal.classList.remove("modal-showed");
  registrationModal.setAttribute("aria-hidden", "true");
}

registrationButton.addEventListener("click", openRegistrationModal);

closeRegistrationButton.addEventListener("click", closeRegistrationModal);

registrationModal
  .querySelector("[data-close-modal]")
  .addEventListener("click", closeRegistrationModal);

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    registrationModal.classList.contains("modal-showed")
  ) {
    closeRegistrationModal();
  }
});

const registrationForm = document.getElementById("registration-form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

let user;

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.checkValidity()) {
    alert("Регистрация отклонена: заполните поля корректно.");
    registrationForm.reportValidity();
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Регистрация отклонена: пароли не совпадают.");
    confirmPasswordInput.focus();
    return;
  }

  const formData = new FormData(registrationForm);

  user = Object.fromEntries(formData.entries());
  user.createdOn = new Date();

  console.log(user);

  registrationForm.reset();
  closeRegistrationModal();
});

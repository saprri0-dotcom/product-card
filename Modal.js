class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
    this.eventListener();
  }

  open() {
    this.modal.classList.add("modal-showed");
    this.modal.setAttribute("aria-hidden", "false");
  }

  close() {
    if (this.modal.contains(document.activeElement)) {
      document.activeElement.blur();
    }

    this.modal.classList.remove("modal-showed");
    this.modal.setAttribute("aria-hidden", "true");
  }

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  eventListener() {
    const closeButton = this.modal.querySelector(".modal__close");
    const overlay = this.modal.querySelector("[data-close-modal]");

    closeButton.addEventListener("click", () => {
      this.close();
    });

    overlay.addEventListener("click", () => {
      this.close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && this.isOpen()) {
        this.close();
      }
    });
  }
}

export default Modal;

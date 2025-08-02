const EMAILREGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

document.querySelector("#newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const inputEmail = e.target.elements.Email.value;
  if (inputEmail.trim() == "") {
    changeLabel("#error-message", "Email is required");
    classToggle("card__input", "card__input--error");
    return;
  }
  if (!isValid(inputEmail)) {
    changeLabel("#error-message", "Valid email required");
    classToggle("card__input", "card__input--error");
    return;
  }
  classToggle("#card-form", "card--hidden");
  changeLabel("#sendToMail-message", inputEmail);
  classToggle("#card-message", "card--hidden");
});

document.querySelector("#dismiss-button").addEventListener("click", () => {
  window.location.reload();
});

document.querySelector("#email-input").addEventListener("input", () => {
  document.querySelector("#email-input").classList.remove("card__input--error");
});

function classToggle(targetClass, toggleClass) {
  const element = document.querySelector(targetClass);
  if (!element) {
    alert(`Element ${targetClass} not found`);
    return;
  }
  element.classList.toggle(toggleClass);
}

function changeLabel(elementID, label) {
  const targetElement = document.querySelector(elementID);
  if (!targetElement) {
    alert(`Element ${elementID} not found`);
    return;
  }
  targetElement.innerText = label;
}

function isValid(params) {
  return EMAILREGEX.test(params);
}

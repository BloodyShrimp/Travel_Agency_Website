const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const form = document.querySelector(".submitted");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = document.querySelector('input[type="submit"]');
  button.disabled = true;
  const message = document.createElement("p");
  message.textContent = "Your message has been sent!";
  button.parentNode.insertBefore(message, button);
});

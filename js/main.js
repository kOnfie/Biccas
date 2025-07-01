const headerBurgerButton = document.querySelector(".header__burger");

headerBurgerButton.addEventListener("click", function () {
  headerBurgerButton.classList.toggle("active");
  document.querySelector(".header__nav").classList.toggle("active");

  document.body.style.overflow = "hidden";

  if (!headerBurgerButton.classList.contains("active")) {
    document.body.style.overflow = "auto";
  }
});

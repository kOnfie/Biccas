const headerBurgerButton = document.querySelector(".header__burger");

headerBurgerButton.addEventListener("click", function () {
  headerBurgerButton.classList.toggle("active");
  document.querySelector(".header__nav").classList.toggle("active");

  document.body.style.overflow = "hidden";

  if (!headerBurgerButton.classList.contains("active")) {
    document.body.style.overflow = "auto";
  }
});

// choose plan
const chooseMonthlyBtn = document.querySelector("#monthly-choose-plan");
const chooseYearlyBtn = document.querySelector("#yearly-choose-plan");

const priceBusinessDisplay = document.querySelector("#price--business--plan");
const priceProDisplay = document.querySelector("#price--pro--plan");

function updatePlan(plan) {
  if (plan === "monthly") {
    chooseMonthlyBtn.classList.add("active");
    chooseYearlyBtn.classList.remove("active");

    priceProDisplay.innerHTML = `<span>$</span> 8`;
    priceBusinessDisplay.innerHTML = `<span>$</span> 16`;
  } else if (plan === "yearly") {
    chooseYearlyBtn.classList.add("active");
    chooseMonthlyBtn.classList.remove("active");

    priceProDisplay.innerHTML = `<span>$</span> 48`;
    priceBusinessDisplay.innerHTML = `<span>$</span> 96`;
  }
}

const savedPlan = localStorage.getItem("plan");
if (savedPlan) {
  updatePlan(savedPlan);
}

chooseMonthlyBtn.addEventListener("click", () => {
  updatePlan("monthly");
  localStorage.setItem("plan", "monthly");
});

chooseYearlyBtn.addEventListener("click", () => {
  updatePlan("yearly");
  localStorage.setItem("plan", "yearly");
});

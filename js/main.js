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

// MODAL WINDOW
const loginBtn = document.querySelector("#loginButton");
const signupBtn = document.querySelector("#signupButton");

const modal = document.querySelector("#authModal");
const authForm = document.querySelector("#authForm");

const cleanAuthForm = () => {
  authForm.innerHTML = `<h2 class="auth__title">Welcome Back 👋</h2>`;
};

const closeModalWindow = () => {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  cleanAuthForm();
};

const openModalWindow = (html) => {
  modal.classList.add("active");
  authForm.insertAdjacentHTML("beforeend", html);
  document.body.style.overflow = "hidden";
};

signupBtn.addEventListener("click", () => {
  openModalWindow(`
  <form id="registerForm">
              <div class="auth__form--input">
                <label for="reg-email">Email</label>
                <input name="email" type="email" id="reg-email" required placeholder="Enter your email" />
              </div>

              <div class="auth__form--input">
                <label for="reg-name">Name</label>
                <input name="name" type="text" id="reg-name" required placeholder="Enter your name" />
              </div>

              <div class="auth__form--input">
                <label for="reg-password">Password</label>
                <input name="password" type="password" id="reg-password" required placeholder="Create a password" />
              </div>

              <button type="submit" class="auth__button custom-button">Register</button>
            </form>
  `);

  document.querySelector("#registerForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const name = formData.get("name");
    const password = formData.get("password");

    alert(`Email: ${email}, name: ${name}, password: ${password}`);

    closeModalWindow();
  });
});

loginBtn.addEventListener("click", () => {
  openModalWindow(`
     <form id="loginForm">
              <div class="auth__form--input">
                <label for="email">Email</label>
                <input name="email" type="email" id="email" required placeholder="Enter your email" />
              </div>

              <div class="auth__form--input">
                <label for="password">Password</label>
                <input name="password" type="password" id="password" required placeholder="Enter your password" />
              </div>

              <button type="submit" class="auth__button custom-button">Login</button>
            </form>
  `);

  document.querySelector("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    alert(`Email: ${email}, password: ${password}`);

    closeModalWindow();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "esc") {
    closeModalWindow();
  }
});

modal.addEventListener("click", function (event) {
  if (event.target === this) {
    closeModalWindow();
  }
});

document.querySelector("#modalCloseButton").addEventListener("click", () => {
  closeModalWindow();
});

// footer dowith form
document.querySelector("#dowith-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get("email");
  const message = formData.get("message");

  alert(`Email: ${email}, message: ${message}`);
});

// footer email form
document.querySelector("#email__form").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get("email");
  alert(`Email: ${email}`);
});

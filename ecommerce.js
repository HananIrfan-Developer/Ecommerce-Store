// =============================
// Navigation toggle
// =============================
const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const navCart = document.querySelector(".nav-cart");
const navLogin = document.querySelector(".nav-login");
const cartBtn = document.querySelector(".fa-shopping-cart");
const navSearch = document.querySelector(".nav-search");
let herolinks = document.querySelector(".hero-links");
let hero = document.querySelector(".hero");
let isMenuOpen = false;

menu.addEventListener("click", () => {
  if (!isMenuOpen) {
    navLogin.style.display = "flex";
    navSearch.style.display = "flex";
    navCart.style.display = "flex";
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    header.classList.add("extend");
    nav.style.height=" auto";
  } else {
    navLogin.style.display = "none";
    navSearch.style.display = "none";
    navCart.style.display = "none";
    nav.style.display = "none";
    header.classList.remove("extend");
  }
  isMenuOpen = !isMenuOpen;
});

// =============================
// Hero image slider
// =============================
let heroimag = document.querySelector(".hero-imag");
let images = [
  "Home_Fall25_6253_Kids_DT_1UP_HERO_3000x1200._SX3000_QL85_.jpg",
  "Home_Fall25_6259_SundayReset_DT_1UP_HERO_3000x1200._SX3000_QL85_.jpg",
  "Home_Fall25_6247_Decor_DT_1UP_HERO_3000x1200._SX3000_QL85_.jpg",
];
let idx = 0;
setInterval(() => {
  idx = (idx + 1) % images.length;
  heroimag.src = images[idx];
}, 2000);

// =============================
// Login form
// =============================
navLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (!document.querySelector(".form")) {
    let form = document.createElement("div");
    form.innerHTML = `
      <form action="#" method="submit" class="form">
        <h2>Login Form</h2>
        <label>Email:</label><br>
        <input type="email" placeholder="abc@gmail.com" required><br><br>
        <label>Password:</label><br>
        <input type="password" placeholder="enter password" required><br><br>
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="register.html">Register here</a></p>
      </form>
    `;
    herolinks.appendChild(form);
  }
});

// =============================
// Cart system
// =============================
let productrate = 0;

cartBtn.addEventListener("click", () => {
  if (!document.querySelector(".cart-system")) {
    let System = document.createElement("div");
    System.innerHTML = `
      <div class="cart-system">
        <h2>Payment</h2>
        <input readonly class="inputone"><br>
        <input readonly class="inputtwo"><br>
        <h1 id="total">Total : $0</h1>
        <button id="clearCart">Clear Cart</button>
      </div>
    `;
    hero.style.width = "40%";
    hero.style.justifyContent = "end";
    hero.style.position = "absolute";
    hero.style.left = "200px";
    herolinks.appendChild(System);

    // Clear cart functionality
    document.querySelector("#clearCart").addEventListener("click", () => {
      productrate = 0;
      document.querySelector(".inputone").value = "";
      document.querySelector(".inputtwo").value = "";
      document.querySelector("#total").innerText = "Total : $0";
    });
  }
});

// =============================
// Product buttons functionality
// =============================
let buttons = document.querySelectorAll(".button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let inputone = document.querySelector(".inputone");
    let inputtwo = document.querySelector(".inputtwo");
    let total = document.querySelector("#total");

    // Do nothing if the cart is not open
    if (!inputone || !inputtwo || !total) return;

    let productname = btn.getAttribute("productname") || "Unknown";
    let price = parseInt(btn.getAttribute("price")) || 0;

    productrate += price;

    inputone.value = `${productname} added : $${price}`;
    inputtwo.value = `Last Added: ${productname}`;
    total.innerText = `Your price is : $${productrate}`;
  });
});

import data from "./data.js";

const list = document.getElementById("list");
const summery = document.getElementById("summery");
let orderArr = [];

function renderItem() {
  for (let food of data) {
    list.innerHTML += `<main class="item">
        <div class="item-photo">${food.emoji}</div>
        <div class="item-food">
          <h2>${food.name}</h2>
          <p>${food.ingredients}</p>
          <h3>Price: ${food.price}$</h3>
        </div>
        <div class="item-add-to-cart">
          <button class="item-order" data-cart="${food.id}">
            <i id="icon-cart" class="fa-solid fa-cart-plus" data-cart="${food.id}"></i>
          </button>
        </div>
      </main>
      <div class="line"></div>`;
  }
}

function renderItemSummery() {
  document.getElementById("appent-item").innerHTML += `
  <div id="summery-item" class="summery-item">
    <div class="summery-flex">
      <h3>Pizza</h3>
      <button class="remove-btn">remove</button>
    </div>
    <h3>${data.price}</h3>
  </div>`;
}

document.addEventListener("click", function (e) {
  if (e.target.dataset.cart) {
    renderItemSummery();
  }
});

renderItem();

import menuArray from "./data.js";

const summery = document.getElementById("summery");
const summeryItem = document.getElementById("summery-item");
const order = document.querySelector(".order-btn");
let cartArr = [];
let idArr = [];
function renderMenu() {
  const list = document.getElementById("list");
  for (let food of menuArray) {
    list.innerHTML += `
        <main class="item">
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

function getOrderTag() {
  document.getElementById("order").innerHTML =
    '<h2 class="order">Your order</h2>';
}

function renderItemSummery(foodId) {
  const addedItem = menuArray.filter(function (food) {
    return Number(food.id) === Number(foodId);
  })[0];
  cartArr.push(addedItem.price);
  idArr.push(addedItem.id);

  document.getElementById("summery").innerHTML += `
  <div id="summery-item" class="summery-item">
    <div class="summery-flex">
      <h3>${addedItem.name}</h3>
      <button class="remove-btn" data-remove="${addedItem.id}">remove</button>
      <h3>${addedItem.price}$</h3>
    </div>
    
  </div>`;
}

function caluculateSum() {
  let cartSum = cartArr.reduce((sum, currentValue) => {
    return sum + currentValue;
  });

  if (cartSum === 0) {
    cartArr = [];
  }

  return (document.getElementById("appent-item").innerHTML = `
        <div class="sum">
          <h3>Total Price:</h3>
          <h3>${cartSum}$</h3>
        </div>
        <button class="order-btn" data-order="order">Order</button>
  `);
}

document.addEventListener("click", function (e) {
  const pay = document.getElementById("pay");
  const container = document.getElementById("container");

  if (e.target.dataset.cart) {
    getOrderTag();
    renderItemSummery(e.target.dataset.cart);
    caluculateSum();
  } else if (e.target.dataset.remove) {
    e.target.parentElement.remove();

    if (e.target.dataset.remove) {
      cartArr.push(-menuArray[e.target.dataset.remove].price);
    }
    caluculateSum();
  } else if (e.target.dataset.order) {
    pay.style.display = "flex";
    container.classList.add("container-unlickable");
  }
});

document.getElementById("pay").addEventListener("submit", (e) => {
  e.preventDefault();
  pay.style.display = "none";
  container.classList.remove("container-unlickable");
});

function render() {
  renderMenu();
}

render();

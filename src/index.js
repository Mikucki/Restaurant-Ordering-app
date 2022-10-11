import menuArray from "./data.js";

const summery = document.getElementById("summery");
let cartArr = [];
function renderMenu() {
  const list = document.getElementById("list");
  for (let food of menuArray) {
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

function renderItemSummery(foodId) {
  const addedItem = menuArray.filter(function (food) {
    return Number(food.id) === Number(foodId);
  })[0];
  cartArr.push(addedItem.price);

  document.getElementById("summery").innerHTML += `
  <div id="summery-item" class="summery-item">
    <div class="summery-flex">
      <h3>${addedItem.name}</h3>
      <button class="remove-btn">remove</button>
    </div>
    <h3>${addedItem.price}$</h3>
  </div>`;
}

function caluculateSum() {
  let cartSum = cartArr.reduce((sum, currentValue) => {
    return sum + currentValue;
  });
  console.log(cartSum);
  return (document.getElementById("appent-item").innerHTML = `
        <div class="sum">
          <h3>Total Price:</h3>
          <h3>${cartSum}</h3>
        </div>
  `);
}

document.addEventListener("click", function (e) {
  if (e.target.dataset.cart) {
    renderItemSummery(e.target.dataset.cart);
    caluculateSum();
  }
});

function render() {
  renderMenu();
}

render();

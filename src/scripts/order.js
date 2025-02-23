import { OrderManipulation } from "./data/order-dishes.js";
import { menuItems } from "./data/menuItems.js";
import { renderGeneralElements } from "./data/general-html.js";
import { formatCurrency } from "./utils/money.js";
import { Messages } from "./utils/message-box.js";

renderGeneralElements("order");

const messages = new Messages();

const orderMani = new OrderManipulation();
const orders = orderMani.getOrderList();
const orderedDishes =
  menuItems.filter((dish) => orders.includes(dish.dishId)) || [];

function renderOrders() {
  const orderedDishesContainer = document.getElementById("js-ordered-dishes");
  let orderedDishesHtml = "";
  if (orderedDishes.length !== 0) {
    orderedDishes.forEach((orderedDish) => {
      orderedDishesHtml += `
            <div class="grid grid-cols-4 py-3 mb-4 js-ordered-dish" data-dish-id="${
              orderedDish.dishId
            }">
                <div
                class="relative flex items-center justify-center overflow-hidden rounded-md h-[150px]"
                >
                <img
                    src="../images/menu/${orderedDish.dishPic}"
                    alt="${orderedDish.alt}"
                    class="object-cover w-full h-full col-span-4 md:col-span-1"
                />
                <span
                    class="absolute bottom-0 flex items-center text-center px-2 justify-center w-full text-lg text-primary bg-gradient-to-t from-dark to-transparent"
                    >${orderedDish.dishName}</span
                >
                </div>
                <div class="flex items-center justify-center">$ ${formatCurrency(
                  orderedDish.price
                )}</div>
                <div class="flex items-center justify-center">
                  <div class="flex flex-col sm:flex-row gap-4">
                    <div data-dish-id="${
                      orderedDish.dishId
                    }" class="js-decrease bg-slate-300 min-w-[2rem] flex items-center justify-center active:scale-100 hover:scale-105 cursor-pointer px-2 py-1 rounded-sm">-</div>
                    <div data-dish-id="${
                      orderedDish.dishId
                    }" class="js-dish-quantity bg-white flex items-center justify-center min-w-[3rem] border-accent border-dashed border-[2px]">${orderMani.getDishQuantity(
        orderedDish.dishId
      )}</div>
                    <div data-dish-id="${
                      orderedDish.dishId
                    }" class="js-increase bg-slate-300 min-w-[2rem] flex items-center justify-center active:scale-100 hover:scale-105 cursor-pointer px-2 py-1 rounded-sm">+</div>
                  </div>
                </div>
                <div data-dish-id="${
                  orderedDish.dishId
                }" class="js-subtotal-display flex items-center justify-center">${orderMani.getSubtotal(
        orderedDish.dishId,
        orderedDish.price
      )}</div>
            </div>
        `;
    });
  } else {
    orderedDishesHtml = `
      <div class="col-span-4 flex flex-col items-center justify-center min-h-[50vh]">
        <span class="text-3xl font-bold font-handWritten text-center text-accent block">
          No item has been added to your orders yet!
        </span>
        <a href="./menu.html" class="text-accent underline text-xl hover:font-bold">Go to menu</a>
      </div>

    `;
  }

  orderedDishesContainer.innerHTML = orderedDishesHtml;
}
renderOrders();

renderOrderSummary();

const increaseBtns = document.querySelectorAll(".js-increase");
const decreaseBtns = document.querySelectorAll(".js-decrease");

increaseBtns.forEach((increaseBtn) => {
  increaseBtn.addEventListener("click", () => {
    const dishId = increaseBtn.getAttribute("data-dish-id");
    const dish = menuItems.find((item) => item.dishId == dishId);
    const totalQuantity = orderMani.getQuantity();
    if (totalQuantity < 9) {
      orderMani.addOrder(dishId, dish.price);
      renderOrderSummary();
      messages.getAlertBox(`+1 ${dish.dishName}`);
    } else {
      messages.getWarning(
        "An order of 10 servings and above must have a reservation!",
        [
          {
            name: "Contact",
            func() {
              window.location.href = "./contact.html";
            },
          },
        ]
      );
    }
  });
});

decreaseBtns.forEach((decreaseBtn) => {
  decreaseBtn.addEventListener("click", () => {
    const dishId = decreaseBtn.getAttribute("data-dish-id");
    const dish = menuItems.find((item) => item.dishId == dishId);
    if (orderMani.getDishQuantity(dishId) !== 0) {
      orderMani.removeOrder(dishId, dish.price);
    }
    renderOrderSummary();
    messages.getAlertBox(`-1 ${dish.dishName}`);
  });
});

function renderOrderSummary() {
  const orderSummaryContainer = document.getElementById("js-order-summary");
  let total = 0;

  if (orderedDishes.length !== 0) {
    orderedDishes.forEach((orderedDish) => {
      const dishQuantity = orderMani.getDishQuantity(orderedDish.dishId);
      total += orderedDish.price * dishQuantity;
    });
  } else {
    total = 0;
  }

  let discount = 0;
  let shippingFee = 0;

  orderSummaryContainer.innerHTML = `
    <div class="grid grid-cols-3">
      <p class="col-span-2 font-semibold">Total</p>
      <p>$ ${formatCurrency(total || 0)}</p>
    </div>
    <div class="grid grid-cols-3">
      <p class="col-span-2 font-semibold">Discount</p>
      <p>$ ${formatCurrency(discount || 0)}</p>
    </div>
    <div class="grid grid-cols-3">
      <p class="col-span-2 font-semibold">Shipping</p>
      <p>$ ${formatCurrency(shippingFee || 0)}</p>
    </div>
    <hr class="mt-3 border-dashed border-dark" />
    <div class="grid grid-cols-3">
      <p class="col-span-2 font-semibold">Grand total</p>
      <p>$ ${formatCurrency(total + shippingFee - discount || 0)}</p>
    </div>
    <hr class="border-dashed border-dark" />
    <button id="js-order-btn"
      class="flex items-center justify-center py-3 rounded-md bg-dark hover:text-dark text-primary hover:bg-accent"
    >
      Order
    </button>
  `;
}

const orderBtn = document.getElementById("js-order-btn");
orderBtn.addEventListener("click", () => {
  if (orderMani.getQuantity() > 0) {
    messages.getAlertBox("Your order has been sent!");
    orderMani.clearOrder();
    renderOrders();
  } else {
    messages.getWarning("There is no item in your order list!", [
      {
        name: "Go to menu",
        func() {
          window.location.href = "./menu.html";
        },
      },
    ]);
  }
});

import { OrderManipulation } from "./data/order-dishes.js";
import { menuItems } from "./data/menuItems.js";
import { renderGeneralElements } from "./data/general-html.js";
import { formatCurrency } from "./utils/money.js";

renderGeneralElements("order");

let orderMani = new OrderManipulation();
const orders = orderMani.getOrderList();
const orderedDishes = menuItems.filter((dish) => orders.includes(dish.dishId));
const orderedDishesContainer = document.getElementById("js-ordered-dishes");
let orderedDishesHtml = "";

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
                class="object-cover w-full h-full"
            />
            <span
                class="absolute bottom-0 flex items-center justify-center w-full text-lg text-primary bg-gradient-to-t from-dark to-transparent"
                >${orderedDish.dishName}</span
            >
            </div>
            <div class="flex items-center justify-center">$ ${formatCurrency(
              orderedDish.price
            )}</div>
            <div class="flex items-center justify-center">Haha</div>
            <div class="flex items-center justify-center">Hehe</div>
        </div>
    `;
});

orderedDishesContainer.innerHTML = orderedDishesHtml;

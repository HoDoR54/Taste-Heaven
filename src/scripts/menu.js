import { menuItems } from "./data/menuItems.js";
import { formatCurrency } from "./utils/money.js";

const testingDiv = document.getElementById("menu-testing");
let menuHtml = "";
let menuCount = 0;

menuItems.forEach((dish) => {
  menuHtml += `
        <div class="js-dish overflow-hidden border-dotted border-dark border-[2px] rounded-xl min-w-[300px] relative">
            <div
            class="absolute top-0 right-0 z-10 flex p-2 rounded-tr-lg rounded-bl-lg bg-primary text-dark"
            >
                <i
                    class="text-lg cursor-pointer add-to-favorites fa-regular fa-heart"
                ></i>
                <i
                    class="hidden text-lg cursor-pointer added-to-favorites fa-solid fa-heart"
                ></i>
            </div>
            <div>
                <img
                src="../images/menu/${dish.dishPic}"
                alt="${dish.alt}"
                class="w-[300px] h-[200px] object-cover"
                />
            </div>
            <div class="p-3 flex flex-col bg-primary">
                <h2 class="text-lg font-bold">${dish.dishName} (${
    dish.dishId
  })</h2>
                <p class="text-sm opacity-80">$${formatCurrency(dish.price)}</p>
                <div class="flex justify-end mt-auto">
                    <a href="./dish-details.html">
                        <button
                            class="js-dish-view p-2 rounded bg-secondary hover:bg-primary hover:border-dark border-dotted border-[2px]"
                            data-dish-id="${dish.dishId}">
                            View
                        </button>
                    </a>
                </div>
            </div>
        </div>
    `;
  menuCount++;
});
menuHtml += `<span class="text=3xl font-bold">Total dishes: ${menuCount}</span>`;
testingDiv.innerHTML = menuHtml;

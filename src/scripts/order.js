import { orderedDishes } from "./data/ordered.js";

const testingDiv = document.getElementById("js-order-testing");
let testingHtml = "";

orderedDishes.forEach((dish) => {
  testingHtml += `
        <div class="js-dish overflow-hidden border-dotted border-dark border-[2px] rounded-xl min-w-[300px] relative">
            <div>
                <img
                src="../images/menu/${dish.dishPic}"
                alt="${dish.alt}"
                class="w-[300px] h-[200px] object-cover"
                />
            </div>
            <div class="p-3 flex flex-col">
                <h2 class="text-lg font-bold">${dish.dishName}</h2>
                <p class="text-sm opacity-80">$${dish.price}</p>
                <div class="flex justify-end mt-auto">
                    <a href="./order.html">
                        <button
                            class="js-order-now p-2 rounded bg-secondary hover:bg-primary hover:border-dark border-dotted border-[2px]"
                            data-dish-id="${dish.dishId}">
                            Order Now
                        </button>
                    </a>
                </div>
            </div>
        </div>
    `;
});

testingDiv.innerHTML = testingHtml;

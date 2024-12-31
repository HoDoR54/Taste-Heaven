import { serviceCards } from "./data/html.js";
import { menuItems } from "./data/menuItems.js";
import { formatCurrency } from "./utils/money.js";
import { setViewingDish } from "./data/dish-view.js";
import { addToFavToggle } from "./UX/add-to-fav.js";

// render service cards

const homeServiceSection = document.getElementById("js-home-services-sec");
let cardHTML = "";

serviceCards.forEach((card) => {
  cardHTML += `
    <div class="flex flex-col items-center justify-center flex-1 p-4 max-w-[300px] text-center rounded">
        <div>
            ${card.iTag}
        </div>
        <div>
            <h1 class="text-xl font-bold mb-2">${card.title}</h1>
            <p class="text-dark-700">${card.content}</p>
        </div>
        <div class="h-40">
            <button class="js-order-now mt-5 p-2 text-lg border-[2px] border-dotted border-accent text-accent rounded hover:bg-accent hover:text-dark transition">
                ${card.btnContent} <i class="bi bi-arrow-bar-right"></i>
            </button>
        </div>
    </div>`;
});

homeServiceSection.innerHTML = cardHTML;

// render popular dishes

const popularDishesDisplay = document.getElementById("js-home-popular-dishes");
const popularDishes = menuItems.filter((dish) => dish.rating >= 4.8);
let popularDishesHtml = "";

popularDishes.forEach((dish) => {
  popularDishesHtml += `
        <div class="js-dish overflow-hidden border-dotted border-dark border-[2px] rounded-xl min-w-[300px] relative">
            <div
            class="absolute top-0 right-0 z-10 flex p-2 rounded-tr-lg rounded-bl-lg bg-primary text-dark"
            >
                <i
                    class="text-lg cursor-pointer add-to-favorites fa-regular fa-heart" data-dish-id="${
                      dish.dishId
                    }"
                ></i>
                <i
                    class="hidden text-lg cursor-pointer added-to-favorites fa-solid fa-heart" data-dish-id="${
                      dish.dishId
                    }"
                ></i>
            </div>
            <div>
                <img
                src="./src/images/menu/${dish.dishPic}"
                alt="${dish.alt}"
                class="w-[300px] h-[200px] object-cover"
                />
            </div>
            <div class="p-3 flex flex-col bg-primary">
                <h2 class="text-lg font-bold">${dish.dishName}</h2>
                <p class="text-sm opacity-80">$${formatCurrency(dish.price)}</p>
                <div class="flex justify-end mt-auto">
                    <a href="./src/html/dish-details.html">
                        <button
                            class="js-dish-view p-2 rounded bg-secondary hover:bg-primary hover:border-accent hover:text-accent border-dotted border-[2px]"
                            data-dish-id="${dish.dishId}">
                            View
                        </button>
                    </a>
                </div>
            </div>
        </div>

    `;
});

popularDishesDisplay.innerHTML = popularDishesHtml;

// render today's special
const todaysSpecialDisplay = document.getElementById("js-home-todays-special");
let todaysSpecialHtml = "";

function getTodaysSpecial(dishes, count) {
  const shuffled = [...dishes].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

const todaysSpecial = getTodaysSpecial(menuItems, 5);

todaysSpecial.forEach((dish) => {
  todaysSpecialHtml += `
        <div class="js-dish overflow-hidden border-dotted border-dark border-[2px] rounded-xl min-w-[300px] relative">
            <div
            class="absolute top-0 right-0 z-10 flex p-2 rounded-tr-lg rounded-bl-lg bg-primary text-dark"
            >
                <i
                    class="text-lg cursor-pointer add-to-favorites fa-regular fa-heart" data-dish-id="${
                      dish.dishId
                    }"
                ></i>
                <i
                    class="hidden text-lg cursor-pointer added-to-favorites fa-solid fa-heart" data-dish-id="${
                      dish.dishId
                    }"
                ></i>
            </div>
            <div>
                <img
                src="./src/images/menu/${dish.dishPic}"
                alt="${dish.alt}"
                class="w-[300px] h-[200px] object-cover"
                />
            </div>
            <div class="p-3 flex flex-col bg-primary">
                <h2 class="text-lg font-bold">${dish.dishName}</h2>
                <p class="text-sm opacity-80">$${formatCurrency(dish.price)}</p>
                <div class="flex justify-end mt-auto">
                    <a href="./src/html/dish-details.html">
                        <button
                            class="js-dish-view p-2 rounded bg-secondary hover:bg-primary hover:border-accent hover:text-accent border-dotted border-[2px]"
                            data-dish-id="${dish.dishId}">
                            View
                        </button>
                    </a>
                </div>
            </div>
        </div>
    `;
});

todaysSpecialDisplay.innerHTML = todaysSpecialHtml;

// enable the 'add to favorites' toggle

const addToFavoritesIcons = document.querySelectorAll(".add-to-favorites");
const addedToFavoritesIcons = document.querySelectorAll(".added-to-favorites");

addToFavToggle(addToFavoritesIcons, addedToFavoritesIcons);

// get the dish user wants to view and return

const viewBtns = document.querySelectorAll(".js-dish-view");

viewBtns.forEach((viewBtn) => {
  viewBtn.addEventListener("click", () => {
    const clickedDishId = viewBtn.getAttribute("data-dish-id");
    const selectedDish = menuItems.find(
      (dish) => dish.dishId === clickedDishId
    );
    setViewingDish(selectedDish);
  });
});

// add an event listener to the menu paths

const menuPaths = document.querySelectorAll(".js-menu-paths");
menuPaths.forEach((menuPath) => {
  menuPath.addEventListener("click", () => {
    localStorage.setItem("menu-category", JSON.stringify("All"));
  });
});

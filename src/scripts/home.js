import { menuItems } from "./data/menuItems.js";
import { formatCurrency } from "./utils/money.js";
import { setViewingDish } from "./data/dish-view.js";
import { addToFavToggle } from "./UX/add-to-fav.js";
import { renderGeneralElements } from "./UX/general-html.js";

// render popular dishes

const popularDishesDisplay = document.getElementById("js-home-popular-dishes");
const popularDishes = menuItems.filter((dish) => dish.rating >= 4.8);
let popularDishesHtml = "";

popularDishes.forEach((dish) => {
  popularDishesHtml += `
        <div class="js-dish overflow-hidden border-dotted border-dark border-[2px] rounded-xl lg:min-w-[300px] min-w-[200px] relative">
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
                class="lg:w-[300px] lg:h-[200px] w-[200px] h-[125px] object-cover"
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
        <div class="js-dish overflow-hidden border-dotted border-dark border-[2px] rounded-xl lg:min-w-[300px] min-w-[200px] relative">
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
                class="lg:w-[300px] lg:h-[200px] w-[200px] h-[125px]  object-cover"
                />
            </div>
            <div class="p-3 flex flex-col bg-primary">
                <h2 class="text-lg font-bold">${dish.dishName}</h2>
                <p class="text-sm opacity-80">$${formatCurrency(dish.price)}</p>
                <div class="flex justify-end mt-auto">
                    <a href="./src/html/dish-details.html">
                        <button
                            class="js-dish-view p-2 rounded bg-secondary hover:bg-primary hover:border-accent hover:text-accent border-dotted border-[2px]"
                            data-dish-id="${dish.dishId}"
                            onclick="
                                localStorage.setItem('menu-category', JSON.stringify('All'));
                            ">
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

renderGeneralElements("index");

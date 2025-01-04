import { menuItems } from "./data/menuItems.js";
import { formatCurrency } from "./utils/money.js";
import { setViewingDish } from "./data/dish-view.js";
import { renderGeneralElements } from "./UX/general-html.js";

renderGeneralElements("index");

// Utility function to generate dish HTML
function generateDishHtml(dish) {
  return `
    <div class="js-dish overflow-hidden border-dotted border-dark border-[2px] rounded-xl lg:min-w-[300px] min-w-[200px] relative">
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
}

// Render popular dishes
const popularDishesDisplay = document.getElementById("js-home-popular-dishes");
const popularDishes = menuItems.filter((dish) => dish.rating >= 4.8);
popularDishesDisplay.innerHTML = popularDishes.map(generateDishHtml).join("");

// Render today's special
const todaysSpecialDisplay = document.getElementById("js-home-todays-special");
function getTodaysSpecial(dishes, count) {
  const shuffled = [...dishes].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
const todaysSpecial = getTodaysSpecial(menuItems, 5);
todaysSpecialDisplay.innerHTML = todaysSpecial.map(generateDishHtml).join("");

// get the dish user wants to view and return

const viewBtns = document.querySelectorAll(".js-dish-view");

viewBtns.forEach((viewBtn) => {
  viewBtn.addEventListener("click", () => {
    const clickedDishId = viewBtn.getAttribute("data-dish-id");
    console.log(clickedDishId);
    const selectedDish = menuItems.find(
      (dish) => dish.dishId === clickedDishId
    );
    setViewingDish(selectedDish);
  });
});

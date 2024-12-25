import { serviceCards } from "./data/html.js";
import { menuItems } from "./data/menuItems.js";

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
            <button class="mt-5 p-2 text-lg border-[2px] border-dotted border-accent text-accent rounded hover:bg-accent hover:text-dark transition">
                ${card.btnContent} <i class="bi bi-arrow-bar-right"></i>
            </button>
        </div>
    </div>`;
});

homeServiceSection.innerHTML = cardHTML;

// rendering popular dishes

const popularDishesDisplay = document.getElementById("js-home-popular-dishes");
const popularDishes = menuItems.filter((dish) => dish.isPopular);
let popularDishesHtml = "";

popularDishes.forEach((dish) => {
  popularDishesHtml += `
        <div class="overflow-hidden border-dotted border-dark border-[2px] rounded-xl min-w-[300px] relative">
            <div
            class="absolute top-0 right-0 z-10 flex p-2 rounded-tr-lg rounded-bl-lg bg-primary text-dark"
            >
                <i
                    class="text-lg cursor-pointer add-to-favorite fa-regular fa-heart"
                ></i>
                <i
                    class="hidden text-lg cursor-pointer added-to-favorite fa-solid fa-heart"
                ></i>
            </div>
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
                <button
                    class="p-2 rounded bg-secondary hover:bg-primary hover:border-dark border-dotted border-[2px]">
                    Order Now
                </button>
                </div>
            </div>
        </div>

    `;
});

popularDishesDisplay.innerHTML = popularDishesHtml;

// render today's special (changing daily)
const todaysSpecialDisplay = document.getElementById("js-home-todays-special");
let todaysSpecialHtml = "";

function getTodaysSpecial(dishes, count) {
  const shuffled = [...dishes].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

const todaysSpecial = getTodaysSpecial(menuItems, 5);

todaysSpecial.forEach((dish) => {
  todaysSpecialHtml += `
        <div class="overflow-hidden border-dotted border-dark border-[2px] rounded-xl min-w-[300px] relative">
            <div
            class="absolute top-0 right-0 z-10 flex p-2 rounded-tr-lg rounded-bl-lg bg-primary text-dark"
            >
                <i
                    class="text-lg cursor-pointer add-to-favorite fa-regular fa-heart"
                ></i>
                <i
                    class="hidden text-lg cursor-pointer added-to-favorite fa-solid fa-heart"
                ></i>
            </div>
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
                <button
                    class="p-2 rounded bg-secondary hover:bg-primary hover:border-dark border-dotted border-[2px]">
                    Order Now
                </button>
                </div>
            </div>
        </div>
    `;
});

todaysSpecialDisplay.innerHTML = todaysSpecialHtml;

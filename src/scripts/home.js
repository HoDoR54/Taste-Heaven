import { serviceCards } from "./data/html.js";

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

// rendering today's specials
import { menuItems } from "./data/menuItems.js";

const homeMenuContainer = document.getElementById("js-home-todays-special");
let todaysSpecialHtml = "";

menuItems.forEach((dish) => {
  todaysSpecialHtml += `
        <div class="overflow-hidden border-dotted border-dark border-[2px] rounded-xl min-w-[300px]">
            <div>
                <img
                src="../images/menu/${dish.dishPic}"
                alt="${dish.alt}"
                class="w-[300px] h-[200px] object-cover"
                />
            </div>
            <div class="p-3 flex flex-col">
                <h2 class="text-lg font-bold">${dish.dishName}</h2>
                <p class="text-sm opacity-80">${dish.price}</p>
                <div class="flex justify-end mt-auto"> <!-- Removed flex-1 and align-bottom -->
                <button
                    class="p-2 hover:border-dotted hover:border-[2px] rounded bg-accent text-dark hover:border-dark hover:bg-primary hover:text-dark"
                >
                    Order Now
                </button>
                </div>
            </div>
        </div>

    `;
});

homeMenuContainer.innerHTML = todaysSpecialHtml;

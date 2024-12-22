import { serviceCards } from "./data/html.js";
import { menuItems } from "./data/menuItems.js";

// render service cards

const homeServiceSection = document.getElementById("js-home-services-sec");
let cardHTML = "";

serviceCards.forEach((card) => {
  cardHTML += `
    <div class="js-service-card flex flex-col items-center justify-center flex-1 p-4 max-w-[300px] text-center shadow-md rounded">
        <div>
            ${card.iTag}
        </div>
        <div>
            <h1 class="text-xl font-bold mb-2">${card.title}</h1>
            <p class="text-dark-700">${card.content}</p>
        </div>
        <div class="h-40">
            <button class="mt-5 p-2 text-lg border-2 border-[2px] border-dotted border-accent text-accent rounded hover:bg-accent hover:text-dark transition">
                ${card.btnContent} <i class="bi bi-arrow-bar-right"></i>
            </button>
        </div>
    </div>`;
});

homeServiceSection.innerHTML = cardHTML;

// render menu on home page

// const menuDiv = document.getElementById("js-home-todays-special");
// let homeMenuHtml;

// menuItems.forEach((item) => {
//   homeMenuHtml = `
//         <div>
//             <img src="../images/menu/${item.dishPic}"
//             <p>${item.dishName}</p>
//         </div>
//     `;
// });

// menuDiv.innerHTML += homeMenuHtml;

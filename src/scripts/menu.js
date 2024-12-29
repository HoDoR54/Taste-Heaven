import { menuItems } from "./data/menuItems.js";

const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const favoriteFilter = document.getElementById("js-menu-favorites");
const menuDisplay = document.getElementById("js-menu-display");

favoriteFilter.addEventListener("click", () => {
  document.title = `Faorites - Menu`;
  let menuDisplayHtml = "";
  favorites.forEach((favorite) => {
    const favoriteDish = menuItems.find((dish) => dish.dishId === favorite);
    menuDisplayHtml += `
      <span class="font-bold text-xl">${favoriteDish.dishName} (${favoriteDish.dishId})</span>
    `;
  });
  menuDisplay.innerHTML = menuDisplayHtml;
});

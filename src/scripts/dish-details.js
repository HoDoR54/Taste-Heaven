import { getViewingDish } from "./data/dish-view.js";
import { formatCurrency } from "./utils/money.js";
import { addToFavToggle } from "./UX/add-to-fav.js";

// render dish details based on which one is clicked
const viewingDish = getViewingDish();
document.title = viewingDish.dishName + " - Dish Details";
let ingredients = "";

viewingDish.ingredient.forEach((ingre, idx) => {
  if (idx != "0") {
    ingredients += `, ${ingre}`;
  } else {
    ingredients += `${ingre}`;
  }
});

const dishDetailsContianer = document.getElementById("js-viewing-dish");
let dishDetialHtml = `
    <div>
          <img
            src="../images/menu/${viewingDish.dishPic}"
            alt="${viewingDish.alt}"
            class="w-[250px] h-[250px] rounded-lg object-cover"
          />
        </div>
        <div class="ml-[1rem] col-span-3">
          <h2 class="text-3xl font-bold">${viewingDish.dishName}</h2>
          <p class="text-lg font-semibold">$${formatCurrency(
            viewingDish.price
          )}</p>
          <span
            ><i class="mr-2 fa-solid fa-star text-secondary"></i>${
              viewingDish.rating
            }
            <a href="#" class="opacity-50 hover:underline hover:opacity-80"
              >(200+ ratings)</a
            ></span
          >
          
          <span id="js-popular-dish" class="hidden ml-3 font-handWritten text-secondary"
              >Popular</span
            >
            
          <p class="max-w-[50vw] mt-3">
            ${viewingDish.origin}
          </p>
          <p class="mt-2">
            <span class="font-medium text-accent">Main ingredients: </span>
            <span>${ingredients}</span>
          </p>
          <div class="mt-3 flex gap-4">
            
            <button class="bg-secondary p-2 border-dotted border-[2px] text-dark border-dark rounded hover:bg-primary hover:border-accent hover:text-accent">
            <i class="bi bi-coin"></i>
              Order now
            </button>
          </div>
        </div>
        <div class="flex justify-end min-h-full flex-col">
          <button
            class="add-to-favorites p-2 text-md border-dotted rounded h-max border-accent text-accent border-[2px]"
            data-dish-id="${viewingDish.dishId}"
            >
              <i class="fa-regular fa-heart"></i>
              Add to favorites
            </button>
            <button
              class="hidden p-2 text-md rounded added-to-favorites h-max bg-accent text-primary"
              data-dish-id="${viewingDish.dishId}"
            >
              <i class="fa-solid fa-heart"></i>
              Added to favorites
            </button>
        </div>
`;

dishDetailsContianer.innerHTML = dishDetialHtml;

const popularText = document.getElementById("js-popular-dish");

if (viewingDish.rating >= 4.8) {
  popularText.classList.remove("hidden");
}

// enable the 'add to favorites' toggle

const addToFavoritesIcons = document.querySelectorAll(".add-to-favorites");
const addedToFavoritesIcons = document.querySelectorAll(".added-to-favorites");

addToFavToggle(addToFavoritesIcons, addedToFavoritesIcons);

// add a go back navigation

const navDiv = document.getElementById("js-dish-nav");
const currentCategory = JSON.parse(localStorage.getItem("menu-category"));

navDiv.innerHTML += `
  <a href="menu.html" class="cursor-pointer text-accent hover:underline" data-category="${currentCategory}" id="js-back-to-menu"
    onclick='localStorage.setItem("menu-category", JSON.stringify(${JSON.stringify(
      currentCategory
    )}))'>
    <i class="mx-4 bi bi-arrow-bar-left"></i>${currentCategory}
  </a>
`;

// save which category of the menu is clicked

const backToMenu = document.getElementById("js-back-to-menu");
const targettedCategory = backToMenu.getAttribute("data-category");
backToMenu.addEventListener("click", () => {
  localStorage.setItem("menu-category", JSON.stringify(targettedCategory));
});

// filter suggestions on dish details page

const filterOne = document.getElementsByClassName("js-filter-1")[0];
const filterTwo = document.getElementsByClassName("js-filter-2")[0];
const filterThree = document.getElementsByClassName("js-filter-3")[0];

const suggestionDiv = document.getElementById("js-suggestion-list");

filterOne.addEventListener("click", () => {
  suggestionDiv.textContent = "Frequent Matches";
});

filterTwo.addEventListener("click", () => {
  suggestionDiv.textContent = "Similar Dishes";
});
filterThree.addEventListener("click", () => {
  suggestionDiv.textContent = "Others";
});

// add an event listener to the menu paths

const menuPaths = document.querySelectorAll(".js-menu-paths");
menuPaths.forEach((menuPath) => {
  menuPath.addEventListener("click", () => {
    localStorage.setItem("menu-category", JSON.stringify("All"));
  });
});

import { getViewingDish } from "./data/dish-view.js";
import { formatCurrency } from "./utils/money.js";
import { addToFavToggle } from "./UX/add-to-fav.js";
import { menuItems } from "./data/menuItems.js";
import { renderGeneralElements } from "./UX/general-html.js";

// render dish details based on which one is clicked
const viewingDish = getViewingDish();
document.title = viewingDish.dishName + " - Dish Details";
let ingredients = "";
console.log(viewingDish);

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
        <div class="ml-[1rem] md:col-span-3">
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
            <button
            class="add-to-favorites p-2 text-md border-dotted rounded h-max border-accent text-accent border-[2px] md:hidden"
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
        </div>
        <div class=" justify-end min-h-full flex-col lg:col-span-1 col-span-4 p-4 hidden md:!flex">
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

// filter the suggestion list via click

const filterBtns = document.querySelectorAll(".js-dish-filter");
const suggestionDisplay = document.getElementById("js-suggestion-list");

function renderCards(array) {
  suggestionDisplay.innerHTML = "";
  let suggestionHtml = "";
  array.forEach((dish) => {
    suggestionHtml += `
      <div
      data-dish-category="${dish.category}"
      class="relative overflow-hidden rounded-md cursor-pointer h-max group"
      >
        <a href="dish-details.html"
        data-dish-id="${dish.dishId}"
        class="js-dish-view">
          <img
            src="../images/menu/${dish.dishPic}"

            alt="${dish.alt}"
            class="w-full aspect-square group-hover:brightness-75 object-cover"
          />
        </a>
        <div class="absolute bottom-0 left-0 right-0 p-2 text-primary bg-gradient-to-t from-dark to-[rgba(0, 0, 0, 0.5)]">
          ${dish.dishName}
        </div>
        <div
        class="absolute top-0 right-0 z-10 flex p-2 rounded-none bg-primary text-dark"
        >
            <i
                class="text-lg cursor-pointer add-to-favorites fa-regular fa-heart" data-dish-id="${dish.dishId}"
            ></i>
            <i
                class="hidden text-lg cursor-pointer added-to-favorites fa-solid fa-heart" data-dish-id="${dish.dishId}"
            ></i>
        </div>
      </div>
    `;
  });
  suggestionDisplay.innerHTML = suggestionHtml;
  // enable the 'add to favorite' toggle

  const addToFavoritesIcons = document.querySelectorAll(".add-to-favorites");
  const addedToFavoritesIcons = document.querySelectorAll(
    ".added-to-favorites"
  );

  addToFavToggle(addToFavoritesIcons, addedToFavoritesIcons);
}

// enable the 'add to favorite' toggle

const addToFavoritesIcons = document.querySelectorAll(".add-to-favorites");
const addedToFavoritesIcons = document.querySelectorAll(".added-to-favorites");
console.log(`${addedToFavoritesIcons.length}, ${addToFavoritesIcons.length}`);

addToFavToggle(addToFavoritesIcons, addedToFavoritesIcons);

filterBtns.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    const filterName = filterBtn.getAttribute("data-filter-name");
    let filteredDishes = [];
    switch (filterName) {
      case "frequent":
        const randomIndexes = [];
        while (randomIndexes.length <= 5) {
          const randomIndex = Math.floor(Math.random() * menuItems.length);
          if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
          }
        }

        filteredDishes = menuItems.filter((_, idx) =>
          randomIndexes.includes(idx)
        );
        filterBtns.forEach((btn) => {
          btn.classList.add("bg-primary");
        });
        filterBtn.classList.remove("bg-primary");
        filterBtn.classList.add("bg-accent");
        break;
      case "similar":
        filteredDishes = menuItems.filter(
          (dish) => dish.category === viewingDish.category
        );
        filterBtns.forEach((btn) => {
          btn.classList.add("bg-primary");
        });
        filterBtn.classList.remove("bg-primary");
        filterBtn.classList.add("bg-accent");
        break;
      case "others":
        let others = [];
        while (others.length <= Math.floor(Math.random() * 15 + 1)) {
          const randomIndex = Math.floor(Math.random() * menuItems.length);
          if (!others.includes(randomIndex)) {
            others.push(randomIndex);
          }
        }
        filteredDishes = menuItems.filter((_, idx) => others.includes(idx));
        filterBtns.forEach((btn) => {
          btn.classList.add("bg-primary");
        });
        filterBtn.classList.remove("bg-primary");
        filterBtn.classList.add("bg-accent");
        break;
    }
    renderCards(filteredDishes);
  });
});

renderGeneralElements();

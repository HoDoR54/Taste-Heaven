import { menuItems } from "./data/menuItems.js";
import { setViewingDish } from "./data/dish-view.js";
import { renderGeneralElements } from "./data/general-html.js";
import { applyWheelScroll } from "./UX/scroll.js";

renderGeneralElements();

// get data from localStorge to decide which category to show first

const categoryToShow =
  JSON.parse(localStorage.getItem("menu-category")) || "All";

// add filtering functions to filter btns

const categoryBtns = document.querySelectorAll(".js-menu-filter");

categoryBtns.forEach((category) => {
  category.addEventListener("click", () => {
    const categoryName = category.getAttribute("data-category-name");
    localStorage.setItem("menu-category", JSON.stringify(categoryName));
  });
});

// render the cards on page
const menuDisplayDiv = document.getElementById("js-menu-display");
const categoryName = document.getElementById("js-menu-category-display");
let menuHtml = "";

function displayDish(title, array) {
  menuHtml = "";
  menuDisplayDiv.innerHTML = "";
  categoryName.textContent = title;

  array.forEach((dish) => {
    categoryName.textContent = title;
    menuHtml += `
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
      </div>
    `;
    menuDisplayDiv.innerHTML = menuHtml;
  });

  // connect the page to dish details page

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
}

filterMenu(categoryToShow);

// filter the menu
function filterMenu(filterName) {
  menuDisplayDiv.innerHTML = "";
  const categoryName = filterName;
  document.title = `${categoryName} - Menu`;
  let filteredDishes = [];
  const filteringFunc = () => {
    filteredDishes = menuItems.filter((dish) => dish.category === categoryName);
  };
  switch (categoryName) {
    case "All":
      filteredDishes = menuItems;
      break;
    case "Main Courses":
    case "Appetizers":
    case "Beverages":
    case "Kids' Menu":
    case "Sides":
      filteringFunc();
      break;
    case "Highest Rated":
      filteredDishes = menuItems.filter((dish) => dish.rating >= 4.5);
      break;
    case "Your Favorites":
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      favorites.forEach((favorite) => {
        const favoriteDish = menuItems.find((dish) => dish.dishId === favorite);
        filteredDishes.push(favoriteDish);
      });

      break;
  }
  displayDish(categoryName, filteredDishes);
  activeBtn(categoryName);
}

function activeBtn(category) {
  categoryBtns.forEach((btn) => {
    if (btn.getAttribute("data-category-name") === category) {
      btn.classList.remove("bg-primary");
      btn.classList.add("bg-accent");
    }
  });
}

// apply wheel scrolling

const categoryContainer = document.getElementById("js-category-container");
applyWheelScroll(categoryContainer);

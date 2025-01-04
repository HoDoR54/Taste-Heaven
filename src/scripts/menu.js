import { menuItems } from "./data/menuItems.js";
import { setViewingDish } from "./data/dish-view.js";
import { addToFavToggle } from "./UX/add-to-fav.js";
import { renderGeneralElements } from "./UX/general-html.js";

renderGeneralElements();

// get data from localStorge to decide which category to show first

const categoryToShow = JSON.parse(localStorage.getItem("menu-category"));

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
  if (array.length === 0 && title === "Favorites") {
    categoryName.classList.add("hidden");
    menuDisplayDiv.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "h-full",
      "text-3xl",
      "font-semibold",
      "font-handWritten",
      "text-accent"
    );
    menuDisplayDiv.classList.remove("grid", "grid-cols-5");
    menuDisplayDiv.textContent =
      '"No item has been added to your favorites yet."';
  } else {
    menuDisplayDiv.classList.remove(
      "flex",
      "items-center",
      "justify-center",
      "h-full",
      "text-3xl",
      "font-semibold",
      "font-handWritten",
      "text-accent"
    );
    menuDisplayDiv.classList.add("grid", "grid-cols-5");
    categoryName.classList.remove("hidden");
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
      menuDisplayDiv.innerHTML = menuHtml;
    });

    // enable the 'add to favorite' toggle

    const addToFavoritesIcons = document.querySelectorAll(".add-to-favorites");
    const addedToFavoritesIcons = document.querySelectorAll(
      ".added-to-favorites"
    );

    addToFavToggle(addToFavoritesIcons, addedToFavoritesIcons);

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

// add an event listener to the menu paths

const menuPaths = document.querySelectorAll(".js-menu-paths");
menuPaths.forEach((menuPath) => {
  menuPath.addEventListener("click", () => {
    localStorage.setItem("menu-category", JSON.stringify("All"));
  });
});

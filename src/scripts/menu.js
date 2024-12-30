import { menuItems } from "./data/menuItems.js";
import { setViewingDish } from "./data/dish-view.js";

// render the cards on page

const menuDisplayDiv = document.getElementById("js-menu-display");
let menuHtml = "";

menuItems.forEach((dish) => {
  menuHtml += `
    <a
    href="dish-details.html"
    data-dish-id="${dish.dishId}"
    data-dish-category="${dish.category}"
    class="relative overflow-hidden rounded-md cursor-pointer js-dish-view h-max group"
    >
      <div>
        <img
          src="../images/menu/${dish.dishPic}"
          alt="${dish.alt}"
          class="w-full aspect-square group-hover:brightness-75 object-cover"
        />
      </div>
      <div class="absolute bottom-0 left-0 right-0 p-2 text-primary bg-gradient-to-t from-dark to-[rgba(0, 0, 0, 0.5)]">
        ${dish.dishName}
      </div>
    </a>
  `;
});

menuDisplayDiv.innerHTML = menuHtml;

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

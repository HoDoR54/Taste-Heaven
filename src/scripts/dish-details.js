import { getViewingDish } from "./data/dish-view.js";

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
          <span
            ><i class="mr-2 fa-solid fa-star text-secondary"></i>${viewingDish.rating}
            <a href="#" class="opacity-50 hover:underline hover:opacity-80"
              >(200+ ratings)</a
            ><span class="hidden ml-3 font-handWritten text-secondary"
              >Popular</span
            ></span
          >
          <p class="max-w-[50vw] mt-3">
            ${viewingDish.origin}
          </p>
          <p class="mt-2">
            <span class="font-medium text-accent">Main ingredients: </span>
            <span>${ingredients}</span>
          </p>
        </div>
        <div class="flex items-start justify-end min-h-full">
          <button
            class="add-to-favorites p-2 text-lg border-dotted rounded h-max border-dark border-[2px]"
          >
            <i class="fa-regular fa-heart add-to-favorite"></i>
            Add to favorites
          </button>
          <button
            class="hidden p-2 text-lg rounded added-to-favorites h-max bg-dark text-primary"
          >
            <i class="fa-solid fa-heart"></i>
            Added to favorites
          </button>
        </div>
`;

dishDetailsContianer.innerHTML = dishDetialHtml;

const menuContainer = document.getElementById("js-home-todays-special");
const favoriteDishesContainer = document.getElementById(
  "js-home-popular-dishes"
);

favoriteDishesContainer.addEventListener("wheel", function (event) {
  if (event.deltaY !== 0) {
    event.preventDefault();
    favoriteDishesContainer.scrollLeft += event.deltaY;
  }
});

menuContainer.addEventListener("wheel", function (event) {
  if (event.deltaY !== 0) {
    event.preventDefault();
    menuContainer.scrollLeft += event.deltaY;
  }
});

const addToFavoriteIcons = document.querySelectorAll(".add-to-favorite");
const addedToFavoriteIcons = document.querySelectorAll(".added-to-favorite");

addToFavoriteIcons.forEach((addToFavorite, idx) => {
  addToFavorite.addEventListener("click", () => {
    addToFavorite.classList.add("hidden");
    addedToFavoriteIcons[idx].classList.remove("hidden");
  });
});

addedToFavoriteIcons.forEach((addedToFavorite, idx) => {
  addedToFavorite.addEventListener("click", () => {
    addedToFavorite.classList.add("hidden");
    addToFavoriteIcons[idx].classList.remove("hidden");
  });
});

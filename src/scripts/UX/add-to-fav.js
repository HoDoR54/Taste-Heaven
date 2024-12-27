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

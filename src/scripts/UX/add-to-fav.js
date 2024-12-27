const addToFavoriteIcons = document.querySelectorAll(".add-to-favorites");
const addedToFavoriteIcons = document.querySelectorAll(".added-to-favorites");

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

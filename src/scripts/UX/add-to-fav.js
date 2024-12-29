const addToFavoritesIcons = document.querySelectorAll(".add-to-favorites");
const addedToFavoritesIcons = document.querySelectorAll(".added-to-favorites");
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

addToFavoritesIcons.forEach((addToFavorites, idx) => {
  const clicked = addToFavorites.getAttribute("data-dish-id");

  if (favorites.includes(clicked)) {
    addToFavorites.classList.add("hidden");
    addedToFavoritesIcons[idx].classList.remove("hidden");
  } else {
    addToFavorites.addEventListener("click", () => {
      if (!favorites.includes(clicked)) {
        favorites.push(clicked);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
      addToFavorites.classList.add("hidden");
      addedToFavoritesIcons[idx].classList.remove("hidden");
    });
  }
});

addedToFavoritesIcons.forEach((addedToFavorites, idx) => {
  const clicked = addedToFavorites.getAttribute("data-dish-id");
  addedToFavorites.addEventListener("click", () => {
    if (favorites.includes(clicked)) {
      favorites = favorites.filter((favorite) => favorite !== clicked);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    addedToFavorites.classList.add("hidden");
    addToFavoritesIcons[idx].classList.remove("hidden");
  });
});

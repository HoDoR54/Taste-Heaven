let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

export function addToFavToggle(addBtns, removeBtns) {
  addBtns.forEach((add, idx) => {
    const clicked = add.getAttribute("data-dish-id");
    const remove = removeBtns[idx];

    if (favorites.includes(clicked)) {
      add.classList.add("hidden");
      remove.classList.remove("hidden");
    } else {
      add.addEventListener("click", () => {
        if (!favorites.includes(clicked)) {
          favorites.push(clicked);
          localStorage.setItem("favorites", JSON.stringify(favorites));
        }
        add.classList.add("hidden");
        remove.classList.remove("hidden");
      });
    }
  });

  removeBtns.forEach((remove, idx) => {
    const add = addBtns[idx];

    remove.addEventListener("click", () => {
      const clicked = remove.getAttribute("data-dish-id");
      if (favorites.includes(clicked)) {
        favorites = favorites.filter((favorite) => favorite !== clicked);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
      remove.classList.add("hidden");
      add.classList.remove("hidden");
    });
  });
}

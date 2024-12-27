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

const menuContainer = document.getElementById("js-home-todays-special");

menuContainer.addEventListener("wheel", function (event) {
  if (event.deltaY !== 0) {
    event.preventDefault();
    menuContainer.scrollLeft += event.deltaY;
  }
});

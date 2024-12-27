export let viewingDish = JSON.parse(localStorage.getItem("viewingDish")) || "";

export function setViewingDish(dish) {
  viewingDish = dish;
  localStorage.setItem("viewingDish", JSON.stringify(viewingDish));
}

export function getViewingDish() {
  return viewingDish;
}

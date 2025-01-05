export function applyWheelScroll(container) {
  container.addEventListener("wheel", function (event) {
    if (event.deltaY !== 0) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    }
  });
}

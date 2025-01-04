export function applyHamburgerAnimation(icon, menu, closeBtn) {
  icon.addEventListener("click", () => {
    menu.classList.remove("translate-x-[100vw]");
    menu.classList.add(
      "transition-all",
      "duration-200",
      "ease-in-out",
      "left-0",
      "right-0"
    );
  });
  closeBtn.addEventListener("click", () => {
    menu.classList.add("translate-x-[100vw]");
  });
}

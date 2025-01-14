export class Messages {
  getAlertBox(message) {
    const box = document.createElement("div");
    box.innerText = message;
    box.classList.add(
      "px-5",
      "py-3",
      "bg-accent",
      "text-lg",
      "font-semibold",
      "absolute",
      "bottom-[20px]",
      "left-1/2",
      "transform",
      "-translate-x-1/2",
      "shadow-lg",
      "rounded-full",
      "border-dark",
      "border-dotted",
      "border-[2px]",
      "items-center",
      "justify-center",
      "flex",
      "min-w-[300px]",
      "opacity-90"
    );

    document.body.appendChild(box);

    setTimeout(() => {
      box.remove();
    }, 1000);
  }
}

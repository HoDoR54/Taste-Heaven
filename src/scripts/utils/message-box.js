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

  getWarning(message, buttons = []) {
    const box = document.createElement("div");
    box.classList.add(
      "min-h-[200px]",
      "px-5",
      "py-3",
      "bg-primary",
      "font-semibold",
      "absolute",
      "top-1/2",
      "left-1/2",
      "transform",
      "-translate-x-1/2",
      "-translate-y-1/2",
      "shadow-lg",
      "rounded-md",
      "border-dark",
      "border-dotted",
      "border-[2px]",
      "flex",
      "flex-col",
      "min-w-[500px]",
      "justify-between"
    );

    box.innerHTML = `
      <h1 class="flex justify-center items-center text-2xl font-bold">Policy</h1>
      <div class="text-center">${message}</div>
      <div class="flex justify-around mt-5" id="js-message-btn-container">
        <button class="bg-dark hover:bg-accent text-primary hover:text-dark px-5 py-2 rounded" id="okayBtn">Okay</button>
      </div>
    `;

    document.body.appendChild(box);

    const okayBtn = document.getElementById("okayBtn");
    okayBtn.addEventListener("click", () => {
      box.remove();
    });

    const btnContainer = box.querySelector("#js-message-btn-container");

    if (buttons.length > 0) {
      buttons.forEach((btn) => {
        const buttonEl = document.createElement("button");
        buttonEl.classList.add(
          "bg-dark",
          "hover:bg-accent",
          "text-primary",
          "hover:text-dark",
          "px-5",
          "py-2",
          "rounded"
        );
        buttonEl.textContent = btn.name;
        buttonEl.addEventListener("click", () => {
          btn.func();
          box.remove();
        });
        btnContainer.appendChild(buttonEl);
      });
    }
  }
}

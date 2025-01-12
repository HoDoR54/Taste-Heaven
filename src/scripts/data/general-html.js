import { OrderManipulation } from "./order-dishes.js";

const headerOrder = new OrderManipulation();
headerOrder.updateQuantityDisplay();

export function renderGeneralElements(fileName) {
  const headerContainer = document.getElementById("js-header");
  const footerContainer = document.getElementById("js-footer");
  headerContainer.innerHTML = `
        <div class="items-center">
          <span class="text-2xl cursor-pointer text-primary">
            <a href="${
              fileName !== "index" ? "../../index.html" : "index.html"
            }">
              <i
                class="p-2 rounded text-dark fa-solid fa-utensils bg-secondary mr-1.5"
              ></i>
              <span class="font-semibold">HeAVEn</span>
            </a>
          </span>
        </div>
        <!-- Navigation for larger screens -->
        <nav class="hidden lg:col-span-2 lg:!flex items-center justify-center">
          <ul
            class="flex w-full gap-x-7 text-center text-md text-primary justify-center items-center"
          >
            <li class="cursor-pointer hover:text-accent">
              <a href="${
                fileName !== "index" ? "./menu.html" : "./src/html/menu.html"
              }">Menu</a>
            </li>
            <li class="cursor-pointer hover:text-accent">
              <a href="${
                fileName !== "index" ? "./about.html" : "./src/html/about.html"
              }">About Us</a>
            </li>
            <li class="cursor-pointer hover:text-accent">
              <a href="${
                fileName !== "index"
                  ? "./services.html"
                  : "./src/html/services.html"
              }">Our Services</a>
            </li>
            <li class="cursor-pointer hover:text-accent">
              <a href="${
                fileName !== "index"
                  ? "./career.html"
                  : "./src/html/career.html"
              }">Career</a>
            </li>
          </ul>
        </nav>
        <!-- Buttons -->
        <div class="hidden lg:!flex justify-end items-center gap-4">
          <!-- Cart Button -->
          <button
            class=" ${
              fileName !== "order" ? "inline-block" : "hidden"
            } p-2 group relative rounded text-md text-primary border-primary border-dotted border-[2px] hover:text-accent hover:border-accent"
          >
            <a 
              href="${
                fileName === "index" ? "./src/html/order.html" : "./order.html"
              }">
              <i class="fa-solid fa-cart-shopping"></i> 
              Dish it up
            </a>
            <span ${headerOrder.getQuantity() !== 0 ? "flex" : "hidden"}
              class="group-hover:hidden absolute px-2 py-1 rounded-full bg-red-600 text-primary pointer-events-none text-[0.8rem] -top-[0.6rem] -right-[0.6rem] js-order-quantity-display"
            >
            ${headerOrder.getQuantity()}
            </span>
          </button>

          <!-- Booking Button -->
          <button
            class="p-2 relative rounded text-md bg-primary hover:bg-accent text-dark"
          >
            <a href="./src/html/booking.html">
              Book a table 
              <i class="bi bi-arrow-bar-right"></i>
            </a>
          </button>
        </div>

        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center justify-end lg:hidden" id="js-hamburger-icon">
          <i class="text-2xl fa-solid fa-bars text-primary"></i>
        </div>
    `;
  footerContainer.innerHTML = `
    <div
      class="flex flex-col items-center justify-center border-b-2 border-dotted border-dark"
    >
      <div class="mb-[1.5rem]">
        <span class="text-3xl text-center cursor-pointer text-dark">
          <a href="${fileName === "index" ? "index.html" : "../../index.html"}"
            ><i
              class="p-2 rounded text-dark fa-solid fa-utensils bg-secondary mr-1.5"
            ></i
            >HeAVEn</a
          >
        </span>
      </div>
      <div class="p-5">
        <ul class="grid grid-cols-3 md:grid-cols-6 gap-7">
          <li class="hover:underline hover:text-accent">
            <a href="${
              fileName === "index" ? "index.html" : "../../index.html"
            }">Home</a>
          </li>
          <li class="hover:underline hover:text-accent">
            <a href="${
              fileName === "index" ? "./src/html/menu.html" : "./menu.html"
            }">Menu</a>
          </li>
          <li class="hover:underline hover:text-accent">
            <a href="${
              fileName === "index" ? "./src/html/about.html" : "./about.html"
            }">About us</a>
          </li>
          <li class="hover:underline hover:text-accent">
            <a href="${
              fileName === "index"
                ? "./src/html/services.html"
                : "./services.html"
            }">Services</a>
          </li>
          <li class="hover:underline hover:text-accent">
            <a href="${
              fileName === "index" ? "./src/html/career.html" : "./career.html"
            }">Career</a>
          </li>
          <li class="hover:underline hover:text-accent">
            <a href="${
              fileName === "index" ? "./src/html/order.html" : "./order.html"
            }">Orders</a>
          </li>
        </ul>
      </div>
      <div class="flex gap-5 p-3 mb-5">
        <a href="https://www.instagram.com" target="_blank">
          <div
            class="flex items-center justify-center p-3 rounded-full bg-dark text-primary w-[5rem] cursor-pointer hover:bg-primary hover:text-accent border-dotted border-[2px] border-dark hover:border-accent"
          >
            <i class="fa-brands fa-instagram"></i>
          </div>
        </a>
        <a
          href="https://www.facebook.com/hpone.nyi.3?mibextid=ZbWKwL"
          target="_blank"
        >
          <div
            class="flex items-center justify-center p-3 rounded-full bg-dark text-primary w-[5rem] cursor-pointer hover:bg-primary hover:text-accent border-dotted border-[2px] border-dark hover:border-accent"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </div>
        </a>

        <a href="https://github.com/HoDoR54" target="_blank">
          <div
            class="flex items-center justify-center p-3 rounded-full bg-dark text-primary w-[5rem] cursor-pointer hover:bg-primary hover:text-accent border-dotted border-[2px] border-dark hover:border-accent"
          >
            <i class="fa-brands fa-github"></i>
          </div>
        </a>
      </div>
    </div>
    <div
      class="flex sm:text-sm text-xs flex-col items-center p-3 md:flex-row md:justify-between justify-center text-center"
    >
      <span>Designed and Developed by Hpone Tauk Nyi.</span>
      <span>Contact: hponetaukyou@gmail.com</span>
    </div>
  `;
  document.body.innerHTML += `
    <section class="fixed top-0 left-0 bg-primary grid grid-rows-12 min-w-screen min-h-screen translate-x-[100vw] z-50 text-dark" id="js-hamburger-menu">
        <div class="flex items-center p-4 border-b-[2px] border-accent border-dotted" ><i id="js-hamburger-close" class="text-2xl fa-solid fa-xmark"></i></div>
        ${
          fileName !== "index"
            ? `<div class="border-b-[2px] border-accent border-dotted flex items-center justify-center text-lg font-semibold hover:bg-accent">
              <a href="../../index.html">Home</a>
            </div>`
            : ""
        }
        <div class="border-b-[2px] border-accent border-dotted flex items-center justify-center text-lg font-semibold hover:bg-accent"><a href="
            ${fileName === "index" ? "./src/html/menu.html" : "./menu.html"}
        ">Menu</a></div>
        <div class="border-b-[2px] border-accent border-dotted flex items-center justify-center text-lg font-semibold hover:bg-accent"><a href="
            ${fileName === "index" ? "./src/html/about.html" : "./about.html"}
        ">About us</a></div>
        <div class="border-b-[2px] border-accent border-dotted flex items-center justify-center text-lg font-semibold hover:bg-accent"><a href="
            ${
              fileName === "index"
                ? "./src/html/services.html"
                : "./services.html"
            }
        ">Our Services</a></div>
        <div class="border-b-[2px] border-accent border-dotted flex items-center justify-center text-lg font-semibold hover:bg-accent"><a href="
            ${fileName === "index" ? "./src/html/career.html" : "./career.html"}
        ">Career</a></div>
        <div class="border-b-[2px] border-accent border-dotted flex items-center justify-center text-lg font-semibold hover:bg-accent"><a href="
            ${
              fileName === "index"
                ? "./src/html/booking.html"
                : "./booking.html"
            }
        ">Book a table</a></div>
        <div class="border-b-[2px] border-accent border-dotted flex items-center justify-center text-lg font-semibold hover:bg-accent"><a href="
            ${fileName === "index" ? "./src/html/order.html" : "./order.html"}
        ">Dish it up</a></div>
      </section>
    `;

  const hamburgerIcon = document.getElementById("js-hamburger-icon");
  const hamburgerMenu = document.getElementById("js-hamburger-menu");
  const hamburgerClose = document.getElementById("js-hamburger-close");
  applyHamburgerAnimation(hamburgerIcon, hamburgerMenu, hamburgerClose);
}

function applyHamburgerAnimation(icon, menu, closeBtn) {
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

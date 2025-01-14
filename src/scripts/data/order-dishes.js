import { formatCurrency } from "../utils/money.js";

export class OrderManipulation {
  constructor() {
    this.orderDishes = JSON.parse(localStorage.getItem("order-dishes")) || [];
    this.quantity = this.orderDishes.length;
  }

  getQuantity() {
    return this.quantity;
  }

  getOrderList() {
    return this.orderDishes;
  }

  getDishQuantity(dishId) {
    return this.orderDishes.filter((item) => item === dishId).length;
  }

  getSubtotal(dishId, dishPriceCents) {
    const totalCents = formatCurrency(
      dishPriceCents * this.getDishQuantity(dishId)
    );
    return `$ ${totalCents}`;
  }

  clearOrder() {
    localStorage.removeItem("order-dishes");
    this.orderDishes = [];
    this.quantity = 0;
    this.updateQuantityDisplay();
  }

  addOrder(dishId, dishPrice) {
    this.orderDishes.push(dishId);
    localStorage.setItem("order-dishes", JSON.stringify(this.orderDishes));
    this.quantity++;
    this.updateQuantityDisplay(dishId, dishPrice);
  }

  removeOrder(dishId, dishPrice) {
    const index = this.orderDishes.indexOf(dishId);
    if (index !== -1) {
      this.orderDishes.splice(index, 1);
      localStorage.setItem("order-dishes", JSON.stringify(this.orderDishes));
      this.quantity--;
      this.updateQuantityDisplay(dishId, dishPrice);
    }
  }

  updateQuantityDisplay(dishId, dishPrice) {
    const quantityDisplays = document.querySelectorAll(
      ".js-order-quantity-display"
    );
    quantityDisplays.forEach((quantityDisplay) => {
      quantityDisplay.textContent = this.quantity;
      quantityDisplay.classList.toggle("hidden", this.quantity === 0);
    });

    if (dishId) {
      const dishQuantityDisplay = document.querySelector(
        `.js-dish-quantity[data-dish-id="${dishId}"]`
      );
      const subtotalDisplay = document.querySelector(
        `.js-subtotal-display[data-dish-id="${dishId}"]`
      );
      if (dishQuantityDisplay) {
        dishQuantityDisplay.textContent = this.getDishQuantity(dishId);
      }
      if (dishPrice && subtotalDisplay) {
        subtotalDisplay.textContent = this.getSubtotal(dishId, dishPrice);
      }
    }
  }
}

let orderDishes = JSON.parse(localStorage.getItem("order-dishes")) || [];
export class OrderManipulation {
  constructor() {
    this.quantity = JSON.parse(localStorage.getItem("order-quantity")) || 0;
  }

  getQuantity() {
    return this.quantity;
  }
  getOrderList() {
    return orderDishes;
  }
  addOrder(dishId) {
    orderDishes.push(dishId);
    localStorage.setItem("order-dishes", JSON.stringify(orderDishes));
    this.quantity++;
    localStorage.setItem("order-quantity", JSON.stringify(this.quantity));
  }

  removeOrder(dishId) {
    const index = orderDishes.indexOf(dishId);
    if (index !== -1 && orderDishes.length !== 0) {
      orderDishes.splice(index, 1);
      localStorage.setItem("order-dishes", JSON.stringify(orderDishes));
      this.quantity--;
      localStorage.setItem("order-quantity", JSON.stringify(this.quantity));
    }
  }

  updateQuantityDisplay() {
    const quantityDisplay = document.querySelector(
      ".js-order-quantity-display"
    );
    if (quantityDisplay) {
      quantityDisplay.textContent = this.quantity;
    }
  }
}

import { OrderManipulation } from "./data/order-dishes.js";
import { menuItems } from "./data/menuItems.js";
import { renderGeneralElements } from "./data/general-html.js";

renderGeneralElements("order");

let orderMani = new OrderManipulation();
const orders = orderMani.getOrderList();
const orderedDishes = menuItems.filter((dish) => orders.includes(dish.dishId));

orderedDishes.forEach((orderedDish) => {});

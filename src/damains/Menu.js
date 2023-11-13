import { MENU } from "../constants/menu.js";

class Menu {
  #detail;

  #count;

  constructor(orderedMenu) {
    this.#detail = MENU.find((menu) => menu.name === orderedMenu.name);
    this.#count = orderedMenu.count;
  }

  getMenuInfo() {
    const menuInfo = {
      course: this.#detail.course,
      name: this.#detail.name,
      price: this.#detail.price,
      count: this.#count,
    };
    return menuInfo;
  }
  getMenuPrice() {
    const menuPrice = this.#detail.price * this.#count;
    return menuPrice;
  }
}

export default Menu;

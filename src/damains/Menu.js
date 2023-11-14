import { MENU } from "../constants/menu.js";

class Menu {
  #detail;

  #count;

  constructor(orderedMenu) {
    this.#detail = MENU.find((menu) => menu.name === orderedMenu.name);
    this.#count = orderedMenu.count;
  }

  // 메뉴 정보 가져오기
  getMenuInfo() {
    const menuInfo = {
      course: this.#detail.course,
      name: this.#detail.name,
      price: this.#detail.price,
      count: this.#count,
    };
    return menuInfo;
  }

  // 메뉴와 개수를 곱한 값 가져오기
  getMenuPrice() {
    const menuPrice = this.#detail.price * this.#count;
    return menuPrice;
  }
}

export default Menu;

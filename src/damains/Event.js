import Menu from "./Menu.js";

class Event {
  #date;

  #order;

  constructor(date, menus) {
    this.#date = date;
    this.#order = menus.map((menu) => new Menu(menu));
  }

  getOrderDetail() {
    const orderDetail = this.#order.map((menu) => menu.getMenuInfo());
    return orderDetail;
  }

  getBeforeTotal() {
    const beforeTotal = this.#order.reduce((acc, crr) => {
      crr = crr.getMenuPrice();
      return acc + crr;
    }, 0);
    return beforeTotal;
  }
}

export default Event;

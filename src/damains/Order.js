import Menu from "./Menu.js";

class Order {
  #menus;

  constructor(menus) {
    this.#menus = menus.map((menu) => new Menu(menu));
  }

  // 주문 상세 내역 가져오기
  getOrderDetail() {
    const orderDetail = this.#menus.map((menu) => menu.getMenuInfo());
    return orderDetail;
  }

  // 할인 전 총주문 금액 가져오기
  getBeforePrice() {
    const beforePrice = this.#menus.reduce(
      (total, menu) => total + menu.getMenuPrice(),
      0
    );
    return beforePrice;
  }
}

export default Order;

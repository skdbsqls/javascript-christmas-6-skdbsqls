import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";
import DateValidate from "../utils/validation/DateValidate.js";
import OrderValidate from "../utils/validation/OrderValidate.js";

const InputView = {
  // 예상 방문 날짜 입력
  async readDate() {
    const date = await Console.readLineAsync(INPUT_MESSAGE.date);
    try {
      this.validateDate(date);
      return Number(date);
    } catch (error) {
      Console.print(error.message);
      return this.readDate();
    }
  },

  // 방문 날짜 입력값 에러 처리
  validateDate(date) {
    DateValidate.doNotEnter(date);
    DateValidate.isNotNum(date);
    DateValidate.invalidRange(date);
  },

  // 주문 메뉴 및 개수 입력
  async readOrder() {
    const order = await Console.readLineAsync(INPUT_MESSAGE.menu);
    try {
      const menus = this.validateOrder(order);
      return menus;
    } catch (error) {
      Console.print(error.message);
      return this.readOrder();
    }
  },

  // 주문 메뉴 및 개수 입력값 에러 처리
  validateOrder(order) {
    OrderValidate.doNotEnter(order);

    const orders = this.getOrders(order);
    OrderValidate.notSeparateByDash(orders);

    const menus = this.getMenus(orders);
    OrderValidate.invalidMenu(menus);
    OrderValidate.invalidCount(menus);
    OrderValidate.duplicateMenu(menus);
    OrderValidate.onlyBeverage(menus);
    OrderValidate.exceedMaxCount(menus);

    return menus;
  },

  getOrders(order) {
    const orders = order.split(",");
    return orders;
  },

  getMenus(orders) {
    const menus = orders.reduce((acc, cur) => {
      const [name, count] = cur.split("-");
      acc.push({ name, count: Number(count) });
      return acc;
    }, []);
    return menus;
  },
};

export default InputView;

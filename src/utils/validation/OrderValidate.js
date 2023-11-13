import { ERROR_MESSAGE } from "../../constants/message.js";
import {
  MENU,
  BEVERAGE_MENU,
  MIN_MENU,
  MAX_MENU,
} from "../../constants/menu.js";

const OrderValidate = {
  // 입력하지 않은 경우
  doNotEnter(order) {
    if (order === "") {
      throw new Error(ERROR_MESSAGE.invalid_menu);
    }
  },
  // 메뉴 이름과 개수를 (-)로 구분하지 않은 경우
  notSeparateByDash(orders) {
    orders.forEach((order) => {
      if (!order.includes("-")) {
        throw new Error(ERROR_MESSAGE.invalid_menu);
      }
    });
  },
  // 고객이 메뉴판에 없는 메뉴를 입력하는 경우
  invalidMenu(menus) {
    const names = menus.map((menu) => menu.name);
    const menuNames = MENU.map((menu) => menu.name);

    names.forEach((name) => {
      if (!menuNames.includes(name)) {
        throw new Error(ERROR_MESSAGE.invalid_menu);
      }
    });
  },
  // 메뉴의 개수로 1 이상의 숫자 이외의 입력값을 입력하는 경우
  invalidCount(menus) {
    const counts = menus.map((menu) => menu.count);

    counts.forEach((count) => {
      if (count < MIN_MENU) {
        throw new Error(ERROR_MESSAGE.invalid_menu);
      }
    });
  },
  // 중복 메뉴를 입력한 경우
  duplicateMenu(menus) {
    const names = menus.map((menu) => menu.name);
    const setNames = new Set(names);

    if (names.length !== setNames.size) {
      throw new Error(ERROR_MESSAGE.invalid_menu);
    }
  },
  // 음료만 주문한 경우
  onlyBeverage(menus) {
    const names = menus.map((menu) => menu.name);
    const beverageNames = BEVERAGE_MENU.map((menu) => menu.name);

    if (names.every((name) => beverageNames.includes(name))) {
      throw new Error(ERROR_MESSAGE.only_beverage);
    }
  },
  // 주문한 메뉴의 개수가 20개를 초과한 경우
  exceedMaxCount(menus) {
    const counts = menus.map((menu) => menu.count);
    const totalCount = counts.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    if (totalCount > MAX_MENU) {
      throw new Error(ERROR_MESSAGE.exceed_max);
    }
  },
};

export default OrderValidate;

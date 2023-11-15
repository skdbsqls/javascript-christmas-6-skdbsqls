import InputView from "../src/views/InputView.js";
import OrderValidate from "../src/utils/validation/OrderValidate.js";
import { ERROR_MESSAGE } from "../src/constants/message.js";

describe("주문 메뉴 및 개수 입력값 예외 테스트", () => {
  test("주문을 입력하지 않은 경우 예외가 발생한다.", () => {
    const input = "";

    expect(() => OrderValidate.doNotEnter(input)).toThrow(
      ERROR_MESSAGE.invalid_menu
    );
  });
  test.each([["해산물파스타1"], ["양송이수프1,바비큐립1"]])(
    "메뉴 형식이 예시와 다른 경우 예외가 발생한다.",
    (input) => {
      const result = InputView.getOrders(input);

      expect(() => OrderValidate.notSeparateByDash(result)).toThrow(
        ERROR_MESSAGE.invalid_menu
      );
    }
  );
  test.each([["크림파스타-1"], ["치즈케이크-1"]])(
    "메뉴판에 없는 메뉴를 입력하는 경우 예외가 발생한다.",
    (input) => {
      const output = InputView.getOrders(input);
      const result = InputView.getMenus(output);

      expect(() => OrderValidate.invalidMenu(result)).toThrow(
        ERROR_MESSAGE.invalid_menu
      );
    }
  );
  test.each([["해산물파스타-a"], ["해산물파스타-1개"], ["해산물파스타-0"]])(
    "메뉴의 개수로 1 이상의 숫자 이외의 입력값을 입력하는 경우 예외가 발생한다.",
    (input) => {
      const output = InputView.getOrders(input);
      const result = InputView.getMenus(output);

      expect(() => OrderValidate.invalidCount(result)).toThrow(
        ERROR_MESSAGE.invalid_menu
      );
    }
  );
  test("중복 메뉴를 입력한 경우 예외가 발생한다.", () => {
    const input = "시저샐러드-1,시저샐러드-1";

    const output = InputView.getOrders(input);
    const result = InputView.getMenus(output);

    expect(() => OrderValidate.duplicateMenu(result)).toThrow(
      ERROR_MESSAGE.invalid_menu
    );
  });
  test("음료만 주문한 경우 예외가 발생한다.", () => {
    const input = "제로콜라-1,레드와인-1";

    const output = InputView.getOrders(input);
    const result = InputView.getMenus(output);

    expect(() => OrderValidate.onlyBeverage(result)).toThrow(
      ERROR_MESSAGE.only_beverage
    );
  });
  test("주문한 메뉴의 개수가 20개를 초과한 경우 예외가 발생한다.", () => {
    const input = "티본스테이크-5,해산물파스타-10,제로콜라-15";

    const output = InputView.getOrders(input);
    const result = InputView.getMenus(output);

    expect(() => OrderValidate.exceedMaxCount(result)).toThrow(
      ERROR_MESSAGE.exceed_max
    );
  });
});

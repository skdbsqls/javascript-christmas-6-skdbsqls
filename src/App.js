import Order from "./damains/Order.js";
import Event from "./damains/Event.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class App {
  #date;

  #menus;

  #order;

  #event;

  async run() {
    await this.#executeIntro();
    this.#executeOrder();
    this.#executeEvent();
  }

  // 인트로 (방문 날짜 선택 및 메뉴 주문)
  async #executeIntro() {
    OutputView.printIntro();
    this.#date = await InputView.readDate();
    this.#menus = await InputView.readOrder();
    OutputView.printPreview(this.#date);
  }

  // 주문 확인 (주문 메뉴 및 할인 전 총주문 금액 출력)
  #executeOrder() {
    this.#order = new Order(this.#menus);
    const orderDetail = OutputView.printMenu(this.#order);
    const beforePrice = OutputView.printBefore(this.#order);

    this.#event = new Event(this.#date, orderDetail, beforePrice);
  }

  // 이벤트 혜택 내역
  #executeEvent() {
    OutputView.printPresent(this.#event);
    OutputView.printBenefit(this.#event);
    OutputView.printBenefitPrice(this.#event);
    OutputView.printAfter(this.#event);
    OutputView.printBadge(this.#event);
  }
}

export default App;

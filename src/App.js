import Event from "./damains/Event.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class App {
  #date;

  #menus;

  async run() {
    await this.#executeIntro();
    this.#executePrintOrder();
  }

  // 인트로 (방문 날짜 선택 및 메뉴 주문)
  async #executeIntro() {
    OutputView.printIntro();
    this.#date = await InputView.readDate();
    this.#menus = await InputView.readOrder();
    OutputView.printPreview(this.#date);
  }

  // 주문 확인 (주문 메뉴 및 할인 전 총주문 금액 출력)
  #executePrintOrder() {
    const order = new Event(this.#date, this.#menus);
    OutputView.printMenu(order);
    OutputView.printBefore(order);
  }
}

export default App;

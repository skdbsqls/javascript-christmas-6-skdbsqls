import Menu from "./damains/Menu.js";
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

  // 주문 확인 (메뉴 및 금액 출력)
  #executePrintOrder() {
    this.#menus = this.#menus.map((menu) => new Menu(menu));
    OutputView.printMenu(this.#menus);
    OutputView.printBefore(this.#menus);
  }
}

export default App;

import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class App {
  #date;
  #menu;

  async run() {
    await this.#executeIntro();
  }

  // 인트로 (방문 날짜 선택 및 메뉴 주문)
  async #executeIntro() {
    OutputView.printIntro();
    this.#date = await InputView.readDate();
    this.#menu = await InputView.readMenu();
    OutputView.printPreview(this.#date);
  }
}

export default App;

import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

const OutputView = {
  // 인사말 출력
  printIntro() {
    Console.print(OUTPUT_MESSAGE.intro);
  },
  // 이벤트 햬택 안내 문구 출력
  printPreview(day) {
    Console.print(OUTPUT_MESSAGE.preview(day));
  },
  // 주문 메뉴 출력
  printMenu() {
    Console.print(OUTPUT_MESSAGE.ordered);
  },
  // 할인 전 총주문 금액 출력
  printBefore() {
    Console.print(OUTPUT_MESSAGE.before_total);
  },
  // 증정 메뉴 출력
  printPresent() {
    Console.print(OUTPUT_MESSAGE.present_menu);
  },
  // 혜택 내역 출력
  printBenefit() {
    Console.print(OUTPUT_MESSAGE.benefit_detail);
  },
  // 총혜택 금액 출력
  printBenefitPrice() {
    Console.print(OUTPUT_MESSAGE.benefit_price);
  },
  // 할인 후 예상 결제 금액 출력
  printAfter() {
    Console.print(OUTPUT_MESSAGE.after_total);
  },
  // 이벤트 배지 출력
  printBadge() {
    Console.print(OUTPUT_MESSAGE.event_badge);
  },
};

export default OutputView;

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
  printMenu(order) {
    Console.print(OUTPUT_MESSAGE.ordered_menu);

    const orderDetail = order.getOrderDetail();
    orderDetail.forEach((order) => {
      Console.print(`${order.name} ${order.count}개`);
    });
  },
  // 할인 전 총주문 금액 출력
  printBefore(order) {
    Console.print(OUTPUT_MESSAGE.before_total);

    const beforePrice = order.getBeforePrice();
    Console.print(`${beforePrice}원`);
  },
  // 증정 메뉴 출력
  printPresent(order) {
    Console.print(OUTPUT_MESSAGE.present_menu);

    const present = order.getPresentEvent();
    if (present) {
      Console.print(`${present.menuName} 1개`);
    } else Console.print(OUTPUT_MESSAGE.none_event);
  },
  // 혜택 내역 출력
  printBenefit(order) {
    Console.print(OUTPUT_MESSAGE.benefit_detail);

    const benefit = order.getBenefitDetail();
    if (benefit) {
      benefit.forEach((event) => {
        Console.print(`${event.name}: -${event.discount}원`);
      });
    } else Console.print(OUTPUT_MESSAGE.none_event);
  },
  // 총혜택 금액 출력
  printBenefitPrice(order) {
    Console.print(OUTPUT_MESSAGE.benefit_price);

    const benefitTotal = order.getBenefitTotal();
    if (benefitTotal) {
      Console.print(`-${benefitTotal}원`);
    } else Console.print(OUTPUT_MESSAGE.none_benefit);
  },
  // 할인 후 예상 결제 금액 출력
  printAfter(order) {
    Console.print(OUTPUT_MESSAGE.after_total);

    const afterPrice = order.getAfterPrice();
    Console.print(`${afterPrice}원`);
  },
  // 이벤트 배지 출력
  printBadge(order) {
    Console.print(OUTPUT_MESSAGE.event_badge);

    const badge = order.getEventBadge();
    if (badge) {
      Console.print(`${badge}`);
    } else Console.print(OUTPUT_MESSAGE.none_event);
  },
};

export default OutputView;

const INPUT_MESSAGE = Object.freeze({
  date: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  menu: "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
});

const OUTPUT_MESSAGE = Object.freeze({
  intro: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  preview: (day) =>
    `12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  ordered_menu: "\n<주문 메뉴>",
  before_total: "\n<할인 전 총주문 금액>",
  present_menu: "\n<증정 메뉴>",
  benefit_detail: "\n<혜택 내역>",
  benefit_price: "\n<총혜택 금액>",
  after_total: "\n<할인 후 예상 결제 금액>",
  event_badge: "\n<12월 이벤트 배지>",
});

const ERROR_MESSAGE = Object.freeze({
  invalid_date: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  invalid_menu: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
  only_beverage: "[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.",
  exceed_max:
    "[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. 다시 입력해 주세요.",
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };

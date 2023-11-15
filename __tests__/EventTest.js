import Event from "../src/damains/Event.js";

describe("이벤트 클래스 테스트", () => {
  // given
  const date = 3;
  const orderDetail = [
    { course: "main", name: "티본스테이크", price: 55000, count: 1 },
    { course: "main", name: "바비큐립", price: 54000, count: 1 },
    { course: "dessert", name: "초코케이크", price: 35000, count: 2 },
    { course: "beverage", name: "제로콜라", price: 3000, count: 1 },
  ];
  const beforePrice = 142000;

  test("날짜에 따른 이벤트 적용하기", () => {
    const result = new Event(date, orderDetail, beforePrice).getEventByDate();

    expect(result).toStrictEqual([
      { name: "크리스마스 디데이 할인", discount: 1200 },
      { name: "평일 할인", discount: 4046 },
      { name: "특별 할인", discount: 1000 },
      { name: "증정 이벤트", menuName: "샴페인", discount: 25000 },
    ]);
  });
  test("증정 이벤트 적용하기", () => {
    const result = new Event(date, orderDetail, beforePrice).getPresentEvent();

    expect(result).toStrictEqual({
      name: "증정 이벤트",
      menuName: "샴페인",
      discount: 25000,
    });
  });
  test("크리스마스 디데이 할인 적용하기", () => {
    const result = new Event(date, orderDetail, beforePrice).getDdayEvent();

    expect(result).toStrictEqual({
      name: "크리스마스 디데이 할인",
      discount: 1200,
    });
  });
  test("평일 할인 적용하기", () => {
    const result = new Event(date, orderDetail, beforePrice).getWeekdayEvent();

    expect(result).toStrictEqual({
      name: "평일 할인",
      discount: 4046,
    });
  });
  test("주말 할인 적용하기", () => {
    const result = new Event(date, orderDetail, beforePrice).getWeenendEvent();

    expect(result).toStrictEqual({
      name: "주말 할인",
      discount: 4046,
    });
  });
  test("특별 할인 적용하기", () => {
    const result = new Event(date, orderDetail, beforePrice).getSpecialEvent();

    expect(result).toStrictEqual({
      name: "특별 할인",
      discount: 1000,
    });
  });
  test("총혜택 금액 가져오기", () => {
    const result = new Event(date, orderDetail, beforePrice).getBenefitTotal();

    expect(result).toBe(31246);
  });
  test("할인 후 예상 결제 금액 가져오기", () => {
    const result = new Event(date, orderDetail, beforePrice).getAfterPrice();

    expect(result).toBe(135754);
  });
  test("배지 이벤트 적용하기", () => {
    const result = new Event(date, orderDetail, beforePrice).getEventBadge();

    expect(result).toBe("산타");
  });
});

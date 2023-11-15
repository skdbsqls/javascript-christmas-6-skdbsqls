import Order from "../src/damains/Order.js";

describe("주문 클래스 테스트", () => {
  // given
  const input = [
    { name: "해산물파스타", count: 2 },
    { name: "레드와인", count: 1 },
  ];

  test("주문 상세 가져오기", () => {
    const output = [
      { course: "main", name: "해산물파스타", price: 35000, count: 2 },
      { course: "beverage", name: "레드와인", price: 60000, count: 1 },
    ];

    const result = new Order(input).getOrderDetail();

    expect(result).toStrictEqual(output);
  });
  test("할인 전 총주문 금액 가져오기", () => {
    const output = 130000;

    const result = new Order(input).getBeforePrice();

    expect(result).toBe(output);
  });
});

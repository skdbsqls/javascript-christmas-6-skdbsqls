import Menu from "../src/damains/Menu.js";

describe("메뉴 클래스 테스트", () => {
  // given
  const input = { name: "해산물파스타", count: 1 };
  test("정보 가져오기", () => {
    const output = {
      course: "main",
      name: "해산물파스타",
      price: 35000,
      count: 1,
    };

    const result = new Menu(input).getMenuInfo();

    expect(result).toStrictEqual(output);
  });
  test("총금액 가져오기", () => {
    const output = 35000;

    const result = new Menu(input).getMenuPrice();

    expect(result).toBe(output);
  });
});

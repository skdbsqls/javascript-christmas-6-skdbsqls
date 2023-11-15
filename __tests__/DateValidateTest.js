import DateValidate from "../src/utils/validation/DateValidate.js";
import { ERROR_MESSAGE } from "../src/constants/message.js";

describe("방문 날짜 입력값 예외 테스트", () => {
  test("날짜를 입력하지 않은 경우 예외가 발생한다.", () => {
    const input = "";

    expect(() => DateValidate.doNotEnter(input)).toThrow(
      ERROR_MESSAGE.invalid_date
    );
  });
  test.each([["일"], ["two"], ["3일"]])(
    "날짜 입력값이 숫자가 아닌 경우 예외가 발생한다.",
    (input) =>
      expect(() => DateValidate.isNotNum(input)).toThrow(
        ERROR_MESSAGE.invalid_date
      )
  );
  test.each([["-1"], ["0"], ["32"]])(
    "날짜 입력값이 1 이상 31 이하의 숫자가 아닌 경우 예외가 발생한다.",
    (input) => {
      expect(() => DateValidate.invalidRange(input)).toThrow(
        ERROR_MESSAGE.invalid_date
      );
    }
  );
});

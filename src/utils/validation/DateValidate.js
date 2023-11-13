import { ERROR_MESSAGE } from "../../constants/message.js";

const DateValidate = {
  // 입력하지 않은 경우
  doNotEnter(date) {
    if (date === "") {
      throw new Error(ERROR_MESSAGE.invalid_date);
    }
  },
  // 숫자가 아닌 경우
  isNotNum(date) {
    if (isNaN(date)) {
      throw new Error(ERROR_MESSAGE.invalid_date);
    }
  },
  // 1 이상 31 이하의 숫자가 아닌 경우
  invalidRange(date) {
    if (date < 1 || date > 31) {
      throw new Error(ERROR_MESSAGE.invalid_date);
    }
  },
};

export default DateValidate;

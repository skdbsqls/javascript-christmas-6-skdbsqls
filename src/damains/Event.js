import {
  PRESENT_EVENT,
  CHRISTMAS_EVENT,
  WEEKDAY_EVENT,
  WEEKEND_EVENT,
  SPECIAL_EVENT,
  EVENT_BADGE,
} from "../constants/event.js";

class Event {
  #date;

  #orderDetail;

  #beforePrice;

  constructor(date, orderDetail, beforePrice) {
    this.#date = date;
    this.#orderDetail = orderDetail;
    this.#beforePrice = beforePrice;
  }

  // 날짜에 따른 이벤트
  getEventByDate() {
    const events = [];
    if (CHRISTMAS_EVENT.date.includes(this.#date)) {
      events.push(this.getDdayEvent());
    }
    if (WEEKDAY_EVENT.date.includes(this.#date) && this.getDessertCount()) {
      events.push(this.getWeekdayEvent());
    }
    if (WEEKEND_EVENT.date.includes(this.#date) && this.getMainCount()) {
      events.push(this.getWeenendEvent());
    }
    if (SPECIAL_EVENT.date.includes(this.#date)) {
      events.push(this.getSpecialEvent());
    }
    if (this.#beforePrice > PRESENT_EVENT.min_total) {
      events.push(this.getPresentEvent());
    }
    return events;
  }

  // 증정 이벤트
  getPresentEvent() {
    if (this.#beforePrice > PRESENT_EVENT.min_total) {
      return {
        name: PRESENT_EVENT.output,
        menuName: PRESENT_EVENT.discount_menu,
        discount: PRESENT_EVENT.discount_price,
      };
    }
  }

  // 크리스마스 디데이 할인
  getDdayEvent() {
    const discount = CHRISTMAS_EVENT.discount_price(this.#date);
    return { name: CHRISTMAS_EVENT.output, discount };
  }

  // 평일 할인
  getWeekdayEvent() {
    const dessertCount = this.getDessertCount();
    const discount = WEEKDAY_EVENT.discount_price * dessertCount;
    return { name: WEEKDAY_EVENT.output, discount };
  }

  // 주말 할인
  getWeenendEvent() {
    const mainCount = this.getMainCount();
    const discount = WEEKEND_EVENT.discount_price * mainCount;
    return { name: WEEKEND_EVENT.output, discount };
  }

  // 특별 할인
  getSpecialEvent() {
    const discount = SPECIAL_EVENT.discount_price;
    return { name: SPECIAL_EVENT.output, discount };
  }

  // 디저트 메뉴 개수 구하기
  getDessertCount() {
    return this.#orderDetail.reduce(
      (total, menu) =>
        total +
        (menu.course === WEEKDAY_EVENT.discount_course ? menu.count : 0),
      0
    );
  }

  // 메인 메뉴 개수 구하기
  getMainCount() {
    return this.#orderDetail.reduce(
      (total, menu) =>
        total +
        (menu.course === WEEKEND_EVENT.discount_course ? menu.count : 0),
      0
    );
  }

  // 혜택 내역
  getBenefitDetail() {
    if (this.#beforePrice > 10000) {
      return this.getEventByDate();
    }
  }

  // 총혜택 금액 구하기
  getBenefitTotal() {
    if (this.#beforePrice > 10000) {
      const benefitTotal = this.getBenefitDetail().reduce(
        (total, benefit) => total + benefit.discount,
        0
      );
      return benefitTotal;
    }
  }

  // 할인 후 예상 결제 금액
  getAfterPrice() {
    const benefitTotal = this.getBenefitTotal();
    if (this.#beforePrice > PRESENT_EVENT.min_total) {
      return this.#beforePrice - benefitTotal + PRESENT_EVENT.discount_price;
    }
    if (this.#beforePrice > 10000) {
      return this.#beforePrice - benefitTotal;
    }
    return this.#beforePrice;
  }

  // 이벤트 배지
  getEventBadge() {
    const benefitTotal = this.getBenefitTotal();

    const badge = EVENT_BADGE.find(
      (badge) => benefitTotal >= badge.total_benefit
    );

    return badge ? badge.name : null;
  }
}

export default Event;

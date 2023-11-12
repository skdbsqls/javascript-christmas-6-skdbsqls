import { COURSE } from "./menu.js";
import { PRESENT_MENU } from "./menu.js";

const EVENT_NAME = Object.freeze({
  christmas: "christmas",
  weekday: "weekday",
  weekend: "weekend",
  special: "special",
  present: "present",
});

const EVENT = Object.freeze([
  {
    name: EVENT_NAME.christmas,
    output: "크리스마스 디데이 할인",
    date: [Array.from({ length: 25 }, (_, i) => i + 1)],
    min_total: 10000,
    discount_price: (day) => 1000 + day * 100,
  },
  {
    name: EVENT_NAME.weekday,
    output: "평일 할인",
    date: [0, 1, 2, 3, 4],
    min_total: 10000,
    discount_course: COURSE.dessert,
    discount_price: 2023,
  },
  {
    name: EVENT_NAME.weekend,
    output: "주말 할인",
    date: [5, 6],
    min_total: 10000,
    discount_course: COURSE.main,
    discount_price: 2023,
  },
  {
    name: EVENT_NAME.special,
    output: "특별 할인",
    date: [3, 10, 17, 24, 25, 31],
    min_total: 10000,
    discount_price: 1000,
  },
  {
    name: EVENT_NAME.present,
    output: "증정 이벤트",
    min_total: 120000,
    discount_menu: PRESENT_MENU.name,
    discount_price: PRESENT_MENU.price,
  },
]);

const CHRISTMAS_EVENT = Object.freeze(
  EVENT.find((event) => event.name === EVENT_NAME.christmas)
);

const WEEKDAY_EVENT = Object.freeze(
  EVENT.find((event) => event.name === EVENT_NAME.weekday)
);

const WEEKEND_EVENT = Object.freeze(
  EVENT.find((event) => event.name === EVENT_NAME.weekend)
);

const SPECIAL_EVENT = Object.freeze(
  EVENT.find((event) => event.name === EVENT_NAME.special)
);

const PRESENT_EVENT = Object.freeze(
  EVENT.find((event) => event.name === EVENT_NAME.present)
);

const EVENT_BADGE = Object.freeze([
  { name: "별", total_benefit: 5000 },
  { name: "트리", total_benefit: 10000 },
  { name: "산타", total_benefit: 20000 },
]);

export {
  EVENT_NAME,
  EVENT,
  CHRISTMAS_EVENT,
  WEEKDAY_EVENT,
  WEEKEND_EVENT,
  SPECIAL_EVENT,
  PRESENT_EVENT,
  EVENT_BADGE,
};

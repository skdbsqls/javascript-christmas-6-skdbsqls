const COURSE = Object.freeze({
  appetizer: "appetizer",
  main: "main",
  dessert: "dessert",
  beverage: "beverage",
});

const MENU = Object.freeze([
  { course: COURSE.appetizer, name: "양송이수프", price: 6000 },
  { course: COURSE.appetizer, name: "타파스", price: 5500 },
  { course: COURSE.appetizer, name: "시저샐러드", price: 8000 },

  { course: COURSE.main, name: "티본스테이크", price: 55000 },
  { course: COURSE.main, name: "바비큐립", price: 54000 },
  { course: COURSE.main, name: "해산물파스타", price: 35000 },
  { course: COURSE.main, name: "크리스마스파스타", price: 25000 },

  { course: COURSE.dessert, name: "초코케이크", price: 15000 },
  { course: COURSE.dessert, name: "아이스크림", price: 5000 },

  { course: COURSE.beverage, name: "제로콜라", price: 3000 },
  { course: COURSE.beverage, name: "레드와인", price: 60000 },
  { course: COURSE.beverage, name: "샴페인", price: 25000 },
]);

const APPETIZER_MENU = Object.freeze(
  MENU.filter((menu) => menu.course === COURSE.appetizer)
);

const MAIN_MENU = Object.freeze(
  MENU.filter((menu) => menu.course === COURSE.main)
);

const DESSERT_MENU = Object.freeze(
  MENU.filter((menu) => menu.course === COURSE.dessert)
);

const BEVERAGE_MENU = Object.freeze(
  MENU.filter((menu) => menu.course === COURSE.beverage)
);

const PRESENT_MENU = Object.freeze({ name: "샴페인", price: 25000 });

const MIN_MENU = 1;
const MAX_MENU = 20;

export {
  COURSE,
  MENU,
  APPETIZER_MENU,
  MAIN_MENU,
  DESSERT_MENU,
  BEVERAGE_MENU,
  PRESENT_MENU,
  MIN_MENU,
  MAX_MENU,
};

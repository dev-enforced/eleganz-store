import { actionTypes } from "constants";
const initialFilterState = {
  sortPriceOrder: "",
  gender: "",
  categories: [],
  startRatings: "3",
  endRatings: "5",
  priceLimit: "3500",
};
const {
  FILTERS: {
    RATINGS_FILTER,
    PRICE_FILTER,
    SORT: { HIGH_TO_LOW, LOW_TO_HIGH },
    GENDER: { MEN, WOMEN },
    CATEGORIES: {
      TSHIRTS,
      REMOVE_TSHIRTS,
      SHIRTS,
      REMOVE_SHIRTS,
      DRESSES,
      REMOVE_DRESSES,
      JACKETS,
      REMOVE_JACKETS,
      PANTS,
      REMOVE_PANTS,
    },
    CLEAR_ALL_FILTERS,
  },
} = actionTypes;
const filterReducer = (givenState, action) => {
  switch (action.type) {
    case LOW_TO_HIGH:
      return { ...givenState, sortPriceOrder: "Low To High" };
    case HIGH_TO_LOW:
      return { ...givenState, sortPriceOrder: "High To Low" };
    case MEN:
      return { ...givenState, gender: "Men" };
    case WOMEN:
      return { ...givenState, gender: "Women" };
    case TSHIRTS:
      return {
        ...givenState,
        categories: !givenState.categories.includes("Tshirts")
          ? [...givenState.categories, "Tshirts"]
          : [...givenState.categories],
      };
    case REMOVE_TSHIRTS:
      return {
        ...givenState,
        categories: givenState.categories.filter(
          (everyCategory) => everyCategory !== "Tshirts"
        ),
      };
    case SHIRTS:
      return {
        ...givenState,
        categories: !givenState.categories.includes("Shirts")
          ? [...givenState.categories, "Shirts"]
          : [...givenState.categories],
      };
    case REMOVE_SHIRTS:
      return {
        ...givenState,
        categories: givenState.categories.filter(
          (everyCategory) => everyCategory !== "Shirts"
        ),
      };
    case DRESSES:
      return {
        ...givenState,
        categories: !givenState.categories.includes("Dresses")
          ? [...givenState.categories, "Dresses"]
          : [...givenState.categories],
      };
    case REMOVE_DRESSES:
      return {
        ...givenState,
        categories: givenState.categories.filter(
          (everyCategory) => everyCategory !== "Dresses"
        ),
      };
    case JACKETS:
      return {
        ...givenState,
        categories: !givenState.categories.includes("Jackets and Coats")
          ? [...givenState.categories, "Jackets and Coats"]
          : [...givenState.categories],
      };
    case REMOVE_JACKETS:
      return {
        ...givenState,
        categories: givenState.categories.filter(
          (everyCategory) => everyCategory !== "Jackets and Coats"
        ),
      };
    case PANTS:
      return {
        ...givenState,
        categories: !givenState.categories.includes("Casual Pants")
          ? [...givenState.categories, "Casual Pants"]
          : [...givenState.categories],
      };
    case REMOVE_PANTS:
      return {
        ...givenState,
        categories: givenState.categories.filter(
          (everyCategory) => everyCategory !== "Casual Pants"
        ),
      };
    case CLEAR_ALL_FILTERS:
      return { ...initialFilterState };
    case RATINGS_FILTER:
      return {
        ...givenState,
        startRatings: `${action.startValue}`,
        endRatings: `${action.endValue}`,
      };
    case PRICE_FILTER:
      return { ...givenState, priceLimit: `${action.payload}` };
    default:
      return { ...givenState };
  }
};

export { filterReducer, initialFilterState };

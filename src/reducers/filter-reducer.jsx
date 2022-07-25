const initialFilterState = {
  sortPriceOrder: "",
  gender: "",
  categories: [],
  startRatings: "3",
  endRatings: "5",
  priceLimit: "3500",
};

const filterReducer = (givenState, action) => {
  switch (action.type) {
    case "LOW-TO-HIGH":
      return { ...givenState, sortPriceOrder: "Low To High" };
    case "HIGH-TO-LOW":
      return { ...givenState, sortPriceOrder: "High To Low" };
    case "MEN":
      return { ...givenState, gender: "Men" };
    case "WOMEN":
      return { ...givenState, gender: "Women" };
    case "TSHIRTS":
      return {
        ...givenState,
        categories: !givenState.categories.includes("Tshirts")
          ? [...givenState.categories, "Tshirts"]
          : [...givenState.categories],
      };
    case "REMOVE-TSHIRTS":
      return {
        ...givenState,
        categories: givenState.categories.filter(
          (everyCategory) => everyCategory !== "Tshirts"
        ),
      };
    case "SHIRTS":
      return {
        ...givenState,
        categories: !givenState.categories.includes("Shirts")
          ? [...givenState.categories, "Shirts"]
          : [...givenState.categories],
      };
    case "REMOVE-SHIRTS":
      return {
        ...givenState,
        categories: givenState.categories.filter(
          (everyCategory) => everyCategory !== "Shirts"
        ),
      };
    case "DRESSES":
      return {
        ...givenState,
        categories: !givenState.categories.includes("Dresses")
          ? [...givenState.categories, "Dresses"]
          : [...givenState.categories],
      };
    case "REMOVE-DRESSES":
      return {
        ...givenState,
        categories: givenState.categories.filter(
          (everyCategory) => everyCategory !== "Dresses"
        ),
      };
    case "JACKETS":
      return {
        ...givenState,
        categories: !givenState.categories.includes("Jackets and Coats")
          ? [...givenState.categories, "Jackets and Coats"]
          : [...givenState.categories],
      };
    case "REMOVE-JACKETS":
      return {
        ...givenState,
        categories: givenState.categories.filter(
          (everyCategory) => everyCategory !== "Jackets and Coats"
        ),
      };
    case "PANTS":
      return {
        ...givenState,
        categories: !givenState.categories.includes("Casual Pants")
          ? [...givenState.categories, "Casual Pants"]
          : [...givenState.categories],
      };
    case "REMOVE-PANTS":
      return {
        ...givenState,
        categories: givenState.categories.filter(
          (everyCategory) => everyCategory !== "Casual Pants"
        ),
      };
    case "CLEAR-ALL":
      return { ...initialFilterState };
    case "RATING-CHOICE":
      return {
        ...givenState,
        startRatings: `${action.startValue}`,
        endRatings: `${action.endValue}`,
      };
    case "PRICE-SLIDE":
      return { ...givenState, priceLimit: `${action.payload}` };
    default:
      return { ...givenState };
  }
};

export { filterReducer, initialFilterState };

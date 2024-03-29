import React, { useState } from "react";
import { useProducts } from "context/ProductContext";
import "./FilterSidebar.css";
import { actionTypes } from "constants";

const FilterSidebar = () => {
  const [mobileFilterView, setMobileFilterView] = useState(false);
  const { filterState, filterDispatch } = useProducts();
  const {
    sortPriceOrder,
    gender,
    categories,
    startRatings,
    endRatings,
    priceLimit,
  } = filterState;
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
  return (
    <aside className="filter-sidebar-container p-10">
      <div className="filter-sidebar-content gentle-flex-gap flex-column">
        <div className="side-nav-header gentle-flex flex-space-between mb-3">
          <h3 className="txt-sm">FILTERS</h3>
          <h3
            className="txt-sm mobile-view-filter-button"
            onClick={() => setMobileFilterView((currentValue) => !currentValue)}
          >
            SHOW
          </h3>
          <h3
            className="txt-xs clear-filter"
            onClick={() => {
              filterDispatch({ type: CLEAR_ALL_FILTERS });
            }}
          >
            CLEAR ALL
          </h3>
        </div>
        <div
          className={`side-nav ${
            mobileFilterView ? "active" : ""
          } flex-column pb-3`}
        >
          <h3 className="txt-sm mb-3">SORT BY</h3>
          <div className="gentle-flex-gap flex-align-center mx-6">
            <input
              type="radio"
              id="low-to-high"
              name="sort-price"
              checked={sortPriceOrder === "Low To High"}
              onChange={() => {
                filterDispatch({ type: LOW_TO_HIGH });
              }}
            />
            <label htmlFor="low-to-high">LOW TO HIGH</label>
          </div>
          <div className="gentle-flex-gap flex-align-center mx-6">
            <input
              type="radio"
              id="high-to-low"
              name="sort-price"
              checked={sortPriceOrder === "High To Low"}
              onChange={() => {
                filterDispatch({ type: HIGH_TO_LOW });
              }}
            />
            <label htmlFor="high-to-low">HIGH TO LOW</label>
          </div>
        </div>
        <div
          className={`side-nav ${
            mobileFilterView ? "active" : ""
          } flex-column py-3`}
        >
          <h3 className="txt-sm mb-3">CATEGORIES</h3>
          <div className="gentle-flex-gap flex-align-center mx-6">
            <input
              type="checkbox"
              id="Tshirts"
              name="sort-category"
              checked={categories.includes("Tshirts")}
              onChange={(e) =>
                e.target.checked
                  ? filterDispatch({ type: TSHIRTS })
                  : filterDispatch({ type: REMOVE_TSHIRTS })
              }
            />
            <label htmlFor="Tshirts">Tshirts</label>
          </div>
          <div className="gentle-flex-gap flex-align-center mx-6">
            <input
              type="checkbox"
              id="Shirts"
              name="sort-category"
              checked={categories.includes("Shirts")}
              onChange={(e) =>
                e.target.checked
                  ? filterDispatch({ type: SHIRTS })
                  : filterDispatch({ type: REMOVE_SHIRTS })
              }
            />
            <label htmlFor="Shirts">Shirts</label>
          </div>
          <div className="gentle-flex-gap flex-align-center mx-6">
            <input
              type="checkbox"
              id="Jackets"
              name="sort-category"
              checked={categories.includes("Jackets and Coats")}
              onChange={(e) =>
                e.target.checked
                  ? filterDispatch({ type: JACKETS })
                  : filterDispatch({ type: REMOVE_JACKETS })
              }
            />
            <label htmlFor="Jackets">Jackets and Coats</label>
          </div>
          <div className="gentle-flex-gap flex-align-center mx-6">
            <input
              type="checkbox"
              id="Dresses"
              name="sort-category"
              checked={categories.includes("Dresses")}
              onChange={(e) =>
                e.target.checked
                  ? filterDispatch({ type: DRESSES })
                  : filterDispatch({ type: REMOVE_DRESSES })
              }
            />
            <label htmlFor="Dresses">Dresses</label>
          </div>
          <div className="gentle-flex-gap flex-align-center mx-6">
            <input
              type="checkbox"
              id="Pants"
              name="sort-category"
              checked={categories.includes("Casual Pants")}
              onChange={(e) =>
                e.target.checked
                  ? filterDispatch({ type: PANTS })
                  : filterDispatch({ type: REMOVE_PANTS })
              }
            />
            <label htmlFor="Pants">Casual Pants</label>
          </div>
        </div>
        <div
          className={`side-nav ${
            mobileFilterView ? "active" : ""
          } flex-column pb-3`}
        >
          <h3 className="txt-sm mb-3">WORN BY</h3>
          <div className="gentle-flex-gap flex-align-center mx-6">
            <input
              type="radio"
              id="men-garments"
              name="worn-by"
              checked={gender === "Men"}
              onChange={() => {
                filterDispatch({ type: MEN });
              }}
            />
            <label htmlFor="men-garments">Men</label>
          </div>
          <div className="gentle-flex-gap flex-align-center mx-6">
            <input
              type="radio"
              id="women-garments"
              name="worn-by"
              checked={gender === "Women"}
              onChange={() => {
                filterDispatch({ type: WOMEN });
              }}
            />
            <label htmlFor="women-garments">Women</label>
          </div>
        </div>
        <div
          className={`side-nav ${
            mobileFilterView ? "active" : ""
          } flex-column pb-3`}
        >
          <h3 className="txt-sm mb-3">RATINGS</h3>
          <div className="gentle-flex-gap flex-align-center mx-6">
            <input
              type="radio"
              id="three-to-four"
              name="rated-choice"
              checked={startRatings === "3" && endRatings === "4"}
              onChange={() => {
                filterDispatch({
                  type: RATINGS_FILTER,
                  startValue: "3",
                  endValue: "4",
                });
              }}
            />
            <label htmlFor="three-to-four">3 stars - 4 stars</label>
          </div>
          <div className="gentle-flex-gap flex-align-center mx-6">
            <input
              type="radio"
              id="four-to-five"
              name="rated-choice"
              checked={startRatings === "4" && endRatings === "5"}
              onChange={() => {
                filterDispatch({
                  type: RATINGS_FILTER,
                  startValue: "4",
                  endValue: "5",
                });
              }}
            />
            <label htmlFor="four-to-five">4 stars - 5 stars</label>
          </div>
        </div>
        <div
          className={`side-nav ${
            mobileFilterView ? "active" : ""
          } flex-column pb-3`}
        >
          <h3 className="txt-sm mb-3">PRICE</h3>
          <input
            className="price-point-viewer"
            value={priceLimit}
            onChange={(e) =>
              filterDispatch({ type: PRICE_FILTER, payload: e.target.value })
            }
            type="range"
            min="500"
            step="1000"
            max="3500"
            list="price-points"
          />
          <datalist id="price-points">
            <option value="500" label="500"></option>
            <option value="1500" label="1500"></option>
            <option value="2500" label="2500"></option>
            <option value="3500" label="3500"></option>
          </datalist>
          <div className="flex-row flex-space-between-align-center">
            <span>500</span>
            <span>1500</span>
            <span>2500</span>
            <span>3500</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
export { FilterSidebar };

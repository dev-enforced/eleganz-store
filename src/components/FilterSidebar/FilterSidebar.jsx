import React, { useState } from "react";
import { useProducts } from "context/ProductContext";
import "./FilterSidebar.css";

const FilterSidebar = () => {
    const [mobileFilterView, setMobileFilterView] = useState(false);
    const { filterState, filterDispatch } = useProducts();
    const { sortPriceOrder, gender, categories, startRatings, endRatings } = filterState
    return (
        <aside className="filter-sidebar-container p-10">
            <div className="filter-sidebar-content gentle-flex-gap flex-column">
                <div className="side-nav-header gentle-flex flex-space-between mb-3">
                    <h3 className="txt-sm">
                        FILTERS
                    </h3>
                    <h3 className="txt-sm mobile-view-filter-button" onClick={() => setMobileFilterView(currentValue => !currentValue)}>
                        SHOW
                    </h3>
                    <h3 className="txt-xs clear-filter" onClick={() => { filterDispatch({ type: "CLEAR-ALL" }) }}>
                        CLEAR ALL
                    </h3>
                </div>
                <div className={`side-nav ${mobileFilterView ? "active" : ""} flex-column pb-3`}>
                    <h3 className="txt-sm mb-3">SORT BY</h3>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="radio" id="low-to-high" name="sort-price" checked={sortPriceOrder === "Low To High"} onChange={() => { filterDispatch({ type: "LOW-TO-HIGH" }) }} />
                        <label htmlFor="low-to-high">LOW TO HIGH</label>
                    </div>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="radio" id="high-to-low" name="sort-price" checked={sortPriceOrder === "High To Low"} onChange={() => { filterDispatch({ type: "HIGH-TO-LOW" }) }} />
                        <label htmlFor="high-to-low">HIGH TO LOW</label>
                    </div>
                </div>
                <div className={`side-nav ${mobileFilterView ? "active" : ""} flex-column py-3`}>
                    <h3 className="txt-sm mb-3">CATEGORIES</h3>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="checkbox" id="Tshirts" name="sort-category" checked={categories.includes("Tshirts")} onChange={(e) => e.target.checked ? filterDispatch({ type: "TSHIRTS" }) : filterDispatch({ type: "REMOVE-TSHIRTS" })} />
                        <label htmlFor="Tshirts">Tshirts</label>
                    </div>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="checkbox" id="Shirts" name="sort-category" checked={categories.includes("Shirts")} onChange={(e) => e.target.checked ? filterDispatch({ type: "SHIRTS" }) : filterDispatch({ type: "REMOVE-SHIRTS" })} />
                        <label htmlFor="Shirts">Shirts</label>
                    </div>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="checkbox" id="Jackets" name="sort-category" checked={categories.includes("Jackets and Coats")} onChange={(e) => e.target.checked ? filterDispatch({ type: "JACKETS" }) : filterDispatch({ type: "REMOVE-JACKETS" })} />
                        <label htmlFor="Jackets">Jackets and Coats</label>
                    </div>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="checkbox" id="Dresses" name="sort-category" checked={categories.includes("Dresses")} onChange={(e) => e.target.checked ? filterDispatch({ type: "DRESSES" }) : filterDispatch({ type: "REMOVE-DRESSES" })} />
                        <label htmlFor="Dresses">Dresses</label>
                    </div>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="checkbox" id="Pants" name="sort-category" checked={categories.includes("Casual Pants")} onChange={(e) => e.target.checked ? filterDispatch({ type: "PANTS" }) : filterDispatch({ type: "REMOVE-PANTS" })} />
                        <label htmlFor="Pants">Casual Pants</label>
                    </div>
                </div>
                <div className={`side-nav ${mobileFilterView ? "active" : ""} flex-column pb-3`}>
                    <h3 className="txt-sm mb-3">WORN BY</h3>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="radio" id="men-garments" name="worn-by" checked={gender === "Men"} onChange={() => { filterDispatch({ type: "MEN" }) }} />
                        <label htmlFor="men-garments">Men</label>
                    </div>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="radio" id="women-garments" name="worn-by" checked={gender === "Women"} onChange={() => { filterDispatch({ type: "WOMEN" }) }} />
                        <label htmlFor="women-garments">Women</label>
                    </div>
                </div>
                <div className={`side-nav ${mobileFilterView ? "active" : ""} flex-column pb-3`}>
                    <h3 className="txt-sm mb-3">RATINGS</h3>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="radio" id="three-to-four" name="rated-choice" checked={startRatings === "3" && endRatings === "4"} onChange={() => { filterDispatch({ type: "RATING-CHOICE", startValue: "3", endValue: "4" }) }} />
                        <label htmlFor="three-to-four">3 stars - 4 stars</label>
                    </div>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="radio" id="four-to-five" name="rated-choice" checked={startRatings === "4" && endRatings === "5"} onChange={() => { filterDispatch({ type: "RATING-CHOICE", startValue: "4", endValue: "5" }) }} />
                        <label htmlFor="four-to-five">4 stars - 5 stars</label>
                    </div>
                </div>
            </div>
        </aside>
    )
}
export { FilterSidebar }
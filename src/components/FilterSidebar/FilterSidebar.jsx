import React,{useState} from "react";
import "./FilterSidebar.css";

const FilterSidebar = () => {
    const [mobileFilterView,setMobileFilterView]=useState(false);
    return (
        <aside className="filter-sidebar-container p-10">
            <div className="filter-sidebar-content gentle-flex-gap flex-column">
                <div className="side-nav-header gentle-flex flex-space-between mb-3">
                    <h3 className="txt-sm">
                        FILTERS
                    </h3>
                    <h3 className="txt-sm mobile-view-filter-button" onClick={()=>setMobileFilterView(currentValue=>!currentValue)}>
                        SHOW
                    </h3>
                    <h3 className="txt-xs clear-filter">
                        CLEAR ALL
                    </h3>
                </div>
                <div className={`side-nav ${mobileFilterView?"active":""} flex-column pb-3`}>
                    <h3 className="txt-sm mb-3">SORT BY</h3>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="radio" id="low-to-high" name="sort-price" />
                        <label htmlFor="low-to-high">LOW TO HIGH</label>
                    </div>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="radio" id="high-to-low" name="sort-price" />
                        <label htmlFor="high-to-low">HIGH TO LOW</label>
                    </div>
                </div>
                <div className={`side-nav ${mobileFilterView ? "active" : ""} flex-column py-3`}>
                    <h3 className="txt-sm mb-3">CATEGORIES</h3>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="checkbox" id="Tshirts" name="sort-category" />
                        <label htmlFor="Tshirts">Tshirts</label>
                    </div>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="checkbox" id="Shirts" name="sort-category" />
                        <label htmlFor="Shirts">Shirts</label>
                    </div>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="checkbox" id="Jackets" name="sort-category" />
                        <label htmlFor="Jackets">Jackets and Coats</label>
                    </div>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="checkbox" id="Dresses" name="sort-category" />
                        <label htmlFor="Dresses">Dresses</label>
                    </div>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="checkbox" id="Pants" name="sort-category" />
                        <label htmlFor="Pants">Casual Pants</label>
                    </div>
                </div>
                <div className={`side-nav ${mobileFilterView ? "active" : ""} flex-column pb-3`}>
                    <h3 className="txt-sm mb-3">WORN BY</h3>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="radio" id="men-garments" name="worn-by" />
                        <label htmlFor="men-garments">Men</label>
                    </div>
                    <div className="gentle-flex-gap flex-align-center mx-6">
                        <input type="radio" id="women-garments" name="worn-by" />
                        <label htmlFor="women-garments">Women</label>
                    </div>
                </div>
            </div>
        </aside>
    )
}
export { FilterSidebar }
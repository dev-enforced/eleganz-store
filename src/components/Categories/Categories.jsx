import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "context";
import "./Categories.css";
const Categories = () => {
  const { categoriesAvailable } = useProducts();
  return (
    <>
      <div className="title-container">
        <h2 className="title-text py-5">CATEGORIES</h2>
      </div>
      <section className="category-container gentle-flex flex-center flex-wrap">
        <div className="category-wrapper gentle-flex flex-wrap">
          {categoriesAvailable.map((everyCategory) => {
            const { _id, categoryName, tagLine, imgUrl, filterDispatchType } =
              everyCategory;
            return (
              <Link
                to={`/products?categorySelected=${filterDispatchType}`}
                key={_id}
                className="link-none category-card m-4"
              >
                <div className="category-header">
                  <img src={imgUrl} alt={categoryName} />
                </div>
                <div className="category-content flex-column flex-center p-8">
                  <h4>{categoryName}</h4>
                  <p>{tagLine}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export { Categories };

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Categories.css";
const Categories = () => {
    const [categoriesAvailable, setCategoriesAvailable] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadCategories = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get("/api/categories");
            setCategoriesAvailable(data.categories);
            setLoading(false)
        } catch (error) {
            console.log("Error:", error)
        }
    }
    useEffect(() => {
        loadCategories();
    }, [])
    return (
        <>
            <div className="title-container">
                <h2 className="title-text py-5">CATEGORIES</h2>
            </div>
            <section className="category-container gentle-flex flex-center flex-wrap">
                {loading ? (
                    <>
                        <img src="https://c.tenor.com/SLFiTi_nrQ4AAAAC/loader.gif" alt="" />
                    </>

                ) :
                    (<div className="category-wrapper gentle-flex flex-wrap">
                        {categoriesAvailable.map((everyCategory) => {
                            const { _id, categoryName, tagLine, imgUrl } = everyCategory;
                            return (
                                <div key={_id} className="category-card m-4">
                                    <div className="category-header">
                                        <img src={imgUrl} alt={categoryName} />
                                    </div>
                                    <div className="category-content flex-column flex-center p-8">
                                        <h4>{categoryName}</h4>
                                        <p>{tagLine}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>)}
            </section>
        </>
    )
}

export { Categories }
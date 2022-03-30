const applySortingChoice = (givenState, providedProducts) => {
    if (givenState.sortPriceOrder === "Low To High") {
        return [...providedProducts].sort((a, b) => Number(a.discountedPrice) - Number(b.discountedPrice))
    } else if (givenState.sortPriceOrder === "High To Low") {
        return [...providedProducts].sort((a, b) => Number(b.discountedPrice) - Number(a.discountedPrice))
    } else {
        return [...providedProducts]
    }
}

const applyCategoryChoice = (givenState, providedProducts) => {
    const { categories } = givenState;
    return categories.length > 0 ? [...providedProducts].filter((everyProduct) => categories.includes(everyProduct.categoryName)) : [...providedProducts]
}

const applyGenderChoice = (givenState, providedProducts) => {
    if (givenState.gender === "Men") {
        return [...providedProducts].filter((everyItem) => everyItem.wornBy === "Men")
    } else if (givenState.gender === "Women") {
        return [...providedProducts].filter((everyItem) => everyItem.wornBy === "Women")
    } else {
        return [...providedProducts]
    }
}

const applyRatingsChoice = (givenState, providedProducts) => {
    const { startRatings, endRatings } = givenState;
    return [...providedProducts].filter((everyProduct) => Number(everyProduct.ratings) >= Number(startRatings) && Number(everyProduct.ratings) <= Number(endRatings))
}

const applyPriceChoice = (givenState, providedProducts) => {
    const { priceLimit } = givenState;
    return [...providedProducts].filter((everyProduct) => Number(everyProduct.discountedPrice) < Number(priceLimit));
}

const cumulativeFilters = (...participatingFilters) => {
    return (givenState, providedProducts) => {
        return participatingFilters.reduce((previousFilterResult, currentFilter) => currentFilter(givenState, previousFilterResult), providedProducts)
    }
}

export { cumulativeFilters, applyCategoryChoice, applyPriceChoice, applyRatingsChoice, applyGenderChoice, applySortingChoice };
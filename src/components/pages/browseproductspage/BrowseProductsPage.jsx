import React from "react"
import { useSelector } from "react-redux"
import styles from "./BrowseProductsPage.module.scss"
import ProductInfoCard from "./ProductInfoCard"
import ProductCategories from "./ProductCategories"
import SortByDropdownMenu from "./SortByDropdownMeny"


export default function BrowseProductsPage() {
    const products = useSelector((state) => state.products)
    const filterSelections = useSelector((state) => state.productsortandfilterselections.currentSelections)

    const ProductList = () => {
        const filteredProductsByCategory = filterSelections.mainCategory === "All" ? products.data.all : products.data.all.filter(product => product.category === filterSelections.mainCategory)
        const filteredProductsBySubCategory = filterSelections.subCategory === null ? filteredProductsByCategory : filteredProductsByCategory.filter(product => product.subCategory === filterSelections.subCategory)

        const productInfoCards = filteredProductsBySubCategory.map(product =>
            <ProductInfoCard key={product.id} product={product} />
        )
        const fakeProductInfoCardsToFillInTheRemainingXElementsOnTheLastRowWithToKeepThingsAligned = [...Array(10).keys()].map(fillerInfoCard =>
            <div className={styles.FakeProductInfoCard} key={fillerInfoCard} />
        )
        return (
            <div className={styles.ProductList}>
                {productInfoCards}
                {fakeProductInfoCardsToFillInTheRemainingXElementsOnTheLastRowWithToKeepThingsAligned}
            </div>
        )
    }


    return (
        <div className={styles.BrowseProductsPage}>
            <ProductCategories />
            <div className={styles.ProductSortMenuComponent}><SortByDropdownMenu /></div>
            <ProductList />
        </div>
    )


}

import React from "react"
import styles from "./ProductList.module.scss"
import { useSelector } from "react-redux"
import ProductInfoCard from "./ProductInfoCard"


export default function ProductList() {
    const products = useSelector((state) => state.products)
    const filterSelections = useSelector((state) => state.productsortandfilterselections.currentSelections)


    const filteredProductsByCategory = filterSelections.mainCategory === "All" ? products.data.all : products.data.all.filter(product => product.mainCategory === filterSelections.mainCategory)
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
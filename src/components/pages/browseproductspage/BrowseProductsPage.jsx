import React from "react"
import styles from "./BrowseProductsPage.module.scss"
import ProductInfoCard from "./ProductInfoCard"
import ProductCategories from "./ProductCategories"
import ProductFilter from "./ProductFilter"


export default function BrowseProductsPage() {
    return (
        <div className={styles.BrowseProductsPage}>
            <ProductCategories />
            <ProductFilter />
            <div className={styles.ProductList}>
                <ProductInfoCard />
                <ProductInfoCard />
                <ProductInfoCard />
                <ProductInfoCard />
                <ProductInfoCard />
                <ProductInfoCard />
                <ProductInfoCard />
                <ProductInfoCard />
                <ProductInfoCard />
                <ProductInfoCard />
                <ProductInfoCard />
                <ProductInfoCard />
            </div>
        </div>
    )
}

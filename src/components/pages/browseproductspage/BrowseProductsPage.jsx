import React from "react"
import styles from "./BrowseProductsPage.module.scss"
import ProductCategories from "./ProductCategories"
import SortByDropdownMenu from "./SortByDropdownMeny"
import ProductList from "./ProductList"


export default function BrowseProductsPage() {

    return (
        <div className={styles.BrowseProductsPage}>
            <ProductCategories />
            <div className={styles.SortMenuAndProductList}>
                <div className={styles.ProductSortMenuComponent}><SortByDropdownMenu /></div>
                <ProductList />
            </div>
        </div>
    )

}

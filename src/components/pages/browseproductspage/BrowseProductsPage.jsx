import React from "react"
import { useSelector } from "react-redux"
import styles from "./BrowseProductsPage.module.scss"
import ProductInfoCard from "./ProductInfoCard"
import ProductCategories from "./ProductCategories"
import ProductFilter from "./ProductFilter"


export default function BrowseProductsPage() {
    const products = useSelector((state) => state.products)

    const ProductList = () => {
        const productInfoCards = products.data.map(product =>
            <ProductInfoCard key={product.id} product={product} />
        )

        return (
            <div className={styles.ProductList}>
                {productInfoCards}
            </div>
        )
    }

    // const MainCategories = () => {
    //     const mainCategories = productCategories.data.map(productCategory =>
    //         <li>{productCategory.mainCategory}</li>
    //     )
    //     return (
    //         <div className={styles.MainCategories}>
    //             <ul>{mainCategories}</ul>
    //         </div>
    //     )
    // }

    const SortByDropdownMenu = () => {
        return (
            <div className={styles.SortByDropdownMeny}>
                dropdown
            </div>
        )
    }

    return (
        <div className={styles.BrowseProductsPage}>
            <ProductCategories />
            <div className={styles.PageBody}>
                <div className={styles.ProductFilterComponent}><ProductFilter /></div>
                <SortByDropdownMenu />
                <ProductList />
            </div>



            {/* <ProductFilter />
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
            </div> */}
        </div>
    )

    function asd() {
        return (<div></div>)
    }
}

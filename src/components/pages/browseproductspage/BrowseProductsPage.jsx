import React from "react"
import { useSelector } from "react-redux"
import styles from "./BrowseProductsPage.module.scss"
import ProductInfoCard from "./ProductInfoCard"
import ProductCategories from "./ProductCategories"


export default function BrowseProductsPage() {
    const products = useSelector((state) => state.products)




    const ProductList = () => {
        const productInfoCards = products.data.map(product =>
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

    const ProductSortMenu = () => { //mount and unmount to detect outside click. create reusable component and use this in search and login too
        return (
            <select className={styles.SelectSortBy}>
                <option>Sort by popularity</option>
                <option>Sort by price (lowest)</option>
                <option>Sort by price (highest)</option>
                <option>Sort by alphabetical order</option>
            </select>

            // <div className={styles.ProductSortMenu}>
            //     Sort by popularity
            // </div>
        )
    }

    return (
        <div className={styles.BrowseProductsPage}>
            <ProductCategories />
            {/* <div className={styles.ProductFilterComponent}><ProductFilter /></div> */}
            <div className={styles.ProductSortMenuComponent}><ProductSortMenu /></div>
            <ProductList />



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


}

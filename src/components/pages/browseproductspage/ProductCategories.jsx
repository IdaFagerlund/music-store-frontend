import React, { useEffect, useState } from "react"
import styles from "./ProductCategories.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { fetchProductCategories, updateSortAndFilterSelections } from "../../../redux/actions/products"
import productcategories from "../../../redux/reducers/productcategories"


export default function ProductCategories() {
    const productCategories = useSelector((state) => state.productCategories)
    const filterSelections = useSelector((state) => state.productsortandfilterselections.currentSelections)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchProductCategories())
    }, [])

    const MainCategories = () => {
        const mainCategories = productCategories.data.map(productCategory =>
            <li key={productCategory.mainCategory} className={productCategory.mainCategory === filterSelections.mainCategory ? styles.SelectedCategory : undefined}
                onClick={() => dispatch(updateSortAndFilterSelections({ mainCategory: productCategory.mainCategory, subCategory: null }))}>
                {productCategory.mainCategory}
            </li>
        )
        return (
            <div className={styles.MainCategories}>
                <ul>
                    {mainCategories}
                </ul>
            </div>
        )
    }

    const SubCategories = () => {
        const currentCategory = productCategories.data.find(productCategory => productCategory.mainCategory === filterSelections.mainCategory)
        const currentSubCategories = currentCategory ? currentCategory.subCategories : []

        const subCategories = currentSubCategories.map(subCategory =>
            <li key={subCategory} className={subCategory === filterSelections.subCategory && styles.SelectedSubCategory}
                onClick={() => dispatch(updateSortAndFilterSelections({ subCategory: subCategory }))}>
                {subCategory}
            </li>
        )
        return (
            <div className={styles.SubCategories}>
                {subCategories.length !== 0 ? <ul> {subCategories} </ul> : <ul className={styles.EmptySubCategories}><li>.</li></ul>}
            </div>
        )
    }

    return (
        <div className={styles.ProductCategories}>
            <MainCategories />
            <SubCategories />
        </div>
    )
}
import React from "react"
import styles from "./ProductCategories.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { updateSortAndFilterSelections } from "../../../redux/actions/products"


export default function ProductCategories() {
    const filterSelections = useSelector((state) => state.productsortandfilterselections.currentSelections)
    const dispatch = useDispatch()
    const productCategories = [
        {
            "mainCategory": "All",
            "subCategories": []
        },
        {
            "mainCategory": "Guitars",
            "subCategories": ["Electric", "Acoustic"]
        },
        {
            "mainCategory": "Pianos",
            "subCategories": ["Grand pianos", "Keyboards"]
        },
        {
            "mainCategory": "Drums",
            "subCategories": []
        },
        {
            "mainCategory": "Other",
            "subCategories": []
        }
    ]


    const MainCategories = () => {
        const mainCategories = productCategories.map(productCategory =>
            <li key={productCategory.mainCategory} className={`${productCategory.mainCategory === filterSelections.mainCategory ? styles.SelectedCategory : undefined} ${styles.MainCategory}`}
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
        const currentCategory = productCategories.find(productCategory => productCategory.mainCategory === filterSelections.mainCategory)
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
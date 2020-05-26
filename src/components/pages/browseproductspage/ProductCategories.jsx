import React, { useEffect } from "react"
import styles from "./ProductCategories.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { fetchProductCategories } from "../../../redux/actions/productpage/productcategories"


export default function ProductCategories() {
    const productCategories = useSelector((state) => state.productCategories)
    const selectedMainCategory = productCategories.data[0]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductCategories())
    }, [])

    const MainCategories = () => {
        const mainCategories = productCategories.data.map(productCategory =>
            <li key={productCategory.mainCategory}>{productCategory.mainCategory}</li>
        )
        return (
            <div className={styles.MainCategories}>
                <ul>
                    <li>All</li>
                    {mainCategories}
                </ul>
            </div>
        )
    }

    const SubCategories = () => {
        const subCategories = selectedMainCategory && selectedMainCategory.subCategories.map(subCategory =>
            <li key={subCategory}>{subCategory}</li>
        )
        return (
            <div className={styles.SubCategories}>
                <ul> {subCategories} </ul>
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
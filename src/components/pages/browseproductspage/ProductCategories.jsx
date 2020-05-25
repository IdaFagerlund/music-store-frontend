import React from "react"
import styles from "./ProductCategories.module.scss"



export default function ProductCategories() {
    return (
        <div className={styles.ProductCategories}>
            <div className={styles.MainCategory}>
                main header
                </div>
            <div className={styles.SubCategory}>
                subheader
            </div>
        </div>
    )
}
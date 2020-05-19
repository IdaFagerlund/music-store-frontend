import React from "react"
import styles from "./ProductSearch.module.scss"


export default function ProductSearch() {
    return (
        <div className={styles.ProductSearch}>
            <input type="text" placeholder="Search" />
        </div>
    )
}
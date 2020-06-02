import React, { useEffect } from "react"
import styles from "./ProductDetailsPage.module.scss"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"


export default function ProductDetailsPage() {
    const location = useLocation()
    const product = useSelector((state) => state.products.data.all.find(product => product.id === getProductIdFromURL()))

    function getProductIdFromURL() {
        const urlValues = location.pathname.split("/")
        const productId = urlValues[urlValues.length - 1]
        return parseInt(productId)
    }

    if (!product) {
        return (
            <div>not found</div>
        )
    }

    return (
        <div className={styles.ProductDetailsPage}>
            <p>page for found product:</p>
            {product.name}
            {product.id}
            <br />
            <p>When this page is implemented you'll see the details of the product here as well as the product reviews left by users. You can also leave a review yourself.</p>
        </div>
    )
}
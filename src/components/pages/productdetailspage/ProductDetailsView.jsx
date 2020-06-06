import React from "react"
import styles from "./ProductDetailsView.module.scss"
import { Stars, getFormattedPrice, getImageBasedOnCategory } from "./ProductDetailsPage"
import { ShoppingCartIcon } from "../../utils/Icons"


export default function ProductDetailsView({ product }) {


    return (
        <div className={styles.ProductDetailsView}>
            <img src={getImageBasedOnCategory(product.mainCategory, product.subCategory)} width={448} height={448} alt="image" />
            <div className={styles.Info}>
                <h1 className={styles.ProductName}>{product.name}</h1>
                <p>{getFormattedPrice(product.price)}</p>
                <Stars productReviews={product.reviews} displayNumberNextToStars={true} />
                <p>{product.description}</p>
                <div className={styles.StockAndAddToCartContainer}>
                    <p><b>{`In stock: ${product.stock}`}</b></p>
                    <div className={styles.AddToCartButton}><p>Add to cart</p><ShoppingCartIcon /></div>
                </div>
            </div>
        </div>
    )
}
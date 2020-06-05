import React from "react"
import styles from "./ProductInfoCard.module.scss"
import { ArrowRightIcon, ShoppingCartIcon } from "../../utils/Icons"
import { useHistory } from "react-router-dom"
import { Stars, getFormattedPrice, getImageBasedOnCategory } from "../productdetailspage/ProductDetailsPage"


export default function ProductInfoCard({ product }) {
    const history = useHistory()

    const adaptDescriptionLength = (description) => {
        const maxCharacters = 112
        return description.length > maxCharacters ? `${description.substr(0, maxCharacters)}...` : description
    }

    return (
        <div className={styles.ProductInfoCard}>
            <img src={getImageBasedOnCategory(product.mainCategory, product.subCategory)} width={256} height={256} alt="image" />
            <h1>{product.name}</h1>
            <p>{getFormattedPrice(product.price)}</p>
            <Stars product={product} />
            <p>{adaptDescriptionLength(product.description)}</p>
            <div className={styles.BottomRow}>
                <div className={styles.AddToShoppingCartButton}><ShoppingCartIcon /></div>
                <div className={styles.ViewProductDetailsButton} onClick={() => history.push(`/product/${product.id}`)}>
                    <p>Details</p><ArrowRightIcon size={15} />
                </div>
            </div>
        </div>
    )
}

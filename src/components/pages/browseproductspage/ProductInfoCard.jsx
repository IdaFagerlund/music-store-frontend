import React from "react"
import styles from "./ProductInfoCard.module.scss"
import ElectricGuitarImage from "../../../assets/electric_guitar.png"
import { ArrowRightIcon, ShoppingCartIcon } from "../../utils/Icons"


export default function ProductInfoCard({ product }) {

    const adaptDescriptionLength = (description) => {
        const maxCharacters = 153
        return description.length > maxCharacters ? `${description.substr(0, maxCharacters)}...` : description

    }

    return (
        <div className={styles.ProductInfoCard}>
            <img src={ElectricGuitarImage} width={256} height={256} alt="image" />
            <h1>{product.name}</h1>
            <h1>* * * * *</h1>
            <p>{adaptDescriptionLength(product.description)}</p>
            <div className={styles.BottomRow}>
                <div className={styles.AddToShoppingCartButton}><ShoppingCartIcon /></div>
                <div className={styles.ViewProductDetailsButton}><p>Details</p><ArrowRightIcon size={15} /></div>
            </div>
        </div>
    )
}

import React from "react"
import styles from "./ProductInfoCard.module.scss"
import ElectricGuitarImage from "../../../assets/electric_guitar.png"



export default function ProductInfoCard({ product }) {
    return (
        <div className={styles.ProductInfoCard}>
            <img src={ElectricGuitarImage} width={256} height={256} alt="image" />
            <h1>{product.name}</h1>
            <h1>* * * * *</h1>
            <p>{product.description}</p>
            <div className={styles.ViewProductDetailsButton}>Details ></div>
        </div>
    )
}

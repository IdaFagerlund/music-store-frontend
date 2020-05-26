import React from "react"
import styles from "./ProductInfoCard.module.scss"
import ElectricGuitarImage from "../../../assets/electric_guitar.png"
import { ArrowRightIcon, ShoppingCartIcon, StarIcon } from "../../utils/Icons"
import { useHistory } from "react-router-dom"


export default function ProductInfoCard({ product }) {
    const history = useHistory()

    const adaptDescriptionLength = (description) => {
        const maxCharacters = 112
        return description.length > maxCharacters ? `${description.substr(0, maxCharacters)}...` : description

    }

    const Stars = () => {
        let stars = []
        for (let i = 1; i <= 5; i++) {
            stars.push(<StarIcon color={i <= product.averageReviewStars ? "#FFFA3F" : "#E0E0E0"} />)
        }
        return <div className={styles.Stars}>{stars}</div>
    }

    return (
        <div className={styles.ProductInfoCard}>
            <img src={ElectricGuitarImage} width={256} height={256} alt="image" />
            <h1>{product.name}</h1>
            <p>{`${product.price} SEK`}</p>
            <div className={styles.Rating}><Stars /><p>{`(${product.reviews.length})`}</p></div>
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

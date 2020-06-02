import React from "react"
import styles from "./ProductInfoCard.module.scss"
import { ArrowRightIcon, ShoppingCartIcon, StarIcon } from "../../utils/Icons"
import { getImageBasedOnCategory } from "../../utils/product-category-image-handler"
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
            stars.push(<StarIcon key={i} color={i <= product.averageReviewStars ? "#FFFA3F" : "#E0E0E0"} />)
        }
        return <div className={styles.Stars}>{stars}</div>
    }


    return (
        <div className={styles.ProductInfoCard}>
            <img src={getImageBasedOnCategory(`${product.category}${product.subCategory}`)} width={256} height={256} alt="image" />
            <h1>{product.name}</h1>
            <p>{`${(Math.round(product.price * 100) / 100).toFixed(2)} SEK`}</p>
            <div className={styles.Rating}><Stars /><p>{`(${product.numberOfReviews})`}</p></div>
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

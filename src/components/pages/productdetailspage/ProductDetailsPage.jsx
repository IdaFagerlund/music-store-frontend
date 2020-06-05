import React, { useEffect, useState } from "react"
import styles from "./ProductDetailsPage.module.scss"
import { useLocation, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import ReviewSection from "./ReviewSection"
import { ArrowRightIcon, ShoppingCartIcon, StarIcon } from "../../utils/Icons"
import { fetchProductById, fetchProductReviewsByProductId } from "../../../redux/actions/products"
import ElectricGuitarImage from "../../../assets/electric_guitar.png"
import AcousticGuitarImage from "../../../assets/acoustic_guitar.png"
import GrandPianoImage from "../../../assets/grand_piano.png"
import KeyboardImage from "../../../assets/keyboard.png"
import DrumsImage from "../../../assets/drumset.png"
import TrumpetImage from "../../../assets/trumpet.png"


export default function ProductDetailsPage() {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const [product, setProduct] = useState({
        data: useSelector((state) => state.products.data.all.find(product => product.id === getProductIdFromURL())),
        error: null
    })


    function getProductIdFromURL() {
        const urlValues = location.pathname.split("/")
        const productId = urlValues[urlValues.length - 1]
        return parseInt(productId)
    }

    useEffect(() => {
        if (!product.data) {
            const productPromise = dispatch((fetchProductById(getProductIdFromURL())))
            productPromise
                .then((data) => setProduct({ data: data, error: null }))
                .catch((error) => setProduct({ data: null, error: "Failed to load product" }))
        }
    }, [])

    const Stars = () => {
        let stars = []
        for (let i = 1; i <= 5; i++) {
            stars.push(<StarIcon key={i} color={i <= product.averageReviewStars ? "#FFFA3F" : "#E0E0E0"} />)
        }
        return <div className={styles.Stars}>{stars}</div>
    }


    const ProductDetails = () => {
        return (
            <div className={styles.ProductDetails}>
                <img src={getImageBasedOnCategory(`${product.category}${product.subCategory}`)} width={256} height={256} alt="image" />
                <div className={styles.Info}>
                    <h2>Title</h2>
                    <p>price</p>
                    {/* <Stars product={product} /> */}
                    <p>description</p>
                    <p>stock</p>
                    <p>addtocart</p>
                </div>

            </div>
        )
    }

    if (!product.data) {
        return (
            <div className={styles.ProductDetailsPage}>
                {product.error ?
                    <p className={styles.Error}>{product.error}</p> :
                    <div className={styles.Loading}>loaaading animation</div>
                }
            </div>
        )
    }


    return (
        <div className={styles.ProductDetailsPage}>
            {/* <div className={styles.ProductDetailsContainer}><ProductDetails /></div>
            <div className={styles.ReviewSectionContainer}><CommentSection productId={product.id} /></div> */}
        </div>
    )
}


export const Stars = ({ product }) => {
    const numberOfReviews = product.reviews.length
    const totalStars = product.reviews.reduce((currentTotalStars, thisObject) => currentTotalStars + thisObject.stars, 0)
    const averageStarRating = Math.round(totalStars / numberOfReviews)

    let stars = []
    for (let i = 1; i <= 5; i++) {
        stars.push(<div className={styles.Star}><StarIcon key={i} color={i <= averageStarRating ? "#FFFA3F" : "#E0E0E0"} /></div>)
    }
    return <div className={styles.Rating}>{stars}<p>{`(${numberOfReviews})`}</p></div>
}


export const getFormattedPrice = (price) => {
    return `${(Math.round(price * 100) / 100).toFixed(2)} SEK`
}


export const getImageBasedOnCategory = (mainCategory, subCategory) => {
    const category = `${mainCategory}${subCategory}`

    switch (category) {
        case "GuitarsElectric": return ElectricGuitarImage
        case "GuitarsAcoustic": return AcousticGuitarImage
        case "PianosKeyboards": return KeyboardImage
        case "PianosGrand pianos": return GrandPianoImage
        case "Drumsnull": return DrumsImage
        case "Othernull": return TrumpetImage
        default: return null
    }
}
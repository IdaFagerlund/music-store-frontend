import React, { useEffect, useState } from "react"
import styles from "./ProductDetailsPage.module.scss"
import { useLocation, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import ReviewSection from "./ReviewSection"
import ProductDetailsView from "./ProductDetailsView"
import { StarIcon } from "../../utils/Icons"
import { fetchProductById } from "../../../redux/actions/products"
import ElectricGuitarImage from "../../../assets/electric_guitar.png"
import AcousticGuitarImage from "../../../assets/acoustic_guitar.png"
import GrandPianoImage from "../../../assets/grand_piano.png"
import KeyboardImage from "../../../assets/keyboard.png"
import DrumsImage from "../../../assets/drumset.png"
import TrumpetImage from "../../../assets/trumpet.png"
import products from "../../../redux/reducers/products"


export default function ProductDetailsPage() {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const [product, setProduct] = useState({ //todo, rethink this. probably pass as prop but if the user enters the url directly, do a backend request. look over redux structure etc. 
        data: useSelector((state) => state.products.data.all.find(product => product.id === getProductIdFromURL())),
        error: null
    })
    const products = useSelector((state) => state.products.data.all)


    function getProductIdFromURL() {
        const urlValues = location.pathname.split("/")
        const productId = urlValues[urlValues.length - 1]
        return parseInt(productId)
    }

    useEffect(() => {
        window.scrollTo(0, 0)

        if (!product.data) {
            const productPromise = dispatch((fetchProductById(getProductIdFromURL())))
            productPromise
                .then((data) => setProduct({ data: data, error: null }))
                .catch((error) => setProduct({ data: null, error: "Failed to load product" }))
        }
        else {
            //console.log(products) refactor
            setProduct({ data: products.find(product => product.id === getProductIdFromURL()), error: null })
        }
    }, [location])


    if (!product.data) {
        return (
            <div className={styles.ProductDetailsPage}>
                {product.error ?
                    <p className={styles.Error}>{product.error}</p> :
                    <div className={styles.Loading}>loaaading animation. todo</div>
                }
            </div>
        )
    }


    return (
        <div className={styles.ProductDetailsPage}>
            <ProductDetailsView product={product.data} />
            <ReviewSection productReviews={product.data.reviews} productId={getProductIdFromURL()} />
        </div>
    )
}

//todo, should reusable stuff be "owned" by some component or should they be placed somewhere else
export const getAverageStarRating = (productReviews) => {
    const numberOfReviews = productReviews.length
    const totalStars = productReviews.reduce((currentTotalStars, thisObject) => currentTotalStars + thisObject.stars, 0)
    const averageStarRating = Math.round(totalStars / numberOfReviews)
    return averageStarRating ? averageStarRating : 0
}


export const Stars = ({ productReviews, displayNumberNextToStars }) => {
    let stars = []
    for (let i = 1; i <= 5; i++) {
        stars.push(<div key={i} className={styles.Star}><StarIcon color={i <= getAverageStarRating(productReviews) ? "#FFFA3F" : "#E0E0E0"} /></div>)
    }
    return (
        <div className={styles.Rating}>
            {stars}
            {displayNumberNextToStars && <p>{`(${productReviews.length})`}</p>}
        </div>
    )
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
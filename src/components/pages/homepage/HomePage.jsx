import React from "react"
import styles from "./HomePage.module.scss"
import Piano from "../../../assets/piano.png"
import { useHistory } from "react-router-dom"
import { ArrowRightIcon, ArrowLeftIcon } from "../../utils/Icons"


export default function HomePage() {
    const history = useHistory()

    const HomePageImage = () => {
        return (
            <div className={styles.HomePageImage}>
                <img src={Piano} alt="Piano" />
                <div className={styles.InfoOnImageContainer}>
                    <h1>The best instruments</h1>
                    <h1>for the best music</h1>
                    <div className={styles.BrowseProductsButton} onClick={() => history.push("/product-browse")}>
                        <p>Browse products</p><div className={styles.ButtonArrowEdge}></div>
                    </div>
                </div>
            </div >
        )
    }

    const FeaturedProductsSlideShow = () => {
        let featuredProducts = [{ "name": "1" }, { "name": "2" }, { "name": "3" }, { "name": "4" }, { "name": "5" }]

        return (
            <div className={styles.FeaturedProductsSlideShow}>
                {/* {featuredProducts.map((product) => {
                    return (
                        <div>{product.name}</div>
                    )
                })} */}
            </div>
        )
    }

    return (
        <div className={styles.HomePage}>
            <HomePageImage />
            <FeaturedProductsSlideShow />
        </div>
    )
}
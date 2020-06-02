import React from "react"
import styles from "./HomePage.module.scss"
import Piano from "../../../assets/piano.png"
import { useHistory } from "react-router-dom"
import FeaturedProductsSlideshow from "./FeaturedProductsSlideshow"


export default function HomePage() {
    const history = useHistory()

    const HomePageImage = () => {
        return (
            <div className={styles.HomePageImage}>
                <img src={Piano} alt="Piano" />
                <div className={styles.InfoOnImageContainer}>
                    <h1>The best instruments</h1>
                    <h1>for the best music</h1>
                    <div className={styles.BrowseProductsButton} onClick={() => history.push("/products")}>
                        <p>Browse products</p><div className={styles.ButtonArrowEdge}></div>
                    </div>
                </div>
            </div >
        )
    }

    return (
        <div className={styles.HomePage}>
            <HomePageImage />
            <div className={styles.FeaturedProductsSlideshowContainer}><FeaturedProductsSlideshow /></div>
        </div>
    )
}
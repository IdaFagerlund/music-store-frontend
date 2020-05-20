import React from "react"
import styles from "./Home.module.scss"
import Piano from "../../../assets/piano.png"
import { useHistory } from "react-router-dom"
import { ArrowRightIcon, ArrowLeftIcon } from "../../utils/Icons"


export default function Home() {
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

    return (
        <div className={styles.Home}>
            <HomePageImage />


            {/* <div className={styles.Body}>
                <h3>Featured</h3>
                <div className={styles.Featured}>
                    <div className={styles.Arrow}></div>
                    <div className={styles.Item}></div>
                    <div className={styles.Item}></div>
                    <div className={styles.Item}></div>
                    <div className={styles.Arrow}></div>
                </div>


            </div> */}
        </div>
    )
}
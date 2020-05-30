import React from "react"
import styles from "./FeaturedProductsSlideshow.module.scss"
import { ArrowRightIcon, ArrowLeftIcon } from "../../utils/Icons"
import ProductInfoCard from "../browseproductspage/ProductInfoCard"
import { useSelector, useDispatch } from "react-redux"
import { moveFeaturedProducts } from "../../../redux/actions/products"

export default function FeaturedProductsSlideShow() {
    const featuredProducts = useSelector((state) => state.products.data.featured)
    const dispatch = useDispatch()

    return (
        <div className={styles.FeaturedProductsSlideshow}>
            <h1>Featured</h1>
            <div className={styles.Slideshow}>
                <div className={styles.ArrowContainer} onClick={() => dispatch(moveFeaturedProducts("left"))}><ArrowLeftIcon size={28} /></div>
                <div className={styles.Cards}>
                    {featuredProducts[0] && <div className={styles.CardContainer}><ProductInfoCard product={featuredProducts[0]} /></div>}
                    {featuredProducts[1] && <div className={styles.CardContainer}><ProductInfoCard product={featuredProducts[1]} /></div>}
                    {featuredProducts[2] && <div className={styles.CardContainer}><ProductInfoCard product={featuredProducts[2]} /></div>}
                </div>
                <div className={styles.ArrowContainer} onClick={() => dispatch(moveFeaturedProducts("right"))}><ArrowRightIcon size={28} /></div>
            </div>
        </div>
    )
}

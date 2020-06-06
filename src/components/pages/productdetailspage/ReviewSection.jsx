import React, { useEffect } from "react"
import styles from "./ReviewSection.module.scss"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { Stars } from "../productdetailspage/ProductDetailsPage"
import { ArrowRightIcon } from "../../utils/Icons"


export default function ReviewSection({ productReviews }) {

    const ReviewList = () => {

        const reviews = productReviews.map((review, index) =>
            <div key={index} className={styles.Review}>

                <div className={styles.ReviewHeader}>
                    <h2>{review.username}</h2>
                    <Stars productReviews={[review]} />
                </div>

                <p className={styles.ReviewBody}>{review.comment}</p>

                <div className={styles.ReviewFooter}>
                    <div>(todo: convert time)</div>
                    <div><p><b>Added:&nbsp;</b></p><p>{review.timeCreatedUTC}</p></div>
                    {review.lastTimeUpdatedUTC && <div><p><b>Last updated:&nbsp;</b></p><p>{review.lastTimeUpdatedUTC}</p></div>}
                </div>

            </div>
        )

        return (
            <div className={styles.ReviewList}>
                {reviews}
            </div>
        )
    }

    return (
        <div className={styles.ReviewSection}>
            (todo)
            <div className={styles.AddReviewButton}><h3>Add review</h3><ArrowRightIcon size={26} /></div>
            <ReviewList />
        </div>
    )
}
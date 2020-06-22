import React, { useState } from "react"
import styles from "./ReviewSection.module.scss"
import { Stars } from "../productdetailspage/ProductDetailsPage"
import { ArrowRightIcon } from "../../utils/Icons"
import moment from "moment"
import { useSelector, useDispatch } from "react-redux"
import { setModalStatus, addReview } from "../../../redux/actions/index"
import { StarIcon } from "../../utils/Icons"


export default function ReviewSection({ productReviews, productId }) {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.data)
    const [displayAddReview, setDisplayAddReview] = useState(false)
    const [review, setReview] = useState({ comment: "test. todo", stars: 5 })

    const ReviewList = () => {

        const reviews = productReviews.map((review, index) =>
            <div key={index} className={styles.Review}>

                <div className={styles.ReviewHeader}>
                    <h2>{review.username}</h2>
                    <Stars productReviews={[review]} />
                </div>

                <p className={styles.ReviewBody}>{review.comment}</p>

                <div className={styles.ReviewFooter}>
                    <div><p><b>Added:&nbsp;</b></p><p>{moment(review.timeCreatedUTC).fromNow()}</p></div>
                    {review.lastTimeUpdatedUTC && <div><p><b>Last updated:&nbsp;</b></p><p>{moment(review.lastTimeUpdatedUTC).fromNow()}</p></div>}
                </div>

            </div>
        )

        return (
            <div className={styles.ReviewList}>
                {reviews}
            </div>
        )
    }

    const AddReview = () => {
        return (
            <div className={styles.AddReview}>
                <div className={styles.StarsAndTextContainer}>
                    <h4>Select a rating:</h4>
                    <div className={styles.Stars}>
                        {[...Array(5)].map((element, index) =>
                            <div key={index} onClick={() => setReview({ ...review, stars: index + 1 })}>
                                <div><StarIcon color="#E0E0E0" /></div>
                                <div><StarIcon color="#FFFA3F" /></div>
                                <div><StarIcon color={index < review.stars ? "#FFFA3F" : "#E0E0E0"} /></div>
                            </div>
                        )}
                    </div>
                </div>
                <textarea placeholder="Share your thoughts on this product" maxLength="1000"></textarea>
                <div className={styles.Buttons}>
                    <div className={styles.CancelButton} onClick={() => setDisplayAddReview(false)}>Cancel</div>
                    <div className={styles.AddButton} onClick={() => { /*dispatch(addReview({ productId, review }))*/ dispatch(setModalStatus({ isVisible: true, content: "accessDeniedUser" })) }}>Add</div>
                </div>
            </div>
        )
    }

    function AddReviewButton() {
        return (
            <div className={styles.AddReviewButton} onClick={() => {
                if (user.loggedIn && user.authorities.includes("ROLE_USER")) {
                    //Todo: check that user don't already have a review. Edit review. delete. show your review highest up in a different color etc.
                    setDisplayAddReview(true)
                }
                else if (user.loggedIn && user.authorities.includes("ROLE_ADMIN")) {
                    dispatch(setModalStatus({ isVisible: true, content: "accessDeniedAdmin" }))
                }
                else {
                    dispatch(setModalStatus({ isVisible: true, content: "login" }))
                }
            }}>
                <h3>Add review</h3><ArrowRightIcon size={26} />
            </div>
        )
    }

    return (
        <div className={styles.ReviewSection}>
            <h1>Reviews</h1>
            <hr />
            {displayAddReview ? <AddReview /> : <AddReviewButton />}
            <ReviewList />
        </div>
    )
}
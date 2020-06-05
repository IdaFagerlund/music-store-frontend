import React, { useEffect } from "react"
import styles from "./ReviewSection.module.scss"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"


export default function ReviewSection({ productId }) {


    useEffect(() => {
        //get comments
    }, [])

    return (
        <div className={styles.ReviewSection}>
            <div>comments</div>
        </div>
    )
}
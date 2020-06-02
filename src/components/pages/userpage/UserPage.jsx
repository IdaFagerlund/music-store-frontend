import React from "react"
import styles from "./UserPage.module.scss"


export default function UserPage() {


    return (
        <div className={styles.UserPage}>
            <p>User profile page.</p>
            <p>This page is only accessible when logged in as a user.</p>
            <p>When this page is implemented you will be able to see your product orders and product reviews here as well as be able to update your password etc.</p>
        </div>
    )
}
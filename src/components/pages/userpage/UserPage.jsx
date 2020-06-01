import React from "react"
import styles from "./UserPage.module.scss"


export default function UserPage() {


    return (
        <div className={styles.UserPage}>
            <p>User profile page.</p>
            <p>Only accessible when logged in as a user.</p>
            <p>When this page is implemented you will be able to see your product orders here, your product reviews as well as be able to update your password etc.</p>
        </div>
    )
}
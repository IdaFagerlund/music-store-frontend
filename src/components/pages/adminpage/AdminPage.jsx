import React from "react"
import styles from "./AdminPage.module.scss"



export default function AdminPage() {


    return (
        <div className={styles.AdminPage}>
            <p>Manage store page.</p>
            <p>This page is only accessible for a logged in admin.</p>
            <p>When this page is implemented you will be able to manage the store and the data it holds here. For example adding, editing and removing products.</p>
        </div>
    )
}
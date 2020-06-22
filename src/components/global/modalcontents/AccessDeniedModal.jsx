import React from "react"
import styles from "./AccessDeniedModal.module.scss"
import { CloseIcon } from "../../utils/Icons"
import { useDispatch } from "react-redux"
import { setModalStatus } from "../../../redux/actions/index"

export default function AccessDeniedModal({ authority }) {
    const dispatch = useDispatch()

    return (
        <div className={styles.AccessDeniedModal}>
            <div className={styles.Header}>
                <div className={styles.CloseButton} onClick={() => dispatch(setModalStatus({ isVisible: false, content: null }))}><CloseIcon /></div>
            </div>
            <div className={styles.Content}>
                {authority === "user" &&
                    <div>
                        <h3>Requests that changes data on this site won't be sent to the server to keep this site in a demoable state</h3>
                        <br />
                        <p>However, if you're curious to see how it would have been handled you can still take a look at the code as all functionality is there:</p>
                        <br />
                        <a href="https://github.com/IdaFagerlund/music-store">https://github.com/IdaFagerlund/music-store</a>
                    </div>
                }
                {authority === "admin" && <p>Not accessible for admins, login as a user.</p>}
            </div>
        </div>
    )
}
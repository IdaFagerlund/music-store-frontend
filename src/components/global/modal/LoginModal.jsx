import React, { useState } from "react"
import styles from "./LoginModal.module.scss"
import { CloseIcon } from "../../utils/Icons"
import RegisterModal from "./RegisterModal"

export default function LoginModal({ setModal }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [textFieldFocus, setTextFieldFocus] = useState()

    const Content = () => {
        return (
            <div className={styles.Content}>
                <div className={styles.InputContainer}>
                    <p>Username</p>
                    <input className={styles.InputField} type="text" value={username} autoFocus={textFieldFocus === "username"} onChange={event => {
                        setUsername(event.target.value); setTextFieldFocus("username");
                    }} />
                    {false && <div className={styles.InputError}>{"error message"}</div>}
                </div>
                <div className={styles.InputContainer}>
                    <p>Password</p>
                    <input className={styles.InputField} type="password" value={password} autoFocus={textFieldFocus === "password"} onChange={event => {
                        setPassword(event.target.value); setTextFieldFocus("password");
                    }} />
                    {false && <div className={styles.InputError}>{"error message"}</div>}
                </div>
            </div>
        )
    }

    return (
        <div className={styles.LoginModal}>
            <div className={styles.Header}>
                <p>Login</p>
                <div className={styles.CloseButton} onClick={() => setModal({ displayModal: false })}><CloseIcon /></div>
            </div>
            <Content />
            <div className={styles.Footer} onClick={() => setModal({ displayModal: true, modalContent: <RegisterModal setModal={setModal} /> })}>
                <div className={styles.NewUserButton}>New user?</div>
                <div className={styles.LoginButton}>Login</div>
            </div>
        </div>
    )
}

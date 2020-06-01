import React, { useState, useEffect } from "react"
import styles from "./LoginAndRegisterModal.module.scss"
import { CloseIcon } from "../../utils/Icons"
import { useDispatch, useSelector } from "react-redux"
import { setModalStatus, login, register, setLoginAndRegisterFieldErrors } from "../../../redux/actions"
import { useHistory } from "react-router-dom"

export default function LoginAndRegisterModal({ initialView }) {
    const [view, setView] = useState(initialView)
    const [textFieldFocus, setTextFieldFocus] = useState()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const history = useHistory()

    const [fields, setFields] = useState({
        username: "",
        password: "",
        email: ""
    })

    useEffect(() => {
        if (user.data.loggedIn) {
            history.push(`/user/${user.data.username}`)
            dispatch(setModalStatus({ isVisible: false, content: null }))
        }
    }, [user.data.loggedIn])


    const InputField = ({ type, fieldName, value, onChange, error }) => {
        return (
            <div className={styles.InputContainer}>
                <p>{fieldName}</p>
                <input className={styles.InputField} type={type} value={value} autoFocus={textFieldFocus === fieldName}
                    onChange={event => { onChange(event.target.value); setTextFieldFocus(fieldName); }}
                />
                {error && <div className={styles.InputError}>{error}</div>}
            </div>
        )
    }

    const LoginContent = () => {
        return (
            <div>
                <InputField type="text" fieldName="Username" value={fields.username} onChange={username => setFields({ ...fields, username })} error={user.loginAndRegisterFieldErrors.username} />
                <InputField type="password" fieldName="Password" value={fields.password} onChange={password => setFields({ ...fields, password })} error={user.loginAndRegisterFieldErrors.password} />
            </div>
        )
    }

    const RegisterContent = () => {
        return (
            <div>
                <InputField type="text" fieldName="Email" value={fields.email} onChange={email => setFields({ ...fields, email })} error={user.loginAndRegisterFieldErrors.email} />
                <InputField type="text" fieldName="Username" value={fields.username} onChange={username => setFields({ ...fields, username })} error={user.loginAndRegisterFieldErrors.username} />
                <InputField type="password" fieldName="Password" value={fields.password} onChange={password => setFields({ ...fields, password })} error={user.loginAndRegisterFieldErrors.password} />
            </div>
        )
    }

    const DemoInformation = () => {
        return (
            <div className={styles.DemoInformation}>
                <h2>Demo website</h2>
                <p>To see the most of what this site have to offer, log in with either:</p><br />
                <p className={styles.Accounts}>username: user<br />password: user</p>
                <br />
                <p className={styles.Accounts}>username: admin<br />password: admin</p> <br />
                <p>
                    These accounts have some preset product reviews and orders etc that can be seen. To remain this site in a demoable state, no user requests that changes data on the site
                    will go through on the server, for example adding new product reviews as a user or changing the product inventory as an admin. Use one of these accounts to view how it theoretically would have looked.
                </p>
            </div>
        )
    }


    return (
        <div className={styles.LoginAndRegisterModal}>
            <div className={styles.Header}>
                <p>{view === "login" ? "Login" : "Register"}</p>
                <div className={styles.CloseButton} onClick={() => dispatch(setModalStatus({ isVisible: false, content: null }))}><CloseIcon /></div>
            </div>

            <div className={styles.Content}>
                <DemoInformation />
                {view === "login" ? <LoginContent /> : <RegisterContent />}

            </div>

            <div className={styles.Footer}>
                <div className={styles.SwitchBetweenLoginAndRegisterButton} onClick={() => {
                    setView(view === "login" ? "register" : "login");
                    setFields({ username: "", password: "", email: "" })
                    dispatch(setLoginAndRegisterFieldErrors({ usernameErrorMessage: null, passwordErrorMessage: null, emailErrorMessage: null }))
                }}>
                    {view === "login" ? "New user?" : "Already a user?"}
                </div>
                <div className={styles.SubmitButton} onClick={() => view === "login" ? dispatch(login(fields)) : dispatch(register(fields))}>
                    {view === "login" ? "Login" : "Register"}
                </div>

            </div>
        </div>
    )
}

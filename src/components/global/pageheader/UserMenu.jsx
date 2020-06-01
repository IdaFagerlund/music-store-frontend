import React from "react"
import styles from "./UserMenu.module.scss"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setModalStatus, logout } from "../../../redux/actions/index"

export default function UserMenu({ closeMenu }) {
    const user = useSelector(state => state.user.data)
    const history = useHistory()
    const dispatch = useDispatch()

    const NotLoggedInMenu = () => {
        return (
            <div className={styles.MenuItems}>
                <div onClick={() => { dispatch(setModalStatus({ isVisible: true, content: "login" })); closeMenu(); }}>Login</div>
                <hr />
                <div onClick={() => { dispatch(setModalStatus({ isVisible: true, content: "register" })); closeMenu(); }}>Register</div>
            </div>
        )
    }

    const LoggedInUserMenu = () => {
        return (
            <div className={styles.MenuItems}>
                <div onClick={() => { history.push(`/user/${user.username}`); closeMenu(); }}>My page</div>
                <hr />
                <div onClick={() => { history.push("/"); closeMenu(); dispatch(logout()); }}>Logout</div>
            </div>
        )
    }

    const LoggedInAdminMenu = () => {
        return (
            <div className={styles.MenuItems}>
                <div onClick={() => { history.push("/admin"); closeMenu(); }}>Manage store</div>
                <hr />
                <div onClick={() => { history.push("/"); closeMenu(); dispatch(logout()); }}>Logout</div>
            </div>
        )
    }

    return (
        <div className={styles.UserMenu}>
            {!user.loggedIn && <NotLoggedInMenu />}
            {user.loggedIn && user.authorities.includes("ROLE_USER") && <LoggedInUserMenu />}
            {user.loggedIn && user.authorities.includes("ROLE_ADMIN") && <LoggedInAdminMenu />}
        </div>
    )
}


import React, { useState } from "react"
import styles from "./UserMenu.module.scss"
import { useHistory } from "react-router-dom"
import LoginModal from "../modal/LoginModal"
import RegisterModal from "../modal/RegisterModal"

export default function UserMenu({ setModal, closeMenu }) { //todo close menu not needed?
    const history = useHistory()

    return (
        <div className={styles.UserMenu}>


            {true && //not logged in
                <div className={styles.MenuItems}>
                    {/* <div onClick={() => setModalContent(<LoginModal />)}>Login</div> */}
                    <div onClick={() => setModal({ displayModal: true, modalContent: <LoginModal setModal={setModal} /> })}>Login</div>
                    <hr />
                    <div onClick={() => setModal({ displayModal: true, modalContent: <RegisterModal setModal={setModal} /> })}>Register</div>
                </div>
            }

            {false && //logged in user
                <div className={styles.MenuItems}>
                    <div onClick={() => { closeMenu(); history.push("/user"); }}>My page</div>
                    <hr />
                    <div onClick={() => { closeMenu(); history.push("/"); }}>Logout</div>
                </div>
            }

            {false && //logged in admin
                <div className={styles.MenuItems}>
                    <div onClick={() => { closeMenu(); history.push("/admin"); }}>Admin</div>
                    <hr />
                    <div onClick={() => { closeMenu(); history.push("/"); }}>Logout</div>
                </div>
            }

        </div>
    )
}


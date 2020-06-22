import React from "react"
import styles from "./Modal.module.scss"
import { useSelector, useDispatch } from "react-redux"
import ContainerThatCloseOnOutsideClick from "./ContainerThatCloseOnOutsideClick"
import { setModalStatus } from "../../redux/actions/modal"
import LoginAndRegisterModal from "../global/modalcontents/LoginAndRegisterModal"
import AccessDeniedModal from "../global/modalcontents/AccessDeniedModal"


export default function Modal() {
    const modalStatus = useSelector((state) => state.modal)
    const dispatch = useDispatch()

    const Content = () => {
        switch (modalStatus.content) {
            case "login": return <LoginAndRegisterModal initialView={"login"} />
            case "register": return <LoginAndRegisterModal initialView={"register"} />
            case "accessDeniedUser": return <AccessDeniedModal authority={"user"} />
            case "accessDeniedAdmin": return <AccessDeniedModal authority={"admin"} />
            default: return <div></div>
        }
    }

    return (
        <div className={styles.Modal}>
            {modalStatus.isVisible &&
                <div className={styles.ModalBackground}>
                    <ContainerThatCloseOnOutsideClick
                        content={<div className={styles.Content}><Content /></div>}
                        isVisible={modalStatus.isVisible}
                        onContainerClose={() => dispatch(setModalStatus({ isVisible: false, content: null }))}
                    />
                </div>
            }
        </div>
    )
}


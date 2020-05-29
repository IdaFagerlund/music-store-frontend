import React, { useState, useRef } from "react"
import styles from "./PageHeader.module.scss"
import MusicStoreLogo from "../../../assets/MusicStoreLogo.png"
import { useHistory } from "react-router-dom"
import { UserIcon, ShoppingCartIcon, MagnifyingGlassIcon } from "../../utils/Icons"
import ProductSearch from "./ProductSearch"
import UserMenu from "./UserMenu"
import ShoppingCart from "./ShoppingCart"
import ContainerThatCloseOnOutsideClickForClickComponent, { ContainerThatCloseOnOutsideClickForModalComponent } from "../../utils/ContainerThatCloseOnOutsideClick"
import { useSelector } from "react-redux"
import LoginModal from "../modal/LoginModal"

export default function PageHeader() {
	const user = useSelector((state) => state.user.data)
	const [modal, setModal] = useState({ displayModal: false, modalContent: null })
	const [showUserMenu, setShowUserMenu] = useState(false)
	const history = useHistory()


	const TopHeader = () => {

		return (
			<div className={styles.TopHeader}>
				<img src={MusicStoreLogo} alt="MusicStoreLogo" width="320" />
				<hr />
				<ul className={styles.NavigationMenu}>
					<li onClick={() => history.push("/")}><p>Home</p></li>
					<li onClick={() => history.push("/products")}><p>Browse products</p></li>
					<li onClick={() => history.push("/about")}><p>About</p></li>
				</ul>
			</div>
		)
	}

	const BottomHeader = () => {
		return (
			<div className={styles.BottomHeader}>
				<ProductSearch />
				<div className={styles.UserAndShoppingCartContainer}>
					<ContainerThatCloseOnOutsideClickForClickComponent
						clickTriggerComponent={<div className={styles.IconAndText}><UserIcon /><p>{user.username}</p></div>}
						content={
							<div className={styles.PopoutUserMenu}>
								<UserMenu
									setModal={setModal}
									closeMenu={setShowUserMenu} //was callback
								/>
							</div>}
					/>
					<ContainerThatCloseOnOutsideClickForClickComponent
						clickTriggerComponent={<div className={styles.IconAndText}><ShoppingCartIcon /><p>Shopping cart</p></div>}
						content={<div className={styles.PopoutShoppingCart}><ShoppingCart /></div>}
					/>
				</div>
			</div>
		)
	}

	const [username, setUsername] = useState("")
	return (
		<header className={styles.PageHeader}>
			<TopHeader />
			<BottomHeader />
			{/* modal.displayModal */}
			{/* modal.modalContent */}
			{/* <input className={styles.InputField} type="text" onChange={event => setUsername(event.target.value)} value={username} /> */}
			{modal.displayModal &&
				<div className={styles.ModalBackground}>
					<ContainerThatCloseOnOutsideClickForModalComponent content={modal.modalContent} onContainerClose={() => setModal({ displayModal: false, modalContent: null })} />
				</div>
			}

		</header>
	)

}

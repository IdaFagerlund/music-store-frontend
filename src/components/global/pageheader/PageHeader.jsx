import React, { useState } from "react"
import styles from "./PageHeader.module.scss"
import MusicStoreLogo from "../../../assets/MusicStoreLogo.png"
import { useHistory } from "react-router-dom"
import { UserIcon, ShoppingCartIcon } from "../../utils/Icons"
import ProductSearch from "./ProductSearch"
import UserMenu from "./UserMenu"
import ShoppingCart from "./ShoppingCart"
import ContainerThatCloseOnOutsideClickForClickComponent from "../../utils/ContainerThatCloseOnOutsideClick"
import { useSelector } from "react-redux"

export default function PageHeader() {
	const user = useSelector((state) => state.user.data)
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
						content={<div className={styles.PopoutUserMenu}><UserMenu closeMenu={() => setShowUserMenu(!showUserMenu)} /></div>} />
					<ContainerThatCloseOnOutsideClickForClickComponent
						clickTriggerComponent={<div className={styles.IconAndText}><ShoppingCartIcon /><p>Shopping cart</p></div>}
						content={<div className={styles.PopoutShoppingCart}><ShoppingCart /></div>}
					/>
				</div>
			</div>
		)
	}

	return (
		<header className={styles.PageHeader}>
			<TopHeader />
			<BottomHeader />
		</header>
	)

}

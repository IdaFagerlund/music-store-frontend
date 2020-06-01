import React, { useState, useRef } from "react"
import styles from "./PageHeader.module.scss"
import MusicStoreLogo from "../../../assets/MusicStoreLogo.png"
import { useHistory } from "react-router-dom"
import { UserIcon, ShoppingCartIcon } from "../../utils/Icons"
import ProductSearch from "./ProductSearch"
import UserMenu from "./UserMenu"
import ShoppingCart from "./ShoppingCart"
import ContainerThatCloseOnOutsideClick from "../../utils/ContainerThatCloseOnOutsideClick"
import { useSelector } from "react-redux"

export default function PageHeader() {
	const [isShowingMyPageDropdown, setShowingMyPageDropdown] = useState(false)
	const [isShowingShoppingCartDropdown, setShowingShoppingCartDropdown] = useState(false)
	const myPageButtonReference = useRef()
	const shoppingCartButtonReference = useRef()

	const user = useSelector((state) => state.user.data)
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


	const bottomHeader = () => {
		return (
			<div className={styles.BottomHeader}>
				<ProductSearch />

				<div className={styles.UserAndShoppingCartContainer}>
					<div className={styles.Button} ref={myPageButtonReference} >
						<div className={styles.ButtonContent} onClick={() => setShowingMyPageDropdown(!isShowingMyPageDropdown)}>
							<UserIcon /><p>{user.loggedIn ? user.username : "My page"}</p>
						</div>
						<div className={styles.MyPageDropdown}>
							<ContainerThatCloseOnOutsideClick
								content={<div className={styles.PopoutUserMenu}><UserMenu closeMenu={() => setShowingMyPageDropdown(false)} /></div>}
								parentComponentReference={myPageButtonReference}
								isVisible={isShowingMyPageDropdown}
								onContainerClose={() => setShowingMyPageDropdown(false)}
							/>
						</div>
					</div>

					<div className={styles.Button} ref={shoppingCartButtonReference} >
						<div className={styles.ButtonContent} onClick={() => setShowingShoppingCartDropdown(!isShowingShoppingCartDropdown)}>
							<ShoppingCartIcon /><p>Shopping cart</p>
						</div>
						<div className={styles.ShoppingCartDropdown}>
							<ContainerThatCloseOnOutsideClick
								content={<ShoppingCart />}
								parentComponentReference={shoppingCartButtonReference}
								isVisible={isShowingShoppingCartDropdown}
								onContainerClose={() => setShowingShoppingCartDropdown(false)}
							/>
						</div>
					</div>
				</div>

			</div>
		)
	}

	return (
		<header className={styles.PageHeader}>
			<TopHeader />
			{bottomHeader()}
		</header>
	)

}

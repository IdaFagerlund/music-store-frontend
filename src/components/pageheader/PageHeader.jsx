import React, { useState, useRef } from "react"
import styles from "./PageHeader.module.scss"
import MusicStoreLogo from "../../assets/MusicStoreLogo.png"
import { useHistory } from "react-router-dom"
import { UserIcon, ShoppingCartIcon, MagnifyingGlassIcon } from "../utils/Icons"
import ProductSearch from "./ProductSearch"
import UserMenu from "./UserMenu"
import ShoppingCart from "./ShoppingCart"
import ContainerThatCloseOnOutsideClickForClickComponent from "../utils/ContainerThatCloseOnOutsideClick"


export default function PageHeader() {
	const history = useHistory()
	const [isShowingMyPagePopout, setIsShowingMyPagePopout] = useState(false)
	const [isShowingShoppingCartPopout, setIsShowingShoppingCartPopout] = useState(false)

	const theref = useRef()

	const TopHeader = () => {

		return (
			<div className={styles.TopHeader}>
				<img src={MusicStoreLogo} alt="MusicStoreLogo" width="320" />
				<hr />
				<ul className={styles.NavigationMenu}>
					<li onClick={() => history.push("/")}><p>Home</p></li>
					<li onClick={() => history.push("/product-browse")}><p>Browse products</p></li>
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
						clickTriggerComponent={<div className={styles.IconAndText}><UserIcon /><p>My page</p></div>}
						containerContentComponent={<div className={styles.Popout}><UserMenu /></div>}
					/>
					<ContainerThatCloseOnOutsideClickForClickComponent
						clickTriggerComponent={<div className={styles.IconAndText}><ShoppingCartIcon /><p>Shopping cart</p></div>}
						containerContentComponent={<div className={styles.Popout}><ShoppingCart /></div>}
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

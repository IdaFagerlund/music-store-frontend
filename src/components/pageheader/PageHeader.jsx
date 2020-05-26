import React from "react"
import styles from "./PageHeader.module.scss"
import MusicStoreLogo from "../../assets/MusicStoreLogo.png"
import { useHistory } from "react-router-dom"
import { UserIcon, ShoppingCartIcon, MagnifyingGlassIcon } from "../utils/Icons"
import { NavLink } from "react-router-dom"
import ProductSearch from "./ProductSearch"

export default function PageHeader() {
	const history = useHistory()


	const TopHeader = () => {

		return (
			<div className={styles.TopHeader}>
				<img src={MusicStoreLogo} alt="MusicStoreLogo" width="320" />
				<hr />
				<ul className={styles.NavigationMenu}>
					<li onClick={() => history.push("/")}><p>Home</p><NavLink to="/"></NavLink></li>
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
					<div><UserIcon /><p>My page</p></div>
					<div><ShoppingCartIcon /><p>Shopping cart</p></div>
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

import React from "react"
import styles from "./PageHeader.module.scss"
import MusicStoreLogo from "../../assets/MusicStoreLogo.png"
import { useHistory } from "react-router-dom"

export default function PageHeader() {
	const history = useHistory()

	const NavigationBar = () => {
		return <div>navbar</div>
	}

	const SearchBar = () => {
		return <div>searchbar</div>
	}

	return (
		<header className={styles.HeadersContainer}>

			<div className={styles.TopHeader}>

				<img src={MusicStoreLogo} alt="MusicStoreLogo" width="320" />
				<hr />
				<ul className={styles.NavigationMenu}>
					<li onClick={() => history.push("/")}><p>Home</p></li>
					<li onClick={() => history.push("/product-browse")}><p>Browse products</p></li>
					<li onClick={() => history.push("/about")}><p>About</p></li>
				</ul>
			</div>

			{/* <div className={styles.BottomLine}></div>
			<div className={styles.SecondHeader}>
				<div>
					<div>Seeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeearch</div>
					<div>
						<div>MyPage</div>
						<div>ShoppingCart</div>
					</div>
				</div>
			</div> */}


			{/* <div>
				<SearchBar />
				<div>login or profile</div>
				<div>shoppingcart</div>
			</div> */}
		</header>
	)
}

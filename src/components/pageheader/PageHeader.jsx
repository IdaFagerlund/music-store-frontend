import React from "react"
import styles from "./PageHeader.module.scss"
import { MusicNoteM, MusicNoteS, Thes, NewI, NewM, Lines } from "../utils/Icons"
import MusicStoreLogo from "../../assets/MusicStoreLogo.png"

export default function PageHeader() {
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
					<li><p>Home</p></li>
					<li><p>Browse products</p></li>
					<li><p>About</p></li>
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

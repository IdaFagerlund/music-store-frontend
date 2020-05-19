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
		<header className={styles.Header}>
			<h1>MusicStore</h1>
			{/* <img src={MusicStoreLogo} alt="MusicStoreLogo" width="400" /> */}
			<hr />
			<div className={styles.Navigation}>
				<p>Home</p>
				<p>Browse products</p>
				<p>About</p>

			</div>
			<div className={styles.BottomLine}></div>
			<div className={styles.SecondHeader}>
				<div>
					<div>Seeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeearch</div>
					<div>
						<div>MyPage</div>
						<div>ShoppingCart</div>
					</div>
				</div>
			</div>
			{/* <div>
				<SearchBar />
				<div>login or profile</div>
				<div>shoppingcart</div>
			</div> */}
		</header>
	)
}

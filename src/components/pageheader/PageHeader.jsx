import React from "react"
import styles from "./PageHeader.module.scss"

export default function PageHeader() {
	const NavigationBar = () => {
		return <div>navbar</div>
	}

	const SearchBar = () => {
		return <div>searchbar</div>
	}

	return (
		<header className={styles.Header}>
			<div>
				<p>Logo</p>
				<NavigationBar />
			</div>
			<div>
				<SearchBar />
				<div>login or profile</div>
				<div>shoppingcart</div>
			</div>
		</header>
	)
}

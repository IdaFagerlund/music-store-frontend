import React from "react"
import styles from "./BrowseProducts.module.scss"
import Piano from "../../../assets/piano1.jpg"


export default function ProductPage() {
	return (
		<div className={styles.Container}>
			<div><img src={Piano} alt="Piano" /></div>
			<div>
				<p>The best instruments <br /> &emsp;&emsp;&emsp;for the best music</p>
				<div>Browse &emsp;&emsp;  ></div>


			</div>

			<div className={styles.Body}>
				<h3>Featured</h3>
				<div className={styles.Featured}>
					<div className={styles.Arrow}></div>
					<div className={styles.Item}></div>
					<div className={styles.Item}></div>
					<div className={styles.Item}></div>
					<div className={styles.Arrow}></div>
				</div>


			</div>
		</div>
	)
}

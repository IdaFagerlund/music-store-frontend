import React, { useState, useRef } from "react"
import { useSelector } from "react-redux"
import styles from "./ProductSearch.module.scss"
import { MagnifyingGlassIcon, ArrowRightIcon } from "../../utils/Icons"
import { useHistory } from "react-router-dom"
import { getImageBasedOnCategory } from "../../pages/productdetailspage/ProductDetailsPage"
import ContainerThatCloseOnOutsideClick from "../../utils/ContainerThatCloseOnOutsideClick"


export default function ProductSearch() {
    const products = useSelector((state) => state.products)
    const [searchText, setSearchText] = useState("")
    const parentContainerReference = useRef()
    const history = useHistory()


    const SearchResults = () => {
        const filteredResults = products.data.all.filter(product => product.name.toLowerCase().split(" ").join("").includes(searchText.toLowerCase().split(" ").join("")))
        const maxAmountOfResultsToShow = 7

        const searchResults = filteredResults.slice(0, maxAmountOfResultsToShow).map(product => {
            return (
                <div className={styles.SearchResult} key={product.id} onClick={() => { history.push(`/product/${product.id}`); setSearchText("") }}>
                    <div className={styles.ImageAndNameContainer}>
                        <img src={getImageBasedOnCategory(product.mainCategory, product.subCategory)} width={64} height={64} alt="image" />
                        <p>{product.name}</p>
                    </div>
                    <ArrowRightIcon size={24} color={"#808080"} />
                </div>
            )
        })

        return (
            <div className={styles.SearchResults}>
                {searchResults}
                <div style={{ padding: "0.65em" }}></div>
            </div>
        )
    }

    return (
        <div className={styles.ProductSearch} ref={parentContainerReference}>
            <div className={`${styles.MagnifyingGlassIconContainer} ${searchText && styles.MagnifyingGlassIconContainerDuringSearch}`}><MagnifyingGlassIcon /></div>
            <input className={`${styles.SearchInput} ${searchText && styles.SearchInputDuringSearch}`} type="text" placeholder="Search..." onChange={event => setSearchText(event.target.value)} value={searchText} />

            <ContainerThatCloseOnOutsideClick
                content={<SearchResults />}
                parentComponentReference={parentContainerReference}
                isVisible={searchText}
                onContainerClose={() => setSearchText("")}
            />
        </div>
    )
}
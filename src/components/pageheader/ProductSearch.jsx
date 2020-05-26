import React, { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import styles from "./ProductSearch.module.scss"
import { MagnifyingGlassIcon, ArrowRightIcon } from "../utils/Icons"
import ContainerThatDisappearOnOutsideClick from "../utils/ContainerThatDisappearOnOutsideClick"
import ElectricGuitarImage from "../../assets/electric_guitar.png"


export default function ProductSearch() {
    const products = useSelector((state) => state.products)
    const [searchText, setSearchText] = useState("")
    const parentContainerReference = useRef()

    const SearchResults = () => {
        const searchResults = products.data.map(product =>
            <div className={styles.SearchResult} key={product.id}>
                <div className={styles.ImageAndNameContainer}>
                    <img src={ElectricGuitarImage} width={64} height={64} alt="image" />
                    <p>{product.name}</p>
                </div>
                <ArrowRightIcon size={20} color={"#808080"} />
            </div>
        )

        return (
            <div className={styles.SearchResults}>
                {searchResults}
            </div>
        )
    }

    return (
        <div className={styles.ProductSearch} ref={parentContainerReference}>
            <div className={`${styles.MagnifyingGlassIconContainer} ${searchText && styles.MagnifyingGlassIconContainerDuringSearch}`}><MagnifyingGlassIcon /></div>
            <input className={`${styles.SearchInput} ${searchText && styles.SearchInputDuringSearch}`} type="text" placeholder="Search..." onChange={event => setSearchText(event.target.value)} value={searchText} />
            <SearchResults />
            {/* <ContainerThatDisappearOnOutsideClick containerContent={<SearchResults />} openContainerCondition={searchText} onContainerClose={() => setSearchText("")} parentContainerReference={parentContainerReference} /> */}
        </div>
    )
}
import React, { useState, useRef, useEffect } from "react"
import styles from "./ProductSearch.module.scss"
import { MagnifyingGlassIcon } from "../utils/Icons"
import ContainerThatDisappearOnOutsideClick from "../utils/ContainerThatDisappearOnOutsideClick"


export default function ProductSearch() {
    const [searchText, setSearchText] = useState("")




    const SearchResults = () => {
        return (
            <div className={styles.SearchResults}>hellooooo</div>
        )
    }


    return (
        <div className={styles.ProductSearch}>
            <div className={`${styles.MagnifyingGlassIconContainer} ${searchText && styles.MagnifyingGlassIconContainerDuringSearch}`}><MagnifyingGlassIcon /></div>
            <input className={`${styles.SearchInput} ${searchText && styles.SearchInputDuringSearch}`} type="text" placeholder="Search..." onChange={event => setSearchText(event.target.value)} value={searchText} />
            <ContainerThatDisappearOnOutsideClick containerContent={<SearchResults />} openContainerCondition={searchText} onContainerClose={() => setSearchText("")} />
        </div>
    )

    //ContainerThatDisappearOnOutsideClick

}
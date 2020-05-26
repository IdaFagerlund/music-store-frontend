import React, { useState, useRef, useEffect } from "react"
import styles from "./ProductSearch.module.scss"
import { MagnifyingGlassIcon } from "../utils/Icons"



export default function ProductSearch() {
    const [searchText, setSearchText] = useState("")
    const node = useRef()
    const testval = "asd"

    const handleClickOutside = (event) => {
        if (node.current.contains(event.target)) {
            return;
        }
        setSearchText("")
    }

    useEffect(() => {
        if (searchText != "") {
            document.addEventListener("mousedown", handleClickOutside)
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [searchText])

    const SearchResults = () => {
        return (
            <div className={styles.SearchResults}>hellooooo</div>
        )
    }


    return (
        <div className={styles.ProductSearch}>
            <div className={`${styles.MagnifyingGlassIconContainer} ${searchText && styles.MagnifyingGlassIconContainerDuringSearch}`}><MagnifyingGlassIcon /></div>
            <input className={`${styles.SearchInput} ${searchText && styles.SearchInputDuringSearch}`} type="text" placeholder="Search..." onChange={event => setSearchText(event.target.value)} value={searchText} />
            <div ref={node}>{searchText && <SearchResults />}</div>
        </div>
    )

    //ContainerThatDisappearOnOutsideClick

}
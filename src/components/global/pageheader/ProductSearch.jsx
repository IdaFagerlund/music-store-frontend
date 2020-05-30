import React, { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import styles from "./ProductSearch.module.scss"
import { MagnifyingGlassIcon, ArrowRightIcon } from "../../utils/Icons"
import ElectricGuitarImage from "../../../assets/electric_guitar.png"
import { useHistory } from "react-router-dom"
import { ContainerThatCloseOnOutsideClickForTextFieldComponent } from "../../utils/ContainerThatCloseOnOutsideClick"
import ContainerThatCloseOnOutsideClick from "../../utils/ContainerThatCloseOnOutsideClick"


export default function ProductSearch() {
    const products = useSelector((state) => state.products)
    const [searchText, setSearchText] = useState("")
    const parentContainerReference = useRef()
    const history = useHistory()


    const SearchResults = () => {
        const filteredResults = products.data.all.filter(product => product.name.includes(searchText))
        const maxAmountOfResultsToShow = 7

        const searchResults = filteredResults.slice(0, maxAmountOfResultsToShow).map(product => {
            const highlightedProductName = [
                product.name.substring(0, product.name.indexOf(searchText)),
                searchText,
                product.name.substring(product.name.indexOf(searchText) + searchText.length, product.name.length)
            ]

            return (
                <div className={styles.SearchResult} key={product.id} onClick={() => { history.push(`/product/${product.id}`); setSearchText("") }}>
                    <div className={styles.ImageAndNameContainer}>
                        <img src={ElectricGuitarImage} width={64} height={64} alt="image" />
                        <p>{highlightedProductName[0]}</p><p><b>{highlightedProductName[1]}</b></p><p>{highlightedProductName[2]}</p>
                    </div>
                    <ArrowRightIcon size={20} color={"#808080"} />
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
            {/* <ContainerThatCloseOnOutsideClickForTextFieldComponent
                content={<SearchResults />}
                openContainerCondition={searchText}
                onContainerClose={() => setSearchText("")}
                parentContainerReference={parentContainerReference}
            /> */}
        </div>
    )
}
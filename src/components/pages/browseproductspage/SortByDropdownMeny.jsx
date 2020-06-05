import React, { useState, useRef, useEffect } from "react"
import styles from "./SortByDropdownMenu.module.scss"
import { ArrowDownIcon, ArrowUpIcon } from "../../utils/Icons"
import { useDispatch, useSelector } from "react-redux"
import { sortProducts } from "../../../redux/actions/products"
import { updateSortAndFilterSelections } from "../../../redux/actions/products"
import ContainerThatCloseOnOutsideClick from "../../utils/ContainerThatCloseOnOutsideClick"


export default function SortByDropdownMenu() {
    const sortByCategoryOptions = [
        { categoryOption: "popularity", sortParameter: "averageReviewStars", doReverseSort: true },
        { categoryOption: "price (lowest)", sortParameter: "price", doReverseSort: false },
        { categoryOption: "price (highest)", sortParameter: "price", doReverseSort: true },
        { categoryOption: "alphabetical order", sortParameter: "name", doReverseSort: false },
    ]
    const [isShowingDropdownList, setShowingDropdownList] = useState(false)
    const sortSelection = useSelector((state) => state.productsortandfilterselections.currentSelections)
    const parentContainerReference = useRef()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(sortProducts({ sortParameter: sortSelection.sortParameter, doReverseSort: sortSelection.doReverseSort }))
    }, [sortSelection])


    const dropdownList = () => {
        return (
            <div className={styles.DropdownList}>
                {sortByCategoryOptions.map(option =>
                    <div key={option.categoryOption} className={styles.ListItem} onClick={() => {
                        dispatch(updateSortAndFilterSelections({ sortParameter: option.sortParameter, doReverseSort: option.doReverseSort }))
                        setShowingDropdownList(false)
                    }}>{`Sort by ${option.categoryOption}`}</div>
                )}
            </div>
        )
    }


    return (
        <div className={styles.SortByDropdownMenu} ref={parentContainerReference}>

            <div className={styles.ChosenSortByCategory} onClick={() => setShowingDropdownList(!isShowingDropdownList)}>
                <p>{`Sort by ${sortByCategoryOptions.find(s => s.sortParameter === sortSelection.sortParameter && s.doReverseSort === sortSelection.doReverseSort).categoryOption}`}</p>
                {isShowingDropdownList ? <ArrowUpIcon size={24} color="#000000" /> : <ArrowDownIcon size={24} color="#000000" />}
            </div>

            <ContainerThatCloseOnOutsideClick
                content={dropdownList()}
                parentComponentReference={parentContainerReference}
                isVisible={isShowingDropdownList}
                onContainerClose={() => setShowingDropdownList(false)}
            />
        </div>
    )
}
import React, { useState, useRef, useEffect } from "react"
import styles from "./SortByDropdownMenu.module.scss"
import { ArrowDownIcon, ArrowUpIcon } from "../../utils/Icons"
import ContainerThatDisappearOnOutsideClick from "../../utils/ContainerThatDisappearOnOutsideClick"
import { useDispatch } from "react-redux"
import { sortProducts } from "../../../redux/actions/app/products"


export default function SortByDropdownMenu() {
    const sortByCategoryOptions = [
        { categoryOption: "popularity", sortParameter: "averageReviewStars", doReverseSort: true },
        { categoryOption: "price (lowest)", sortParameter: "price", doReverseSort: false },
        { categoryOption: "price (highest)", sortParameter: "price", doReverseSort: true },
        { categoryOption: "alphabetical order", sortParameter: "name", doReverseSort: false },
    ]
    const [chosenSortByOption, setChosenSortByOption] = useState(sortByCategoryOptions[0])
    const [isShowingDropdownList, setIsShowingDropdownList] = useState(false)
    const parentContainerReference = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sortProducts({ sortParameter: chosenSortByOption.sortParameter, doReverseSort: chosenSortByOption.doReverseSort }))
    }, [])

    const SortByDropdownList = () => {
        return (
            <div className={styles.SortByDropdownList}>
                {sortByCategoryOptions.map(option =>
                    <div className={styles.ListItem} onClick={() => {
                        setChosenSortByOption(option)
                        setIsShowingDropdownList(false)
                        dispatch(sortProducts({ sortParameter: option.sortParameter, doReverseSort: option.doReverseSort }))
                    }}>{`Sort by ${option.categoryOption}`}</div>
                )}
            </div>
        )
    }

    return (
        <div className={styles.SortByDropdownMenu} ref={parentContainerReference}>
            <div className={styles.ChosenSortByCategory} onClick={() => setIsShowingDropdownList(!isShowingDropdownList)}>
                <p>{`Sort by ${chosenSortByOption.categoryOption}`}</p>
                {isShowingDropdownList ? <ArrowUpIcon size={15} color="#000000" /> : <ArrowDownIcon size={15} color="#000000" />}
            </div>
            <ContainerThatDisappearOnOutsideClick
                containerContent={<SortByDropdownList />}
                openContainerCondition={isShowingDropdownList}
                onContainerClose={() => setIsShowingDropdownList(false)}
                parentContainerReference={parentContainerReference}
            />
        </div>
    )
}


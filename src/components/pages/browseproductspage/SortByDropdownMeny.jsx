import React, { useState, useRef } from "react"
import styles from "./SortByDropdownMenu.module.scss"
import { ArrowDownIcon, ArrowUpIcon } from "../../utils/Icons"
import ContainerThatDisappearOnOutsideClick from "../../utils/ContainerThatDisappearOnOutsideClick"


export default function SortByDropdownMenu() {
    const sortByCategoryOptions = ["popularity", "price (lowest)", "price (highest)", "alphabetical order"]
    const [chosenSortByCategory, setChosenSortByCategory] = useState(sortByCategoryOptions[0])
    const [isShowingDropdownList, setIsShowingDropdownList] = useState(false)
    const parentContainerReference = useRef()

    const SortByDropdownList = () => {
        return (
            <div className={styles.SortByDropdownList}>
                {sortByCategoryOptions.map(option =>
                    <div className={styles.ListItem} onClick={() => {
                        setChosenSortByCategory(option)
                        setIsShowingDropdownList(false)
                    }}>{`Sort by ${option}`}</div>
                )}
            </div>
        )
    }

    return (
        <div className={styles.SortByDropdownMenu} ref={parentContainerReference}>
            <div className={styles.ChosenSortByCategory} onClick={() => setIsShowingDropdownList(!isShowingDropdownList)}>
                <p>{`Sort by ${chosenSortByCategory}`}</p>
                {isShowingDropdownList ? <ArrowUpIcon size={15} color="000000" /> : <ArrowDownIcon size={15} color="000000" />}
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
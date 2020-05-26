import React, { useEffect, useState, useRef } from "react"

// Used for all the dropdown menus as well as the modals were clicking outside of the container should close it.
export default function ContainerThatDisappearOnOutsideClick({ containerContent, openContainerCondition, onContainerClose, parentContainerReference }) {
    const reference = useRef()

    const handleClickOutside = (event) => {
        const isClickInsideThisComponent = reference.current.contains(event.target)
        const isClickInsideParentComponent = parentContainerReference ? parentContainerReference.current.contains(event.target) : false

        if (isClickInsideThisComponent || isClickInsideParentComponent) {
            return;
        }
        onContainerClose()
    }

    useEffect(() => {
        if (openContainerCondition) {
            document.addEventListener("mousedown", handleClickOutside)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [openContainerCondition])


    return (
        <div ref={reference}>
            {openContainerCondition && containerContent}
        </div>
    )

}

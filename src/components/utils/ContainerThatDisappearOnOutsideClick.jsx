import React, { useEffect, useState, useRef } from "react"


export default function ContainerThatDisappearOnOutsideClick({ containerContent, openContainerCondition, onContainerClose }) {
    const reference = useRef()

    const handleClickOutside = (event) => {
        if (reference.current.contains(event.target)) {
            return;
        }
        onContainerClose()
    }

    useEffect(() => {
        if (openContainerCondition) {
            document.addEventListener("mousedown", handleClickOutside)
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside)
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

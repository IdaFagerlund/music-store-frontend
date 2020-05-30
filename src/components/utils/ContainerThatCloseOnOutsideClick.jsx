import React, { useEffect, useState, useRef } from "react"


export default function ContainerThatCloseOnOutsideClick({ content, parentComponentReference, isVisible, onContainerClose }) {
    const childComponentReference = useRef()

    const handleNextClick = (event) => {
        const isClickOnChildComponent = childComponentReference.current.contains(event.target)
        const isClickOnParentComponent = parentComponentReference ? parentComponentReference.current.contains(event.target) : false

        if (isClickOnChildComponent || isClickOnParentComponent) {
            return
        }
        onContainerClose()
    }

    useEffect(() => {
        isVisible ? document.addEventListener("mousedown", handleNextClick) : document.removeEventListener("mousedown", handleNextClick)
        return () => { document.removeEventListener("mousedown", handleNextClick) }
    }, [isVisible])

    return (
        <div ref={childComponentReference}>
            {isVisible && content}
        </div>
    )
}
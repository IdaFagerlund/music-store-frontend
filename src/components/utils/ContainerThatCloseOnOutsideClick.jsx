import React, { useEffect, useState, useRef } from "react"

export default function ContainerThatCloseOnOutsideClickForClickComponent({ clickTriggerComponent, content, onContainerClose }) {
    const [open, setOpen] = useState(false)
    const node = useRef()


    const handleClickOutside = (event) => {
        if (node.current.contains(event.target)) {
            return;
        }
        if (onContainerClose) {
            onContainerClose()
        }
        setOpen(false)
    }

    useEffect(() => {

        if (open) {
            document.addEventListener("mousedown", handleClickOutside)
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [open])


    return (
        <div ref={node}>
            {clickTriggerComponent && <div onClick={e => setOpen(!open)}>{clickTriggerComponent}</div>}
            {open && content}
        </div>
    )

}


export function ContainerThatCloseOnOutsideClickForModalComponent({ content, onContainerClose }) {
    const [open, setOpen] = useState(true)
    const node = useRef()


    const handleClickOutside = (event) => {
        if (node.current.contains(event.target)) {
            return;
        }
        if (onContainerClose) {
            onContainerClose()
        }
        setOpen(false)
    }

    useEffect(() => {
        if (open) {
            console.log("adding event")
            document.addEventListener("mousedown", handleClickOutside)
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])


    return (
        <div ref={node}>
            {open && content}
        </div>
    )

}


export function ContainerThatCloseOnOutsideClickForTextFieldComponent({ content, openContainerCondition, onContainerClose, parentContainerReference }) {
    const node = useRef()

    const handleClickOutside = (event) => {
        const isClickInsideThisComponent = node.current.contains(event.target)
        const isClickInsideParentComponent = parentContainerReference ? parentContainerReference.current.contains(event.target) : false

        if (isClickInsideThisComponent || isClickInsideParentComponent) {
            return;
        }
        if (onContainerClose) {
            onContainerClose()
        }
    }

    useEffect(() => {
        if (openContainerCondition) {
            document.addEventListener("mousedown", handleClickOutside)
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => { document.removeEventListener("mousedown", handleClickOutside) }

    }, [openContainerCondition])


    return (
        <div ref={node}>
            {openContainerCondition && content}
        </div>
    )

}

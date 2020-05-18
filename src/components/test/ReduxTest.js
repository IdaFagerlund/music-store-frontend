import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { testFetch } from "../../redux/actions/test/testactions"

export default function Test() {
    const testData = useSelector(state => state.testreducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(testFetch())
    }, [])

    return (
        <div>
            {testData.error ? "error" : "no error"}
            <br />
            {testData.isPending ? "pending" : "not pending"}
            <br />
            {testData.testData}
        </div>
    )
}
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { testFetch } from "../../redux/actions/test/testactions"
import styles from "../scss/ReduxTest.module.scss"

export default function Test() {
	const testData = useSelector((state) => state.testreducer)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(testFetch())
	}, [])

	return (
		<div className={styles.testdiv}>
			<h2>Heading</h2>
			<p>Paragraph</p>
			{testData.error ? "error" : "no error"}
			<br />
			{testData.isLoading ? "pending" : "not pending"}
			<br />
			{testData.testData}
		</div>
	)
}

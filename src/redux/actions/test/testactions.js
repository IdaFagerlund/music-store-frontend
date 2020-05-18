export const testFetch = () => {
	return (dispatch) => {
		dispatch({
			type: "FETCH_TEST_DATA_PENDING"
		})
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((data) => {
				setTimeout(function () {
					//Test pending
					dispatch({
						type: "FETCH_TEST_DATA_SUCCESS",
						payload: data
					})
				}, 2000)
			})
			.catch((error) => {
				dispatch({
					type: "FETCH_TEST_DATA_FAILURE"
				})
			})
	}
}

export const testSort = (sortParameter) => (dispatch) => {
	dispatch({
		type: "SORT_TEST_DATA",
		payload: sortParameter
	})
}

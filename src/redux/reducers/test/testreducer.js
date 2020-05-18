const initialState = {
	testData: ["hello?"],
	isLoading: false,
	error: ""
}

export default function (state = initialState, action) {
	switch (action.type) {
		case "FETCH_TEST_DATA_PENDING":
			return {
				...state,
				isLoading: true,
				error: ""
			}
		case "FETCH_TEST_DATA_SUCCESS":
			//console.log(action.payload)

			return {
				...state,
				testData: ["updated!"], //action.payload,
				isLoading: false,
				error: ""
			}
		case "FETCH_TEST_DATA_FAILURE":
			return {
				...state,
				isLoading: false,
				error: "Error loading data"
			}
		case "SORT_TEST_DATA":
			return {
				//sort stuff by payload.sortParameter
				...state
			}
		default:
			return state
	}
}

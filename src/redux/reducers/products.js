const initialState = {
    data: [],
    isLoading: false,
    error: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_PRODUCTS_LOADING":
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: ""
            }
        case "FETCH_PRODUCTS_FAIL":
            return {
                ...state,
                isLoading: false,
                error: "Error loading products"
            }
        case "SORT_PRODUCTS":
            const sortedData = action.payload.doReverseSort ?
                state.data.sort((a, b) => a[action.payload.sortParameter] > b[action.payload.sortParameter] ? -1 : 1) :
                state.data.sort((a, b) => a[action.payload.sortParameter] > b[action.payload.sortParameter] ? 1 : -1)

            return {
                ...state,
                data: sortedData
            }
        default:
            return state
    }
}
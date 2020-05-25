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
        case "FETCH_PRODUCTS_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: "Error loading products"
            }
        default:
            return state
    }
}
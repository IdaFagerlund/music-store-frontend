const initialState = {
    data: [],
    isLoading: false,
    error: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_PRODUCT_CATEGORIES_LOADING":
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case "FETCH_PRODUCT_CATEGORIES_SUCCESS":
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: ""
            }
        case "FETCH_PRODUCT_CATEGORIES_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: "Error loading product categories"
            }
        default:
            return state
    }
}
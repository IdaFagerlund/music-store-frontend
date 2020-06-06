import { fetchGet } from "./api-service"


export const fetchProducts = () => {
    return (dispatch) => {
        dispatch({
            type: "FETCH_PRODUCTS_LOADING"
        })
        fetchGet("/products/all/full")
            .then((response) => {
                dispatch({
                    type: "FETCH_PRODUCTS_SUCCESS",
                    payload: response.data
                })
                dispatch({
                    type: "SORT_PRODUCTS",
                    payload: { sortParameter: "averageStarRating", doReverseSort: true }
                })
            })
            .catch((errorResponse) => {
                dispatch({
                    type: "FETCH_PRODUCTS_FAIL"
                })
            })
    }
}

export const fetchProductById = (id) => {
    return () => {
        return fetchGet(`/products/${id}`)
            .then((response) => {
                return response.data
            })
            .catch((errorResponse) => {
                throw errorResponse
            })
    }
}

export const sortProducts = ({ sortParameter, doReverseSort }) => {
    return (dispatch) => {
        dispatch({
            type: "SORT_PRODUCTS",
            payload: { sortParameter, doReverseSort }
        })
    }
}

export const updateSortAndFilterSelections = ({ sortParameter, doReverseSort, mainCategory, subCategory }) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_SORT_AND_FILTER_SELECTIONS_FOR_PRODUCTS",
            payload: { sortParameter, doReverseSort, mainCategory, subCategory }
        })
    }
}

export const moveFeaturedProducts = (direction) => {
    return (dispatch) => {
        if (direction === "right") {
            dispatch({
                type: "MOVE_FEATURED_PRODUCTS_RIGHT"
            })
        }
        else if (direction === "left") {
            dispatch({
                type: "MOVE_FEATURED_PRODUCTS_LEFT"
            })
        }
    }
}



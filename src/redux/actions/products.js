import { mockProductsData, mockProductCategoriesData } from "../mockdata/mockdata.js"


export const fetchProducts = () => {
    return (dispatch) => {
        dispatch({
            type: "FETCH_PRODUCTS_LOADING"
        })
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: "FETCH_PRODUCTS_SUCCESS",
                    payload: mockProductsData
                })
                dispatch({
                    type: "SORT_PRODUCTS",
                    payload: { sortParameter: "averageReviewStars", doReverseSort: true }
                })
            })
            .catch((error) => {
                dispatch({
                    type: "FETCH_PRODUCTS_FAIL"
                })
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

export const fetchProductCategories = () => {
    return (dispatch) => {
        dispatch({
            type: "FETCH_PRODUCT_CATEGORIES_LOADING"
        })
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: "FETCH_PRODUCT_CATEGORIES_SUCCESS",
                    payload: mockProductCategoriesData
                })
            })
            .catch((error) => {
                dispatch({
                    type: "FETCH_PRODUCT_CATEGORIES_FAIL"
                })
            })
    }
}


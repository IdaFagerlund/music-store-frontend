import { mockProductsData } from "../../mockdata/mockdata.js"

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
                    type: "FETCH_PRODUCTS_FAILURE"
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
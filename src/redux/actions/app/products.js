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
            })
            .catch((error) => {
                dispatch({
                    type: "FETCH_PRODUCTS_FAILURE"
                })
            })
    }
}
import { mockProductCategoriesData } from "../../mockdata/mockdata.js"

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
                    type: "FETCH_PRODUCT_CATEGORIES_FAILURE"
                })
            })
    }
}


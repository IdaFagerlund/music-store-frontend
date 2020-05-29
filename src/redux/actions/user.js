import { mockLoginDataUser } from "../mockdata/mockdata.js"

export const login = () => {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_LOADING"
        })
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: mockLoginDataUser
                })
            })
            .catch((error) => {
                dispatch({
                    type: "LOGIN_FAIL"
                })
            })
    }
}

export const register = () => {
    return (dispatch) => {
        dispatch({
            type: "REGISTER_LOADING"
        })
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: "REGISTER_SUCCESS"
                })
            })
            .catch((error) => {
                dispatch({
                    type: "REGISTER_FAIL"
                })
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: "LOGOUT"
        })
    }
}



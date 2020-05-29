import { mockLoginDataUser } from "../mockdata/mockdata.js"

export const login = (fields) => {
    const payload = { username: fields.username, password: fields.password }

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

export const register = (fields) => {
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



import { fetchPost, fetchGet } from "./api-service"

export const login = (fields) => {
    return (dispatch) => {
        dispatch({
            type: "LOADING"
        })
        fetchPost("/users/login", { username: fields.username, password: fields.password })
            .then((response) => {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: { authorizationHeader: response.headers.get("Authorization"), data: response.data }
                })
            })
            .catch((errorResponse) => {
                if (errorResponse.status === 403) {
                    dispatch({
                        type: "SET_LOGIN_AND_REGISTER_FIELD_ERRORS",
                        payload: {
                            usernameErrorMessage: "Invalid username and password combination",
                            passwordErrorMessage: "Invalid username and password combination"
                        }
                    })
                }
                else {
                    dispatch({
                        type: "FAIL"
                    })
                }
            })
    }
}


export const refreshLogin = () => {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_REFRESH"
        })
    }
}

export const setLoginAndRegisterFieldErrors = ({ usernameErrorMessage, passwordErrorMessage, emailErrorMessage }) => {
    return (dispatch) => {
        dispatch({
            type: "SET_LOGIN_AND_REGISTER_FIELD_ERRORS",
            payload: { usernameErrorMessage, passwordErrorMessage, emailErrorMessage }
        })
    }
}

export const register = (fields) => {
    return (dispatch) => {
        dispatch({
            type: "LOADING"
        })
        fetchPost("/users/register", fields)
            .then((response) => {
                dispatch({
                    type: "REGISTER_SUCCESS"
                })
                dispatch({
                    type: "SET_MODAL_STATUS",
                    payload: { isVisible: true, content: "login" }
                })
            })
            .catch((errorResponse) => {
                if (errorResponse.status === 400) {
                    dispatch({
                        type: "SET_LOGIN_AND_REGISTER_FIELD_ERRORS",
                        payload: errorResponse.data
                    })
                }
                else {
                    dispatch({
                        type: "FAIL"
                    })
                }
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
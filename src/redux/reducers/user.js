const initialState = {
    data: {
        username: null,
        authorities: [],
        loggedIn: false,
        reviews: [],
        orders: []
    },
    isLoading: false,
    error: null,
    loginAndRegisterFieldErrors: {
        username: null,
        password: null,
        email: null
    }
}


export default function (state = initialState, action) {
    switch (action.type) {

        case "LOADING":
            return {
                ...state,
                isLoading: true,
                error: null,
                loginAndRegisterFieldErrors: { username: null, password: null, email: null }
            }
        case "LOGIN_SUCCESS":
            window.localStorage.setItem("token", action.payload.authorizationHeader)
            window.localStorage.setItem("username", action.payload.data.username)
            window.localStorage.setItem("authorities", action.payload.data.authorities)
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload.data,
                    loggedIn: true
                },
                isLoading: false
            }
        case "LOGIN_REFRESH":
            if (window.localStorage.getItem("token") != null) {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        username: window.localStorage.getItem("username"),
                        authorities: [window.localStorage.getItem("authorities")],
                        loggedIn: true
                    }
                }
            }
            return {
                ...state
            }
        case "LOGOUT":
            window.localStorage.removeItem("token")
            window.localStorage.removeItem("username")
            window.localStorage.removeItem("authorities")
            return {
                ...state,
                data: {
                    username: null,
                    authorities: [],
                    loggedIn: false
                },
            }
        case "SET_LOGIN_AND_REGISTER_FIELD_ERRORS":
            return {
                ...state,
                isLoading: false,
                loginAndRegisterFieldErrors: {
                    username: action.payload.usernameErrorMessage !== undefined ? action.payload.usernameErrorMessage : state.loginAndRegisterFieldErrors.username,
                    password: action.payload.passwordErrorMessage !== undefined ? action.payload.passwordErrorMessage : state.loginAndRegisterFieldErrors.password,
                    email: action.payload.emailErrorMessage !== undefined ? action.payload.emailErrorMessage : state.loginAndRegisterFieldErrors.email
                }
            }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                isLoading: false
            }
        case "FAIL":
            return {
                ...state,
                isLoading: false,
                error: "Server error"
            }

        default:
            return state
    }
}
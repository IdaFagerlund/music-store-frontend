const initialState = {
    data: {
        username: "My page",
        access: [],
        loggedIn: false
    },
    isLoading: false,
    error: {
        username: null,
        password: null,
        email: "Unavailable email"
    }
}

//TODO: set jwt cookie at login. remove at logout, send authorization header with the jwt at every request

export default function (state = initialState, action) {
    switch (action.type) {
        case "LOGIN_LOADING":
            return {
                ...state,
                isLoading: true,
                error: { username: null, password: null, email: null }
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                data: {
                    ...action.payload,
                    loggedIn: true
                },
                isLoading: false
            }
        case "LOGIN_FAIL":
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        case "REGISTER_LOADING":
            return {
                ...state,
                isLoading: true,
                error: { username: null, password: null, email: null }
            }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                isLoading: false
            }
        case "REGISTER_FAIL":
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        case "LOGOUT":
            return {
                ...state,
                data: {
                    username: "My page",
                    access: [],
                    loggedIn: false
                },
            }
        default:
            return state
    }
}
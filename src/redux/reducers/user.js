const initialState = {
    data: {
        username: "My page",
        access: []
    },
    isLoading: false,
    error: ""
}

//TODO: remember to set cookies and send authorization headers etc when connecting to the real backend

export default function (state = initialState, action) {
    switch (action.type) {
        case "LOGIN_LOADING":
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: ""
            }
        case "LOGIN_FAIL":
            return {
                ...state,
                isLoading: false,
                error: "Error logging in" //todo, grab error messages from backend payload? for example invalid username etc
            }
        case "REGISTER_LOADING":
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                isLoading: false,
                error: ""
            }
        case "REGISTER_FAIL":
            return {
                ...state,
                isLoading: false,
                error: "Error registering new user"
            }
        case "LOGOUT":
            return {
                ...state,
                data: {
                    username: "My page",
                    access: []
                },
            }
        default:
            return state
    }
}
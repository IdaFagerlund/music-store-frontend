const initialState = {
    isVisible: true,
    content: "login"
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "SET_MODAL_STATUS":
            return {
                ...state,
                isVisible: action.payload.isVisible,
                content: action.payload.content
            }
        default:
            return state
    }
}
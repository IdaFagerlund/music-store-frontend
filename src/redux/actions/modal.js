export const setModalStatus = ({ isVisible, content }) => {
    return (dispatch) => {
        dispatch({
            type: "SET_MODAL_STATUS",
            payload: { isVisible, content }
        })
    }
}
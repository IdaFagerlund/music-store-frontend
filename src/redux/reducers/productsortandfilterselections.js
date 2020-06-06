const initialState = {
    currentSelections: {
        sortParameter: "averageStarRating",
        doReverseSort: true,
        mainCategory: "All",
        subCategory: null
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "UPDATE_SORT_AND_FILTER_SELECTIONS_FOR_PRODUCTS":
            return {
                currentSelections: {
                    sortParameter: action.payload.sortParameter !== undefined ? action.payload.sortParameter : state.currentSelections.sortParameter,
                    doReverseSort: action.payload.doReverseSort !== undefined ? action.payload.doReverseSort : state.currentSelections.doReverseSort,
                    mainCategory: action.payload.mainCategory !== undefined ? action.payload.mainCategory : state.currentSelections.mainCategory,
                    subCategory: action.payload.subCategory !== undefined ? action.payload.subCategory : state.currentSelections.subCategory
                }
            }
        default:
            return state
    }
}

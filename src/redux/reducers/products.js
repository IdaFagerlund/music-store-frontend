const initialState = {
    data: {
        all: [],
        featured: []
    },
    isLoading: false,
    error: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_PRODUCTS_LOADING":
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                ...state,
                data: {
                    all: action.payload,
                    featured: action.payload.filter(product => product.isFeatured === true)
                },
                isLoading: false,
                error: ""
            }
        case "FETCH_PRODUCTS_FAIL":
            return {
                ...state,
                isLoading: false,
                error: "Error loading products"
            }
        case "SORT_PRODUCTS":
            const sortedData = action.payload.doReverseSort ?
                state.data.all.sort((a, b) => a[action.payload.sortParameter] > b[action.payload.sortParameter] ? -1 : 1) :
                state.data.all.sort((a, b) => a[action.payload.sortParameter] > b[action.payload.sortParameter] ? 1 : -1)

            return {
                ...state,
                data: {
                    all: sortedData,
                    featured: state.data.featured
                }
            }
        case "MOVE_FEATURED_PRODUCTS_LEFT":
            const firstElement = state.data.featured.shift()

            return {
                ...state,
                data: {
                    ...state.data,
                    featured: [...state.data.featured, firstElement]
                }
            }
        case "MOVE_FEATURED_PRODUCTS_RIGHT":
            const lastElement = state.data.featured.pop()

            return {
                ...state,
                data: {
                    ...state.data,
                    featured: [lastElement, ...state.data.featured]
                }
            }
        default:
            return state
    }
}

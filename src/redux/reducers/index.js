import { combineReducers } from "redux"
import productsortandfilterselections from "./productsortandfilterselections"
import products from "./products"
import user from "./user"
import modal from "./modal"

export default combineReducers({
	products,
	productsortandfilterselections,
	user,
	modal
})

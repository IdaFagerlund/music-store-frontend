import { combineReducers } from "redux"
import productsortandfilterselections from "./productsortandfilterselections"
import productCategories from "./productcategories"
import products from "./products"
import user from "./user"
import modal from "./modal"

export default combineReducers({
	products,
	productCategories,
	productsortandfilterselections,
	user,
	modal
})

import { combineReducers } from "redux"
import productsortandfilterselections from "./productsortandfilterselections"
import productCategories from "./productcategories"
import products from "./products"
import user from "./user"

export default combineReducers({
	products,
	productCategories,
	productsortandfilterselections,
	user
})

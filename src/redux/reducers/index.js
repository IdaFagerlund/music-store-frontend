import { combineReducers } from "redux"
import productsortandfilterselections from "./productsortandfilterselections"
import productCategories from "./productcategories"
import products from "./products"

export default combineReducers({
	products,
	productCategories,
	productsortandfilterselections
})

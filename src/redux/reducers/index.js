import { combineReducers } from "redux"
import testreducer from "./test/testreducer"
import productCategories from "./productcategories"
import products from "./products"

export default combineReducers({
	testreducer,
	productCategories,
	products
})

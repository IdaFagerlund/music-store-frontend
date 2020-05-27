import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import "./scss/global/GlobalStyles.scss"
import { useDispatch } from "react-redux"
import Header from "./pageheader/PageHeader"
import Footer from "./pagefooter/PageFooter"
import AboutPage from "./pages/aboutpage/AboutPage"
import BrowseProductsPage from "./pages/browseproductspage/BrowseProductsPage"
import HomePage from "./pages/homepage/HomePage"
import ProductDetailsPage from "./pages/productdetailspage/ProductDetailsPage"
import { fetchProducts } from "../redux/actions/products"

export default function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path="/product-browse" exact component={BrowseProductsPage}></Route>
					<Route path="/product/" component={ProductDetailsPage}></Route>
					<Route path="/about" exact component={AboutPage}></Route>
					<Route path="/" exact component={HomePage}></Route>
					<Route path="*" component={HomePage}>
						<Redirect to={{ pathName: "/" }} />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

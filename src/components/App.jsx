import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import "./scss/global/GlobalStyles.scss"
import { useDispatch, useSelector } from "react-redux"
import Header from "./global/pageheader/PageHeader"
import Footer from "./global/pagefooter/PageFooter"
import AboutPage from "./pages/aboutpage/AboutPage"
import UserPage from "./pages/userpage/UserPage"
import AdminPage from "./pages/adminpage/AdminPage"
import BrowseProductsPage from "./pages/browseproductspage/BrowseProductsPage"
import HomePage from "./pages/homepage/HomePage"
import ProductDetailsPage from "./pages/productdetailspage/ProductDetailsPage"
import { fetchProducts, refreshLogin } from "../redux/actions"
import Modal from "./utils/Modal"

export default function App() {
	const user = useSelector((state) => state.user.data)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(refreshLogin())
		dispatch(fetchProducts())
	}, [])

	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path="/products" exact component={BrowseProductsPage}></Route>
					<Route path="/product/" component={ProductDetailsPage}></Route>
					{user.authorities.includes("ROLE_USER") && <Route path={`/user/${user.username}`} exact component={UserPage}></Route>}
					{user.authorities.includes("ROLE_ADMIN") && <Route path="/admin" exact component={AdminPage}></Route>}
					<Route path="/about" exact component={AboutPage}></Route>
					<Route path="/" exact component={HomePage}></Route>
					<Route path="*" component={HomePage}>
						<Redirect to={{ pathName: "/" }} />
					</Route>
				</Switch>
				<Footer />
				<Modal />
			</Router>
		</div>
	)
}

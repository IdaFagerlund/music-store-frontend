import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Switch, Redirect } from "react-router-dom"
import "./scss/global/GlobalStyles.scss"
import Header from "./pageheader/PageHeader"
import Footer from "./pagefooter/PageFooter"
import AboutPage from "./pages/aboutpage/AboutPage"
import BrowseProductsPage from "./pages/browseproductspage/BrowseProductsPage"
import HomePage from "./pages/homepage/HomePage"

export default function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path="/product-browse" exact component={BrowseProductsPage}></Route>
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

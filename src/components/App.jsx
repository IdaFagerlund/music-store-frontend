import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Switch, Redirect } from "react-router-dom"
import "./scss/global/GlobalStyles.scss"
import Header from "./pageheader/PageHeader"
import Footer from "./pagefooter/PageFooter"
import About from "./pages/about/About"
import BrowseProducts from "./pages/browseproducts/BrowseProducts"

export default function App() {
	return (
		<div>
			<Header />
			<Router>
				<Switch>
					<Route path="/products" component={BrowseProducts}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/">
						<Redirect to={{ pathname: "/products" }} />
					</Route>
				</Switch>
			</Router>
			<Footer />
		</div>
	)
}

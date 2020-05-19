import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Switch, Redirect } from "react-router-dom"
import "./scss/global/GlobalStyles.scss"
import Header from "./pageheader/PageHeader"
import Footer from "./pagefooter/PageFooter"
import About from "./pages/about/About"
import BrowseProducts from "./pages/browseproducts/BrowseProducts"
import BrowseProducts2 from "./pages/browseproducts/BrowseProducts2"

export default function App() {
	return (
		<div>
			<Header />
			<Router>
				<Switch>
					<Route path="/products" component={BrowseProducts}></Route>
					<Route path="/products2" component={BrowseProducts2}></Route>
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

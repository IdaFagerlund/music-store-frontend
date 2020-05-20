import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Switch, Redirect } from "react-router-dom"
import "./scss/global/GlobalStyles.scss"
import Header from "./pageheader/PageHeader"
import Footer from "./pagefooter/PageFooter"
import About from "./pages/about/About"
import ProductBrowse from "./pages/productbrowse/ProductBrowse"
import Home from "./pages/home/Home"

export default function App() {
	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route path="/product-browse" exact component={ProductBrowse}></Route>
					<Route path="/about" exact component={About}></Route>
					<Route path="/" exact component={Home}></Route>
					<Route path="*" component={Home}>
						<Redirect to={{ pathName: "/" }} />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

import CoalTracker from "./abis/woodtracker.json";
import React, { Component } from "react";
import Import from "./components/Import";
import Export from "./components/Export";
import ConsumerCompany from "./components/ConsumerCompany";
import Home from "./Home";
import JsonData from "./data/data.json";
import Web3 from "web3";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			account: "",
			landingPageData: {},
		};
	}
	getlandingPageData() {
		this.setState({ landingPageData: JsonData });
	}
	async componentDidMount() {
		this.getlandingPageData();
	}

	render() {
		return (
			<HashRouter basename="/">
				<div className="App">
					<Route path="/" exact component={Home}></Route>
					<Route path="/Import" component={Import}></Route>
					<Route path="/Export" component={Export}></Route>
					<Route
						path="/ConsumerCompany"
						component={ConsumerCompany}></Route>
				</div>
			</HashRouter>
		);
	}
}

export default App;

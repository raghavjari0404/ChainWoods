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
	async loadWeb3() {
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
			try {
				// Request account access if needed
				await window.ethereum.enable();
				console.log(window.web3);
				//console.log(web3.eth.getAccounts());
				// Acccounts now exposed
			} catch (error) {
				// User denied account access...
			}
		}
		// Legacy dapp browsers...
		else if (window.web3) {
			window.web3 = new Web3(window.web3.currentProvider);
			console.log(window.web3);
			// Acccounts always exposed
		}
		// Non-dapp browsers...
		else {
			console.log(
				"Non-Ethereum browser detected. You should consider trying MetaMask!",
			);
		}
	}
	async componentDidMount() {
		await this.loadWeb3();
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

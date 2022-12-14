import React, { Component } from "react";
import ReactDOM from "react-dom";
import QrScanner from "qr-scanner";
//import Select from 'react-select';
import CoalTracker from "../abis/chainwoods.json";
import countryList from "react-select-country-list";
import {
	CountryDropdown,
	RegionDropdown,
	CountryRegionData,
} from "react-country-region-selector";
import crypt from "crypto-js";
//import QRCode from "react-qr-code";
import QRCode from "qrcode.react";
import Web3 from "web3";
import Parse from "parse";
import jsQR from "jsqr";
import QRScan from "qrscan";
import png from "upng-js";

import {
	Form,
	Modal,
	Header,
	Icon,
	Button,
	Input,
	Dropdown,
	Menu,
	Radio,
	Message,
	Segment,
	Checkbox,
	Confirm,
	Grid,
	Item,
	Container,
	Table,
	Image,
	Step,
	Label,
} from "semantic-ui-react";
//import {
//DateInput
//} from 'semantic-ui-calendar-react';
// const ipfsClient = require('ipfs-http-client');
// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'http' }); // leaving out the arguments will default to these values
// const buffer = ipfs.Buffer;

export default class Import extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			coaltracker: null,
			account: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async componentDidMount() {
		await this.loadWeb3();
		await this.loadBlockchainData();
	}
	async loadWeb3() {
		// if (window.ethereum) {
		//   window.web3 = new Web3(window.ethereum);
		//   try {
		//     // Request account access if needed
		//     await window.ethereum.enable();
		//     console.log(window.web3);
		//     //console.log(web3.eth.getAccounts());
		//     // Acccounts now exposed
		//   } catch (error) {
		//     // User denied account access...
		//   }
		// }
		// // Legacy dapp browsers...
		// else if (window.web3) {
		//   window.web3 = new Web3(window.web3.currentProvider);
		//   console.log(window.web3);
		//   // Acccounts always exposed
		// }
		// // Non-dapp browsers...
		// else {
		//   console.log(
		//     "Non-Ethereum browser detected. You should consider trying MetaMask!"
		//   );
		// }
	}

	async loadBlockchainData() {
		// const web3=window.web3;
		// const accounts=await web3.eth.getAccounts();
		// this.setState({account:accounts[0]});
		// window.ethereum.on('accountsChanged', function (accounts) {
		//   // Time to reload your interface with accounts[0]!
		//   alert("Account changed");
		//   this.setState({account:accounts[0]});
		// }.bind(this));
		//console.log(web3);
		//console.log(accounts);
		//
		//  const networkId=await web3.eth.net.getId();
		//   const networkdata=CoalTracker.networks[networkId];
		//   if(networkdata)
		//   {
		//     const coaltracker=new web3.eth.Contract(CoalTracker.abi,networkdata.address);
		//     this.setState({coaltracker});
		//   }
	}

	handleSubmit = async (event) => {
		event.preventDefault();
		let permit;
		permit = "true";
		if (this.state.id === "PID123") {
			alert("This is verified import coal. You are free to trade");
		} else {
			alert("This is unverified imported coal. You can't trade this.");
		}
	};

	handleChange = (event, { name, value }) => {
		if (this.state.hasOwnProperty(name)) {
			this.setState({
				[name]: value,
			});
		}
	};

	render() {
		return (
			<Segment
				inverted
				style={{
					backgroundImage: "url('img/woodwarehouse.jpeg')",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundBlendMode: "overlay",
					backgroundSize: "cover",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					height: "100vw",
				}}>
				<h1>
					{" "}
					<font color="white">
						Consumer Company Verification
					</font>{" "}
				</h1>
				<Segment className="raised segment">
					<Message
						attached
						header="Welcome company!"
						content="Check whether you are buying trusted or smuggled coal here"
						icon=""
					/>
					<Form style={{ width: "100%" }}>
						<br />

						<div
							class="ui inverted segment"
							style={{ background: "#545454", color: "black" }}>
							<div class="ui big inverted relaxed divided list">
								<div class="item">
									<div class="left floated">
										<div class="header">
											1. You may be consumer company or
											distributor or retailer.
										</div>
									</div>
								</div>
								<div class="item">
									<div class="left floated">
										<div class="header">
											2. Verify whether the Wood you are
											buying is smuggled or not.
										</div>
									</div>
								</div>
								<div class="item">
									<div class="left floated">
										<div class="header">
											3. If you purchase smuggled
											Wood,that Wood won't be legal tender
											and you may face fraud cases.
										</div>
									</div>
								</div>
								<div class="item">
									<div class="left floated">
										<div class="header">
											4. Everything is recorded on
											blockchain. Think before perfoming
											any crime.
										</div>
									</div>
								</div>
								<div class="item">
									<div class="left floated">
										<div class="header">
											5. So, Verify your coal here and
											then trade or consume it.
										</div>
									</div>
								</div>
							</div>
						</div>
						<br />
						<Form.Field>
							<Input
								label="Production Id"
								fluid
								ref={(input) => {
									this.id = input;
								}}
								value={this.state.id}
								onChange={(event) =>
									this.setState({
										id: event.target.value,
									})
								}
							/>{" "}
						</Form.Field>

						<Button
							disabled={this.state.id == ""}
							className="fluid"
							primary
							onClick={this.handleSubmit}>
							{" "}
							Verify{" "}
						</Button>
					</Form>{" "}
				</Segment>{" "}
				<br />
				<br /> <br />
				<br /> <br />
				<br /> <br />
				<br />{" "}
			</Segment>
		);
	}
}

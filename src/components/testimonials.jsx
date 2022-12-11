import React, { Component } from "react";
import { Link } from "react-router-dom";
export class testimonials extends Component {
	render() {
		return (
			<div id="testimonials">
				<h1>Want to verify your Wood?</h1>

				<Link
					to={{
						pathname: "/ConsumerCompany",
					}}>
					<input
						type="button"
						value="Click here to verify"
						className="btn btn-custom btn-lg page-scroll"
					/>{" "}
				</Link>

				<br />
				<br />
				<br />
			</div>
		);
	}
}

export default testimonials;

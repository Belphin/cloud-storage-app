import React from "react";
import Input from "../../utils/input/input";
import "./registration.scss";

const Registration = () => {
	return (
		<div className="registration">
			<div className="registration__header">Registration</div>
			<Input type="text" placeholder="Enter your email..." />
			<Input type="password" placeholder="Enter password..." />
			<button className="registration__btn">Login</button>
		</div>
	);
};

export default Registration;

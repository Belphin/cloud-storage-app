import React, { useState } from "react";
import Input from "../../utils/input/input";
import "./registration.scss";
import { useDispatch } from "react-redux";
import { setRegistr } from "../../redux/actionCreator";

const Registration = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="registration">
			<div className="registration__header">Registration</div>
			<Input
				value={email}
				setValue={setEmail}
				type="text"
				placeholder="Enter your email..."
			/>
			<Input
				value={password}
				setValue={setPassword}
				type="password"
				placeholder="Enter password..."
			/>
			<button
				className="registration__btn"
				onClick={() => dispatch(setRegistr({ email, password }))}>
				Login
			</button>
		</div>
	);
};

export default Registration;

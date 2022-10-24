import React, { useState } from "react";
import Input from "../../utils/input/input";
import "./authorization.scss";
import { useDispatch } from "react-redux";
import { setRegistr } from "../../redux/actionCreator";

const Registration = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const registration = () => {
		if (password !== confirmPassword) {
			alert("Password must match");
			return;
		}
		dispatch(setRegistr({ email, password }));
	};

	return (
		<div className="authorization">
			<div className="authorization__header">Registration</div>
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
			<Input
				value={confirmPassword}
				setValue={setConfirmPassword}
				type="password"
				placeholder="Confirm the password..."
			/>
			<button className="authorization__btn" onClick={registration}>
				Login
			</button>
		</div>
	);
};

export default Registration;

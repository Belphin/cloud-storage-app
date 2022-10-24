import React, { useState } from "react";
import Input from "../../utils/input/input";
import "./authorization.scss";
import { useDispatch } from "react-redux";
import { setAuthorization } from "../../redux/actionCreator";

const Login = () => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const registration = () => {
		dispatch(setAuthorization({ email, password }));
	};

	return (
		<div className="authorization">
			<div className="authorization__header">Authorization</div>
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
			<button className="authorization__btn" onClick={registration}>
				Login
			</button>
		</div>
	);
};

export default Login;

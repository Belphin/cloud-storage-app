import React from "react";
import "./input.scss";

const Input = (props) => {
	return (
		<div>
			<input type={props.type} placeholder={props.placeholder} />
		</div>
	);
};

export default Input;

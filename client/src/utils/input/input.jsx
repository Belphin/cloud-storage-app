import React from "react";
import "./input.scss";

const Input = (props) => {
	return (
		<div>
			<input
				onChange={(e) => props.setValue(e.target.value)}
				value={props.value}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default Input;

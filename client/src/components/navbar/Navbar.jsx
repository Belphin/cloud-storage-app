import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="container">
				<div className="navbar__header">CLOUD STORAGE</div>
				<div className="navbar__login">
					<NavLink>Login</NavLink>
				</div>
				<div className="navbar__registration">
					<NavLink to="/registration">Registration</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

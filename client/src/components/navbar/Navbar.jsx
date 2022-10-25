import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actionCreator";

const Navbar = ({ isAuth }) => {
	const dispatch = useDispatch();
	return (
		<div className="navbar">
			<div className="container">
				<div className="navbar__header">CLOUD STORAGE</div>
				{!isAuth && (
					<div className="navbar__login">
						<NavLink to="/login">Login</NavLink>
					</div>
				)}
				{!isAuth && (
					<div className="navbar__registration">
						<NavLink to="/registration">Registration</NavLink>
					</div>
				)}
				{isAuth && (
					<div className="navbar__login" onClick={() => dispatch(logoutUser())}>
						<NavLink to="/login">Logout</NavLink>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;

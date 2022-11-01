import React from "react";
import Navbar from "./navbar/Navbar";
import "./app.scss";
import AppRouter from "./AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAuthorization } from "../redux/actionCreator";

function App() {
	const isAuth = useSelector((state) => state.user.isAuth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setAuthorization());
	});

	return (
		<div className="app">
			<Navbar isAuth={isAuth} />
			<div className="wrap">
				<AppRouter isAuth={isAuth} />
			</div>
		</div>
	);
}

export default App;

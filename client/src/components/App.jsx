import React from "react";
import Navbar from "./navbar/Navbar";
import "./app.scss";
import AuthRouter from "./AuthRouter";
import { useSelector } from "react-redux";

function App() {
	const isAuth = useSelector((state) => state.user.isAuth);
	return (
		<div className="app">
			<Navbar />
			<div className="wrap">{!isAuth && <AuthRouter />}</div>
		</div>
	);
}

export default App;

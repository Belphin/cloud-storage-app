import React from "react";
import Navbar from "./navbar/Navbar";
import "./app.scss";
import AppRouter from "./AppRouter";

function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="wrap">
				<AppRouter />
			</div>
		</div>
	);
}

export default App;

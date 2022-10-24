import Login from "../components/authorization/Login";
import Registration from "../components/authorization/Registration";

export const publicRoutes = [
	{ path: "/registration", element: <Registration /> },
	{ path: "/login", element: <Login /> },
];

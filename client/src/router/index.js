import Login from "../components/authorization/Login";
import Registration from "../components/authorization/Registration";
import Disk from "../components/disk/Disk";

export const publicRoutes = [
	{ path: "/registration", element: <Registration /> },
	{ path: "/*", element: <Login /> },
];

export const privateRoutes = [{ path: "*", element: <Disk /> }];

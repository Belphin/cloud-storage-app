import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../redux/actionCreator";

const Disk = () => {
	const dispatch = useDispatch();
	const currentDir = useSelector((state) => state.file.currentDir);

	useEffect(() => {
		dispatch(getFiles({ dirId: currentDir }));
	}, [currentDir]);

	return <div>DISK</div>;
};

export default Disk;

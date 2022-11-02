import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles } from "../../redux/actionCreator";
import FileList from "./fileList/FileList";
import "./disk.scss";

const Disk = () => {
	const dispatch = useDispatch();
	const currentDir = useSelector((state) => state.file.currentDir);

	useEffect(() => {
		dispatch(getFiles({ dirId: currentDir }));
	}, [currentDir]);

	return (
		<div className="disk">
			<div className="disk_btns">
				<button className="disk__back">Back</button>
				<button className="disk__create">Create folder</button>
			</div>
			<FileList />
		</div>
	);
};

export default Disk;

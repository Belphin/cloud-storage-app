import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFiles, setPopupDisplay } from "../../redux/actionCreator";
import FileList from "./fileList/FileList";
import "./disk.scss";
import Popup from "./Popup";

const Disk = () => {
	const dispatch = useDispatch();
	const currentDir = useSelector((state) => state.file.currentDir);

	useEffect(() => {
		dispatch(getFiles({ dirId: currentDir }));
	}, [currentDir]);

	function showPopupHandler() {
		dispatch(setPopupDisplay("flex"));
	}

	return (
		<div className="disk">
			<div className="disk_btns">
				<button className="disk__back">Back</button>
				<button className="disk__create" onClick={() => showPopupHandler()}>
					Create folder
				</button>
			</div>
			<FileList />
			<Popup />
		</div>
	);
};

export default Disk;

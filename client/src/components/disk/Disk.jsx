import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getFiles,
	setCurrentDir,
	setPopupDisplay,
} from "../../redux/actionCreator";
import FileList from "./fileList/FileList";
import "./disk.scss";
import Popup from "./Popup";

const Disk = () => {
	const dispatch = useDispatch();
	const currentDir = useSelector((state) => state.file.currentDir);
	const dirStack = useSelector((state) => state.file.diskStack);

	useEffect(() => {
		dispatch(getFiles({ dirId: currentDir }));
	}, [currentDir]);

	function showPopupHandler() {
		dispatch(setPopupDisplay("flex"));
	}

	function backClickHandler() {
		const backdirId = dirStack.pop();
		dispatch(setCurrentDir(backdirId));
	}

	return (
		<div className="disk">
			<div className="disk_btns">
				<button className="disk__back" onClick={() => backClickHandler()}>
					Back
				</button>
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

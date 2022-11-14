import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	getFiles,
	setCurrentDir,
	setPopupDisplay,
	uploadFile,
} from "../../redux/actionCreator";
import FileList from "./fileList/FileList";
import "./disk.scss";
import Popup from "./Popup";

const Disk = () => {
	const dispatch = useDispatch();
	const currentDir = useSelector((state) => state.file.currentDir);
	const dirStack = useSelector((state) => state.file.diskStack);
	const [dragEnter, setDragEnter] = useState(false);

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

	function fileUploaderHandler(e) {
		console.log(1);
		const files = [...e.target.files];
		files.forEach((file) => dispatch(uploadFile(file, currentDir)));
	}

	function dragEnterHandler(event) {
		event.preventDefault();
		event.stopPropagation();
		setDragEnter(true);
	}

	function dragLeaveHandler(event) {
		event.preventDefault();
		event.stopPropagation();
		setDragEnter(false);
	}

	function dropHandler(event) {
		event.preventDefault();
		event.stopPropagation();
		let files = [...event.dataTransfer.files];
		setDragEnter(false);
		files.forEach((file) => dispatch(uploadFile(file, currentDir)));
	}

	return !dragEnter ? (
		<div
			className="disk"
			onDragEnter={(e) => dragEnterHandler(e)}
			onDragLeave={(e) => dragLeaveHandler(e)}
			onDragOver={(e) => dragEnterHandler(e)}>
			<div className="disk__btns">
				<button className="disk__back" onClick={() => backClickHandler()}>
					Back
				</button>
				<button className="disk__create" onClick={() => showPopupHandler()}>
					Create folder
				</button>
				<div className="disk__upload">
					<label htmlFor="disk__upload-input" className="disk__upload-label">
						Upload file
					</label>
					<input
						type="file"
						multiple={true}
						onChange={(e) => fileUploaderHandler(e)}
						id="disk__upload-input"
						className="disk__upload-input"></input>
				</div>
			</div>
			<FileList />
			<Popup />
		</div>
	) : (
		<div
			className="drop-area"
			onDrop={(e) => dropHandler(e)}
			onDragEnter={(e) => dragEnterHandler(e)}
			onDragLeave={(e) => dragLeaveHandler(e)}
			onDragOver={(e) => dragEnterHandler(e)}>
			Drag files here
		</div>
	);
};

export default Disk;

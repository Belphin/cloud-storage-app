import React from "react";
import "./file.scss";
import dirLogo from "../../../../assets/dir.svg";
import fileLogo from "../../../../assets/file.svg";
import { useDispatch, useSelector } from "react-redux";
import {
	downloadFile,
	pushToStack,
	setCurrentDir,
} from "../../../../redux/actionCreator";

const File = ({ file }) => {
	const dispatch = useDispatch();
	const currentDir = useSelector((state) => state.file.currentDir);

	function openDirHandler() {
		if (file.type === "dir") {
			dispatch(pushToStack(currentDir));
			dispatch(setCurrentDir(file._id));
		}
	}

	function downloadClickHandler(e) {
		e.stopPropagation();
		dispatch(downloadFile(file));
	}

	return (
		<div className="file" onClick={() => openDirHandler()}>
			<img
				src={file.type === "dir" ? dirLogo : fileLogo}
				alt=""
				className="file__img"
			/>
			<div className="file__name">{file.name}</div>
			<div className="file__date">{file.date.slice(0, 10)}</div>
			<div className="file__size">{file.size}</div>
			{file.type !== "dir" && (
				<button
					className="file__btn file__download"
					onClick={(e) => downloadClickHandler(e)}>
					download
				</button>
			)}
			<button className="file__btn file__delete">delete</button>
		</div>
	);
};

export default File;

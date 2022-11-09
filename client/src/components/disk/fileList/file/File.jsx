import React from "react";
import "./file.scss";
import dirLogo from "../../../../assets/dir.svg";
import fileLogo from "../../../../assets/file.svg";
import { useDispatch, useSelector } from "react-redux";
import { pushToStack, setCurrentDir } from "../../../../redux/actionCreator";

const File = ({ file }) => {
	const dispatch = useDispatch();
	const currentDir = useSelector((state) => state.file.currentDir);

	function openDirHandler() {
		if (file.type === "dir") {
			dispatch(pushToStack(currentDir));
			dispatch(setCurrentDir(file._id));
		}
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
		</div>
	);
};

export default File;

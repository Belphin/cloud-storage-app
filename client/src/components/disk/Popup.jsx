import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDir, setPopupDisplay } from "../../redux/actionCreator";
import Input from "../../utils/input/input";

const Popup = () => {
	const [dirName, setDirName] = useState("");
	const popupDisplay = useSelector((state) => state.file.popupDisplay);
	const currentDir = useSelector((state) => state.file.currentDir);
	const dispatch = useDispatch();

	function createHandler() {
		dispatch(createDir(currentDir, dirName));
		setDirName("");
		dispatch(setPopupDisplay("none"));
	}

	return (
		<div
			className="popup"
			onClick={() => dispatch(setPopupDisplay("none"))}
			style={{ display: popupDisplay }}>
			<div className="popup__content" onClick={(e) => e.stopPropagation()}>
				<div className="popup__header">
					<div className="popup__title">Create a new folder</div>
					<button
						className="popup__close"
						onClick={() => dispatch(setPopupDisplay("none"))}>
						X
					</button>
				</div>
				<Input
					type="text"
					placeholder="Enter folder name"
					value={dirName}
					setValue={setDirName}
				/>
				<button className="popup__create" onClick={() => createHandler()}>
					Create
				</button>
			</div>
		</div>
	);
};

export default Popup;

import React, { useState } from "react";
import ControlPointOutlinedIcon from "@material-ui/icons/ControlPointOutlined";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
	// Adding multiple notes
	const [newNote, setNewNote] = useState({
		title: "",
		content: "",
	});
	const handleChange = (event) => {
		const { name, value } = event.target;

		setNewNote((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};
	// Show/Hide input area
	const [isExpanded, setExpanded] = useState(false);
	const Expand = () => {
		setExpanded(true);
	};

	return (
		<div>
			<form
				className="create-note"
				onSubmit={(event) => {
					event.preventDefault();
				}}
			>
				{/* Show/Hide input area */}
				{isExpanded && (
					<input
						name="title"
						onChange={handleChange}
						value={newNote.title}
						placeholder="Title"
					/>
				)}
				<textarea
					name="content"
					onClick={Expand}
					onChange={handleChange}
					value={newNote.content}
					placeholder="Take a note..."
					// render more rows if expanded
					rows={isExpanded ? 3 : 1}
				/>
				<Zoom in={isExpanded}>
					<Fab
						onClick={() => {
							props.addItem(newNote);
							setNewNote({ title: "", content: "" });
						}}
					>
						<ControlPointOutlinedIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [notes, setNotes] = useState([]);

	const addItem = (input) => {
		setNotes((prevItems) => {
			return [...prevItems, input];
		});
	};

	const deleteItem = (id) => {
		setNotes((prevItems) => {
			return prevItems.filter((item, index) => {
				return index !== id;
			});
		});
	};

	return (
		<div>
			<Header />
			<CreateArea addItem={addItem} />
			{notes.map((note, index) => (
				<Note
					key={index}
					id={index}
					title={note.title}
					content={note.content}
					onDelete={deleteItem}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;

import React, { useState } from "react";

const EMPTY_VALUE = "";

export default function Search({ searchValue }) {
	const [inputValue, setInputValue] = useState("");
	const handleChangeInputValue = (event) => {
		const {
			target: { value },
		} = event;
		setInputValue(value);
	};

	const handleSearchValue = () => {
		setInputValue(EMPTY_VALUE);
		searchValue(inputValue);
	};
	return (
		<div>
			<input
				type="text"
				placeholder="Search news"
				value={inputValue}
				onChange={handleChangeInputValue}
			/>
			&nbsp;
			<button onClick={handleSearchValue}>Search</button>
		</div>
	);
}

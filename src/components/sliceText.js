const SliceText = (text, length = 50) => {
	let newText = text;
	if (text.length > length) {
		newText = text.slice(0, length) + "...";
	}
	return newText;
};

export default SliceText;

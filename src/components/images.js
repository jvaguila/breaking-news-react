const ShowImage = (image) => {
	if (image === null) {
		return "https://unamglobal.unam.mx/wp-content/uploads/2018/06/fakenews-990x556.jpg";
	} else {
		return image;
	}
};

export default ShowImage;

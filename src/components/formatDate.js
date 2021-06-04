import React from "react";
import Moment from "react-moment";

const DateFormat = (date) => {
	return (
		<Moment format="D MMM YYYY" withTitle>
			{date}
		</Moment>
	);
};

export default DateFormat;

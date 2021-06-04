import { useState } from "react";
import "./App.css";
import Detail from "./pages/detail";
import List from "./pages/list";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [showDetail, setShowDetail] = useState(false);
	const [newsSelect, setnewsSelect] = useState({});
	const handleNewsSelect = (item) => {
		setnewsSelect(item);
		setShowDetail(true);
	};
	const goBack = () => {
		setShowDetail(false);
	};
	return (
		<div>
			{!showDetail && <List handleNewsSelect={handleNewsSelect} />}
			{showDetail && <Detail news={newsSelect} goBack={goBack} />}
		</div>
	);
}

export default App;

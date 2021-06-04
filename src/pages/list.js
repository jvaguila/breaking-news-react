import { useState, useEffect } from "react";
import Search from "../components/search";
import Card from "../components/card";

/**
 * here api key
 */
const KEY = "";

const List = ({ handleNewsSelect }) => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		fetch(
			`http://api.mediastack.com/v1/news?access_key=${KEY}&languages=en,es`
		)
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				}
			})
			.then((res) => {
				setNews(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const searchValue = (text) => {
		fetch(
			`http://api.mediastack.com/v1/news?access_key=${key}&languages=en,es&keywords=${text}`
		)
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				}
			})
			.then((res) => {
				setNews(res.data);
			})
			.catch((err) => console.log(err));
		// console.log(text);
		// const filter = news.filter((a) => a.title.includes(text));
		// setNews(filter);
	};

	return (
		<>
			<h1 className="text-center">Breaking news</h1>
			<div className="text-center">
				<Search searchValue={searchValue} />
			</div>
			<div className="row">
				<div className="d-flex justify-content-between flex-wrap">
					{news.map((n, index) => (
						<div
							className=" col-6 p-4"
							key={index}
							onClick={() => handleNewsSelect(n)}
						>
							<Card item={n} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default List;

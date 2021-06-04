import DateFormat from "./formatDate";
import ShowImage from "./images";
import SliceText from "./sliceText";

const Card = ({ item }) => (
	<>
		<div className="d-flex">
			<div className="row">
				<div className="col-8">
					<div className="d-flex justify-content-between">
						<span className="d-block">{item.category}</span>
						<span className="d-block">
							{DateFormat(item.published_at)}
						</span>
					</div>
					<div>
						<h6 className="text-left">{item.title}</h6>
						<p className="text-left">
							{SliceText(item.description, 75)}
						</p>
					</div>
					<div className="d-flex justify-content-between">
						<span className="d-block">Author: {item.author}</span>
						<span className="d-block">
							Language: {item.language}
						</span>
					</div>
				</div>
				<div className="col-4">
					<img className="w-100 h-100" src={ShowImage(item.image)} />
				</div>
			</div>
		</div>
	</>
);

export default Card;

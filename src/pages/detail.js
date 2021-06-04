import ShowImage from "../components/images";

const Detail = ({ news, goBack }) => {
	return (
		<>
			<div className="row">
				<div className="col-3">
					<button
						type="button"
						className="btn btn-danger"
						onClick={() => goBack()}
					>
						Regresar
					</button>
				</div>
				<div className="col-9 p-10">
					<h1 className="text-center">{news.title}</h1>
					<img className="w-100" src={ShowImage(news.image)} />
				</div>
			</div>
		</>
	);
};

export default Detail;

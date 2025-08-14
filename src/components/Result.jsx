// import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import Category from "./Category.jsx";
import WeightCat from "../utils/utilfunctions.js";
import styles from "./Result.module.css";

const Result = (props) => {
	let weightType = WeightCat(props.bmi);

	return (
		<Modal onClose={props.onClose}>
			<div
				className={`relative bg-amber-100 p-5 rounded-2xl ${
					styles[weightType.cname]
				}`}
			>
				<button
					className="text-xs bg-rose-400 hover:bg-rose-500 text-white font-bold py-1 px-2 rounded absolute top-2 right-5"
					onClick={props.onClose}
				>
					X
				</button>
				<div className="mt-6">
					{/* BMI Gauge */}
					<div className="bg-gray-400 w-full h-36 mx-auto rounded-3xl pb-3 mb-3">
						<h3 className="text-2xl text-center">BMI GAUGE</h3>
					</div>
					<div className="bg-black/80 p-5 rounded-3xl">
						<h5 className="pl-5 text-3xl font-bold">
							Your BMI is {props.bmi}
						</h5>
						<Category weightCategory={weightType.weightCat} />
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default Result;

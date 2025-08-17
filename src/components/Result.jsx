// import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import Category from "./Category.jsx";
import calcWeightCategory from "../utils/utilfunctions.js";
import styles from "./Result.module.css";
import BmiGauge from "./BmiGauge.jsx";
import { categoryBgImg } from "../constants/data.js";

const Result = (props) => {
	let weightType = calcWeightCategory(props.bmi);
	// onClose={props.onClose}
	const bgImage = categoryBgImg[weightType.weightCat];
	return (
		<Modal onClose={props.onClose}>
			<div
				className={`relative bg-amber-100 p-5 max-sm:p-3 rounded-2xl ${
					styles[weightType.cname]
				}`}
			>
				<button
					className="text-xs bg-red-600 hover:bg-rose-500 text-white font-bold py-1 px-2 rounded absolute top-2 right-5"
					onClick={props.onClose}
				>
					X
				</button>
				<div className="mt-6">
					{/* BMI Gauge */}
					<div className="bg-black/85 w-full mx-auto rounded-t-3xl pb-0 mb-0">
						<h3 className="text-2xl text-center text-neutral-500 font-black pb-0.5 pt-3">
							BMI GAUGE
						</h3>
						<div className="w-full">
							<BmiGauge bmi={props.bmi} />
						</div>
					</div>
					{/* BMI Result */}
					<div className="bg-black/80  rounded-b-3xl ">
						<div
							className="p-5 pt-9 bmiResult"
							// style={{ backgroundImage: bgImage }}
							style={{ backgroundImage: `url(${bgImage})` }}
						>
							<h5 className="pl-5 max-sm:pl-2 text-3xl font-bold">
								Your BMI is {props.bmi}
							</h5>
							<Category weightCategory={weightType.weightCat} />
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default Result;

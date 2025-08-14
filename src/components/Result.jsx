// import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import Category from "./Category.jsx";
import WeightCat from "../utils/utilfunctions.js";

const Result = (props) => {
	let weightType = WeightCat(props.bmi);

	return (
		<Modal onClose={props.onClose}>
			<div>
				<h5>Your BMI is {props.bmi}</h5>
				<Category type={weightType} />
			</div>
			<button onClick={props.onClose}>Close</button>
		</Modal>
	);
};

export default Result;

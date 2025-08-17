import React from "react";
import { Categories } from "../constants/data";

const Category = (props) => {
	let currCategory = Categories[props.weightCategory];

	return (
		<div className="p-5 max-sm:p-3 max-sm:text-base max-[400px]:text-sm">
			<p className="font-bold text-lg">You are {currCategory.name}</p>
			<hr />
			<div className="py-3">
				<p className="font-bold text-lg">
					<em>Calorie Intake :</em>
				</p>
				<p>The required Calorie intake for {currCategory.calorieMen}</p>
				<p>
					The required Calorie intake for {currCategory.calorieWomen}
				</p>
			</div>
			<hr />
			<div className="py-3">
				<p className="font-bold text-lg">
					<em>Recommendation:</em>
				</p>
				<p className="">
					The recommendation for you is {currCategory.recommendation}
				</p>
			</div>
		</div>
	);
};

export default Category;

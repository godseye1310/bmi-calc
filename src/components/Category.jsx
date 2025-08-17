import React from "react";
import { Categories } from "../constants/data";

const Category = (props) => {
	let currCategory = Categories[props.weightCategory];

	return (
		<div className="p-5 max-sm:p-3 max-sm:text-base max-[400px]:text-sm">
			<p className="font-bold text-lg">You are {currCategory.name}</p>
			<hr />
			<div className="py-3">
				<h6 className="font-bold text-lg">
					<em>Calorie Intake :</em>
				</h6>
				<div className="bg-black/50 rounded-md pt-3 pb-1 px-1.5 ">
					<p>
						The required Calorie intake for <strong>Men:</strong>
						<em>
							<b>{currCategory.calorieMen}</b>
						</em>
					</p>
					<p>
						The required Calorie intake for <strong>Women:</strong>
						<em>
							<b>{currCategory.calorieWomen}</b>
						</em>
					</p>
				</div>
			</div>
			<hr />
			<div className="py-3">
				<h6 className="font-bold text-lg">
					<em>Recommendation:</em>
				</h6>
				<div className="bg-black/50 rounded-md pt-3 pb-1 px-1.5 ">
					<p className="">
						The recommendation for you is{" "}
						{currCategory.recommendation}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Category;

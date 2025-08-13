import React, { useState } from "react";

const BmiForm = () => {
	const [imperial, setImperial] = useState(false);

	const [height, setHeight] = useState("");
	const [weight, setWeight] = useState("");

	const [imperialHeight, setImperialHeight] = useState({
		feet: "",
		inches: "",
	});
	// const [weightImperial, setWeightImperial] = useState(null);

	const switchMetric = (e) => {
		// console.log("switchMetric");
		// console.log(e.target);
		e.target.innerText === "Metric"
			? setImperial(false)
			: setImperial(true);
		// clear inputs
		setHeight("");
		setWeight("");
		setImperialHeight({ feet: "", inches: "" });
		// setImperial(!imperial);
	};

	const calcBmiHandler = (e) => {
		e.preventDefault();

		let bmi = 0;

		const num_weight = parseFloat(weight);
		const num_Meter_height = parseFloat(height) * 0.01;

		if (!imperial) {
			bmi = num_weight / (num_Meter_height * num_Meter_height);
			console.log(bmi.toFixed(1));
		} else {
			let feet = Number(imperialHeight.feet);
			let inches = Number(imperialHeight.inches);

			let totalInches = feet * 12 + inches;

			bmi = 703 * (weight / (totalInches * totalInches));
			console.log(bmi.toFixed(1));
		}
	};

	return (
		<>
			<form
				onSubmit={calcBmiHandler}
				className="p-5 bg-neutral-900/65 opacity-90 rounded-2xl shadow text-center max-w-lg w-full mx-auto mt-6"
			>
				<div className="bg-indigo-300 rounded-4xl w-fit mx-auto">
					<button
						className={`rounded-s-4xl px-6 py-2 text-lg text-neutral-900 bg-indigo-300 hover:bg-indigo-500 ${
							!imperial &&
							"bg-indigo-600 hover:bg-indigo-600 text-white"
						}`}
						type="button"
						onClick={(e) => switchMetric(e)}
					>
						Metric
					</button>
					<button
						className={`rounded-e-4xl px-6 py-2 text-lg text-neutral-900 bg-indigo-300 hover:bg-indigo-500  ${
							imperial &&
							"bg-indigo-600 hover:bg-indigo-600 text-white"
						} `}
						type="button"
						onClick={(e) => switchMetric(e)}
					>
						Imperial
					</button>
				</div>

				<div className="mt-12 mx-auto max-w-sm flex flex-col gap-5 justify-center items-center ">
					{/* Height Input  */}
					<div className="max-w-60 w-full flex flex-col gap-1.5 justify-center items-center">
						<label
							className="text-lg text-neutral-300"
							htmlFor="height"
						>
							Height{" "}
							<span>
								{imperial ? "(feet & inches)" : "(in cm)"}
							</span>
						</label>
						<div className=" w-full flex gap-1 justify-center">
							{!imperial && (
								<input
									className="w-full input-field font-medium"
									type="number"
									name="height"
									id="height"
									placeholder="175 cm"
									min="30"
									max="360"
									required
									value={height}
									onChange={(e) => setHeight(e.target.value)}
								/>
							)}
							{imperial && (
								<>
									<input
										className="w-1/2 input-field "
										type="number"
										name="feet"
										id="feet"
										placeholder="6 ft"
										min="1"
										max="12"
										step="1"
										required
										value={imperialHeight.feet}
										onChange={(e) => {
											const value = Math.floor(
												Number(e.target.value)
											); // to remove decimals
											setImperialHeight({
												...imperialHeight,
												feet: value,
											});
										}}
									/>
									<input
										className="w-1/2 input-field "
										type="number"
										name="inches"
										id="inches"
										placeholder="3 in"
										min="0"
										max="11"
										step="1"
										required
										value={imperialHeight.inches}
										onChange={(e) => {
											const value = Math.floor(
												Number(e.target.value)
											);
											setImperialHeight({
												...imperialHeight,
												inches: value,
											});
										}}
									/>
								</>
							)}
						</div>
					</div>

					{/* Weight Input */}
					<div className="max-w-60 w-full flex flex-col gap-1.5 justify-center items-center">
						<label
							className="text-lg text-neutral-300"
							htmlFor="weight"
						>
							Weight <span>{imperial ? "(lbs)" : "(kg)"}</span>
						</label>
						<div className="w-full">
							<input
								className="w-full input-field "
								type="number"
								name="weight"
								id="weight"
								placeholder={imperial ? "150 lbs" : "75 kg"}
								required
								min={imperial ? "12" : "5"}
								max={imperial ? "1545" : "700"}
								value={weight}
								onChange={(e) => setWeight(e.target.value)}
							/>
						</div>
					</div>
				</div>
				{/* Submit Button */}
				<div className="mt-12 mx-auto">
					<button className="btn-submit" type="submit">
						Calculate BMI
					</button>
				</div>
			</form>
		</>
	);
};

export default BmiForm;

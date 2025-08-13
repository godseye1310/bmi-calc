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

	const switchMetric = () => {
		// console.log("switchMetric");
		setHeight("");
		setWeight("");
		setImperialHeight({ feet: "", inches: "" });
		setImperial((prev) => !prev);
	};

	const calcBmiHandler = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<form
				onSubmit={calcBmiHandler}
				className="p-5 bg-white rounded-2xl shadow text-center max-w-lg w-full mx-auto mt-10"
			>
				<div className="bg-indigo-300 rounded-4xl w-fit mx-auto">
					<button
						className={`rounded-s-4xl px-6 py-2 text-lg bg-indigo-300 hover:bg-indigo-400 ${
							!imperial && "bg-indigo-500 hover:bg-indigo-500"
						}`}
						type="button"
						onClick={() => switchMetric()}
					>
						Metric
					</button>
					<button
						className={`rounded-e-4xl px-6 py-2 text-lg bg-indigo-300 hover:bg-indigo-400  ${
							imperial && "bg-indigo-500 hover:bg-indigo-500"
						} `}
						type="button"
						onClick={() => switchMetric()}
					>
						Imperial
					</button>
				</div>

				<div className="mt-12 mx-auto max-w-sm flex flex-col gap-5 justify-center items-center ">
					{/* Height Input  */}
					<div className="max-w-60 w-full flex flex-col gap-1.5 justify-center items-center">
						<label
							className="text-lg text-neutral-500"
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
									className="w-full input-field "
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
										required
										value={imperialHeight.feet}
										onChange={(e) =>
											setImperialHeight({
												...imperialHeight,
												feet: e.target.value,
											})
										}
									/>
									<input
										className="w-1/2 input-field "
										type="number"
										name="inches"
										id="inches"
										placeholder="3 in"
										min="0"
										max="11"
										required
										value={imperialHeight.inches}
										onChange={(e) =>
											setImperialHeight({
												...imperialHeight,
												inches: e.target.value,
											})
										}
									/>
								</>
							)}
						</div>
					</div>

					{/* Weight Input */}
					<div className="max-w-60 w-full flex flex-col gap-1.5 justify-center items-center">
						<label
							className="text-lg text-neutral-500"
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

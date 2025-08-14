import { useState } from "react";
import BmiForm from "./components/BmiForm";
import History from "./components/History";
import { FaCalculator } from "react-icons/fa6";
import Result from "./components/Result.jsx";

function App() {
	const [bmi, setBmi] = useState(0);
	const [bmiRecord, setBmiRecord] = useState(
		JSON.parse(localStorage.getItem("bmiLocalHistory")) || []
	);

	const [overlayIsShown, setOverlayIsShown] = useState(false);

	const handleBmiResult = (val) => {
		setBmi(val);

		/**
		 * open modal
		 * display result in the modal
		 */

		const newBmi = {
			bmi: val,
			date: Date.now(),
		};

		(newBmi.id = newBmi.date),
			setBmiRecord((prevHistory) => {
				const updatedHistory = [...prevHistory, newBmi];
				localStorage.setItem(
					"bmiLocalHistory",
					JSON.stringify(updatedHistory)
				);
				return updatedHistory;
			});
		// console.log(history);
	};

	const showOverlay = () => {
		setOverlayIsShown(true);
	};

	const hideOverlay = () => {
		setOverlayIsShown(false);
	};

	return (
		<>
			<div className="w-full">
				<h1 className="app-heading flex gap-x-1.5 justify-center items-baseline-last">
					BMI CALCULATOR{" "}
					<span className="text-amber-600">
						<FaCalculator />
					</span>
				</h1>

				<div className="">
					{/* Form Component */}
					<BmiForm handleBmiResult={handleBmiResult} />

					{/* 
						// Modal Component 
						// Result Component 
					*/}
					{overlayIsShown && <Result onClose={hideOverlay} />}
					<button onClick={showOverlay}>click</button>
					<p className="text-center bg-amber-500/35 rounded-3xl w-fit mx-auto px-6 py-3 mt-3 font-bold">
						{bmi}
					</p>

					{/* History Component */}
					<History bmiRecord={bmiRecord} />
				</div>
			</div>
		</>
	);
}

export default App;

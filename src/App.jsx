// import { useState } from "react";
import "./App.css";
import BMI from "./Lib/BMI.jsx"

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<h1 className="text-5xl bg-amber-900">BMI CALCULATOR</h1>

				{/* Form Component */}
				{/* Modal Component */}
				<BMI></BMI>
				{/* Result Component */}
				{/* History Component */}
			</div>
		</>
	);
}

export default App;

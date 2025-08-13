// import { useState } from "react";
import BmiForm from "./components/BmiForm";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<h1 className="text-5xl bg-amber-900 m-5 p-5">
					BMI CALCULATOR
				</h1>

				{/* Form Component */}
				<BmiForm />
				{/* Modal Component */}
				{/* Result Component */}
				{/* History Component */}
			</div>
		</>
	);
}

export default App;

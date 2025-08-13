// import { useState } from "react";
import BmiForm from "./components/BmiForm";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div className="w-full">
				<h1 className="app-heading">
					BMI Calculator
					{/* bg-clip-text text-transparent */}
				</h1>

				<div className="">
					{/* Form Component */}
					<BmiForm />

					{/* 
						// Modal Component 
						// Result Component 
					*/}

					{/* History Component */}
				</div>
			</div>
		</>
	);
}

export default App;

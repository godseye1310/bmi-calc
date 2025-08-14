// import { useState } from "react";
import { useState } from "react";
import BmiForm from "./components/BmiForm";

function App() {
	const [bmi, setBmi] = useState(0);

	return (
		<>
			<div className="w-full">
				<h1 className="app-heading">BMI CALCULATOR</h1>

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

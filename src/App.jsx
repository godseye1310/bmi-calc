import { useState } from "react";
import Result from "./components/Result.jsx"

function App() {
	const [overlayIsShown, setOverlayIsShown] = useState(false);

	const showOverlay = () => {
    setOverlayIsShown(true);
  };

  const hideOverlay = () => {
    setOverlayIsShown(false);
  };

	return (
		<>
			<div>
				{/* Modal Component */}
				{overlayIsShown && <Result onClose={hideOverlay}/>}
				<button onClick={showOverlay}>click</button>
			</div>
		</>
	);
}

export default App;

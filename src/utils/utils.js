export function updateGauge(bmi) {
	// Define key BMI points and their corresponding angles based on colored segments
	// These angles are calibrated to match where each color segment appears in the gauge
	const calibrationPoints = [
		{ bmi: 15, angle: -77.7 }, // Start of blue (underweight)
		{ bmi: 18.5, angle: -40.8 }, // Blue to green transition (underweight to normal)
		{ bmi: 25, angle: 0 }, // Green to yellow transition (normal to overweight)
		{ bmi: 30, angle: 44.1 }, // Yellow to orange transition (overweight to obese I)
		{ bmi: 35, angle: 87.6 }, // Orange to red transition (obese I to obese II)
		{ bmi: 45, angle: 126.6 }, // End of red (maximum)
	];

	// Clamp BMI to gauge range for rotation, but keep original for display
	// let bmi = 23
	const clampedBMI = Math.max(15, Math.min(45, bmi)); //23

	// Find the correct segment for interpolation
	let angle;
	for (let i = 0; i < calibrationPoints.length - 1; i++) {
		const currentPoint = calibrationPoints[i];
		const nextPoint = calibrationPoints[i + 1];

		if (
			clampedBMI >= currentPoint.bmi &&
			clampedBMI <= nextPoint.bmi // 23>=15 && 23<=18.5 //true
		) {
			// Linear interpolation between these two calibration points
			const bmiRange = nextPoint.bmi - currentPoint.bmi;
			const angleRange = nextPoint.angle - currentPoint.angle;
			const bmiProgress = (clampedBMI - currentPoint.bmi) / bmiRange;
			angle = currentPoint.angle + bmiProgress * angleRange;
			break;
		}
	}

	// Handle edge cases
	if (angle === undefined) {
		if (clampedBMI <= 15) {
			angle = -77.7;
		} else if (clampedBMI >= 45) {
			angle = 126.6;
		}
	}

	return angle;
	// Apply rotation to needle
	// const needle = document.querySelector(".needle");
	// needle.style.transform = `rotate(${angle}deg)`;
}

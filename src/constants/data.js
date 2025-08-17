import w1_3d from "../assets/w1_3d.png";
import w2_3d from "../assets/w2_3d.png";
import w3_3d from "../assets/w3_3d.png";
import w4_3d from "../assets/w4_3d.png";
import w5_3d from "../assets/w5_3d.png";

// export const bmiArr = [
// 	{ id: "1755131523303", date: "1755131523303", bmiValue: "23" },
// 	{ id: "1755131524466", date: "1755131524466", bmiValue: "25" },
// 	{ id: "1755131525138", date: "1755131525138", bmiValue: "30" },
// 	{ id: "1755131525782", date: "1755131525782", bmiValue: "18.5" },
// 	{ id: "1755132158599", date: "1755132158599", bmiValue: "16" },
// 	{ id: "1755132160122", date: "1755132160122", bmiValue: "45" },
// 	{ id: "1755132161190", date: "1755132161190", bmiValue: "36" },
// 	{ id: "1755132163422", date: "1755132163422", bmiValue: "23.5" },
// 	{ id: "1755132164470", date: "1755132164470", bmiValue: "20" },
// 	{ id: "1755132165406", date: "1755132165406", bmiValue: "50" },
// ];

export const Categories = [
	{
		id: "0",
		name: "Malnutritioned",
		calorieMen: " 2,500 to 3,200 kcal",
		calorieWomen: " 2,200 to 2,700 kcal",
		recommendation:
			"Prioritize high-calorie, nutrient-dense foods (nut butters, whole dairy, healthy oils). Add snacks between meals. Consider medical check-up to rule out underlying issues.",
	},
	{
		id: "1",
		name: "Underweight",
		calorieMen: " 2,400 to 3,000 kcal",
		calorieWomen: " 2,000 to 2,500 kcal",
		recommendation:
			"Increase calories with nutrient-dense foods (nuts, seeds, dairy, lean meats, whole grains). Include protein in each meal and strength training for muscle gain.",
	},
	{
		id: "2",
		name: "Healthy",
		calorieMen: " 2,200 to 2,800 kcal",
		calorieWomen: " 1,800 to 2,400 kcal",
		recommendation:
			"Maintain balance: 45 to 65% carbs, 20 to 35% fats, 10 to 35% protein. Stay active with a mix of cardio & strength.",
	},
	{
		id: "3",
		name: "Overweight",
		calorieMen: " 1,800 to 2,400 kcal",
		calorieWomen: " 1,500 to 2,000 kcal",
		recommendation:
			"Aim for a mild calorie deficit (about 500 kcal/day) to lose ~0.5 kg/week. Focus on high-fiber vegetables, lean protein, and limit added sugars.",
	},
	{
		id: "4",
		name: "Obese",
		calorieMen: " 1,500 to 2,000 kcal",
		calorieWomen: " 1,200 to 1,600 kcal ",
		recommendation:
			"Create a safe calorie deficit under medical guidance. Prioritize whole foods, avoid refined carbs, increase protein, and integrate low-impact exercise.",
	},
	{
		id: "5",
		name: "Severely Obese",
		calorieMen: " 1,300 to 1,800 kcal",
		calorieWomen: " 1,100 to 1,500 kcal",
		recommendation:
			"Medical supervision recommended. Adopt gradual calorie reduction, prioritize protein & fiber, and avoid crash diets. Include gentle but regular movement to improve cardiovascular health.",
	},
];

export const categoryBgImg = [w1_3d, w1_3d, w2_3d, w3_3d, w4_3d, w5_3d];

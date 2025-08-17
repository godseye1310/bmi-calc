export default function calcWeightCategory(result) {
	let weightCat;
	let cname;

	switch (true) {
		case result < 16:
			weightCat = 0;
			cname = "underweight";
			break;
		case result < 18.5 && result >= 16:
			weightCat = 1;
			cname = "underweight";
			break;
		case result >= 18.5 && result < 25:
			weightCat = 2;
			cname = "normal";
			break;
		case result >= 25.0 && result < 30:
			weightCat = 3;
			cname = "overweight";
			break;
		case result >= 30 && result < 35:
			weightCat = 4;
			cname = "obese-1";
			break;
		case result >= 35:
			weightCat = 5;
			cname = "obese-2";
			break;
	}

	return { weightCat, cname };
}

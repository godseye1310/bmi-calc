import { FaHistory } from "react-icons/fa";
import Card from "./ui/Card";

const History = ({ bmiRecord , seeDetails, clear}) => {
	// console.log(bmiRecord);

	return (
		<Card className={"max-w-lg w-full mt-6 px-1"}>
			<div className="text-left">
				<h3 className="text-2xl text-neutral-300 mb-5 pl-3 flex justify-start items-center gap-x-3">
					History
					<span>
						<FaHistory />
					</span>
					<button onClick={clear} className="text-neutral-100 px-3 pb-1 pt-1.5 text-sm font-extralight rounded-xs bg-sky-500 hover:bg-sky-600">Clear</button>
				</h3>
				<div className="w-full h-96 box-border pl-1.5 pr-0.5 pb-1.5 pt-5 rounded-xl bg-black/50 ">
					<ul className=" flex flex-col gap-0.5 rounded-xl h-full overflow-y-auto pt-3 pb-3 ">
						{bmiRecord.map((bmiData) => {
							return (
								<li
									key={bmiData.id}
									className="flex justify-start items-center bg-neutral-600/50 hover:bg-neutral-600/90 opacity-75 hover:opacity-100 rounded py-1.5 text-neutral-100"
								>
									<div className="w-[50%] pl-3">
										<p>{bmiData.date}</p>
									</div>
									<p className="w-[20%]">
										<span>{bmiData.bmi}</span>
									</p>
									<div className="w-[30%] flex justify-center">
										<button onClick={() => seeDetails(bmiData.bmi)} className="text-neutral-100 px-3 pb-1 pt-1.5 text-sm font-extralight rounded-xs bg-sky-500 hover:bg-sky-600">
											See details
										</button>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</Card>
	);
};

export default History;

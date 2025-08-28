import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Card = ({ children, className }) => {
	return (
		<div
			className={twMerge(
				clsx(
					"p-5 bg-neutral-900/65 opacity-90 rounded-2xl shadow text-center",
					className
				)
			)}
		>
			{children}
		</div>
	);
};

export default Card;

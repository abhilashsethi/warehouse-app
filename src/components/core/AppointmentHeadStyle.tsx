import React, { useState } from "react";

type Props = {
	name: string;
};

const AppointmentHeadStyle = ({ name }: Props) => {
	const [color, setColor] = useState(false);

	const handleClick = () => {
		setColor(!color);
	};
	return (
		<div className="flex gap-[3px]">
			<button
				onClick={handleClick}
				// className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${
				// 	color ? "bg-red-500" : ""
				// }`}
				className="inline-block px-6 py-2 bg-blue-400 text-white font-bold text-xs leading-tight uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out"
			>
				All
			</button>
			<button className="inline-block px-6 py-2 bg-blue-400 text-white font-bold text-xs leading-tight uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out">
				Upcoming
			</button>
			<button className="inline-block px-6 py-2 bg-blue-400 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out">
				Past
			</button>
		</div>
	);
};

export default AppointmentHeadStyle;

// const HeadStyle = ({ name }: Props) => {
// 	return <h2 className="text-lg font-bold text-theme">{name}</h2>;
// };
// export default HeadStyle;

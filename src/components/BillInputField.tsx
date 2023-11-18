import { Add, BorderColor, Delete } from "@mui/icons-material";
import React, { useState } from "react";

const BillInputField = () => {
	const [inputs, setInputs] = useState([{ value: "", amount: "" }]);

	// const handleClick = () => {
	// 	setInputs([...inputs, { value: "", amount: "" }]);
	// };

	const handleClick = () => {
		setInputs([...inputs, { value: "", amount: "" }]);
	};

	const handleNameChange = (index: any, e: any) => {
		const values = [...inputs];
		values[index].value = e.target.value;
		setInputs(values);
	};
	const handleAmtChange = (index: any, e: any) => {
		const values = [...inputs];
		values[index].amount = e.target.value;
		setInputs(values);
	};

	return (
		<div>
			{/* {inputs.map((input, index) => (
				<div key={index} className="grid grid-cols-2 gap-3 py-3">
					<input
						className="rounded-md"
						type="text"
						value={input.value}
						onChange={(e) => handleNameChange(index, e)}
					/>
					<input
						className="rounded-md"
						type="number"
						value={input.amount}
						onChange={(e) => handleAmtChange(index, e)}
					/>
				</div>
			))} */}

			{inputs.map((input, index) => (
				<div key={index} className="grid grid-cols-2 gap-3 py-3">
					<input
						className="rounded-md"
						value={input.value}
						onChange={(e) => handleNameChange(index, e)}
						type="text"
						placeholder="Enter Name"
					/>
					<input
						className="rounded-md"
						value={input.amount}
						onChange={(e) => handleAmtChange(index, e)}
						type="number"
						placeholder="Enter Amount"
					/>
				</div>
			))}

			{/* <button onClick={handleClick}>Add Input</button> */}
			<button
				onClick={handleClick}
				className="mt-10 px-4 py-2 bg-theme text-sm text-white rounded-md flex gap-1 items-center hover:scale-105 transition-all ease-in-out duration-300"
			>
				<Add className="!text-[1.3rem]" /> Add More
			</button>
		</div>
	);
};

export default BillInputField;

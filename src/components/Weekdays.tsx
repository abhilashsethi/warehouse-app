import React, { useState } from "react";
import { Box } from "@mui/material";

const Weekdays = () => {
	const [checked, setChecked] = useState(false);
	const [skills, setSkills] = useState<string[]>([]);
	console.log({
		checked,
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked);
	};
	const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const index = skills.indexOf(e.target.value);
		if (index === -1) {
			setSkills([...skills, e.target.value]);
		} else {
			setSkills(skills.filter((skill) => skill !== e.target.value));
		}
	};
	console.log({ skills });

	const [selectAllDays, setSelectAllDays] = useState(false);
	const [checkboxes, setCheckboxes] = useState([
		{ id: 1, value: "Mon", isChecked: false },
		{ id: 2, value: "Tue", isChecked: false },
		{ id: 3, value: "Wed", isChecked: false },
		{ id: 4, value: "Thur", isChecked: false },
		{ id: 5, value: "Fri", isChecked: false },
		{ id: 6, value: "Sat", isChecked: false },
		{ id: 7, value: "Sun", isChecked: false },
	]);

	const handleSelectAllDays = (event: any) => {
		const newCheckboxes = checkboxes.map((checkbox) => {
			return { ...checkbox, isChecked: event.target.checked };
		});
		setCheckboxes(newCheckboxes);
		setSelectAllDays(event.target.checked);
	};

	const handleCheckboxChange = (event: any, checkboxId: any) => {
		const newCheckboxes = checkboxes.map((checkbox) => {
			if (checkbox.id === checkboxId) {
				return { ...checkbox, isChecked: event.target.checked };
			}
			return checkbox;
		});
		setCheckboxes(newCheckboxes);
		const allChecked = newCheckboxes.every((checkbox) => checkbox.isChecked);
		setSelectAllDays(allChecked);
	};

	return (
		// <Box className="flex justify-center items-center gap-5">
		// 	<div className="flex justify-center items-center gap-1">
		// 		<p className=" font-semibold text-gray-600">All</p>
		// 		<input
		// 			className="p-2 rounded-sm border-gray-700 outline-none MuiInputBase-input"
		// 			type="checkbox"
		// 			name=""
		// 			id=""
		// 		/>
		// 	</div>
		// 	<div className="flex justify-center items-center gap-1">
		// 		<p className=" font-semibold text-gray-600">Mon</p>
		// 		<input
		// 			className="p-2 rounded-sm border-gray-700 outline-none MuiInputBase-input"
		// 			type="checkbox"
		// 			name=""
		// 			id=""
		// 		/>
		// 	</div>
		// 	<div className="flex justify-center items-center gap-1">
		// 		<p className=" font-semibold text-gray-600">Tue</p>
		// 		<input
		// 			className="p-2 rounded-sm border-gray-700 outline-none MuiInputBase-input"
		// 			type="checkbox"
		// 			name=""
		// 			id=""
		// 		/>
		// 	</div>
		// 	<div className="flex justify-center items-center gap-1">
		// 		<p className=" font-semibold text-gray-600">Wed</p>
		// 		<input
		// 			className="p-2 rounded-sm border-gray-700 outline-none MuiInputBase-input"
		// 			type="checkbox"
		// 			name=""
		// 			id=""
		// 		/>
		// 	</div>
		// 	<div className="flex justify-center items-center gap-1">
		// 		<p className=" font-semibold text-gray-600">Thu</p>
		// 		<input
		// 			className="p-2 rounded-sm border-gray-700 outline-none MuiInputBase-input"
		// 			type="checkbox"
		// 			name=""
		// 			id=""
		// 		/>
		// 	</div>
		// 	<div className="flex justify-center items-center gap-1">
		// 		<p className=" font-semibold text-gray-600">Fri</p>
		// 		<input
		// 			className="p-2 rounded-sm border-gray-700 outline-none MuiInputBase-input"
		// 			type="checkbox"
		// 			name=""
		// 			id=""
		// 		/>
		// 	</div>
		// 	<div className="flex justify-center items-center gap-1">
		// 		<p className=" font-semibold text-gray-600">Sat</p>
		// 		<input
		// 			className="p-2 rounded-sm border-gray-700 outline-none MuiInputBase-input"
		// 			type="checkbox"
		// 			name=""
		// 			id=""
		// 		/>
		// 	</div>
		// 	<div className="flex justify-center items-center gap-1">
		// 		<p className=" font-semibold text-gray-600">Sun</p>
		// 		<input
		// 			className="p-2 rounded-sm border-gray-700 outline-none MuiInputBase-input"
		// 			type="checkbox"
		// 			name=""
		// 			id=""
		// 		/>
		// 	</div>
		// </Box>

		<div>
			<label className="font-semibold text-gray-600">
				<input
					type="checkbox"
					checked={selectAllDays}
					onChange={handleSelectAllDays}
					className="p-2 mx-[3px] rounded-sm border-gray-700 outline-none MuiInputBase-input"
				/>
				All
			</label>
			{checkboxes.map((checkbox) => (
				<label key={checkbox.id} className="font-semibold text-gray-600 mx-4">
					<input
						type="checkbox"
						value={checkbox.value}
						checked={checkbox.isChecked}
						onChange={(event) => handleCheckboxChange(event, checkbox.id)}
						className="p-2 mx-[3px] rounded-sm border-gray-700 outline-none MuiInputBase-input"
					/>
					{checkbox.value}
				</label>
			))}
		</div>
	);
};

export default Weekdays;

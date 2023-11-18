import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { absentDate } from "configs";
import * as React from "react";
import { Done } from "@mui/icons-material";

export default function DoctorAbsentDateSelecter() {
	return (
		<Stack className="flex flex-col gap-2 edit-lead-form">
			<p className="text-theme font-bold pt-3">Select Absent Date</p>
			<Autocomplete
				multiple
				id="tags-outlined"
				options={absentDate}
				getOptionLabel={(option) => option.title}
				// defaultValue={[top100Films[13]]}
				filterSelectedOptions
				renderInput={(params) => (
					<TextField
						{...params}
						className="outline-0 shadow-none"
						label="Absent Date"
						placeholder="Select Doctors"
					/>
				)}
			/>
			<button className="text-white px-8 py-2 bg-theme rounded-md">
				Submit <Done />
			</button>
		</Stack>
	);
}

// const clinics = [
// 	{ title: "care Hospital" },
// 	{ title: "Utkal Heart Center" },
// 	{ title: "Dr Agrawal Clinic" },
// 	{ title: "Aravind Eye Hospital" },
// ];

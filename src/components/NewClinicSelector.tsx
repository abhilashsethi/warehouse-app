import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { clinics } from "configs";
import * as React from "react";

export default function NewClinicSelector() {
	return (
		<Stack className="flex flex-col gap-2 edit-lead-form">
			<p className="text-theme font-bold pt-3">Select Clinic *</p>
			<Autocomplete
				multiple
				id="tags-outlined"
				options={clinics}
				getOptionLabel={(option) => option.title}
				// defaultValue={[top100Films[13]]}
				filterSelectedOptions
				renderInput={(params) => (
					<TextField
						{...params}
						className="outline-0 shadow-none"
						label="Clinics"
						placeholder="Select Clinics"
					/>
					// <TextField
					// 	{...params}
					// 	InputProps={{
					// 		classes: {
					// 			notchedOutline: "outLineBorder",
					// 			input: "oulineField",
					// 		},
					// 	}}
					// 	label="Clinics"
					// 	placeholder="Select Clinics"
					// />
				)}
			/>
		</Stack>
	);
}

// const clinics = [
// 	{ title: "care Hospital" },
// 	{ title: "Utkal Heart Center" },
// 	{ title: "Dr Agrawal Clinic" },
// 	{ title: "Aravind Eye Hospital" },
// ];

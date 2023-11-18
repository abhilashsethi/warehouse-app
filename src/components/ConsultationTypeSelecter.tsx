import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { consultation } from "configs";
import * as React from "react";

export default function ConsultationTypeSelecter() {
	return (
		<Stack className="flex flex-col gap-2 edit-lead-form">
			<p className="text-theme font-bold pt-3">Consultation Type *</p>
			<Autocomplete
				multiple
				id="tags-outlined"
				options={consultation}
				getOptionLabel={(option) => option.title}
				// defaultValue={[top100Films[13]]}
				filterSelectedOptions
				renderInput={(params) => (
					<TextField
						{...params}
						className="outline-0 shadow-none"
						label="consultation"
						placeholder="Select consultation"
					/>
					// <TextField
					// 	{...params}
					// 	InputProps={{
					// 		classes: {
					// 			notchedOutline: "outLineBorder",
					// 			input: "oulineField",
					// 		},
					// 	}}
					// 	label="consultation"
					// 	placeholder="Select consultation"
					// />
				)}
			/>
		</Stack>
	);
}

// const consultation = [
// 	{ title: "care Hospital" },
// 	{ title: "Utkal Heart Center" },
// 	{ title: "Dr Agrawal Clinic" },
// 	{ title: "Aravind Eye Hospital" },
// ];

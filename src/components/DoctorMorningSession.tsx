import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function DoctorMorningSession() {
	const [value1, setValue1] = React.useState<Dayjs | null>(null);
	const [value2, setValue2] = React.useState<Dayjs | null>(null);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<p className="text-theme font-bold pt-3 mt-11">Morning Session *</p>
			<div className="grid grid-cols-2 gap-3">
				<TimePicker
					label="Start Time"
					value={value1}
					onChange={(newValue) => {
						setValue1(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
				<TimePicker
					label="End Time"
					value={value2}
					onChange={(newValue) => {
						setValue2(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
			</div>
		</LocalizationProvider>
	);
}

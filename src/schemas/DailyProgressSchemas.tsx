import {
	AccessTimeFilled,
	BedroomChild,
	Bloodtype,
	BlurOn,
	CalendarMonth,
	DateRange,
	Deblur,
	Email,
	HealthAndSafety,
	History,
	Info,
	LocalPhone,
	LocationCity,
	Map,
	MonitorHeart,
	Person,
	Person2,
	Shield,
	Sick,
	SwapHoriz,
	Wc,
} from "@mui/icons-material";
import * as Yup from "yup";

const DailyProgressSchemas = [
	{
		key: "1",
		name: "nurse",
		label: "Nurse *",
		placeholder: "Select Nurse",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("Select Nurse"),
		initialValue: "",
		icon: <Bloodtype />,
		required: true,
	},
	{
		key: "2",
		// placeholder: 'Enter your name',
		name: "date",
		label: "Date *",
		placeholder: "Enter Date",
		styleContact: "rounded-xl overflow-hidden bg-white ",
		type: "date",
		validationSchema: Yup.string().required("Date required"),
		initialValue: "",
		icon: <CalendarMonth />,
		required: true,
		contactField: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 6,
		},
	},
	// {
	// 	key: "2",
	// 	// placeholder: 'Enter your name',
	// 	name: "Lname",
	// 	label: "Last Name *",
	// 	placeholder: "Last Name",
	// 	styleContact: "rounded-xl overflow-hidden bg-white ",
	// 	type: "text",
	// 	validationSchema: Yup.string()
	// 		.required("Last Name required")
	// 		.min(2, "Last Name must be at least 2 characters"),
	// 	initialValue: "",
	// 	icon: <Person />,
	// 	required: true,
	// 	contactField: {
	// 		xs: 12,
	// 		sm: 12,
	// 		md: 6,
	// 		lg: 6,
	// 	},
	// },
	{
		key: "3",
		name: "time",
		label: "Time *",
		placeholder: "Enter Time",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("Time Required"),
		type: "time",
		initialValue: "",
		icon: <AccessTimeFilled />,
		required: true,
	},
	// {
	// 	key: "4",
	// 	name: "dailyDescription",
	// 	label: "Daily Description *",
	// 	placeholder: "Enter Daily Description",
	// 	type: "text",
	// 	// styleContact: "rounded-lg",
	// 	validationSchema: Yup.string()
	// 		.required("Daily Description is required")
	// 		.min(11, "Daily Description must be greater than 11 characters"),

	// 	initialValue: "",
	// 	icon: <Info />,
	// 	required: true,
	// 	multiline: true,
	// 	rows: 2,
	// },
	{
		key: "5",
		name: "description",
		label: "Description *",
		placeholder: "Enter Description",
		type: "text",
		// styleContact: "rounded-lg",
		validationSchema: Yup.string()
			.required("Description is required")
			.min(11, "Description must be greater than 11 characters"),

		initialValue: "",
		// icon: <Info />,
		required: true,
		multiline: true,
		rows: 2,
	},
];
export default DailyProgressSchemas;

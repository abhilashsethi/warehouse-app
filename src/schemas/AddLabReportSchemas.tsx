import {
	CurrencyRupee,
	Info,
	Inventory,
	Person,
	Workspaces,
	DriveFileRenameOutline,
	Business,
	Title,
	CalendarMonth,
	Person4,
	Wc,
} from "@mui/icons-material";
import * as Yup from "yup";

const AddLabReportSchemas = [
	{
		key: "1",
		// placeholder: 'Enter your name',
		name: "title",
		label: "Title *",
		placeholder: "Enter Title",
		styleContact: "rounded-xl bg-white ",
		type: "text",
		validationSchema: Yup.string().required("Title required"),
		initialValue: "",
		icon: <Title />,
		required: true,
		contactField: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 6,
		},
	},
	{
		key: "2",
		// placeholder: 'Enter your name',
		name: "date",
		label: "Date *",
		placeholder: "Date",
		styleContact: "rounded-xl bg-white ",
		validationSchema: Yup.string().required("Date required"),
		type: "date",
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
	{
		key: "3",
		name: "patient",
		label: "Select Patient *",
		type: "text",
		placeholder: "Enter Store Box",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("Details required"),

		initialValue: "",
		icon: <Inventory />,
		required: true,
	},
	{
		key: "17",
		name: "clinic",
		label: "Clinic *",
		placeholder: "Select Clinic",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("Select Clinic"),
		initialValue: "",
		icon: <Wc />,
		required: true,
	},
	{
		key: "5",
		name: "refdByDoctor",
		label: "Refd By Doctor *",
		placeholder: "Select Referred Doctor",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("Referred Doctor name required"),
		type: "text",
		initialValue: "",
		icon: <Person4 />,
		required: true,
	},
	{
		key: "6",
		// placeholder: 'Enter your email',
		name: "status",
		label: "Select Status *",
		placeholder: "Selected Status",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("status is required"),
		initialValue: "",
		icon: <CurrencyRupee />,
		required: true,
	},
	{
		key: "7",
		name: "description",
		label: "Description ",
		validationSchema: Yup.string().optional(),
		type: "text",
		styleContact: "rounded-lg",
		initialValue: "",
		placeholder: "",
		required: true,
		multiline: true,
		rows: 2,
		icon: <Info />,
	},
	{
		key: "8",
		name: "upload",
		label: "Upload Report ",
		validationSchema: Yup.string().optional(),
		// type: "text",
		styleContact: "rounded-lg",
		initialValue: "",
		placeholder: "",
		required: true,
		// multiline: true,
		// rows: 2,
		icon: <Info />,
	},
];
export default AddLabReportSchemas;

import { HealthAndSafety } from "@mui/icons-material";
import * as Yup from "yup";

const DoctorSessionSchema = [
	{
		key: "15",
		name: "selectClinic",
		label: "Select Clinic",
		placeholder: "Select Clinic",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("Select Clinic"),

		initialValue: "",
		icon: <HealthAndSafety />,
		required: true,
	},
	{
		key: "16",
		name: "selectDoctor",
		label: "Select Doctor",
		placeholder: "Select Doctor",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("Select Doctor"),

		initialValue: "",
		icon: <HealthAndSafety />,
		required: true,
	},
	{
		key: "16",
		name: "selectTimeSlot",
		label: "(in minute)",
		placeholder: "select Time Slot",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("select Time Slot"),

		initialValue: "",
		icon: <HealthAndSafety />,
		required: true,
	},

	{
		key: "16",
		name: "doctorMorningSession",
		label: "Select Doctor",
		placeholder: "Select Doctor",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("Select Doctor"),

		initialValue: "",
		// icon: <HealthAndSafety />,
		required: true,
	},
	{
		key: "17",
		name: "doctorEveningSession",
		label: "Select Doctor",
		placeholder: "Select Doctor",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("Select Doctor"),

		initialValue: "",
		// icon: <HealthAndSafety />,
		required: true,
	},
];
export default DoctorSessionSchema;

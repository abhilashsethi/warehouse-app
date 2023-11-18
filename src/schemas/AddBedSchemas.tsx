import { ConfirmationNumber, HealthAndSafety, Info } from "@mui/icons-material";
import * as Yup from "yup";

const AddBedSchemas = [
	{
		key: "15",
		name: "selectBedCategory",
		label: "Select Bed Category",
		placeholder: "Select Bed Category",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("Select Bed Category"),
		initialValue: "",
		icon: <HealthAndSafety />,
		required: true,
	},

	{
		key: "6",
		name: "bedNumber",
		label: "Bed Number*",
		placeholder: "Bed Number",
		styleContact: "rounded-lg",
		type: "number",
		validationSchema: Yup.string().required("Bed Number Required"),
		initialValue: "",
		icon: <ConfirmationNumber />,
		required: true,
	},
	{
		key: "11",
		name: "description",
		label: "Description",
		placeholder: "Description",
		type: "text",
		// styleContact: "rounded-lg",
		validationSchema: Yup.string().optional(),
		initialValue: "",
		icon: <Info />,
		required: true,
		// multiline: true,
		// rows: 2,
	},
];
export default AddBedSchemas;

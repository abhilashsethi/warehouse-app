import { HealthAndSafety } from "@mui/icons-material";
import * as Yup from "yup";

const SpecializationSchemas = [
	{
		key: "1",
		name: "title",
		label: "Title",
		placeholder: "",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("Enter title"),
		initialValue: "",
		icon: <HealthAndSafety />,
		required: true,
	},
];
export default SpecializationSchemas;

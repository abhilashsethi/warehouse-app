import {
	Category,
	Email,
	HealthAndSafety,
	Info,
	LocalPhone,
	Person,
	Wc,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import * as Yup from "yup";

const AddProductSchemas = [
	{
		key: "1",
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
		key: "2",
		// placeholder: 'Enter your email',
		name: "productName",
		label: "Product Name",
		placeholder: "Enter Product Name",
		styleContact: "rounded-lg",
		type: "text",
		validationSchema: Yup.string().required("Product Name is required"),
		initialValue: "",
		icon: <Badge />,
		required: true,
	},

	{
		key: "3",
		// placeholder: 'Enter your phone number',
		name: "category",
		label: "Category *",
		placeholder: "ContactNumber",
		styleContact: "rounded-lg",
		type: "text",
		validationSchema: Yup.string().required("contact number is required"),
		initialValue: "",
		icon: <Category />,
		required: true,
	},

	{
		key: "6",
		name: "gender",
		label: "Gender",
		placeholder: "Select Gender",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("Select Gender"),
		initialValue: "",
		icon: <Wc />,
		required: true,
	},
	{
		key: "6",
		name: "role",
		label: "Role",
		placeholder: "Select Role",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().required("Select Role"),
		initialValue: "",
		icon: <Wc />,
		required: true,
	},
];
export default AddProductSchemas;

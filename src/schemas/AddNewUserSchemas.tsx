import {
	Email,
	HealthAndSafety,
	Info,
	LocalPhone,
	Person,
	Wc,
} from "@mui/icons-material";
import * as Yup from "yup";

const AddNewUserSchemas = [
	{
		key: "1",
		// placeholder: 'Enter your name',
		name: "name",
		label: "Full Name *",
		placeholder: "Enter Full Name",
		styleContact: "rounded-xl overflow-hidden bg-white ",
		type: "text",
		validationSchema: Yup.string()
			.required("Full Name required")
			.min(6, "Full Name must be at least 2 characters"),
		initialValue: "",
		icon: <Person />,
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
		// placeholder: 'Enter your email',
		name: "email",
		label: "Email ",
		placeholder: "Enter Email",
		styleContact: "rounded-lg",
		type: "email",
		validationSchema: Yup.string()
			.required("Email is required")
			.email("Invalid Email Address"),
		initialValue: "",
		icon: <Email />,
		required: true,
	},
	{
		key: "3",
		// placeholder: 'Enter your email',
		name: "password",
		label: "Password *",
		placeholder: "Enter Password",
		styleContact: "rounded-lg",
		type: "password",
		validationSchema: Yup.string().required("Password is required"),
		initialValue: "",
		// icon: <Key />,
		required: true,
	},

	{
		key: "3",
		// placeholder: 'Enter your phone number',
		name: "phoneNumber",
		label: "Contact Number *",
		placeholder: "ContactNumber",
		styleContact: "rounded-lg",
		type: "number",
		validationSchema: Yup.string().required("contact number is required"),
		initialValue: "",
		icon: <LocalPhone />,
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
export default AddNewUserSchemas;

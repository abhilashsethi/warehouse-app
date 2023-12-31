import { Title } from "@mui/icons-material";
import * as Yup from "yup";

const AddNewDoctorSchema = [
	{
		key: "1",
		// placeholder: 'Enter your name',
		name: "fullName",
		label: " Full Name *",
		placeholder: "Enter Full Name",
		styleContact: "rounded-xl overflow-hidden bg-white ",
		type: "text",
		validationSchema: Yup.string()
			.required("Full Name is required")
			.min(2, "Full Name must be at least 2 characters"),
		initialValue: "",
		// icon: <Title />,
		required: true,
	},

	{
		key: "2",
		// placeholder: 'Enter your email',
		name: "email",
		label: "Email *",
		placeholder: "Email",
		styleContact: "rounded-lg",
		type: "email",
		validationSchema: Yup.string()
			.required("Email is required")
			.email("Invalid Email Address"),
		initialValue: "",
		// icon: <Email />,
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
		// icon: <Email />,
		required: true,
	},
	{
		key: "4",
		// placeholder: 'Enter your phone number',
		name: "phoneNumber",
		label: "Contact Number *",
		placeholder: "ContactNumber",
		styleContact: "rounded-lg",
		type: "number",
		validationSchema: Yup.string().required("Store contact number is required"),
		initialValue: "",
		// icon: <LocalPhone />,
		required: true,
	},
	{
		key: "10",
		name: "address",
		label: "Address*",
		placeholder: "Address",
		type: "text",
		// styleContact: "rounded-lg",
		validationSchema: Yup.string()
			.required("Description is required")
			.min(11, "Description must be greater than 11 characters"),

		initialValue: "",

		required: true,
		multiline: true,
		rows: 2,
	},
	{
		key: "5",
		// placeholder: 'Enter your email',
		name: "date",
		label: "Date Of Birth *",
		placeholder: "Enter Date Of Birth",
		styleContact: "rounded-lg",
		type: "date",
		validationSchema: Yup.string().required("Date is required"),
		initialValue: "",
		// icon: <Email />,
		required: true,
	},
	// {
	// 	key: "6",
	// 	// placeholder: 'Enter your name',
	// 	name: "title",
	// 	label: " Title ",
	// 	placeholder: "title",
	// 	styleContact: "rounded-xl overflow-hidden bg-white ",
	// 	type: "text",
	// 	validationSchema: Yup.string().min(
	// 		2,
	// 		"Title must be at least 2 characters"
	// 	),
	// 	initialValue: "",
	// 	icon: <Title />,
	// 	required: true,
	// },
	{
		key: "7",
		name: "experience",
		label: "Experience (In Year) *",
		placeholder: "Enter Experience",
		type: "number",
		// styleContact: "rounded-lg",
		validationSchema: Yup.number().required("Experience is required"),
		initialValue: "",

		required: true,
		// multiline: true,
		// rows: 0,
	},
	{
		key: "8",
		// placeholder: 'Enter your email',
		name: "certificate",
		label: "Upload Registration Certificate *",
		placeholder: "Upload Certificates",
		styleContact: "rounded-lg h-40",
		fileInput: "h-40",
		type: "file",
		accept:
			"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf",
		validationSchema: Yup.string().required("Required field!"),
		initialValue: "",
		// icon: <Email />,
		required: true,
	},
	{
		key: "9",
		// placeholder: 'Enter your email',
		name: "signature",
		label: "Upload Signature *",
		placeholder: "Upload Signature",
		styleContact: "rounded-lg h-40",
		fileInput: "h-40",
		type: "file",
		accept:
			"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf",
		validationSchema: Yup.string().required("Required field!"),
		initialValue: "",
		// icon: <Email />,
		required: true,
	},
];
export default AddNewDoctorSchema;

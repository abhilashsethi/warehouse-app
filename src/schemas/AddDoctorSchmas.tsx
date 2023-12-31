import { Email, LocalPhone, LocationCity, Person } from "@mui/icons-material";
import * as Yup from "yup";

const AddDoctorSchmas = [
	{
		key: "1",
		// placeholder: 'Enter your name',
		name: "Fname",
		label: "First Name *",
		placeholder: "First Name",
		styleContact: "rounded-lg overflow-hidden bg-white ",
		type: "text",
		validationSchema: Yup.string()
			.required("First Name required")
			.min(2, "First Name must be at least 2 characters"),
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
		// placeholder: 'Enter your name',
		name: "Lname",
		label: "Last Name *",
		placeholder: "Last Name",
		styleContact: "rounded-xl overflow-hidden bg-white ",
		type: "text",
		validationSchema: Yup.string()
			.required("Last Name required")
			.min(2, "Last Name must be at least 2 characters"),
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
		label: "Email *",
		placeholder: "Email",
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
		key: "7",
		name: "idProof",
		label: "Id Proof *",
		validationSchema: Yup.string().required("City is required"),
		styleContact: "rounded-lg",
		initialValue: "",
		placeholder: "idProof",
		icon: <LocationCity />,
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
		validationSchema: Yup.string().required("Store contact number is required"),
		initialValue: "",
		icon: <LocalPhone />,
		required: true,
	},
	{
		key: "2",
		// placeholder: 'Enter your email',
		name: "degree",
		label: "Degree *",
		placeholder: "Enter Degree",
		styleContact: "rounded-lg",
		type: "text",
		validationSchema: Yup.string().required("Degree is required"),
		initialValue: "",
		icon: <Email />,
		required: true,
	},
	{
		key: "22",
		// placeholder: 'Enter your email',
		name: "college",
		label: "College Name *",
		placeholder: "Enter College Name",
		styleContact: "rounded-lg",
		type: "text",
		validationSchema: Yup.string().required("College Name is required"),
		initialValue: "",
		icon: <Email />,
		required: true,
	},
	{
		key: "12",
		// placeholder: 'Enter your email',
		name: "specialty",
		label: "Specialization *",
		placeholder: "Enter specialty",
		styleContact: "rounded-lg",
		type: "text",
		validationSchema: Yup.string().required("Degree is required"),
		initialValue: "",
		icon: <Email />,
		required: true,
	},
	{
		key: "2",
		// placeholder: 'Enter your email',
		name: "certificate",
		label: "Upload Certificate *",
		placeholder: "Upload Certificates",
		styleContact: "rounded-lg h-40",
		fileInput: "h-40",
		type: "file",
		accept:
			"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf",
		validationSchema: Yup.string().required("Required field!"),
		initialValue: "",
		icon: <Email />,
		required: true,
	},

	{
		key: "2",
		// placeholder: "Enter your email",
		name: "experience",
		label: "Experience *",
		placeholder: "Enter Experience",
		styleContact: "rounded-lg",
		type: "text",
		validationSchema: Yup.string().required("Degree is required"),
		initialValue: "",
		icon: <Email />,
		required: true,
	},
	{
		key: "2",
		// placeholder: 'Enter your email',
		name: "experienceCertificate",
		label: "Upload Experience Certificates *",
		placeholder: "Upload Experience Certificates",
		styleContact: "rounded-lg",
		type: "file",
		validationSchema: Yup.string().required("File not found"),
		initialValue: "",
		icon: <Email />,
		required: true,
	},
	{
		key: "2",
		// placeholder: 'Enter your email',
		name: "sign",
		label: "Upload Signature *",
		placeholder: "Upload Signature",
		styleContact: "rounded-lg",
		type: "file",
		validationSchema: Yup.string().required("File not found"),
		initialValue: "",
		icon: <Email />,
		required: true,
	},
	// {
	// 	key: "5",
	// 	name: "about",
	// 	label: "About*",
	// 	placeholder: "About",
	// 	type: "text",
	// 	// styleContact: "rounded-lg",
	// 	validationSchema: Yup.string()
	// 		.required("Description is required")
	// 		.min(11, "Description must be greater than 11 characters"),

	// 	initialValue: "",

	// 	required: true,
	// 	multiline: true,
	// 	rows: 2,
	// },

	{
		key: "4",
		name: "countryCode",
		label: "countryDetails",
		placeholder: "Country Code",
		styleContact: "rounded-lg",
		validationSchema: Yup.string().optional(),

		initialValue: "",
		icon: <LocalPhone />,
		required: true,
	},

	{
		key: "7",
		name: "city",
		label: "City *",
		validationSchema: Yup.string().required("City is required"),
		styleContact: "rounded-lg",
		initialValue: "",
		placeholder: "City",
		icon: <LocationCity />,
		required: true,
	},
	// {
	// 	key: "8",
	// 	name: "street",
	// 	label: "Street *",
	// 	placeholder: "Street",

	// 	styleContact: "rounded-lg",
	// 	validationSchema: Yup.string().required("Street is required"),
	// 	icon: <Traffic />,
	// 	initialValue: "",
	// 	required: true,
	// },
	// {
	// 	key: "9",
	// 	name: "zipCode",
	// 	type: "text",
	// 	placeholder: "ZipCode",
	// 	styleContact: "rounded-lg",
	// 	label: "ZipCode*",
	// 	validationSchema: Yup.string().required("ZipCode is required"),
	// 	initialValue: "",
	// 	icon: <PushPin />,
	// 	required: true,
	// },
	// {
	// 	key: "10.2",
	// 	name: "state",
	// 	type: "text",
	// 	placeholder: "State",
	// 	styleContact: "rounded-lg",
	// 	label: "State",
	// 	validationSchema: Yup.string().optional(),
	// 	initialValue: "",
	// 	icon: <AccessAlarm />,
	// 	required: true,
	// },
	// {
	// 	key: "10",
	// 	name: "latitude",
	// 	type: "text",
	// 	placeholder: "Latitude",
	// 	styleContact: "rounded-lg",
	// 	label: "Latitude*",
	// 	validationSchema: Yup.string().required("Latitude is required"),
	// 	initialValue: "",
	// 	icon: <AddLocationAlt />,
	// 	required: true,
	// },
	// {
	// 	key: "11",
	// 	name: "longitude",
	// 	type: "text",
	// 	placeholder: "Longitude",
	// 	styleContact: "rounded-lg",
	// 	label: "Longitude*",
	// 	validationSchema: Yup.string().required("Longitude is required"),
	// 	initialValue: "",
	// 	icon: <AddLocationAlt />,
	// 	required: true,
	// },
	// {
	// 	key: "11",
	// 	name: "timing",
	// 	type: "text",
	// 	placeholder: "Store Timing",
	// 	styleContact: "rounded-lg",
	// 	label: "Store Opening Hours*",
	// 	validationSchema: Yup.string().required("Store Timing is required"),
	// 	initialValue: "",
	// 	row: 2,
	// 	multiline: true,
	// 	// icon: <AddLocationAlt />,
	// 	required: true,
	// },
];
export default AddDoctorSchmas;

import { Info, Title } from "@mui/icons-material";
import * as Yup from "yup";

const AddAboutSchema = [
	// {
	//   key: "1",
	//   // placeholder: 'Enter your name',
	//   name: "title",
	//   label: " Title *",
	//   placeholder: "title",
	//   styleContact: "rounded-xl overflow-hidden bg-white ",
	//   type: "text",
	//   validationSchema: Yup.string()
	//     .required(" Title is required")
	//     .min(2, "Title must be at least 2 characters"),
	//   initialValue: "",
	//   icon: <Title />,
	//   required: true,
	// },

	{
		key: "5",
		name: "description",
		label: "Description",
		placeholder: "Enter Description",
		type: "text",
		// styleContact: "rounded-lg",
		validationSchema: Yup.string().optional(),
		initialValue: "",
		required: true,
		multiline: true,
		rows: 2,
	},
];
export default AddAboutSchema;

import { Create, Description } from "@mui/icons-material";
import * as Yup from "yup";

const AddExpenseCategorySchemas = [
	{
		key: "1",
		// placeholder: 'Enter your name',
		name: "category",
		label: "Category *",
		placeholder: "Enter Category",
		type: "text",
		styleContact: "rounded-xl overflow-hidden bg-white",
		validationSchema: Yup.string().required("Category is Required"),
		initialValue: "",
		icon: <Create />,
		required: true,
	},
	{
		key: "3",
		// placeholder: 'Enter your name',
		name: "description",
		label: "Description *",
		placeholder: "Enter Description",
		styleContact: "rounded-xl overflow-hidden bg-white ",
		validationSchema: Yup.string().required("Description is required"),
		initialValue: "",
		type: "text",
		multiline: true,
		rows: 2,
		icon: <Description />,
		required: true,
		contactField: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 6,
		},
	},
];
export default AddExpenseCategorySchemas;

import { Category, Info } from "@mui/icons-material";
import * as Yup from "yup";

const MedicineCategorySchemas = [
	{
		key: "1",
		// placeholder: 'Enter your name',
		name: "categoryName",
		label: "Category Name *",
		placeholder: "Enter Category name",
		styleContact: "rounded-xl overflow-hidden bg-white ",
		type: "text",
		validationSchema: Yup.string().required("Category name is required"),
		initialValue: "",
		icon: <Category />,
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
		name: "description",
		label: "Description *",
		placeholder: "Enter Description",
		styleContact: "rounded-xl overflow-hidden bg-white ",
		validationSchema: Yup.string().required("Description is required"),
		initialValue: "",
		icon: <Info />,
		required: true,
		contactField: {
			xs: 12,
			sm: 12,
			md: 6,
			lg: 6,
		},
	},
];
export default MedicineCategorySchemas;

import * as Yup from "yup";

const StockSchema = [
	{
		key: "3",
		name: "stock",
		type: "number",
		label: "Stock",
		validationSchema: Yup.string().required("Field Is Required"),
		initialValue: "",
	},
];
export default StockSchema;

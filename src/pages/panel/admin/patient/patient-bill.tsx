import { Box, Card, Container, Tooltip, Typography } from "@mui/material";
import AddNewPatientSchemas from "schemas/AddNewPatientSchemas";
import { Download, Print } from "@mui/icons-material";
import AdminLayout from "layouts/admin";
import { useState } from "react";

const PatientBill = () => {
	const [articleValue, setArticleValue] = useState("");
	const [image, setImage] = useState<any>("");
	const [countryDetails, setCountryDetails] = useState({
		code: "IN",
		label: "India",
		phone: "91",
	});

	const handleSend = async (values: any, submitProps: any) => {
		const formData = new FormData();
		formData.append("title", values?.title);
		formData.append("description", values?.description);
		image?.target?.files[0] &&
			formData.append("image", image?.target?.files[0]);
	};
	const initialValues = {
		title: "",
		description: "",
		clinicName: "Select clinic",
	};
	const validationSchema = AddNewPatientSchemas?.reduce(
		(accumulator, currentValue) => {
			accumulator[currentValue.name] = currentValue.validationSchema;
			return accumulator;
		},
		{} as any
	);

	const [tabelData, settabelData] = useState([
		{
			slNo: "1",
			code: "B004",
			description: "ECG",
			unitPrice: "1000",
			qty: "1",
			amount: "1000",
		},
	]);

	return (
		<AdminLayout title="Patient Bill">
			<Container
				className="flex gap-4"
				maxWidth="xl"
				// style={{
				//   width: '40vw',
				//   marginTop: '5vh',
				// }}
			>
				<Card className="w-[60%] !p-6 border-t-4 border-t-[#014488] border-b-4 dashboard-card-shadow border-b-[#014488] ">
					<Box className="flex justify-between shadow-md shadow-slate-200 mb-5">
						<Typography
							align="left"
							// color="text.primary"
							variant="h5"
							className="!mt-2 text-theme font-bold px-5"
							sx={{ marginBottom: 3 }}
						>
							Hospital
							<div className="text-[1rem] font-medium text-black">
								Ka, 3/I, Bashundhara Main Road
							</div>
							<div className="text-[1rem] font-medium text-black">
								Tel: 546484489
							</div>
						</Typography>
						<Typography align="right">
							<img className="w-24" src="/admin/invoice_logo.png" alt="logo" />
						</Typography>
					</Box>
					<Box className="h-20 flex justify-center items-center font-bold text-xl border border-gray-200">
						Medical Bill
					</Box>
					<div className="grid grid-cols-12 my-5 gap-3">
						<div className="col-span-6 font-semibold">
							Patient Name : <span className="font-normal">Akshya</span>
						</div>
						<div className="col-span-6 font-semibold">
							Invoice : <span className="font-normal">306</span>
						</div>
						<div className="col-span-6 font-semibold">
							Patient Id : <span className="font-normal">26</span>
						</div>
						<div className="col-span-6 font-bold">
							Date : <span className="font-normal">31-01-2023</span>
						</div>
						<div className="col-span-6 font-bold">
							Address : <span className="font-normal">BBSR</span>
						</div>
						{/* <div className="col-span-6 font-bold">
							Doctor : <span className="font-normal">Anshuman</span>
						</div> */}
						<div className="col-span-6 font-bold">
							Phone : <span className="font-normal"></span>
						</div>
					</div>

					<div className="flex flex-col">
						<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
								<div className="overflow-hidden">
									<table className="min-w-full">
										<thead className="border-2 border-gray-400">
											<tr>
												<th
													scope="col"
													className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
												>
													Sl.No
												</th>
												<th
													scope="col"
													className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
												>
													Code
												</th>
												<th
													scope="col"
													className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
												>
													Description
												</th>
												<th
													scope="col"
													className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
												>
													Unit Price(₹)
												</th>
												<th
													scope="col"
													className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
												>
													Qty
												</th>
												<th
													scope="col"
													className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
												>
													Amount(₹)
												</th>
											</tr>
										</thead>
										<tbody className="">
											<tr className="border-2 border-gray-400">
												<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
													1
												</td>
												<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
													B004
												</td>
												<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
													ECG
												</td>
												<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
													1000
												</td>
												<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
													1
												</td>
												<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
													1000
												</td>
											</tr>
											<tr className="bg-white border-2 border-gray-400">
												<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
													2
												</td>
												<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap"></td>
												<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap"></td>
												<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap"></td>
											</tr>
											<tr className="bg-white border-2 border-gray-400">
												<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
													3
												</td>
												<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap"></td>
												<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap"></td>
												<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap"></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</Card>
				<div className="mt-10 space-x-4">
					<Tooltip title="Print">
						<button className="text-white px-8 py-2 bg-theme rounded-md">
							Print <Print />
						</button>
					</Tooltip>
					<Tooltip title="Download">
						<button className="text-white px-8 py-2 bg-theme rounded-md">
							Download <Download />
						</button>
					</Tooltip>
				</div>
			</Container>
		</AdminLayout>
	);
};

export default PatientBill;

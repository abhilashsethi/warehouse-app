import { Delete, Info } from "@mui/icons-material";
import { Avatar, Container, Tooltip } from "@mui/material";
import { useWarehouseData } from "hooks";
import AdminLayout from "layouts/admin";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AddNewPatientSchemas from "schemas/AddNewPatientSchemas";

const AddPatient = () => {
	const [articleValue, setArticleValue] = useState("");
	const [image, setImage] = useState<any>("");
	const [loading, setLoading] = useState(false);
	const [isActive, setIsActive] = useState<string | undefined>("");
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
	const router = useRouter();
	const { warehouse, setWareHouse } = useWarehouseData();
	const [newData, setNewData] = useState<any>();
	useEffect(() => {
		const data = localStorage.getItem("warehouseData");
		const warehouseData = data ? JSON.parse(data) : null;
		console.log(data);
		setNewData(warehouseData);
	}, []);

	return (
		<AdminLayout title="Add Doctor">
			<Container
				maxWidth="xl"
				// style={{
				//   width: '40vw',
				//   marginTop: '5vh',
				// }}
			>
				<div className="grid py-4 gap-6 lg:grid-cols-3">
					{newData?.map((item: any) => (
						<div className="relative w-full rounded-xl flex space-y-4 flex-col gap-2 tracking-wide shadow-xl">
							{/* {console.log(item)} */}
							<div className="relative">
								<div className="absolute right-0 rounded-tl-lg md:top-2 top-20 z-50 bg-gradient-to-r from-rose-100 to-teal-100 p-2">
									<div className="flex">
										<Tooltip title="Details">
											<Avatar
												onClick={() =>
													router.push(
														`/panel/admin/patient/generate-bills?id=${item.id}`
													)
												}
												variant="rounded"
												className="!mr-0.5 !ml-0.5 !cursor-pointer !bg-yellow-500 !p-0"
												sx={{
													mr: ".1vw",
													padding: "0px !important",
													backgroundColor: "Highlight",
													cursor: "pointer",
													color: "",
													width: 30,
													height: 30,
												}}
											>
												<Info
													sx={{ padding: "0px !important" }}
													fontSize="small"
												/>
											</Avatar>
										</Tooltip>
									</div>
								</div>

								<div className="px-4 bg-gradient-to-r from-rose-100 to-teal-100">
									<div className="md:flex grid md:gap-2 py-1 md:py-0 justify-start">
										<p className="text-sm  md:text-sm text-gray-700">
											<span className="font-semibold text-base">
												Warehouse Name :{" "}
											</span>
											{item?.name}
										</p>
									</div>
									<div className="md:flex grid md:gap-2 py-1 md:py-0 justify-start">
										<p className="text-sm md:text-sm text-gray-700">
											<span>City :</span>
											{item?.city}
										</p>
									</div>
									<div className="md:flex grid md:gap-2 py-1 md:py-0 justify-start">
										<p className="text-sm md:text-sm text-gray-700">
											<span>City :</span>
											{item?.space_available}
										</p>
									</div>

									<div className="flex items-center justify-center py-4"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</Container>
		</AdminLayout>
	);
};

export default AddPatient;

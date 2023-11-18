import { Add, Done, Download, Visibility } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Card, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PhotoUpload from "components/core/PhotoUpload";
import TextInput from "components/core/TextInput";
import { Form, Formik } from "formik";
import AdminLayout from "layouts/admin";
import { useEffect, useState } from "react";
import AddNewProductSchemas from "schemas/AddNewProductSchemas";
import AddProductSchemas from "schemas/AddProductSchemas";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	// border: "2px solid #000",
	borderRadius: "10px",
	boxShadow: 24,
	p: 4,
};

const MedicalRecords = () => {
	const [articleValue, setArticleValue] = useState("");
	const [image, setImage] = useState<any>("");
	const [countryDetails, setCountryDetails] = useState({
		code: "IN",
		label: "India",
		phone: "91",
	});
	const [view, setView] = useState(false);

	const initialValues = {
		name: "",
		city: "",
		space: "",
	};
	const validationSchema = AddProductSchemas?.reduce(
		(accumulator, currentValue) => {
			accumulator[currentValue.name] = currentValue.validationSchema;
			return accumulator;
		},
		{} as any
	);
	const [localStorageData, setLocalStorageData] = useState([]);

	// Effect to retrieve data from local storage on component mount
	useEffect(() => {
		const data = localStorage.getItem("warehouseData");
		const warehouseData = data ? JSON.parse(data) : null;
		setLocalStorageData(warehouseData);
	}, []);

	const handleSend = async (values: any, submitProps: any) => {
		// Your existing code...
		const id = new Date().getTime();

		// Add the ID to the form values
		const dataWithId = { ...values, id };

		// Assuming localStorageData is an array
		const updatedLocalStorageData = [...localStorageData, dataWithId];

		// Update local storage with the new data
		localStorage.setItem(
			"warehouseData",
			JSON.stringify(updatedLocalStorageData)
		);

		// Clear the form after submission
		submitProps.resetForm();

		// Log the updated data
		console.log(updatedLocalStorageData);
	};

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<AdminLayout title="Medical Records">
			<Container
				maxWidth="xl"
				// style={{
				//   width: '40vw',
				//   marginTop: '5vh',
				// }}
			>
				<Card className="m-auto w-[70%] !p-6 border-t-4 border-t-theme border-b-4 dashboard-card-shadow  border-b-theme">
					<Typography
						align="center"
						// color="text.primary"
						variant="h5"
						className="!mt-2 text-theme font-bold"
						sx={{ marginBottom: 3 }}
					>
						Add Warehouse
					</Typography>

					<Formik
						// validationSchema={Yup.object(validationSchema)}
						onSubmit={handleSend}
						enableReinitialize
						initialValues={initialValues}
					>
						{(formik) => (
							<Form>
								<div className="grid grid-cols-1 gap-5 w-full">
									{AddNewProductSchemas?.map((inputItem, index) => (
										<div key={index}>
											{
												<div
													className={
														inputItem?.multiline
															? "col-span-2 w-full"
															: "w-full"
														// ""
													}
												>
													<TextInput
														key={inputItem.key}
														name={inputItem?.name}
														label={inputItem?.label}
														// multiline={inputItem?.multiline}
														type={inputItem?.type}
														// rows={inputItem?.rows}
														// styleContact={inputItem?.styleContact}
														startIcon={inputItem?.icon}
														// fileInput={inputItem?.fileInput}
													/>
												</div>
											}
										</div>
									))}
								</div>
								{view && (
									<div className="flex flex-col md:-mt-20">
										<span className="self-end mb-10">
											<button
												className="h-10 px-3 -mt-20 rounded-md bg-theme text-white transition-all ease-in-out duration-300"
												onClick={handleOpen}
											>
												<span>
													<Add />
												</span>
												Add More
											</button>
										</span>

										<Modal
											open={open}
											onClose={handleClose}
											aria-labelledby="modal-modal-title"
											aria-describedby="modal-modal-description"
										>
											<Box sx={style}>
												<div className="text-center pt-2">
													<p className="text-theme font-bold mb-8">
														Upload Medical Records
													</p>
													<PhotoUpload
														txtName="Upload Records"
														variant={"square"}
														value={image}
														onChange={setImage}
														className={"!bg-theme !w-full !rounded-lg"}
														height={250}
													/>
												</div>
												<div className="flex items-center justify-center">
													<button
														className="h-10 px-3 mt-5 rounded-md bg-theme text-white transition-all ease-in-out duration-300"
														onClick={handleClose}
													>
														<span className="pr-2">
															<Done />
														</span>
														Save
													</button>
												</div>
											</Box>
										</Modal>

										<div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-5 ">
											<div className="cursor-pointer w-20 border border-gray-400 p-3 rounded-lg flex flex-col justify-center items-center gap-2">
												<img src="/bg/file.png" alt="" />
												<div className="flex gap-2 justify-center items-center">
													<Visibility />
													<Download />
												</div>
											</div>
											<div className="cursor-pointer w-20 border border-gray-400 p-3 rounded-lg flex flex-col justify-center items-center gap-2">
												<img src="/bg/file.png" alt="" />
												<div className="flex gap-2 justify-center items-center">
													<Visibility />
													<Download />
												</div>
											</div>
											<div className="cursor-pointer w-20 border border-gray-400 p-3 rounded-lg flex flex-col justify-center items-center gap-2">
												<img src="/bg/file.png" alt="" />
												<div className="flex gap-2 justify-center items-center">
													<Visibility />
													<Download />
												</div>
											</div>
											<div className="cursor-pointer w-20 border border-gray-400 p-3 rounded-lg flex flex-col justify-center items-center gap-2">
												<img src="/bg/file.png" alt="" />
												<div className="flex gap-2 justify-center items-center">
													<Visibility />
													<Download />
												</div>
											</div>
											<div className="cursor-pointer w-20 border border-gray-400 p-3 rounded-lg flex flex-col justify-center items-center gap-2">
												<img src="/bg/file.png" alt="" />
												<div className="flex gap-2 justify-center items-center">
													<Visibility />
													<Download />
												</div>
											</div>
											<div className="cursor-pointer w-20 border border-gray-400 p-3 rounded-lg flex flex-col justify-center items-center gap-2">
												<img src="/bg/file.png" alt="" />
												<div className="flex gap-2 justify-center items-center">
													<Visibility />
													<Download />
												</div>
											</div>
										</div>
									</div>
									// <div className="flex justify-center items-center w-full text-center pt-7">
									// 	<PhotoUpload
									// 		txtName="Upload Records"
									// 		variant={"square"}
									// 		value={image}
									// 		onChange={setImage}
									// 		className={"!bg-theme !w-full !rounded-lg"}
									// 		height={250}
									// 	/>
									// </div>
								)}

								<div>
									<div className="pt-3 flex flex-row justify-center items-center ">
										<LoadingButton
											className="btn-background rounded-xl p-3 text-base !bg-theme text-white cursor-pointer"
											variant="contained"
											type="submit"
											fullWidth
											// disabled={formik.isSubmitting || !formik.isValid}
											loading={formik.isSubmitting}
											loadingPosition="start"
											startIcon={<Done />}
										>
											{/* {storeData ? 'Save' : 'Add'} */}
											Save
										</LoadingButton>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</Card>
			</Container>
		</AdminLayout>
	);
};

export default MedicalRecords;

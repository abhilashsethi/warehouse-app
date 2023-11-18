import { Avatar, Container, Drawer, Tooltip, Typography } from "@mui/material";
import AddLabReportSchemas from "schemas/AddLabReportSchemas";
import CountrySelector from "components/core/CountrySelector";
import { BorderColor, Done } from "@mui/icons-material";
import TextInput from "components/core/TextInput";
import { LoadingButton } from "@mui/lab";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import NewPatientSelecter from "components/NewPatientSelector";
import DoctorSelecter from "components/DoctorSelecter";
import LabReportStatusSelecter from "components/LabReportStatusSelecter";
import ClinicSelector from "components/ClinicSelector";
import NewClinicSelector from "components/NewClinicSelector";

type Props = {
	open?: boolean | any;
	onClose: () => void;
	setRealtime?: (value: boolean) => void;
	mutate?: any;
};

const AddLabReportDrawer = ({ open, onClose, mutate }: Props) => {
	const [countryDetails, setCountryDetails] = useState({
		code: "IN",
		label: "India",
		phone: "91",
	});
	const initialValues = AddLabReportSchemas.reduce(
		(accumulator, currentValue) => {
			accumulator[currentValue.name] = currentValue.initialValue;
			return accumulator;
		},
		{} as any
	);
	const validationSchema = AddLabReportSchemas.reduce(
		(accumulator, currentValue) => {
			accumulator[currentValue.name] = currentValue.validationSchema;
			return accumulator;
		},
		{} as { [key: string]: Yup.StringSchema }
	);
	const [image, setImage] = useState<any>();
	const handleSend = async (values: any, submitProps: any) => {};
	return (
		<>
			<Drawer anchor="right" open={open} onClose={() => onClose && onClose()}>
				<Container
					style={{
						width: "40vw",
						marginTop: "5vh",
					}}
				>
					<Typography
						align="center"
						color="text.primary"
						variant="h5"
						sx={{ marginBottom: 3 }}
					>
						Add Lab Report
					</Typography>
					<div className="mt-4 flex justify-center text-center">
						{/* <PhotoUpload
							variant={"circular"}
							value={image}
							onChange={setImage}
							width={150}
							height={150}
						/> */}
					</div>
					<Formik
						initialValues={initialValues}
						validationSchema={Yup.object(validationSchema)}
						onSubmit={handleSend}
					>
						{(formik) => (
							<Form>
								{AddLabReportSchemas?.map((inputItem, index) => (
									<div key={index}>
										{inputItem?.name === "patient" ? (
											<div className="w-full">
												<NewPatientSelecter />
											</div>
										) : inputItem?.name === "clinic" ? (
											<div className=" w-full">
												<NewClinicSelector />
											</div>
										) : inputItem?.name === "refdByDoctor" ? (
											<div className="w-full">
												<DoctorSelecter />
											</div>
										) : inputItem?.name === "status" ? (
											<div className="w-fulllab">
												<LabReportStatusSelecter />
											</div>
										) : (
											<div
												className={
													// inputItem?.multiline ? "col-span-2 w-full" : "w-full "
													"backdrop:"
												}
											>
												<TextInput
													key={index}
													name={inputItem?.name}
													label={inputItem?.label}
													placeholder={inputItem?.placeholder}
													multiline={inputItem?.multiline}
													rows={inputItem?.rows}
													type={inputItem?.type}
													// styleContact={inputItem?.styleContact}
												/>
											</div>
										)}
									</div>
								))}

								<div>
									<div className="mt-2 mb-2">
										<LoadingButton
											className="btn-background !bg-theme"
											variant="contained"
											type="submit"
											fullWidth
											disabled={formik.isSubmitting || !formik.isValid}
											loading={formik.isSubmitting}
											loadingPosition="start"
											startIcon={<Done />}
										>
											Add
										</LoadingButton>
									</div>
								</div>
							</Form>
						)}
					</Formik>
				</Container>
			</Drawer>
		</>
	);
};

export default AddLabReportDrawer;

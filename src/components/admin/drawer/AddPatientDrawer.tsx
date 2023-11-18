import * as Yup from "yup";

import { Done } from "@mui/icons-material";
import { useState } from "react";

import { LoadingButton } from "@mui/lab";
import { Container, Drawer, Typography } from "@mui/material";

import AddDoctorSchmas from "schemas/AddDoctorSchmas";

// import { post } from "api";
// import { CountrySelector, PhotoUpload, TextInput } from "components/Core";
import { Form, Formik } from "formik";
import TextInput from "components/core/TextInput";
import CountrySelector from "components/core/CountrySelector";
import PhotoUpload from "components/core/PhotoUpload";
// import { PhotoUpload } from "./core";
type Props = {
	open?: boolean | any;
	onClose: () => void;
	setRealtime?: (value: boolean) => void;
	mutate?: any;
};

const AddPatientDrawer = ({ open, onClose, mutate }: Props) => {
	const [countryDetails, setCountryDetails] = useState({
		code: "IN",
		label: "India",
		phone: "91",
	});
	const initialValues = AddDoctorSchmas.reduce((accumulator, currentValue) => {
		accumulator[currentValue.name] = currentValue.initialValue;
		return accumulator;
	}, {} as any);
	const validationSchema = AddDoctorSchmas.reduce(
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
						Add Patient
					</Typography>
					<div className="mt-4 flex justify-center text-center">
						<PhotoUpload
							variant={"circular"}
							value={image}
							onChange={setImage}
							width={150}
							height={150}
						/>
					</div>
					<Formik
						initialValues={initialValues}
						validationSchema={Yup.object(validationSchema)}
						onSubmit={handleSend}
					>
						{(formik) => (
							<Form>
								{AddDoctorSchmas?.map((inputItem, index) => (
									<div key={index}>
										{inputItem?.name === "countryCode" ? (
											<div className=" py-4 w-full">
												<CountrySelector
													countryDetails={countryDetails}
													setCountryDetails={(value) => {
														formik?.setFieldValue("countryCode", value?.phone);
														setCountryDetails(value);
													}}
												/>
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
													// multiline={inputItem?.multiline}
													// rows={inputItem?.rows}
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

export default AddPatientDrawer;

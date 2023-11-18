import { Container, Drawer, Typography } from "@mui/material";
import AddPaymentSchemas from "schemas/AddPaymentSchemas";
import ClinicSelector from "components/ClinicSelector";
import TextInput from "components/core/TextInput";
import { Done } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import DoctorSelecter from "components/DoctorSelecter";
import { useRouter } from "next/router";

type Props = {
	open?: boolean | any;
	onClose: () => void;
	setRealtime?: (value: boolean) => void;
	mutate?: any;
};

const AddPaymentDrawer = ({ open, onClose, mutate }: Props) => {
	const [countryDetails, setCountryDetails] = useState({
		code: "IN",
		label: "India",
		phone: "91",
	});
	const initialValues = AddPaymentSchemas.reduce(
		(accumulator, currentValue) => {
			accumulator[currentValue.name] = currentValue.initialValue;
			return accumulator;
		},
		{} as any
	);
	const validationSchema = AddPaymentSchemas.reduce(
		(accumulator, currentValue) => {
			accumulator[currentValue.name] = currentValue.validationSchema;
			return accumulator;
		},
		{} as { [key: string]: Yup.StringSchema }
	);
	const [image, setImage] = useState<any>();
	const router = useRouter();
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
						Add New Payment
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
								{AddPaymentSchemas?.map((inputItem, index) => (
									<div key={index}>
										{inputItem?.name === "clinic" ? (
											<div className=" py-4 w-full">
												<ClinicSelector />
											</div>
										) : inputItem?.name === "doctor" ? (
											<div>
												<DoctorSelecter />
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
													// multiline={inputItem?.multiline}
													// rows={inputItem?.rows}
													type={inputItem?.type}
													startIcon={inputItem?.icon}
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
											onClick={() =>
												router.push(`/panel/admin/financial-activity/invoice`)
											}
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

export default AddPaymentDrawer;

import InstructionSelecter from "components/InstructionSelecter";
import PrescriptionSchemas from "schemas/PrescriptionSchemas";
import { Card, Container, Typography } from "@mui/material";
import PatientSelecter from "components/PatientSelecter";
import DrugSelecter from "components/DrugSelecter";
import TimeSelecter from "components/TimeSelecter";
import TextInput from "components/core/TextInput";
import { ArrowForward, Done } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import AdminLayout from "layouts/admin";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const MedicineTab = () => {
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
		clinicName: "",
	};
	const validationSchema = PrescriptionSchemas?.reduce(
		(accumulator, currentValue) => {
			accumulator[currentValue.name] = currentValue.validationSchema;
			return accumulator;
		},
		{} as any
	);

	return (
		<div>
			<Formik
				validationSchema={Yup.object(validationSchema)}
				onSubmit={handleSend}
				enableReinitialize
				initialValues={initialValues}
			>
				{(formik) => (
					<Form>
						<div className="grid grid-cols-2 gap-1 w-full justify-center items-center justify-items-center">
							{PrescriptionSchemas?.map((inputItem) => (
								<>
									{inputItem?.name === "selectPatient" ? (
										<div className="col-span-2 w-full">
											<PatientSelecter />
										</div>
									) : inputItem?.name === "drug" ? (
										<div className="w-full">
											<DrugSelecter />
										</div>
									) : inputItem?.name === "instruction" ? (
										<div className="w-full">
											<InstructionSelecter />
										</div>
									) : inputItem?.name === "time" ? (
										<div className="w-full">
											<TimeSelecter />
										</div>
									) : (
										<div
											className={
												inputItem?.multiline ? "col-span-2 w-full" : "w-full"
											}
										>
											<TextInput
												key={inputItem.key}
												name={inputItem?.name}
												label={inputItem?.label}
												multiline={inputItem?.multiline}
												rows={inputItem?.rows}
												type={inputItem?.type}
												styleContact={inputItem?.styleContact}
												// startIcon={inputItem?.icon}
												placeholder={inputItem?.placeholder}
											/>
										</div>
									)}
								</>
							))}
						</div>

						<div className="flex justify-center text-center pt-7">
							{/* <PhotoUpload
										txtName="Upload Clinic Image"
										variant={"square"}
										value={image}
										onChange={setImage}
										className={"!bg-theme !w-full !rounded-lg"}
										height={250}
									/> */}
						</div>

						<div>
							<div className="pt-3 flex flex-row justify-center items-center">
								<LoadingButton
									className="btn-background rounded-xl w-[50%] p-3 text-base !bg-theme cursor-pointer"
									variant="contained"
									type="submit"
									fullWidth
									disabled={formik.isSubmitting || !formik.isValid}
									loading={formik.isSubmitting}
									loadingPosition="start"
									endIcon={<ArrowForward />}
								>
									{/* {storeData ? 'Save' : 'Add'} */}
									Next
								</LoadingButton>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default MedicineTab;

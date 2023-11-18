import PatientSelecter from "components/PatientSelecter";
import LabTestSchemas from "schemas/LabTestSchemas";
import TextInput from "components/core/TextInput";
import { Done } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const LabTestTab = () => {
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
	const validationSchema = LabTestSchemas?.reduce(
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
						<div className="grid grid-cols-1 gap-1 w-full justify-center items-center justify-items-center">
							{LabTestSchemas?.map((inputItem) => (
								<>
									{
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
												startIcon={inputItem?.icon}
												placeholder={inputItem?.placeholder}
											/>
										</div>
									}
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
									startIcon={<Done />}
								>
									{/* {storeData ? 'Save' : 'Add'} */}
									Generate Prescription
								</LoadingButton>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default LabTestTab;

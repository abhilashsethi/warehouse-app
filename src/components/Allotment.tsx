import AddBedAllotmentSchemas from "schemas/AddBedAllotmentSchemas";
import BedCategorySelecter from "components/BedCategorySelecter";
import BedPrioritySelecter from "components/BedPrioritySelecter";
import BloodGroupSelector from "components/BloodGroupSelector";
import NewPatientSelecter from "components/NewPatientSelector";
import NewClinicSelector from "components/NewClinicSelector";
import { Avatar, Card, Container, Tooltip, Typography } from "@mui/material";
import DoctorSelecter from "components/DoctorSelecter";
import { BlockOutlined, Bloodtype, Done } from "@mui/icons-material";
import TextInput from "components/core/TextInput";
import { LoadingButton } from "@mui/lab";
import AdminLayout from "layouts/admin";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const AddAllotments = () => {
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
	const validationSchema = AddBedAllotmentSchemas?.reduce(
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
						<div className="grid grid-cols-2 gap-4 w-full">
							{AddBedAllotmentSchemas?.map((inputItem, index) => (
								<div key={index}>
									{inputItem?.name === "bedCategory" ? (
										<div className=" w-full">
											<BedCategorySelecter />
										</div>
									) : inputItem?.name === "patient" ? (
										<div className=" w-full">
											<NewPatientSelecter />
										</div>
									) : inputItem?.name === "category" ? (
										<div className=" w-full">
											<BedPrioritySelecter />
										</div>
									) : inputItem?.name === "clinic" ? (
										<div className=" w-full">
											<NewClinicSelector />
										</div>
									) : inputItem?.name === "doctor" ? (
										<div className=" w-full">
											<DoctorSelecter />
										</div>
									) : (
										<div
											className={
												// inputItem?.multiline
												// 	? "col-span-2 w-full"
												// 	: "w-full"
												""
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
									)}
								</div>
							))}
							{/* <PhotoUpload
          txtName="Upload Profile Photo"
          variant={"square"}
          value={image}
          onChange={setImage}
          className={"!bg-theme !w-full !rounded-lg"}
          height={200}
          width={150}
        /> */}
						</div>
						<div className="flex justify-center text-center pt-7"></div>
						<div>
							<div className=" pt-3 flex flex-row justify-center items-center ">
								<LoadingButton
									className="btn-background rounded-xl p-3 text-base !bg-[#014488] text-white cursor-pointer"
									variant="contained"
									type="submit"
									fullWidth
									disabled={formik.isSubmitting || !formik.isValid}
									loading={formik.isSubmitting}
									loadingPosition="start"
									startIcon={<Done />}
								>
									Save
								</LoadingButton>
							</div>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default AddAllotments;

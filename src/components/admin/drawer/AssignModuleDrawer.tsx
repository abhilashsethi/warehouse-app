import * as Yup from "yup";
import {
	AirlineSeatFlatAngled,
	Apartment,
	Close,
	CurrencyRupee,
	Done,
	Margin,
	Medication,
	NotificationAdd,
	NotificationsActive,
	PermContactCalendar,
	Schedule,
	Science,
	SingleBed,
} from "@mui/icons-material";
import Person4Icon from "@mui/icons-material/Person4";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Container, Drawer, ToggleButton, Typography } from "@mui/material";
import AddDoctorSchmas from "schemas/AddDoctorSchmas";
import { Form, Formik } from "formik";
import TextInput from "components/core/TextInput";
import CountrySelector from "components/core/CountrySelector";
import PhotoUpload from "components/core/PhotoUpload";
import CheckIcon from "@mui/icons-material/Check";
import PersonIcon from "@mui/icons-material/Person";

type Props = {
	open?: boolean | any;
	onClose: () => void;
	setRealtime?: (value: boolean) => void;
	mutate?: any;
};

const AssignModuleDrawer = ({ open, onClose, mutate }: Props) => {
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
	const [selected1, setSelected1] = useState(true);
	const [selected2, setSelected2] = useState(true);
	const [selected3, setSelected3] = useState(true);
	const [selected4, setSelected4] = useState(true);
	const [selected5, setSelected5] = useState(true);
	const [selected6, setSelected6] = useState(true);
	const [selected7, setSelected7] = useState(true);
	const [selected8, setSelected8] = useState(true);
	const [selected9, setSelected9] = useState(true);
	const [selected10, setSelected10] = useState(true);
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
						Assign Module
					</Typography>

					<div className="grid grid-cols-1 gap-3">
						<div
							className={`flex w-full justify-between items-center ${
								selected1 ? "bg-[#faebf3]" : "bg-blue-200"
							} pl-3 rounded-md`}
						>
							<Apartment fontSize="large" />
							<p className="text-lg font-bold">Clinics</p>
							<ToggleButton
								value="check"
								selected={selected1}
								onChange={() => {
									setSelected1(!selected1);
								}}
							>
								{selected1 ? <CheckIcon /> : <Close />}
							</ToggleButton>
						</div>

						<div
							className={`flex w-full justify-between items-center ${
								selected2 ? "bg-[#faebf3]" : "bg-blue-200"
							} pl-3 rounded-md`}
						>
							<Person4Icon fontSize="medium" />
							<p className="text-lg font-bold">Doctors</p>
							<ToggleButton
								value="check"
								selected={selected2}
								onChange={() => {
									setSelected2(!selected2);
								}}
							>
								{selected2 ? <CheckIcon /> : <Close />}
							</ToggleButton>
						</div>

						<div
							className={`flex w-full justify-between items-center ${
								selected3 ? "bg-[#faebf3]" : "bg-blue-200"
							} pl-3 rounded-md`}
						>
							<PersonIcon fontSize="medium" />
							<p className="text-lg font-bold">Patient</p>
							<ToggleButton
								value="check"
								selected={selected3}
								onChange={() => {
									setSelected3(!selected3);
								}}
							>
								{selected3 ? <CheckIcon /> : <Close />}
							</ToggleButton>
						</div>

						<div
							className={`flex w-full justify-between items-center ${
								selected4 ? "bg-[#faebf3]" : "bg-blue-200"
							} pl-3 rounded-md`}
						>
							<Schedule fontSize="medium" />
							<p className="text-lg font-bold">Schedule</p>
							<ToggleButton
								value="check"
								selected={selected4}
								onChange={() => {
									setSelected4(!selected4);
								}}
							>
								{selected4 ? <CheckIcon /> : <Close />}
							</ToggleButton>
						</div>

						<div
							className={`flex w-full justify-between items-center ${
								selected5 ? "bg-[#faebf3]" : "bg-blue-200"
							} pl-3 rounded-md`}
						>
							<PermContactCalendar fontSize="medium" />
							<p className="text-lg font-bold">Appointments</p>
							<ToggleButton
								value="check"
								selected={selected5}
								onChange={() => {
									setSelected5(!selected5);
								}}
							>
								{selected5 ? <CheckIcon /> : <Close />}
							</ToggleButton>
						</div>

						<div
							className={`flex w-full justify-between items-center ${
								selected6 ? "bg-[#faebf3]" : "bg-blue-200"
							} pl-3 rounded-md`}
						>
							<Science fontSize="medium" />
							<p className="text-lg font-bold">Lab Tests</p>
							<ToggleButton
								value="check"
								selected={selected6}
								onChange={() => {
									setSelected6(!selected6);
								}}
							>
								{selected6 ? <CheckIcon /> : <Close />}
							</ToggleButton>
						</div>

						<div
							className={`flex w-full justify-between items-center ${
								selected7 ? "bg-[#faebf3]" : "bg-blue-200"
							} pl-3 rounded-md`}
						>
							<Margin fontSize="medium" />
							<p className="text-lg font-bold">Inventory</p>
							<ToggleButton
								value="check"
								selected={selected7}
								onChange={() => {
									setSelected7(!selected7);
								}}
							>
								{selected7 ? <CheckIcon /> : <Close />}
							</ToggleButton>
						</div>

						<div
							className={`flex w-full justify-between items-center ${
								selected8 ? "bg-[#faebf3]" : "bg-blue-200"
							} pl-3 rounded-md`}
						>
							<AirlineSeatFlatAngled fontSize="medium" />
							<p className="text-lg font-bold">Bed</p>
							<ToggleButton
								value="check"
								selected={selected8}
								onChange={() => {
									setSelected8(!selected8);
								}}
							>
								{selected8 ? <CheckIcon /> : <Close />}
							</ToggleButton>
						</div>

						<div
							className={`flex w-full justify-between items-center ${
								selected10 ? "bg-[#faebf3]" : "bg-blue-200"
							} pl-3 rounded-md`}
						>
							<Medication fontSize="medium" />
							<p className="text-lg font-bold">Pharmacy</p>
							<ToggleButton
								value="check"
								selected={selected10}
								onChange={() => {
									setSelected10(!selected10);
								}}
							>
								{selected10 ? <CheckIcon /> : <Close />}
							</ToggleButton>
						</div>

						<div
							className={`flex w-full justify-between items-center ${
								selected9 ? "bg-[#faebf3]" : "bg-blue-200"
							} pl-3 rounded-md`}
						>
							<CurrencyRupee fontSize="medium" />
							<p className="text-lg font-bold">Financial Activity</p>
							<ToggleButton
								value="check"
								selected={selected9}
								onChange={() => {
									setSelected9(!selected9);
								}}
							>
								{selected9 ? <CheckIcon /> : <Close />}
							</ToggleButton>
						</div>

						<div className="mt-2 mb-2">
							<LoadingButton
								className="btn-background !bg-theme"
								variant="contained"
								type="submit"
								fullWidth
								// disabled={formik.isSubmitting || !formik.isValid}
								// loading={formik.isSubmitting}
								loadingPosition="start"
								startIcon={<Done />}
							>
								Add
							</LoadingButton>
						</div>
					</div>
				</Container>
			</Drawer>
		</>
	);
};

export default AssignModuleDrawer;

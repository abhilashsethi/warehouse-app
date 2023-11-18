import DailyProgressSchemas from "schemas/DailyProgressSchemas";
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
import NurseSelecter from "./NurseSelecter";
import AddDoctorDrawer from "components/admin/drawer/AssignModuleDrawer";
import JobApplyModal from "components/DoctorViewDetailsModal";
import { Paper } from "@mui/material";
import MaterialTable from "@material-table/core";
import { useRouter } from "next/router";
import { MuiTblOptions } from "utils";
import {
	Block,
	BorderColor,
	Collections,
	Delete,
	Info,
	RemoveCircleOutline,
} from "@mui/icons-material";
import HeadStyle from "components/core/HeadStyle";
import DailyProgressDrawer from "./admin/drawer/DailyProgressDrawer";

const DailyProgress = () => {
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
	const validationSchema = DailyProgressSchemas?.reduce(
		(accumulator, currentValue) => {
			accumulator[currentValue.name] = currentValue.validationSchema;
			return accumulator;
		},
		{} as any
	);

	const [openAddStoreDrawer, setOpenAddStoreDrawer] = useState(false);
	const [tabelData, settabelData] = useState([
		{
			sl: "1",
			nurse: "Anshuman Agrawal",
			description: "Lorem, ipsum dolor.",
			date: "15-01-2022",
			time: "08:00",
			view: <JobApplyModal title="" />,
		},
		{
			sl: "3",
			nurse: "Rajeev Jena",
			description: "Lorem ipsum dolor sit.",
			date: "15-01-2022",
			time: "08:00",
			view: <JobApplyModal title="" />,
		},
		{
			sl: "3",
			nurse: "Rajeev Jena",
			description: "Lorem ipsum dolor sit.",
			date: "15-01-2022",
			time: "08:00",
			view: <JobApplyModal title="" />,
		},
	]);

	return (
		<div className="grid grid-cols-12 content-between gap-6  m-1 ">
			<div className="col-span-12 pt-1 w-full flex flex-col justify-center gap-5 md:col-span-12 lg:col-span-12 !border-grey-500 rounded-xl !shadow-xl">
				<DailyProgressDrawer
					open={openAddStoreDrawer}
					onClose={() => setOpenAddStoreDrawer(false)}
					// mutate={mutate}
				/>
				<MaterialTable
					data={tabelData}
					components={{
						Container: (props) => <Paper {...props} elevation={5} />,
					}}
					title={<HeadStyle name="Daily Progress " />}
					options={{
						...MuiTblOptions(),
						selection: true,
						filtering: true,
						sorting: true,
					}}
					// editable={{
					// 	onRowAdd: (newRow) => new Promise(() => {}),
					// }}
					columns={[
						{
							title: "#",
							field: "sl",
							editable: "never",
							// width: "2%",
							filtering: false,
						},
						{
							title: "Date",
							tooltip: "Date",
							filtering: false,
							searchable: true,
							headerStyle: {
								textAlign: "center",
							},
							field: "date",
						},

						{
							title: "Time",
							tooltip: "Time",
							field: "time",
							searchable: true,
							export: true,
							emptyValue: "Not Provided",
							//   hidden:true,
						},

						{
							title: "Description",
							width: "20%",
							headerStyle: {
								textAlign: "center",
							},
							field: "description",
						},
						{
							title: "Nurse",
							width: "20%",
							headerStyle: {
								textAlign: "center",
							},
							field: "nurse",
						},
						{
							title: "View Details",
							field: "view",
							emptyValue: "Not Login Yet",
							filtering: false,
							// render: ({ lastLogin }: any) => lastLogin,
							// ? dayjs(new Date(lastLogin)).format("lll")
							// : "Not Login Yet",
						},
						{
							title: "Actions",
							cellStyle: {
								textAlign: "right",
							},
							export: false,
							// width: "18%",
							// field: "pick",
							render: (row) => (
								<>
									<div className="flex ">
										{/* <Tooltip title="Identification">
												<Avatar
													variant="rounded"
													onClick={() => setOpenProductInfo(row as any)}
													// onClick={() => setOpenProductInfo(row)}
													sx={{
														mr: ".1vw",
														padding: "0px !important",
														backgroundColor: "Highlight",
														cursor: "pointer",
														color: "",
													}}
												>
													<Collections sx={{ padding: "0px !important" }} />
												</Avatar>
											</Tooltip> */}
										<Tooltip title="Edit">
											<Avatar
												variant="rounded"
												// onClick={() => setOpenProductInfo(row as any)}
												// onClick={() => setOpenProductInfo(row)}
												className="!mr-0.5 !cursor-pointer !bg-theme !p-0 !ml-0.5"
												sx={{
													mr: ".1vw",
													padding: "0px !important",
													backgroundColor: "Highlight",
													cursor: "pointer",
													color: "",
												}}
											>
												<BorderColor sx={{ padding: "0px !important" }} />
											</Avatar>
										</Tooltip>
										<Tooltip title="Delete">
											<Avatar
												variant="rounded"
												// onClick={() => setOpenAddAddressDrawer(row as any)}
												className="!mr-1 !cursor-pointer !bg-red-700 !p-0 !ml-0.5"
												sx={{
													mr: ".1vw",
													padding: "0px !important",
													backgroundColor: "Highlight",
													cursor: "pointer",
													color: "",
												}}
											>
												<Delete className="!p-0" />
											</Avatar>
										</Tooltip>
									</div>
								</>
							),
						},
					]}
					actions={[
						{
							icon: "upload_file",
							tooltip: "Import Data",
							isFreeAction: true,
							onClick: () => {
								// setOpenAddStoreDrawer(true);
							},
						},
						{
							icon: "add",
							tooltip: "Add Daily Progress",
							isFreeAction: true,
							onClick: () => {
								setOpenAddStoreDrawer(true);
							},
						},
					]}
				/>
			</div>
		</div>
	);
};

export default DailyProgress;

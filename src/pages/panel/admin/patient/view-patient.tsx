import AddPatientDrawer from "components/admin/drawer/AddPatientDrawer";
import { History, Info, Payment } from "@mui/icons-material";
import HeadStyle from "components/core/HeadStyle";
import MaterialTable from "@material-table/core";
import Tooltip from "@mui/material/Tooltip";
import AdminLayout from "layouts/admin";
import { useRouter } from "next/router";
import { Paper } from "@mui/material";
import { MuiTblOptions } from "utils";
import { useState } from "react";

const ViewPatient = () => {
	const router = useRouter();
	const [openDialog, setOpenDialog] = useState<any>({
		dialogOpen: false,
		cardRoute: "",
		highlightText: "",
		animationData: "",
	});

	const [openAddStoreDrawer, setOpenAddStoreDrawer] = useState(false);

	const [tabelData, settabelData] = useState([
		{
			sl: "1",
			patientId: "aBaL77",
			name: "Raj",
			phone: "65758",
			clinic: "care Hospital",
			email: "swainsangeeta88@gmail.com",
			// due: <ViewDetailsBtn title={"View Details"} />,
		},
		{
			sl: "2",
			patientId: "aBaL77",
			name: "Sarat",
			phone: "65758",
			clinic: "Utkal Heart Center",
			email: "swainsangeeta88@gmail.com",
			// due: <ViewDetailsBtn title={"View Details"} />,
		},
		{
			sl: "3",
			patientId: "aBaL77",
			name: "priti",
			phone: "65758",
			clinic: "Dr Agrawal Clinic",
			email: "swainsangeeta88@gmail.com",
			// due: <ViewDetailsBtn title={"View Details"} />,
		},
		{
			sl: "4",
			patientId: "aBaL77",
			name: "vikash",
			phone: "65758",
			clinic: "Aravind Eye Hospital",
			email: "swainsangeeta88@gmail.com",
			// due: <ViewDetailsBtn title={"View Details"} />,
		},
		{
			sl: "5",
			patientId: "aBaL77",
			name: "ssa",
			phone: "65758",
			clinic: "care Hospital",
			email: "swainsangeeta88@gmail.com",
			// due: <ViewDetailsBtn title={"View Details"} />,
		},
		{
			sl: "6",
			patientId: "aBaL77",
			name: "ssa",
			phone: "65758",
			clinic: "care Hospital",
			email: "swainsangeeta88@gmail.com",
			// due: <ViewDetailsBtn title={"View Details"} />,
		},
	]);

	return (
		<AdminLayout title="Admin Dashboard">
			<div className="grid grid-cols-12 content-between gap-6  m-5 !mb-6 ">
				<div className="col-span-12 pt-9 w-full flex flex-col justify-center gap-5 md:col-span-12 lg:col-span-12 !border-grey-500 rounded-xl !shadow-xl">
					<AddPatientDrawer
						open={openAddStoreDrawer}
						onClose={() => setOpenAddStoreDrawer(false)}
						// mutate={mutate}
					/>
					<MaterialTable
						data={tabelData}
						components={{
							Container: (props) => <Paper {...props} elevation={5} />,
						}}
						title={<HeadStyle name="Patient Database" />}
						options={{ ...MuiTblOptions(), selection: true }}
						// editable={{
						// 	onRowAdd: (newRow) => new Promise(() => {}),
						// }}
						columns={[
							{
								title: "#",
								field: "sl",
								editable: "never",
								width: "2%",
							},
							{
								title: "Patient Id",
								field: "patientId",
								editable: "never",
								width: "2%",
							},
							{
								title: "Name",
								tooltip: "Name",
								searchable: true,
								field: "name",
							},

							{
								title: "Phone",
								field: "phone",
								searchable: true,
								export: true,
								emptyValue: "Not Provided",
								//   hidden:true,
							},

							{
								title: "Email",
								field: "email",
							},
							// {
							// 	title: "Due Balance",
							// 	field: "due",
							// },
							{
								title: "Actions",
								headerStyle: {
									textAlign: "center",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "100%",
									padding: "10px",
								},
								export: false,
								// width: "18%",
								// field: "pick",
								render: (row) => (
									<>
										<div className="flex gap-1">
											{/* <Tooltip title="Edit">
												<button className="text-white px-3 py-2 bg-green-500 flex gap-2 rounded-md justify-center items-center">
													Edit
													<BorderColor
														sx={{
															color: "white",
															padding: "0px !important",
															fontSize: 20,
														}}
													/>
												</button>
											</Tooltip> */}
											<Tooltip title="Info">
												<button className="text-white px-3 py-2 bg-[#0e89e2] flex gap-2 rounded-md justify-center items-center">
													Info
													<Info
														sx={{
															color: "white",
															padding: "0px !important",
															fontSize: 20,
														}}
													/>
												</button>
											</Tooltip>
											<Tooltip title="History">
												<button className="text-white px-3 py-2 bg-green-600 flex gap-2 rounded-md justify-center items-center">
													History
													<History
														sx={{
															color: "white",
															padding: "0px !important",
															fontSize: 20,
														}}
													/>
												</button>
											</Tooltip>
											<Tooltip title="Payment">
												<button className="text-white px-3 py-2 bg-[#512da8] flex gap-2 rounded-md justify-center items-center">
													Payment
													<Payment
														sx={{
															color: "white",
															padding: "0px !important",
															fontSize: 20,
														}}
													/>
												</button>
											</Tooltip>
											{/* <Tooltip title="Delete">
												<button className="text-white px-3 py-2 bg-red-700 flex gap-2 rounded-md justify-center items-center">
													Delete
													<Delete
														sx={{
															color: "white",
															padding: "0px !important",
															fontSize: 20,
														}}
													/>
												</button>
											</Tooltip> */}
										</div>
									</>
								),
							},
							// {
							// 	title: "View Details",
							// 	field: "view",
							// 	emptyValue: "Not Login Yet",
							// 	render: ({ lastLogin }: any) => lastLogin,
							// 	? dayjs(new Date(lastLogin)).format("lll")
							// 	: "Not Login Yet",
							// },
						]}
						actions={[
							{
								icon: "add",
								tooltip: "Add Patient",
								isFreeAction: true,
								onClick: () => {
									setOpenAddStoreDrawer(true);
								},
							},
						]}
					/>
				</div>
			</div>
		</AdminLayout>
	);
};

export default ViewPatient;

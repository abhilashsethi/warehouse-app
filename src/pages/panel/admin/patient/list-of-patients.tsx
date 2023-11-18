import PatientViewDetailsModal from "components/PatientViewDetailsModal";
import PhotoUpload from "components/core/PhotoUpload";
import NotesDialogue from "components/NotesDialogue";
import HeadStyle from "components/core/HeadStyle";
import MaterialTable from "@material-table/core";
import AdminLayout from "layouts/admin";
import { useRouter } from "next/router";
import { MuiTblOptions } from "utils";
import { useState } from "react";
import {
	DriveFolderUpload,
	BorderColor,
	CreditCard,
	Delete,
	Done,
	Print,
	Download,
} from "@mui/icons-material";
import {
	Avatar,
	Box,
	Modal,
	Paper,
	Tooltip,
	Card,
	Typography,
} from "@mui/material";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	// height: 600,
	bgcolor: "background.paper",
	// border: "2px solid #000",
	borderRadius: "10px",
	boxShadow: 24,
	p: 4,
};

const ListOfPatients = () => {
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
			Id: "1",
			name: "Akshya Kumar Rout",
			email: "swainsangeeta88@gmail.com",
			phone: "65758",
			specialization: "Cardiology",
			clinics: "care Hospital",
			yoe: "10",
			time_stamp: "10 Jan, 08:00",
			view: <PatientViewDetailsModal title="" />,
		},
		{
			Id: "2",
			name: "Sarat",
			email: "swainsangeeta88@gmail.com",
			phone: "65758",
			specialization: "Cardiology",
			clinics: "Utkal Heart Center",
			yoe: "7",
			time_stamp: "12 Jan, 08:00",
			view: <PatientViewDetailsModal title="" />,
		},
		{
			Id: "3",
			name: "Priti",
			email: "swainsangeeta88@gmail.com",
			phone: "65758",
			specialization: "Dermatology",
			clinics: "Dr Agrawal Clinic",
			yoe: "5",
			time_stamp: "15 Jan, 08:00",
			view: <PatientViewDetailsModal title="" />,
		},
		{
			Id: "4",
			name: "Vikash",
			email: "swainsangeeta88@gmail.com",
			phone: "65758",
			specialization: "Neurology",
			clinics: "care Hospital",
			yoe: "5",
			time_stamp: "18 Jan, 08:00",
			view: <PatientViewDetailsModal title="" />,
		},
		{
			Id: "5",
			name: "Ranjan",
			email: "swainsangeeta88@gmail.com",
			phone: "65758",
			specialization: "Eye Specialist",
			clinics: "Aravind Eye Hospital",
			yoe: "6",
			time_stamp: "20 Jan, 08:00",
			view: <PatientViewDetailsModal title="" />,
		},
		{
			Id: "6",
			name: "Anshuman Agrawal",
			email: "swainsangeeta88@gmail.com",
			phone: "65758",
			specialization: "Cardiology",
			clinics: "care Hospital",
			yoe: "7",
			time_stamp: "22 Jan, 08:00",
			view: <PatientViewDetailsModal title="" />,
		},
		{
			Id: "7",
			name: "Pabitra Pattnaik",
			email: "swainsangeeta88@gmail.com",
			phone: "65758",
			specialization: "Medicine Specialist",
			clinics: "care Hospital",
			yoe: "7",
			time_stamp: "22 Jan, 08:00",
			view: <PatientViewDetailsModal title="" />,
		},
	]);
	const [open, setOpen] = useState<boolean>(true);
	const handleNoteOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [openBillModal, setOpenBillModal] = useState<boolean>(false);
	const handleOpenBillModal = () => setOpenBillModal(true);
	const handleCloseBillModal = () => setOpenBillModal(false);

	const [image, setImage] = useState<any>("");

	const [openModal, setOpenModal] = useState(false);
	const handleOpen = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);

	// const [openBillModal, setOpenBillModal] = useState(false);
	// const handleBillOpen = () => setOpenBillModal(true);
	// const handleBillClose = () => setOpenBillModal(false);

	return (
		<AdminLayout title="All Patients">
			<div className="grid grid-cols-12 content-between gap-6  m-5 !mb-6 ">
				<div className="col-span-12 pt-9 w-full flex flex-col justify-center gap-5 md:col-span-12 lg:col-span-12 !border-grey-500 rounded-xl !shadow-xl">
					<Modal
						open={openModal}
						onClose={handleCloseModal}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box sx={style}>
							<div className="text-center pt-2">
								<p className="text-theme font-bold mb-8">
									Upload Your Prescription
								</p>
								<PhotoUpload
									txtName="Upload"
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
									onClick={handleCloseModal}
								>
									<span className="pr-2">
										<Done />
									</span>
									Save
								</button>
							</div>
						</Box>
					</Modal>
					<Modal
						open={openBillModal}
						onClose={handleCloseBillModal}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Card
							sx={style}
							className=" w-[60%] !p-6 border-t-4 border-t-theme border-b-4 dashboard-card-shadow  border-b-theme"
						>
							<Box className="flex justify-between shadow-md shadow-slate-200 mb-5">
								<Typography
									align="left"
									// color="text.primary"
									variant="h5"
									className="!mt-2 text-theme font-bold px-5"
									sx={{ marginBottom: 3 }}
								>
									Hospital
									<div className="text-[1rem] font-medium text-black">
										Ka, 3/I, Bashundhara Main Road
									</div>
									<div className="text-[1rem] font-medium text-black">
										Tel: 546484489
									</div>
								</Typography>
								<Typography align="right">
									<img
										className="w-24"
										src="/admin/invoice_logo.png"
										alt="logo"
									/>
								</Typography>
							</Box>
							<Box className="h-20 flex justify-center items-center font-bold text-xl border border-gray-200">
								Medical Bill
							</Box>
							<div className="grid grid-cols-12 my-5 gap-3">
								<div className="col-span-6 font-semibold">
									Patient Name : <span className="font-normal">Akshya</span>
								</div>
								<div className="col-span-6 font-semibold">
									Invoice : <span className="font-normal">306</span>
								</div>
								<div className="col-span-6 font-semibold">
									Patient Id : <span className="font-normal">26</span>
								</div>
								<div className="col-span-6 font-bold">
									Date : <span className="font-normal">31-01-2023</span>
								</div>
								<div className="col-span-6 font-bold">
									Address : <span className="font-normal">BBSR</span>
								</div>
								{/* <div className="col-span-6 font-bold">
							Doctor : <span className="font-normal">Anshuman</span>
						</div> */}
								<div className="col-span-6 font-bold">
									Phone : <span className="font-normal"></span>
								</div>
							</div>

							<div className="flex flex-col">
								<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
									<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
										<div className="overflow-hidden">
											<table className="min-w-full">
												<thead className="border-2 border-gray-400">
													<tr>
														<th
															scope="col"
															className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
														>
															Sl.No
														</th>
														<th
															scope="col"
															className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
														>
															Code
														</th>
														<th
															scope="col"
															className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
														>
															Description
														</th>
														<th
															scope="col"
															className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
														>
															Unit Price(₹)
														</th>
														<th
															scope="col"
															className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
														>
															Qty
														</th>
														<th
															scope="col"
															className="text-sm font-bold text-gray-900 px-6 py-4 text-left"
														>
															Amount(₹)
														</th>
													</tr>
												</thead>
												<tbody className="">
													<tr className="border-2 border-gray-400">
														<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
															1
														</td>
														<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
															B004
														</td>
														<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
															ECG
														</td>
														<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
															1000
														</td>
														<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
															1
														</td>
														<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap">
															1000
														</td>
													</tr>
													<tr className="bg-white border-2 border-gray-400">
														<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
															2
														</td>
														<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap"></td>
														<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap"></td>
														<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap"></td>
													</tr>
													<tr className="bg-white border-2 border-gray-400">
														<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black">
															3
														</td>
														<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap"></td>
														<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap"></td>
														<td className="text-sm text-black font-light px-6 py-4 whitespace-nowrap"></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-10 space-x-4">
								<Tooltip title="Print">
									<button className="text-white px-8 py-2 bg-theme rounded-md">
										Print <Print />
									</button>
								</Tooltip>
								<Tooltip title="Download">
									<button className="text-white px-8 py-2 bg-theme rounded-md">
										Download <Download />
									</button>
								</Tooltip>
							</div>
						</Card>
					</Modal>

					<MaterialTable
						data={tabelData}
						components={{
							Container: (props) => <Paper {...props} elevation={5} />,
						}}
						title={<HeadStyle name="All Patients" />}
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
								title: "Id",
								field: "Id",
								editable: "never",
								width: "2%",
								filtering: false,
							},
							{
								title: "Name",
								tooltip: "Name",
								filtering: true,
								searchable: true,
								headerStyle: {
									textAlign: "center",
								},
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
							// {
							// 	title: "Email",
							// 	tooltip: "Email",
							// 	filtering: false,
							// 	searchable: true,
							// 	headerStyle: {
							// 		textAlign: "center",
							// 	},
							// 	field: "email",
							// },

							// {
							// 	title: "Specialization",
							// 	field: "specialization",
							// 	searchable: true,
							// 	export: true,
							// 	emptyValue: "Not Provided",
							// 	//   hidden:true,
							// },

							{
								title: "Clinic Name",
								width: "20%",
								headerStyle: {
									textAlign: "center",
								},
								field: "clinics",
							},
							// {
							// 	title: "Years of Exp.",
							// 	field: "yoe",
							// 	cellStyle: {
							// 		textAlign: "center",
							// 	},
							// },

							{
								title: "Time Stamp",
								field: "time_stamp",
								filtering: false,
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
								title: "Notes",
								field: "notes",
								filtering: false,
								render: () => <NotesDialogue />,
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
											<Tooltip title="Edit">
												<Avatar
													variant="rounded"
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
											<Tooltip title="Upload Prescription">
												<Avatar
													variant="rounded"
													className="!mr-1 !cursor-pointer !bg-theme !p-0 !ml-0.5"
													sx={{
														mr: ".1vw",
														padding: "0px !important",
														backgroundColor: "Highlight",
														cursor: "pointer",
														color: "",
													}}
													onClick={handleOpen}
												>
													<DriveFolderUpload className="!p-0" />
												</Avatar>
											</Tooltip>
											{/* <Tooltip title="Upload Reports">
												<Avatar
													variant="rounded"
													className="!mr-1 !cursor-pointer !bg-green-700 !p-0 !ml-0.5"
													sx={{
														mr: ".1vw",
														padding: "0px !important",
														backgroundColor: "Highlight",
														cursor: "pointer",
														color: "",
													}}
												>
													<Receipt className="!p-0" />
												</Avatar>
											</Tooltip> */}
											<Tooltip title="View Bill">
												<Avatar
													variant="rounded"
													className="!mr-1 !cursor-pointer !bg-green-700 !p-0 !ml-0.5"
													sx={{
														mr: ".1vw",
														padding: "0px !important",
														backgroundColor: "Highlight",
														cursor: "pointer",
														color: "",
													}}
													onClick={handleOpenBillModal}
												>
													<CreditCard className="!p-0" />
												</Avatar>
											</Tooltip>
										</div>
									</>
								),
							},
						]}
						actions={
							[
								// {
								// 	icon: "upload_file",
								// 	tooltip: "Import Data",
								// 	isFreeAction: true,
								// 	onClick: () => {
								// 		// setOpenAddStoreDrawer(true);
								// 	},
								// },
							]
						}
					/>
				</div>
			</div>
		</AdminLayout>
	);
};

export default ListOfPatients;

import AddCategoryDrawer from "components/admin/drawer/AddCategoriesDrawer";
import notification from "../../../assets/animation/notification.json";
import { AccessTime } from "@mui/icons-material";
import { useRouter } from "next/router";
import AdminLayout from "layouts/admin";
import { Avatar } from "@mui/material";
import Lottie from "lottie-react";
import { useState } from "react";

const Notification = () => {
	const router = useRouter();
	const [openDialog, setOpenDialog] = useState<any>({
		dialogOpen: false,
		cardRoute: "",
		highlightText: "",
		animationData: "",
	});

	const [openAddCategoryDrawer, setOpenAddCategoryDrawer] = useState(false);

	const [tabelData, settabelData] = useState([
		{
			id: "1",
			name: "Paracetamol",
			clinic: "care Hospital",
			category: "PAINKILL",
			description: "Antibiotic",
			storeBox: "10",
			purchasePrice: "300",
			salePrice: "500",
			qty: "20",
			genericName: "PAINKILL",
			company: "cipla",
			effects: "fever",
			expireDate: "23-01-2023",
		},
		{
			id: "2",
			name: "dolo 550	",
			clinic: "Utkal Heart Center",
			category: "ertet",
			description: "Pain Killer	",
			storeBox: "5",
			purchasePrice: "300",
			salePrice: "800",
			qty: "20",
			genericName: "ertet",
			company: "Dr Reddy",
			effects: "Cold Fever",
			expireDate: "23-01-2023",
		},
		{
			id: "3",
			name: "benedrilll",
			clinic: "Dr Agrawal Clinic",
			category: "Dulot 30",
			description: "cough",
			storeBox: "8",
			purchasePrice: "300",
			salePrice: "700",
			qty: "20",
			genericName: "Dulot 30",
			company: "Code Basin",
			effects: "NOTHING",
			expireDate: "23-01-2023",
		},
		{
			id: "4",
			name: "Azithromycin500",
			clinic: "Aravind Eye Hospital",
			category: "Antiallergic",
			description: "Antiallergic",
			storeBox: "11",
			purchasePrice: "300",
			salePrice: "600",
			qty: "20",
			genericName: "Dulot 30",
			company: "Dettol",
			effects: "fever",
			expireDate: "23-01-2023",
		},
		{
			id: "5",
			name: "Paracetamol",
			clinic: "care Hospital",
			category: "Cough",
			description: "Cough",
			storeBox: "9",
			purchasePrice: "300",
			salePrice: "400",
			qty: "20",
			genericName: "ertet",
			company: "Dettol",
			effects: "Cold Fever",
			expireDate: "23-01-2023",
		},
		{
			id: "6",
			name: "Paracetamol",
			clinic: "Utkal Heart Center",
			category: "Cough",
			description: "Cough",
			storeBox: "7",
			purchasePrice: "300",
			salePrice: "600",
			qty: "20",
			genericName: "PAINKILL",
			company: "Dettol",
			effects: "Cold Fever",
			expireDate: "23-01-2023",
		},
		{
			id: "7",
			name: "Paracetamol",
			clinic: "Dr Agrawal Clinic",
			category: "Cough",
			description: "Cough",
			storeBox: "13",
			purchasePrice: "300",
			salePrice: "900",
			qty: "20",
			genericName: "PAINKILL",
			company: "Dettol",
			effects: "NOTHING",
			expireDate: "23-01-2023",
		},
	]);

	return (
		<AdminLayout title="Notifications">
			<div className="grid grid-cols-12 content-between gap-6  m-5 !mb-6 ">
				<div className="col-span-12 pt-9 w-full flex flex-col justify-center gap-5 md:col-span-12 lg:col-span-12 !border-grey-500 rounded-xl !shadow-xl">
					<AddCategoryDrawer
						open={openAddCategoryDrawer}
						onClose={() => setOpenAddCategoryDrawer(false)}
						// mutate={mutate}
					/>
					{/* <MaterialTable
						data={tabelData}
						components={{
							Container: (props) => <Paper {...props} elevation={5} />,
						}}
						title={<HeadStyle name="Manage Categories" />}
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
								field: "id",
								editable: "never",
								// width: "2%",
								filtering: false,
							},
							{
								title: "Clinic Name",
								tooltip: "Clinic Name",
								field: "clinic",
								editable: "never",
								// width: "2%",
								filtering: true,
							},
							{
								title: "Category",
								tooltip: "Category",
								field: "category",
								editable: "never",
								// width: "2%",
								filtering: true,
							},
							{
								title: "Description",
								tooltip: "Description",
								filtering: false,
								searchable: true,
								headerStyle: {
									textAlign: "center",
								},
								field: "description",
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
							// {
							// 	icon: "upload_file",
							// 	tooltip: "Import Data",
							// 	isFreeAction: true,
							// 	onClick: () => {
							// setOpenAddStoreDrawer(true);
							// 	},
							// },
							{
								icon: "add",
								tooltip: "Add Category",
								isFreeAction: true,
								onClick: () => {
									setOpenAddCategoryDrawer(true);
								},
							},
						]}
					/> */}
					<section>
						<div className="text-md font-bold mb-10 text-theme px-4">
							NOTIFICATION LIST
						</div>
						<div className="px-3 mb-4">
							<div className="!cursor-pointer flex gap-3 items-center px-3 py-5 border !border-grey-500 rounded-xl">
								<Avatar
									alt="Remy Sharp"
									src="https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg"
									sx={{ width: 50, height: 50 }}
								/>

								<div>
									<p className="text-sm font-medium text-theme">
										Genara paoComOvo`s Appointment Added by Genara paoComOvo
										Apppointment date: 2023-02-16, time: 10:00:00 to 12:30:00
									</p>
									<p className="text-sm font-medium">
										<AccessTime fontSize="small" /> 10 hours ago
									</p>
								</div>
							</div>
						</div>
						<div className="px-3 mb-4">
							<div className="!cursor-pointer flex gap-3 items-center px-3 py-5 border !border-grey-500 rounded-xl">
								<Avatar
									alt="Remy Sharp"
									src="https://t4.ftcdn.net/jpg/01/15/16/57/360_F_115165790_k8BhVAMsx466J80rcpYYdTXklLOHZhC9.webp"
									sx={{ width: 50, height: 50 }}
								/>
								<div>
									<p className="text-sm font-medium text-theme">
										Elinore Goodwin`s Appointment Added by Leone freddy
										Apppointment date: 2023-02-05, time: 08:00:00 to 08:30:00
									</p>
									<p className="text-sm font-medium">
										<AccessTime fontSize="small" /> 15 hours ago
									</p>
								</div>
							</div>
						</div>
						<div className="px-3 mb-4">
							<div className="!cursor-pointer flex gap-3 items-center px-3 py-5 border !border-grey-500 rounded-xl">
								<Avatar
									alt="Remy Sharp"
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
									sx={{ width: 50, height: 50 }}
								/>
								<div>
									<p className="text-sm font-medium text-theme">
										Leonor Waelchi V`s Appointment completed successfully by
										Leone freddy Apppointment date: 2023-02-01, time: 09:00:00
										to 09:30:00
									</p>
									<p className="text-sm font-medium">
										<AccessTime fontSize="small" /> 18 hours ago
									</p>
								</div>
							</div>
						</div>
						<div className="px-3 mb-4">
							<div className="!cursor-pointer flex gap-3 items-center px-3 py-5 border !border-grey-500 rounded-xl">
								<Avatar
									alt="Remy Sharp"
									src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
									sx={{ width: 50, height: 50 }}
								/>
								<div>
									<p className="text-sm font-medium text-theme">
										Dr. Alisa Bruen`s Appointment Cancel by Leone freddy
										Apppointment date: 2023-02-03, time: 08:00:00 to 08:30:00
									</p>
									<p className="text-sm font-medium">
										<AccessTime fontSize="small" /> 22 hours ago
									</p>
								</div>
							</div>
						</div>
					</section>
					{/* <div className="w-1/2 flex justify-end pb-4">
						<div className="flex gap-2">
							<button className="px-4 py-2 mt-4 bg-theme font-bold rounded-md hover:bg-gradient-to-r text-white text-sm to-green-600">
								READ ALL
							</button>
							<button
								// onClick={() => handleDeleteNotification({ all: true })}
								className="px-4 py-2 mt-4 bg-gradient-to-bl from-red-400 rounded-md hover:bg-gradient-to-r text-white  font-bold text-sm to-red-600"
							>
								CLEAR ALL
							</button>
						</div>
					</div>
					<div className="w-1/2 pt-16">
						<Lottie
							className="md:-mt-20"
							animationData={notification}
							loop={true}
						/>
					</div> */}
				</div>
			</div>
		</AdminLayout>
	);
};

export default Notification;

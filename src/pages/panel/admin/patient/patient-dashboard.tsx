import ActiveVsInactivePatient from "components/analytics/ActiveVsInactivePatient";
import PatientVisitByGender from "components/analytics/PatientVisitByGender";
import { List, Man, Woman, Accessibility } from "@mui/icons-material";
import ViewDetailsBtn from "components/core/ViewDetailsBtn";
import InfoCards from "components/admin/InfoCards";
import AdminLayout from "layouts/admin";
import { useRouter } from "next/router";
import { useState } from "react";

const PatientDashboard = () => {
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
			name: "Raj",
			phone: "65758",
			email: "swainsangeeta88@gmail.com",
			dept: "OPD",
			view: <ViewDetailsBtn title={"View Details"} />,
		},
		{
			sl: "2",
			name: "Sarat",
			phone: "65758",
			email: "swainsangeeta88@gmail.com",
			dept: "General practitioner",
			view: <ViewDetailsBtn title={"View Details"} />,
		},
		{
			sl: "3",
			name: "priti",
			phone: "65758",
			email: "swainsangeeta88@gmail.com",
			dept: "Cardiology",
			view: <ViewDetailsBtn title={"View Details"} />,
		},
		{
			sl: "4",
			name: "vikash",
			phone: "65758",
			email: "swainsangeeta88@gmail.com",
			dept: "Neurology",
			view: <ViewDetailsBtn title={"View Details"} />,
		},
		{
			sl: "5",
			name: "ssa",
			phone: "65758",
			email: "swainsangeeta88@gmail.com",
			dept: "OPD",
			view: <ViewDetailsBtn title={"View Details"} />,
		},
		{
			sl: "6",
			name: "ssa",
			phone: "65758",
			email: "swainsangeeta88@gmail.com",
			dept: "General practitioner",
			view: <ViewDetailsBtn title={"View Details"} />,
		},
	]);

	return (
		<AdminLayout title="Admin Dashboard">
			<div className="grid grid-cols-12 content-between gap-6  m-5 !mb-6 ">
				<InfoCards
					title="Total Patient"
					iconClassName="bg-[#f3f8f2] group-hover:bg-[#913d83]"
					content={"300"}
					titleClassName="text-slate-600 font-bold text-base"
					contentClassName="text-black font-bold"
					className="col-span-12 w-full bg-white sm:col-span-12 md:col-span-6 lg:col-span-3 transition-all duration-500 ease-in-out hover:scale-95"
					icon={
						<List className="h-7 w-7 rounded-md group-hover:text-white text-[#913d83]" />
					}
					clickableRoute="/panel/admin/patient/list-of-patients"
				/>

				<InfoCards
					title="Total Active Patient"
					iconClassName="bg-[#f3f8f2] group-hover:bg-[#913d83]"
					content={"240"}
					titleClassName="text-slate-600 font-bold text-base"
					contentClassName="text-black font-bold"
					className="col-span-12 w-full bg-white sm:col-span-12 md:col-span-6 lg:col-span-3 transition-all duration-500 ease-in-out hover:scale-95"
					icon={
						<Accessibility className="h-7 w-7 rounded-md group-hover:text-white text-[#913d83]" />
					}
					clickableRoute="/panel/admin/patient/list-of-patients"
				/>

				<InfoCards
					title="Male Patient"
					iconClassName="bg-[#f3f8f2] group-hover:bg-[#913d83]"
					content={"120"}
					titleClassName="text-slate-600 font-bold text-base"
					contentClassName="text-black font-bold"
					className="col-span-12 w-full bg-white sm:col-span-12 md:col-span-6 lg:col-span-3 transition-all duration-500 ease-in-out hover:scale-95"
					icon={
						<Man className="h-7 w-7 rounded-md group-hover:text-white  text-[#913d83]" />
					}
					clickableRoute="/panel/admin/patient/list-of-patients"
				/>
				<InfoCards
					title="Female Patient"
					iconClassName="bg-[#f3f8f2] group-hover:bg-[#913d83]"
					content={"80"}
					titleClassName="text-slate-600 font-bold text-base"
					contentClassName="text-black font-bold"
					className="col-span-12 w-full bg-white sm:col-span-12 md:col-span-6 lg:col-span-3 transition-all duration-500 ease-in-out hover:scale-95"
					icon={
						<Woman className="h-7 w-7 rounded-md group-hover:text-white text-[#913d83]" />
					}
					clickableRoute="/panel/admin/patient/list-of-patients"
				/>

				<div className="col-span-12 pt-9 w-full flex flex-col justify-center gap-5 md:col-span-12 lg:col-span-6 !border-gray-500 rounded-xl !shadow-xl">
					<PatientVisitByGender text="Patient's Gender Ratio" type="donut" />
				</div>
				<div className="col-span-12 pt-9 w-full gap-5 md:col-span-12 lg:col-span-6 !border-gray-500 rounded-xl !shadow-xl">
					<ActiveVsInactivePatient
						text="Active Vs Inactive Patient"
						type="pie"
					/>
				</div>
				<div className="col-span-12 pt-9 w-full flex flex-col justify-center gap-5 md:col-span-12 lg:col-span-12 !border-grey-500 rounded-xl !shadow-xl">
					{/* <MaterialTable
						data={tabelData}
						components={{
							Container: (props) => <Paper {...props} elevation={5} />,
						}}
						title={<HeadStyle name="Doctors List" />}
						options={{ ...MuiTblOptions(), selection: true }}
						editable={{
							onRowAdd: (newRow) => new Promise(() => {}),
						}}
						columns={[
							{
								title: "#",
								field: "sl",
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
							{
								title: "Department",
								field: "dept",
							},
							{
								title: "View Details",
								field: "view",
								emptyValue: "Not Login Yet",
								// render: ({ lastLogin }: any) => lastLogin,
								// ? dayjs(new Date(lastLogin)).format("lll")
								// : "Not Login Yet",
							},
						]}
						actions={[
							{
								icon: "add",
								tooltip: "Add Doctor",
								isFreeAction: true,
								onClick: () => {},
							},
						]}
					/> */}
				</div>
			</div>
		</AdminLayout>
	);
};

export default PatientDashboard;

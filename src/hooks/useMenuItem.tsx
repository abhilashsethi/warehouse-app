import {
	CalendarMonth,
	Create,
	Dashboard,
	EventAvailable,
	Key,
	Leaderboard,
	List,
	LocalHospital,
	NoteAlt,
	Notifications,
	PendingActions,
	PermContactCalendar,
	PersonAddAlt1,
	ReceiptLong,
	Settings,
	SettingsPhone,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//   import useAuth from './useAuth'

const useMenuItems = () => {
	const router = useRouter();
	const [role, setRole] = useState("");
	useEffect(() => {
		const userRole = router?.asPath?.split("/")[2];
		if (userRole) {
			setRole(userRole?.toUpperCase());
		}
	}, [router?.asPath]);
	switch (role) {
		case "ADMIN":
			return [
				{
					key: "1",
					title: "Dashboard",
					icon: <Dashboard />,
					route: "/panel/admin/dashboard",
				},

				{
					key: "4",
					title: "Patient",
					icon: <PersonIcon />,
					submenus: [
						{
							key: "4.1",
							title: "Dashboard",
							icon: <Leaderboard />,
							route: "/panel/admin/patient/patient-dashboard",
						},
						{
							key: "4.2",
							title: "Add Patient",
							icon: <PersonAddAlt1 />,
							route: "/panel/admin/patient/add-patient",
						},
						{
							key: "4.3",
							title: "List Of Patients",
							icon: <List />,
							route: "/panel/admin/patient/list-of-patients",
						},
						{
							key: "4.4",
							title: "Medical Records",
							icon: <NoteAlt />,
							route: "/panel/admin/patient/medical-records",
						},
						{
							key: "4.5",
							title: "Generate Bills",
							icon: <ReceiptLong />,
							route: "/panel/admin/patient/generate-bills",
						},
					],
				},
			];

		case "DOCTOR":
			return [
				{
					key: "1",
					title: "Dashboard",
					icon: <Dashboard />,
					route: "/panel/doctor/doctor-dashboard",
				},
				// {
				//   key: "2",
				//   title: "Users",
				//   icon: <SupervisedUserCircle />,
				//   route: "/panel/manager/manager/users-list",
				// },

				{
					key: "2",
					title: "Appointments",
					icon: <PermContactCalendar />,

					submenus: [
						{
							key: "2.1",
							title: "Dashboard",
							icon: <Dashboard />,
							route: "/panel/doctor/appointments/appointments-dashboard",
						},
						{
							key: "2.2",
							title: "Add Appointment",
							icon: <PendingActions />,
							route: "/panel/doctor/appointments/add-appointments",
						},
						{
							key: "2.3",
							title: "All Appointments",
							icon: <EventAvailable />,
							route: "/panel/doctor/appointments/all-appointments",
						},
					],
				},
				{
					key: "3",
					title: "Schedule",
					icon: <CalendarMonth />,
					route: "/panel/doctor/schedule",
					// submenus: [
					// 	{
					// 		key: "7.15",
					// 		title: "Dashboard",
					// 		icon: <Leaderboard />,
					// 		route: "/panel/manager/manager/repairing-dashboard",
					// 	},
					// 	{
					// 		key: "7-1",
					// 		title: "In-Store",
					// 		icon: <LocalGroceryStore />,
					// 		route: "/panel/manager/repairing/in-store",
					// 	},
					// ],
				},
				{
					key: "4",
					title: "Prescription",
					icon: <LocalHospital />,
					// route: "/panel/doctor/prescription",
					submenus: [
						{
							key: "4.1",
							title: "Create Prescription",
							icon: <Create />,
							route: "/panel/doctor/prescription/create-prescription",
						},
						{
							key: "4.2",
							title: "All Prescriptions",
							icon: <LocalHospital />,
							route: "/panel/doctor/prescription/all-prescription",
						},
					],
				},

				{
					key: "5",
					title: "Tele-consultation",
					icon: <SettingsPhone />,
					route: "/panel/doctor/teleconsultation",
					// submenus: [
					// 	{
					// 		key: "4-11",
					// 		title: "Dashboard",
					// 		icon: <Leaderboard />,
					// 		route: "/panel/manager/refurbished/refurbished-dashboard",
					// 	},
					// 	{
					// 		key: "4-0",
					// 		title: "Add Refurbished",
					// 		icon: <Add />,
					// 		route: "/panel/manager/refurbished/add-refurbished",
					// 	},
					// 	{
					// 		key: "4-1",
					// 		title: "Manage Refurbished ",
					// 		icon: <Inventory />,
					// 		route: "/panel/manager/refurbished/manage-refurbished",
					// 	},
					// ],
				},
				{
					key: "6",
					title: "Notification",
					icon: <Notifications />,
					route: "/panel/doctor/doctor-notification",
					// submenus: [
					// 	{
					// 		key: "4-11",
					// 		title: "Dashboard",
					// 		icon: <Leaderboard />,
					// 		route: "/panel/manager/accessories/accessories-dashboard",
					// 	},

					// 	{
					// 		key: "4-1",
					// 		title: "Manage Accessories ",
					// 		icon: <LocalMall />,
					// 		route: "/panel/manager/manager/accessories",
					// 	},
					// ],
				},

				// {
				// 	key: "10ii",
				// 	title: "Schedule",
				// 	icon: <AccessTime />,

				// 	submenus: [
				// 		{
				// 			key: "10iii",
				// 			title: "Timing",
				// 			icon: <AccessTime />,
				// 			route: "/panel/manager/timing",
				// 		},
				// 		{
				// 			key: "10iv",
				// 			title: "Holiday",
				// 			icon: <HolidayVillage />,
				// 			route: "/panel/manager/manager/holiday",
				// 		},
				// 	],
				// },
				// {
				// 	key: "8iii",
				// 	title: "Payment",
				// 	icon: <CurrencyPound />,
				// 	route: "/panel/manager/manager/payment",
				// },

				// {
				// 	key: "5",
				// 	title: "Reports",
				// 	icon: <Report />,
				// 	route: "/panel/manager/reports",
				// },
				// {
				// 	key: "6",
				// 	title: "Reviews",
				// 	icon: <Reviews />,
				// 	route: "/panel/manager/reviews",
				// },
				// {
				// 	key: "12",
				// 	title: "Notifications",
				// 	icon: <Notifications />,
				// 	route: "/panel/manager/notification",
				// },
				{
					key: "13",
					title: "Settings",
					icon: <Settings />,
					submenus: [
						{
							key: "13-0",
							route: "/panel/manager/change-password",
							title: "Change Password",
							icon: <Key />,
						},
					],
				},
			];

		default:
			return [];
	}
};
export default useMenuItems;

import LeaveDetailsModal from "./LeaveDetailsModal";
import { Visibility } from "@mui/icons-material";
import { Avatar, Tooltip } from "@mui/material";
import { useState } from "react";
type props = {
	title?: string;
	isInternship?: boolean;
};
export default ({ title, isInternship = false }: props) => {
	const [showViewDetailsModal, setShowViewDetailsModal] = useState(false);

	return (
		<>
			<button
				onClick={() => setShowViewDetailsModal(true)}
				// className="w-[40%] rounded-full bg-gradient-to-r from-[#f53844] to-[#42378f]  px-2 py-2 text-base font-bold text-white lg:px-4"
			>
				<Tooltip title="View Details">
					<Avatar
						variant="rounded"
						// onClick={() => setOpenProductInfo(row as any)}
						// onClick={() => setOpenProductInfo(row)}
						className="!mr-1 !cursor-pointer !bg-[#014488] !p-0 !ml-2"
						sx={{
							mr: ".1vw",
							padding: "0px !important",
							backgroundColor: "Highlight",
							cursor: "pointer",
							color: "",
						}}
					>
						<Visibility sx={{ padding: "0px !important" }} />
					</Avatar>
				</Tooltip>
			</button>

			<section
				className={`fixed inset-0 z-50 grid place-content-center p-2 ${
					showViewDetailsModal ? "opacity-100" : "pointer-events-none opacity-0"
				}`}
			>
				<div
					className={`z-50 mx-auto transition duration-300 ${
						showViewDetailsModal ? "scale-100" : "scale-0"
					}`}
				>
					<div className="flex flex-wrap gap-2 overflow-y-scroll rounded-xl bg-white shadow-lg shadow-purple-50/20 lg:flex-nowrap">
						<div className="flex flex-col gap-4 rounded-xl p-3 lg:rounded-r-xl">
							<div className="py-3 px-2">
								<h1 className="text-xl font-bold text-theme">
									{/* {isInternship ? "Apply Internship" : "Leave Details"} */}
									Leave Details
								</h1>
								<LeaveDetailsModal />
								{/* <AppointmentViewDetailsModal /> */}
								{/* <AddPatient /> */}

								<button
									onClick={() => setShowViewDetailsModal(false)}
									className="close-modal absolute top-[0px] right-5 text-2xl text-black lg:right-5 lg:top-3"
								>
									<span className="text-2xl text-black">
										<i className="fa-solid fa-xmark"></i>
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div
					className="absolute inset-0 z-40 bg-slate-900/70"
					onClick={() => setShowViewDetailsModal(false)}
				/>
			</section>
		</>
	);
};

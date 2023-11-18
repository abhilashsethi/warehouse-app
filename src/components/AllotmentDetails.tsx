import { InsertDriveFile } from "@mui/icons-material";
import { useState } from "react";
type Props = {
	close: () => void;
	onClose: () => void;
	// refresh: boolean;
	// title: string;
	// isInternship: boolean;
};

const AllotmentDetails = () => {
	const [file, setFile] = useState();
	const [fileName, setFileName] = useState("");

	return (
		<div className="w-[65vw] h-[20rem]">
			{/* <div className="pt-5 grid grid-cols-3 gap-10 w-full"> */}
			{/* <div className="col-span-1">
					<img src="/about/user.png" alt="" />

					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Address :</div>
						<div className="text-gray-700 text-sm">Bhubaneswar</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Date Of Birth :</div>
						<div className="text-gray-700 text-sm">15-07-1979</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Gender :</div>
						<div className="text-gray-700 text-sm">Male</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Status :</div>
						<div className="text-gray-700 text-sm">active</div>
					</div>
				</div> */}
			<div className="pt-5 grid grid-cols-3 gap-x-10 gap-y-1">
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Alloted Date :</div>
					<div className="text-gray-700 text-sm">08-02-2023</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Alloted Time :</div>
					<div className="text-gray-700 text-sm">11:35 AM</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Bed Category :</div>
					<div className="text-gray-700 text-sm">ICU</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Bed Id :</div>
					<div className="text-gray-700 text-sm">BS40</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Priority :</div>
					<div className="text-gray-700 text-sm">Urgent</div>
				</div>
				<div className="flex gap-3 items-start pt-5">
					<div className="text-theme font-bold">Reactions :</div>
					<div className="text-gray-700 text-sm">Lorem ipsum dolor sit.</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Transferred From :</div>
					<div className="text-gray-700 text-sm">
						Lorem ipsum dolor sit amet.
					</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Doctor Name :</div>
					<div className="text-gray-700 text-sm">Anshuman Agrawal</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Diagnosis :</div>
					<div className="text-gray-700 text-sm">Blood Test</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Other Illness :</div>
					<div className="text-gray-700 text-sm">Diabetes</div>
				</div>
				<div className="flex gap-5 items-start pt-5">
					<div className="text-theme font-bold">History :</div>
					<div className="text-gray-700 text-sm">
						Lorem ipsum dolor sit amet.
					</div>
				</div>
				<div className="flex gap-5 items-start pt-5">
					<div className="text-theme font-bold">Blood Group :</div>
					<div className="text-gray-700 text-sm">A +ve</div>
				</div>
				<div className="flex gap-5 items-start pt-5">
					<div className="text-theme font-bold">Referred Doctor :</div>
					<div className="text-gray-700 text-sm">Suvendu Mohanty</div>
				</div>

				<div className="flex items-start gap-5 pt-5 col-span-2">
					{/* <div className="text-theme w-64 font-bold">About :</div>
						<div className="text-gray-700 text-sm">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
							nulla impedit iure, ipsam voluptatibus tempora ducimus corporis
							recusandae maiores maxime vero exercitationem soluta obcaecati
							aliquam officia porro quae dolorum accusamus.
						</div> */}
				</div>
			</div>
			{/* <div className="flex gap-5 items-center pt-5">
						<div className="text-theme font-bold">Title</div>
						<div className="text-gray-400 text-sm"></div>
					</div> */}
			{/* </div> */}
		</div>
	);
};

export default AllotmentDetails;

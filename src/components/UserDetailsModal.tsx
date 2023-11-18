import { InsertDriveFile } from "@mui/icons-material";
import { useState } from "react";
type Props = {
	close: () => void;
	onClose: () => void;
	// refresh: boolean;
	// title: string;
	// isInternship: boolean;
};

const UserDetailsModal = () => {
	const [file, setFile] = useState();
	const [fileName, setFileName] = useState("");

	return (
		<div className="w-[65vw] h-[18rem]">
			<div className="pt-5 grid grid-cols-3 gap-10 w-full">
				<div className="col-span-1">
					<img src="/about/user.png" alt="" />

					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Address :</div>
						<div className="text-gray-700 text-sm">Bhubaneswar</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Gender :</div>
						<div className="text-gray-700 text-sm">Male</div>
					</div>
				</div>
				<div className="pt-5 grid grid-cols-2 gap-x-10 gap-y-1 col-span-2">
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Full Name :</div>
						<div className="text-gray-700 text-sm">Akshya Kumar Rout</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Email :</div>
						<div className="text-gray-700 text-sm">
							akshyakumarRout@gmail.com
						</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Password :</div>
						<div className="text-gray-700 text-sm">akshyakumarRout1234</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Clinic :</div>
						<div className="text-gray-700 text-sm">Care hospital</div>
					</div>

					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Contact No. :</div>
						<div className="text-gray-700 text-sm">+91 7789482487</div>
					</div>

					<div className="flex items-start gap-5 pt-5 col-span-2">
						<div className="text-theme w-64 font-bold">About :</div>
						<div className="text-gray-700 text-sm">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
							nulla impedit iure, ipsam voluptatibus tempora ducimus corporis
							recusandae maiores maxime vero exercitationem soluta obcaecati
							aliquam officia porro quae dolorum accusamus.
						</div>
					</div>
				</div>
				{/* <div className="flex gap-5 items-center pt-5">
						<div className="text-theme font-bold">Title</div>
						<div className="text-gray-400 text-sm"></div>
					</div> */}
			</div>
		</div>
	);
};

export default UserDetailsModal;

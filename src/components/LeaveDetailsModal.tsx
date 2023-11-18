import { useState } from "react";
type Props = {
	close: () => void;
	onClose: () => void;
	// refresh: boolean;
	// title: string;
	// isInternship: boolean;
};

const AppointmentViewDetailsModal = () => {
	const [file, setFile] = useState();
	const [fileName, setFileName] = useState("");

	return (
		<div className="w-[50vw] h-[10rem]">
			<div className="pt-5 grid-cols-1 grid lg:grid-cols-2 w-full">
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Doctor Name :</div>
					<div className="text-gray-700 text-sm">Anshuman Agrawal</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Date :</div>
					<div className="text-gray-700 text-sm">13-01-2023</div>
				</div>
				<div className="flex col-span-2 gap-5 items-start pt-5">
					<div className="text-theme font-bold w-32">Reason :</div>
					<div className="text-gray-700 text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore
						beatae voluptas placeat iusto ea reprehenderit laboriosam sint ipsam
						debitis?
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppointmentViewDetailsModal;

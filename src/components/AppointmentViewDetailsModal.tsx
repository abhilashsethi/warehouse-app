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

	const viewDetailsArr = [
		{
			id: 1,
			address: "Bhubaneswar",
			dob: "11-10-1985",
			gender: "Male",
			status: "active",
			fullName: "Akshya Kumar Rout",
			email: "amitkumar@gmail.com",
			password: "amitkumar1234",
			clinic: "Care hospital",
			bloodGroup: "A +ve",
			doctorName: "Akshya Kumar Rout",
			contact: "+91 7789482487",
			about:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt nulla impedit iure, ipsam voluptatibus tempora ducimus corporis recusandae maiores maxime vero exercitationem soluta obcaecati aliquam officia porro quae dolorum accusamus.",
		},
	];

	return (
		<div className="w-[50vw] h-[15rem]">
			<div className="pt-5 grid grid-cols-2 w-full">
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Date :</div>
					<div className="text-gray-700 text-sm">13-01-2023</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Time :</div>
					<div className="text-gray-700 text-sm">10:45 AM</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Doctor :</div>
					<div className="text-gray-700 text-sm">Anshuman Agrawal</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Patient :</div>
					<div className="text-gray-700 text-sm">Akshya Kumar Rout</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Clinic :</div>
					<div className="text-gray-700 text-sm">Care Hospital</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Patient Contact :</div>
					<div className="text-gray-700 text-sm">+91 7489410510</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Patient's Age :</div>
					<div className="text-gray-700 text-sm">38</div>
				</div>
				<div className="flex gap-1 items-start pt-5">
					<div className="text-theme font-bold">Status :</div>
					<div className="text-gray-700 text-sm">Booked</div>
				</div>

				{/* <div className="flex gap-5 items-center pt-5">
						<div className="text-theme font-bold">Title</div>
						<div className="text-gray-400 text-sm"></div>
					</div> */}
			</div>
		</div>
	);
};

export default AppointmentViewDetailsModal;

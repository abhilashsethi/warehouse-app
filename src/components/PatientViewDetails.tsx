import { useState } from "react";
type Props = {
	close: () => void;
	onClose: () => void;
	// refresh: boolean;
	// title: string;
	// isInternship: boolean;
};

const PatientViewDetails = () => {
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
		<div className="w-[65vw] h-[20rem]">
			<div className="pt-5 grid grid-cols-3 gap-10 w-full">
				<div className="col-span-1">
					<img src="/about/user.png" alt="" />

					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Address :</div>
						<div className="text-gray-700 text-sm">Bhubaneswar</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Date Of Birth :</div>
						<div className="text-gray-700 text-sm">11-10-1985</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Gender :</div>
						<div className="text-gray-700 text-sm">Male</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Status :</div>
						<div className="text-gray-700 text-sm">active</div>
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
						<div className="text-gray-700 text-sm">akshya1234</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Clinic :</div>
						<div className="text-gray-700 text-sm">Care hospital</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Blood Group :</div>
						<div className="text-gray-700 text-sm">A +ve</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Doctor Name :</div>
						<div className="text-gray-700 text-sm">Anshuman Agrawal</div>
					</div>
					<div className="flex gap-1 items-start pt-5">
						<div className="text-theme font-bold">Age :</div>
						<div className="text-gray-700 text-sm">38</div>
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

export default PatientViewDetails;

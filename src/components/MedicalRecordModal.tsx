import { Download, Visibility } from "@mui/icons-material";
import { useState } from "react";
type Props = {
	close: () => void;
	onClose: () => void;
	// refresh: boolean;
	// title: string;
	// isInternship: boolean;
};

const MedicalRecordModal = () => {
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
		<div className="w-[25vw] h-[15rem] flex justify-center items-center gap-3">
			<div className="cursor-pointer w-20 border border-gray-400 p-3 rounded-lg flex flex-col justify-center items-center gap-2">
				<img src="/bg/file.png" alt="" />
				<div className="flex gap-2 justify-center items-center">
					<Visibility />
					<Download />
				</div>
			</div>
			<div className="cursor-pointer w-20 border border-gray-400 p-3 rounded-lg flex flex-col justify-center items-center gap-2">
				<img src="/bg/file.png" alt="" />
				<div className="flex gap-2 justify-center items-center">
					<Visibility />
					<Download />
				</div>
			</div>
		</div>
	);
};

export default MedicalRecordModal;

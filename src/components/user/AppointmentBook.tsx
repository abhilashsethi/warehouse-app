import { Videocam, WorkspacePremium } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import AvailableSlot from "components/AvailableSlot";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import { FaCheckCircle } from "react-icons/fa";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import { Dayjs } from "dayjs";
import AppointmentSlots from "./AppointmentSlots";

interface TabPanelProps {
	children?: React.ReactNode;
	index?: number;
	value?: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const AppointmentBook = () => {
	const [showMore, setShowMore] = useState(true);
	const [value1, setValue1] = React.useState("female");

	const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue1((event.target as HTMLInputElement).value);
	};

	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const [selectedOption, setSelectedOption] = useState("value1");

	const handleOptionChange = (event: any) => {
		setSelectedOption(event.target.value);
	};

	const [value2, setValue2] = React.useState<Dayjs | null>(null);

	return (
		<section className="md:px-10 px-5 mt-10 mb-5">
			<div className="flex w-full gap-4 md:flex-row flex-col">
				{/* left section */}
				<div className="md:w-2/3  w-full md:flex-row flex-col flex gap-5 border border-theme shadow-lg shadow-slate-400 rounded-lg px-2 py-5 ">
					<div className="md:w-72 w-full">
						<img
							src="https://img.freepik.com/free-photo/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-female-nurse-blue-scrubs-stethoscope-show-thumbs-up-assure-guarantee-best-quality-service-clinic_1258-57360.jpg?w=996&t=st=1676027877~exp=1676028477~hmac=cbeec100e05ca719f55954355982ed3aec1cb0d0878c5f61b46e9b26ea7ff81b"
							alt=""
							className="rounded-xl"
						/>
					</div>
					<div className="flex flex-col gap-3">
						<h1 className="text-lg font-semibold text-theme">
							Dr Payal Verma{" "}
							<span className="pl-5 text-xs text-gray-500">
								Profile is Claimed <WorkspacePremium color="success" />
							</span>
						</h1>
						<div>
							{" "}
							<p>MDS - Orthodontics, BDS</p>
							<p className="text-sm">
								Orthodontist, Cosmetic/Aesthetic Dentist, Dentofacial
								Orthopedist, Dental Surgeon, Dentist 19 Years Experience Overall
								(14 years as specialist)
							</p>
						</div>
						<div>
							<p className="flex items-center gap-2">
								<FaCheckCircle className="text-green-600" />{" "}
								<span className="text-theme font-semibold">
									{" "}
									Medical Registration Verified
								</span>
							</p>
							{/* <div className="cursor-pointer flex justify-start items-center mt-2 gap-1 text-[#00c853] w-1/5 h-7 rounded-md">
								<AiFillLike className="text-2xl" />
								<span className="text-md font-bold">98%</span>
							</div> */}
						</div>

						<div className="md:w-[35rem]">
							<p className="text-sm">Dr Payal Verma</p>
							{showMore ? (
								<p className="text-sm">
									BDS, MDS (prosthodontics and Implantology) Dr Baswaraj,
									graduated as the Best outgoing student of the year 1998,
									during his Bachelors at M S Ramaiah Dental College. He secured
									20th Rank in the Karnataka state entrance examination.
									Subsequently, pursued his Masters from premier institute, A B
									Shetty Memorial Institute of Dental Sciences in the department
									of Prosthodontics and Implantology. He has 13 years of
									experience as a dental teaching Faculty. He held various
									positions as a Professor, Postgraduate guide and head of the
									prosthodontics department in various institutions such as MS
									Ramaiah Dental college, Vydehi Dental College, Oxford Dental
									college, Subbaiah institute of Dental Sciences. Dr Baswaraj
									Biradar is practicing General dentistry, Prosthodontics and
									Implantotology since 25 years. Having earned his MDS degree,
									he is equipped with the latest education, training, and
									technology to provide the highest quality care. Most
									importantly, he will ensure you understand the treatment you
									need, helping you feel relaxed and confident. During his free
									time, you can find him playing badminton and cricket
								</p>
							) : null}
							<span
								className="text-theme py-2 font-semibold text-sm cursor-pointer"
								onClick={() => setShowMore(!showMore)}
							>
								{showMore ? "Read Less" : "Read More"}
							</span>
						</div>
						{/* <button className="mt-10 px-4 py-2 w-1/2 bg-[#4b4694]  hover:bg-[#28328c] hover:scale-105 ease-in-out transition-all duration-200 text-white font-semibold rounded-md">
							Book Appointment
						</button> */}
						{/* <Box
							className="w-full"
							sx={{ borderBottom: 1, borderColor: "divider" }}
						>
							<Tabs
								value={value}
								onChange={handleChange}
								aria-label="basic tabs example"
							>
								<Tab label="Item One" {...a11yProps(0)} />
								<Tab label="Item Two" {...a11yProps(1)} />
								<Tab label="Item Three" {...a11yProps(2)} />
							</Tabs>
						</Box>
						<TabPanel value={value} index={0}>
							Item One
						</TabPanel>
						<TabPanel value={value} index={1}>
							Item Two
						</TabPanel>
						<TabPanel value={value} index={2}>
							Item Three
						</TabPanel> */}
					</div>
				</div>

				{/* <div className="p-6">
					<p className="text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
						pellentesque enim, a bibendum libero. Donec bibendum laoreet lectus,
						id commodo libero.
					</p>
					{showMore ? (
						<p className="text-lg">
							Sed fringilla, ipsum non blandit aliquam, risus nisl hendrerit
							nisi, non egestas lectus leo id nisl. Curabitur a enim vel velit
							feugiat bibendum vel vel sapien. Nam elementum, sapien eget
							pellentesque molestie, tellus elit fringilla mi, vel dapibus
							sapien erat eu diam.
						</p>
					) : null}
					<button
						className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
						onClick={() => setShowMore(!showMore)}
					>
						{showMore ? "Read Less" : "Read More"}
					</button>
				</div> */}

				{/* Right section */}
				<div className="md:w-1/3 w-full">
					<h1 className="text-lg font-bold text-theme">
						Choose the type of appointment
					</h1>
					<RadioGroup
						aria-labelledby="demo-controlled-radio-buttons-group"
						name="controlled-radio-buttons-group"
						value={value1}
						onChange={handleChange1}
					>
						<div className="flex items-center gap-1">
							<div className="bg-[#d7f5fe] px-3 py-2 rounded-lg">
								<FormControlLabel
									// value="clinicVisit"
									control={<Radio />}
									label="Clinic Visit"
									value="value1"
									checked={selectedOption === "value1"}
									onChange={handleOptionChange}
								/>
							</div>
							<div className="bg-[#d7f5fe] px-3 py-2 rounded-lg">
								<FormControlLabel
									// value="videoConsult"
									control={<Radio />}
									label="Video Consult"
									value="value2"
									checked={selectedOption === "value2"}
									onChange={handleOptionChange}
								/>
							</div>
						</div>
					</RadioGroup>
					{selectedOption === "value1" ? (
						<div>
							<div className="flex items-center justify-between bg-[#d7f5fe] py-5 mt-2 px-4 rounded-lg font-semibold">
								<div className="flex items-center gap-2">
									<AiFillHome className="text-theme text-xl" />
									<span>Clinic Appointment</span>
								</div>
								<p>₹ 400 fee</p>
							</div>
							<div className="border border-theme mt-2 px-2 py-3 rounded-lg h-[23rem] overflow-scroll">
								<div>
									<h2 className="font-semibold">
										Impressions Dental Specialties
									</h2>

									<div className="flex flex-col w-1/2">
										<label className="text-sm font-semibold mt-2">
											Select appointment date
										</label>
										<input
											type="date"
											className="rounded-md h-8 cursor-pointer"
										/>
									</div>
									<AppointmentSlots />
								</div>
							</div>
						</div>
					) : (
						<div>
							<div className="flex items-center justify-between bg-[#efe3ff] py-5 mt-2 px-4 rounded-lg font-semibold">
								<div className="flex items-center gap-2">
									<Videocam className="text-[#8a45e5] text-xl" />
									<span>Video Consultation</span>
								</div>
								<p>₹ 400 fee</p>
							</div>
							<div className="border border-theme mt-2 px-2 py-3 rounded-lg h-[23rem] overflow-scroll">
								<div>
									<h2 className="font-semibold">
										Impressions Dental Specialties
									</h2>

									<div className="flex flex-col w-1/2">
										<label className="text-sm font-semibold mt-2">
											Select appointment date
										</label>
										<input
											type="date"
											className="rounded-md h-8 cursor-pointer"
										/>
									</div>
									<AvailableSlot />
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default AppointmentBook;

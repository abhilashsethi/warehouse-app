import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccessibleIcon from "@mui/icons-material/Accessible";
import MedicationIcon from "@mui/icons-material/Medication";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import FacebookIcon from "@mui/icons-material/Facebook";
import aboutUs from "../assets/animation/aboutUs.json";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import ScienceIcon from "@mui/icons-material/Science";
import EmailIcon from "@mui/icons-material/Email";
import { FaStethoscope } from "react-icons/fa";
import CounterPage from "./CounterPage";
import Testimonial from "./Testimonial";
import OurPartners from "./OurPartners";
import { motion } from "framer-motion";
import OurClients from "./OurClients";
import OurMission from "./OurMission";
import OurVision from "./OurVision";
import Lottie from "lottie-react";
import Button from "./Button";
import React from "react";

const AboutUs = () => {
	const featuresArr = [
		{
			id: 1,
			title: "Appointment Management",
			img: <CalendarMonthIcon color="primary" fontSize="large" />,
			link: "",
		},
		{
			id: 2,
			title: "Detailed MIS Reports",
			img: <BarChartIcon color="primary" fontSize="large" />,
			link: "",
		},
		{
			id: 3,
			title: "Operation Theatre Management",
			img: <LocalHospitalIcon color="primary" fontSize="large" />,
			link: "",
		},
		{
			id: 4,
			title: "Out-patient Management",
			img: <AccessibleIcon color="primary" fontSize="large" />,
			link: "",
		},
		{
			id: 5,
			title: "Package Master",
			img: <LocalShippingIcon color="primary" fontSize="large" />,
			link: "",
		},
		{
			id: 6,
			title: "Rate Plan Master",
			img: <CurrencyRupeeIcon color="primary" fontSize="large" />,
			link: "",
		},
		{
			id: 7,
			title: "In-patient Management",
			img: <AirlineSeatFlatIcon color="primary" fontSize="large" />,
			link: "",
		},
		{
			id: 8,
			title: "Facebook Widget",
			img: <FacebookIcon color="primary" fontSize="large" />,
			link: "",
		},
		{
			id: 9,
			title: "Electronic Medical Records",
			img: <InsertDriveFileIcon color="primary" fontSize="large" />,
			link: "",
		},
		{
			id: 10,
			title: "Doctor Discovery",
			img: <FaStethoscope color="#1976d2" fontSize="large" />,
			link: "",
		},
		{
			id: 11,
			title: "Website Widget",
			img: <CodeOffIcon color="primary" fontSize="large" />,
			link: "",
		},
		{
			id: 12,
			title: "Admin Dashboard",
			img: <DashboardIcon color="primary" fontSize="large" />,
			link: "",
		},
		{
			id: 13,
			title: "Pharmacy / Stocks Management",
			img: <MedicationIcon color="primary" fontSize="large" />,
			link: "",
		},
		{
			id: 14,
			title: "Email & SMS Reminders",
			img: <EmailIcon color="primary" fontSize="large" />,
			link: "",
		},
		{
			id: 15,
			title: "Laboratory Management",
			img: <ScienceIcon color="primary" fontSize="large" />,
			link: "",
		},
	];

	return (
		<section>
			<div className="overflow-hidden">
				<div className="bg-gradient-to-r from-primary-blue/80 to-primary-dark/80 grid h-60 place-items-center  bg-cover bg-no-repeat bg-blend-overlay">
					<div className="text-center">
						<h1 className="text-4xl font-extrabold text-white lg:text-5xl">
							About Us
						</h1>
						<p className="text-base font-medium text-gray-300 lg:text-xl">
							Know More About YardHealth
						</p>
					</div>
				</div>
			</div>

			<section className="mb-8 bg-cover">
				<div className=" flex flex-col justify-center items-center px-4">
					<div className="flex items-center gap-2 mt-10 text-sm text-[#0E89E2] font-bold">
						<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
						<div className="text-center">YardHealth</div>
						<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
					</div>
					<h2 className="lg:text-4xl text-xl font-bold text-[#0E89E2] text-center mb-8">
						<span className="lg:text-4xl text-xl font-thin text-black text-center">
							Digitally Transforming
						</span>{" "}
						Healthcare
					</h2>
				</div>

				<div className="flex lg:flex-row flex-col md:gap-10 w-full justify-center overflow-hidden">
					<div className="relative flex justify-center items-center">
						<motion.div
							initial={{ x: -200, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
							exit="exit"
							className=""
						>
							<Lottie
								className="md:-mt-20"
								animationData={aboutUs}
								loop={true}
							/>
						</motion.div>
					</div>
					<motion.div
						initial={{ x: 200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
						exit="exit"
						className="lg:w-1/3 px-10 space-y-3"
					>
						<h1 className="text-3xl font-bold text-black ">
							We aim to provide expert Advice And{" "}
							<span className="text-3xl text font-bold text-[#0E89E2]">
								Quality Service
							</span>
						</h1>
						<p className="tracking-wide text-md text-justify text-slate-700 italic font-medium">
							We will find highly tailored solution that offer the most
							appropriate coverage at the most competitive rates.
						</p>
						<p className="tracking-wide leading-6 text-sm text-justify text-slate-600 font-medium">
							YardHealth support Multi-specialty & Enterprise Hospitals. We
							provide solution for all from 100 bedded to 1000 bedded hospital
							chains starting from patient registration, managing patient
							clinical data like prescription, lab test, forms etc. We have
							automated workflow for OPD, IPD, Pharmacy, Lab, Marketing, Sales,
							Customer Experience & all the other departments.
						</p>
					</motion.div>
				</div>
			</section>

			<div className="flex flex-col justify-center items-center">
				<div className="flex items-center gap-2 text-sm text-[#0E89E2] font-bold">
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
					<div>Features</div>
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
				</div>
				<h2 className="md:text-4xl text-xl font-bold text-[#0E89E2] text-center mb-8">
					<span className="md:text-4xl text-xl font-thin text-black text-center">
						Key
					</span>{" "}
					Features
				</h2>
			</div>

			<div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-7 justify-items-center md:px-10 lg:px-10 mb-10">
				{featuresArr.map((item, index) => {
					return (
						<motion.div
							// data-aos="flip-right"
							key={index}
							initial={{ scale: 0, opacity: 0, rotateY: 0 }}
							whileInView={{ scale: 1, opacity: 1, rotateY: 360 }}
							whileHover={{ scale: 1.1 }}
							transition={{ delay: index * 0.1 }}
							exit={{ scale: 0, opacity: 0, rotateY: 0 }}
							className="cursor-pointer shadow-xl group px-2 rounded-xl flex gap-3 justify-center items-center md:w-56 h-20 hover:shadow-2xl border-2 transition duration-500 ease-out"
						>
							<div className="flex justify-center items-center p-2 w-10 h-10 rounded-xl">
								{item.img}
							</div>

							<p className="text-sm font-bold text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-700 via-pink-600 to-zinc-300 transition duration-500 ease-out">
								{item.title}
							</p>
						</motion.div>
					);
				})}
			</div>

			<OurClients />
			<CounterPage />
			<OurMission />
			{/* <div className="flex justify-center md:flex-row flex-col items-center md:px-20">
				<div className="md:w-1/2 flex flex-col gap-5 justify-center">
					<h2 className="lg:text-4xl text-xl font-bold text-[#0E89E2]">
						<span className="lg:text-4xl text-xl font-thin text-black ">
							Our
						</span>{" "}
						Mission
					</h2>
					<p className="tracking-wide leading-6 text-md text-justify text-slate-600 font-medium">
						Our mission is to help all the healthcare institutions to work
						seamlessly and digitally. To fulfill all the goals and requirements
						of our clients is our priority so that we can justify the choice
						they made by giving us the opportunity.
					</p>
				</div>
				<div className="md:w-1/2 border-r-4 border-r-[#0E89E2]">
					<img src="/about/mission.webp" alt="" className="md:px-28" />
				</div>
			</div> */}
			<OurVision />
			<OurPartners />
			{/* <div className="flex md:flex-row flex-col justify-center items-center md:px-20 mb-5">
				<div className="md:w-1/2 border-l-4 border-l-[#0E89E2]">
					<img src="/about/vision.webp" alt="" className="md:px-28" />
				</div>
				<div className="md:w-1/2 flex flex-col gap-5 justify-center">
					<h2 className="lg:text-4xl text-xl font-bold text-[#0E89E2]">
						<span className="lg:text-4xl text-xl font-thin text-black">
							Our
						</span>{" "}
						VISION
					</h2>
					<p className="tracking-wide leading-6 text-md text-justify text-slate-600 font-medium">
						Our vision is the digital transformation of all healthcare
						institutions in a more efficient manner which will be beneficial to
						all the healthcare platforms but also will be beneficial to their
						patients.
					</p>
				</div>
			</div> */}

			<div className="bg-[#f7f7f7] flex md:flex-row flex-col justify-center items-center md:h-40 h-52 md:gap-0 gap-3">
				<div className="w-4/5 flex flex-col justify-center items-center">
					<h1 className="text-2xl text-center font-semibold">
						"Health is the most important thing you have in life!"
					</h1>
					<p className="text-center text-lg font-medium text-gray-600">
						Contact us now to schedule an appointment.
					</p>
				</div>
				<div className="w-48">
					<Button title={"Contact us"} />
				</div>
			</div>
			<Testimonial />
		</section>
	);
};

export default AboutUs;

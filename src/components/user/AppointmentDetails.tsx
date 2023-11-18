import { AiFillHome, AiOutlineClockCircle } from "react-icons/ai";
import { Verified } from "@mui/icons-material";
import { FcCalendar } from "react-icons/fc";
import Link from "next/link";
import React from "react";

const AppointmentDetails = () => {
	return (
		<section className="flex md:flex-row flex-col justify-center gap-5 md:mt-10 mb-24 md:px-0 px-4">
			{/* Left section */}
			<div className="flex flex-col justify-start border border-theme shadow-lg shadow-slate-400 rounded-lg h-1/2">
				<div className="flex items-center gap-2 font-semibold px-2 py-3">
					<AiFillHome className="text-theme text-xl" />
					<span className="text-lg">In-Clinic Appointment</span>
				</div>
				<div className="w-full h-[1px] bg-gray-300 shadow-xl shadow-gray-400"></div>
				{/* <Divider /> */}
				<div className="px-2 py-5 flex justify-between">
					<div>
						<h2 className="flex items-center gap-2 font-semibold">
							<span>
								<FcCalendar className="text-xl cursor-pointer" />
							</span>{" "}
							On Feb 17, 2023{" "}
						</h2>
						<Link href="/user/book-appointment">
							<p className="font-semibold text-theme cursor-pointer text-sm pt-2">
								Change Date & Time
							</p>
						</Link>
					</div>
					<h2 className="flex items-center gap-2 font-semibold">
						<span>
							<AiOutlineClockCircle className="text-xl" />
						</span>{" "}
						At 10:00 AM
					</h2>
				</div>
				<div className="w-full h-[1px] bg-gray-300 shadow-xl shadow-gray-400"></div>
				<div className="flex mb-1 px-2 py-5 gap-4 justify-between">
					<div className="w-44">
						<img
							src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=996&t=st=1676027817~exp=1676028417~hmac=21fddfaca49dd647dc9a0a75ab7b39b6c5a24ea82b977de84a71bbc21be75ad1"
							alt=""
							className="rounded-xl"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div>
							<h1 className="text-lg font-semibold text-theme">
								Dr Lipsa Rajput
							</h1>
							<p className="text-sm font-medium">
								BDS, MDS - Orthodontics and Dentofacial
							</p>
						</div>
						<p className="text-sm font-medium">Orthopaedics</p>
						<div className="text-sm font-medium">
							<p>Orthodontist, Dentist, Dental Surgeon,</p>
							<p>Dentofacial Orthopedist</p>
						</div>
					</div>
				</div>
				<div className="w-full h-[1px] bg-gray-300 shadow-xl shadow-gray-400"></div>

				<div className="flex mb-1 px-2 py-5 gap-4 justify-between">
					<div className="w-44">
						<img
							src="https://img.freepik.com/free-photo/dental-implants-surgery-concept-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-10711.jpg?w=996&t=st=1676284963~exp=1676285563~hmac=64ad9ffa8b33f43afdb1e7344e4742a08293f0a6ffbc76b3748f0183bae3966a"
							alt=""
							className="rounded-xl"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div>
							<h1 className="text-lg font-semibold text-theme">Dentalign</h1>
							<p className="text-sm font-medium">
								Ground Floor, Sai Gandhi Square, Whitefield
							</p>
						</div>
						<p className="text-sm font-medium">
							Main Road, Ramgondanahalli, Bangalore
						</p>
						<div className="text-sm font-medium">
							<p className="pb-2">849/1, A Block, Bangalore</p>
							<Link
								href="https://www.google.com/maps/dir/20.2682918,85.7769154/searching+yard/@20.2647504,85.7707751,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a19a740ae304117:0x629ce9db127f69ef!2m2!1d85.7790761!2d20.2567687"
								className="cursor-pointer font-semibold text-theme"
							>
								Get Directions
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Right section */}
			<div className="md:w-1/3">
				<div className="text-2xl font-bold mb-3 text-[#01a400]">
					Appointment Booked <Verified fontSize="large" />
				</div>
				<div className="space-y-2 text-sm font-semibold mb-3">
					<p>Your appointment ID is 16382894</p>
					<p>We have sent you an SMS with the details.</p>
				</div>
				{/* <div className="shadow-lg shadow-gray-300 px-4 py-3 border border-gray-200 rounded-lg">
					<h1 className="text-[#8a45e6] font-semibold text-xl">Benefits</h1>
					<div className="w-full h-[1px] bg-gray-200 my-4"></div>
					<p className="text-gray-500 font-medium text-[13px] my-4">
						Our promise to you
					</p>
					<div className="flex flex-col gap-2 text-[#8A45E6]">
						<p className="">
							<CheckCircle fontSize="small" />{" "}
							<span className="text-black font-semibold text-sm ml-2">
								Verified consultation fees of ₹1000.0
							</span>
						</p>
						<p>
							<CheckCircle fontSize="small" />{" "}
							<span className="text-black font-semibold text-sm ml-2">
								Verified Location
							</span>
						</p>
						<p>
							<CheckCircle fontSize="small" />{" "}
							<span className="text-black font-semibold text-sm ml-2">
								Assured meet with Dr Lipsa Rajput
							</span>
						</p>
					</div>
				</div> */}
				<div className="my-3">
					<div className="my-3 text-sm font-semibold">
						<p>Patient Name</p>
						<p>Akshya Kumar Rout</p>
					</div>
					<div className="my-3 text-sm font-semibold">
						<p>Mobile</p>
						<p>+91 7978125307</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AppointmentDetails;

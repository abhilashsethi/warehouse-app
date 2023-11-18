import { AiOutlineClockCircle } from "react-icons/ai";
import { FcCalendar } from "react-icons/fc";
import Link from "next/link";
import React from "react";

const DoctorList = () => {
	return (
		<section className="md:p-2 md:px-5 md:mt-10 px-2">
			<div className="flex lg:flex-row flex-col mb-5 w-full items-center rounded-lg px-2 py-5 border border-theme shadow-lg shadow-slate-400">
				<div className="flex lg:flex-row flex-col lg:w-2/4  gap-2 items-center">
					<div className="w-60">
						<img
							src="https://img.freepik.com/free-photo/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-female-nurse-blue-scrubs-stethoscope-show-thumbs-up-assure-guarantee-best-quality-service-clinic_1258-57360.jpg?w=996&t=st=1676027877~exp=1676028477~hmac=cbeec100e05ca719f55954355982ed3aec1cb0d0878c5f61b46e9b26ea7ff81b"
							alt=""
							className="rounded-xl"
						/>
					</div>
					<div className="flex flex-col gap-3 md:mb-0 mb-2">
						<div>
							<h1 className="text-lg font-semibold text-theme">
								Dr Payal Verma
							</h1>
							<p className="text-sm font-medium">
								MBBS, MD - Internal Medicine, DM - Gastroenterology
							</p>
						</div>
						<p className="text-sm font-medium">
							HOD - Gastroenterology Hepatology and Endosonology
						</p>
						<div className="text-sm font-medium">
							<p>Manipal Hospital, HAL airport road Bangalore</p>
							<p>
								Gastroenterologist, Hepatologist, Surgical Gastroenterologist
							</p>
						</div>
					</div>
				</div>
				<div className=" flex flex-col items-center lg:w-1/3 w-full md:mb-0 mb-2">
					<p className="font-semibold text-theme md:mb-0 mb-2">
						₹400 Consultation fee{" "}
					</p>
					<Link
						href="/user/book-appointment"
						className="flex items-center justify-center px-4 py-2 w-1/2 bg-[#4b4694]  hover:bg-[#28328c] hover:scale-95 ease-in-out transition-all duration-200 text-white font-semibold rounded-md"
					>
						<button>Book Appointment</button>
					</Link>
				</div>
				<div className=" flex flex-col items-center ">
					<p className="flex items-center gap-1 font-semibold">
						<AiOutlineClockCircle />
						Available Tomorrow
						<FcCalendar className="text-xl cursor-pointer" />
					</p>
					<p className="font-[500]">
						Saturday: <span>10:00 AM - 05:00 PM</span>
					</p>
				</div>
				{/* <div className="relative">
					<FaInfoCircle className="text-blue-500" />
					<div className="text-xs bg-black text-white border border-gray-400 rounded-lg p-2 absolute w-72 bottom-0 -left-80 z-10 invisible">
						Info Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
						blanditiis eius, fuga ipsum optio architecto quaerat ad iure nam
						facere provident pariatur, voluptas ab! Quia officia ratione magnam
						assumenda consequatur!
					</div>
					<style jsx>{`
						.relative:hover .text-xs {
							visibility: visible;
						}
					`}</style>
				</div> */}
			</div>

			<div className="flex lg:flex-row flex-col mb-5 w-full items-center rounded-lg px-2 py-5 border border-theme shadow-lg shadow-slate-400">
				<div className="flex lg:flex-row flex-col lg:w-2/4  gap-2 items-center">
					<div className="w-60">
						<img
							src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=996&t=st=1676027817~exp=1676028417~hmac=21fddfaca49dd647dc9a0a75ab7b39b6c5a24ea82b977de84a71bbc21be75ad1"
							alt=""
							className="rounded-xl"
						/>
					</div>
					<div className="flex flex-col gap-3 md:mb-0 mb-2">
						<div>
							<h1 className="text-lg font-semibold text-theme">
								Dr Lipsa Rajput
							</h1>
							<p className="text-sm font-medium">
								MBBS, MD - Internal Medicine, DM - Gastroenterology
							</p>
						</div>
						<p className="text-sm font-medium">
							HOD - Gastroenterology Hepatology and Endosonology
						</p>
						<div className="text-sm font-medium">
							<p>Manipal Hospital, HAL airport road Bangalore</p>
							<p>
								Gastroenterologist, Hepatologist, Surgical Gastroenterologist
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center lg:w-1/3 w-full md:mb-0 mb-2">
					<p className="font-semibold text-theme md:mb-0 mb-2">
						₹1000 Consultation fee{" "}
					</p>
					<Link
						href="/user/book-appointment"
						className="flex items-center justify-center px-4 py-2 w-1/2 bg-[#4b4694]  hover:bg-[#28328c] hover:scale-95 ease-in-out transition-all duration-200 text-white font-semibold rounded-md"
					>
						<button>Book Appointment</button>
					</Link>
				</div>
				<div className="flex flex-col items-center">
					<p className="flex items-center gap-1 font-semibold">
						<AiOutlineClockCircle />
						Available Tomorrow
						<FcCalendar className="text-xl cursor-pointer" />
					</p>
					<p className="font-[500]">
						Saturday: <span>10:00 AM - 05:00 PM</span>
					</p>
				</div>
				{/* <div className="relative">
					<FaInfoCircle className="text-blue-500" />
					<div className="text-xs bg-black text-white border border-gray-400 rounded-lg p-2 absolute w-72 bottom-0 -left-80 z-10 invisible">
						Info Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
						blanditiis eius, fuga ipsum optio architecto quaerat ad iure nam
						facere provident pariatur, voluptas ab! Quia officia ratione magnam
						assumenda consequatur!
					</div>
					<style jsx>{`
						.relative:hover .text-xs {
							visibility: visible;
						}
					`}</style>
				</div> */}
			</div>

			<div className="flex lg:flex-row flex-col mb-5 w-full items-center rounded-lg px-2 py-5 border border-theme shadow-lg shadow-slate-400">
				<div className="flex lg:flex-row flex-col lg:w-2/4  gap-2 items-center">
					<div className="w-60">
						<img
							src="https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg"
							alt=""
							className="rounded-xl"
						/>
					</div>
					<div className="flex flex-col gap-3 md:mb-0 mb-2">
						<div>
							<h1 className="text-lg font-semibold text-theme">
								Dr Anshuman Agrawal
							</h1>
							<p className="text-sm font-medium">
								MBBS, MD - Internal Medicine, DM - Gastroenterology
							</p>
						</div>
						<p className="text-sm font-medium">
							HOD - Gastroenterology Hepatology and Endosonology
						</p>
						<div className="text-sm font-medium">
							<p>Manipal Hospital, HAL airport road Bangalore</p>
							<p>
								Gastroenterologist, Hepatologist, Surgical Gastroenterologist
							</p>
						</div>
					</div>
				</div>
				<div className=" flex flex-col items-center lg:w-1/3 w-full md:mb-0 mb-2">
					<p className="font-semibold text-theme md:mb-0 mb-2">
						₹500 Consultation fee{" "}
					</p>
					<Link
						href="/user/book-appointment"
						className="flex items-center justify-center px-4 py-2 w-1/2 bg-[#4b4694]  hover:bg-[#28328c] hover:scale-95 ease-in-out transition-all duration-200 text-white font-semibold rounded-md"
					>
						<button>Book Appointment</button>
					</Link>
				</div>
				<div className=" flex flex-col items-center ">
					<p className="flex items-center justify-center gap-1 font-semibold">
						<AiOutlineClockCircle />
						Available Tomorrow
						<FcCalendar className="text-xl cursor-pointer" />
					</p>
					<p className="font-[500]">
						Saturday: <span>10:00 AM - 05:00 PM</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default DoctorList;

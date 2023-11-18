import Link from "next/link";
import React from "react";

const UserAppointment = () => {
	return (
		<section className="p-2 md:px-10 md:mt-10">
			<div className="flex lg:flex-row flex-col gap-3 mb-5 w-full items-center rounded-lg px-2 py-5 border border-theme shadow-lg shadow-slate-400">
				<div className="flex lg:flex-row flex-col lg:w-2/4 gap-2 items-center">
					<div className="cursor-pointer border border-gray-400 px-5 py-7 bg-gray-200 rounded-lg">
						<p className="text-3xl font-bold">17</p>
						<p className="text-lg font-semibold">FEB</p>
					</div>
					<div className="flex flex-col gap-3">
						<div>
							<h1 className="text-lg font-semibold text-theme">
								Dr Lipsa Rajput
							</h1>
							<p className="text-sm font-medium">Friday, 10:00 AM</p>
						</div>
						<p className="text-sm font-medium">Dentalign</p>
						<div className="text-sm font-medium">
							<p className="text-sm text-gray-500 bg-gray-200 w-1/2 text-center py-1 rounded-lg">
								Booked
							</p>
						</div>
					</div>
				</div>
				<div className="flex gap-3 items-center lg:w-1/3 w-full">
					{/* <p className="font-semibold text-theme">₹500 Consultation fee </p> */}
					<Link
						href="/user/cancelled-appointment"
						className="flex items-center justify-center px-4 py-2 w-1/2 bg-[#4b4694] hover:bg-[#28328c] hover:scale-95 ease-in-out transition-all duration-200 text-white font-semibold rounded-md"
					>
						<button>View Details</button>
					</Link>
					<Link
						href="#"
						className="flex items-center justify-center px-4 py-2 w-1/2 bg-red-600 hover:bg-[#28328c] hover:scale-95 ease-in-out transition-all duration-200 text-white font-semibold rounded-md"
					>
						<button>Cancel Booking</button>
					</Link>
				</div>
			</div>
			<div className="cursor-pointer flex lg:flex-row flex-col gap-3 mb-5 w-full items-center rounded-lg px-2 py-5 border border-theme shadow-lg shadow-slate-400">
				<div className="flex lg:flex-row flex-col lg:w-2/4 gap-2 items-center">
					<div className="cursor-pointer border border-gray-400 px-5 py-7 bg-gray-200 rounded-lg">
						<p className="text-3xl font-bold">10</p>
						<p className="text-lg font-semibold">JAN</p>
					</div>
					<div className="flex flex-col gap-3">
						<div>
							<h1 className="text-lg font-semibold text-theme">
								Dr Pabitra Pattnaik
							</h1>
							<p className="text-sm font-medium">Tuesday, 10:30 AM</p>
						</div>
						<p className="text-sm font-medium">Dr Agrawal Clinic</p>
						<div className="text-sm font-medium">
							<p className="text-sm text-green-500 bg-green-200 w-1/2 text-center py-1 rounded-lg">
								Completed
							</p>
						</div>
					</div>
				</div>
				<div className="flex gap-3 items-center lg:w-1/3 w-full">
					{/* <p className="font-semibold text-theme">₹500 Consultation fee </p> */}
					<Link
						href="/user/completed-appointment"
						className="flex items-center justify-center px-4 py-2 w-1/2 bg-[#4b4694] hover:bg-[#28328c] hover:scale-95 ease-in-out transition-all duration-200 text-white font-semibold rounded-md"
					>
						<button>View Details</button>
					</Link>
					<Link
						href="/user/book-appointment"
						className="flex items-center justify-center px-4 py-2 w-1/2 bg-[#14BEF0] hover:bg-[#28328c] hover:scale-95 ease-in-out transition-all duration-200 text-white font-semibold rounded-md"
					>
						<button>Book Again</button>
					</Link>
				</div>
			</div>
			<div className="cursor-pointer flex lg:flex-row flex-col gap-3 mb-5 w-full items-center rounded-lg px-2 py-5 border border-theme shadow-lg shadow-slate-400">
				<div className="flex lg:flex-row flex-col lg:w-2/4  gap-2 items-center">
					<div className="cursor-pointer border border-gray-400 px-5 py-7 bg-gray-200 rounded-lg">
						<p className="text-3xl font-bold">05</p>
						<p className="text-lg font-semibold">JAN</p>
					</div>
					<div className="flex flex-col gap-3">
						<div>
							<h1 className="text-lg font-semibold text-theme">
								Dr Rajesh Kar
							</h1>
							<p className="text-sm font-medium">Thursday, 11:15 AM</p>
						</div>
						<p className="text-sm font-medium">
							Impressions Dental Specialities
						</p>
						<div className="text-sm font-medium">
							<p className="text-sm text-red-500 bg-red-200 w-1/2 text-center py-1 rounded-lg">
								Cancelled
							</p>
						</div>
					</div>
				</div>
				<div className="flex gap-3 items-center lg:w-1/3 w-full">
					{/* <p className="font-semibold text-theme">₹500 Consultation fee </p> */}
					<Link
						href="/user/view-details"
						className="flex items-center justify-center px-4 py-2 w-1/2 bg-[#4b4694]  hover:bg-[#28328c] hover:scale-95 ease-in-out transition-all duration-200 text-white font-semibold rounded-md"
					>
						<button>View Details</button>
					</Link>
					<Link
						href="/user/book-appointment"
						className="flex items-center justify-center px-4 py-2 w-1/2 bg-[#14BEF0]  hover:bg-[#28328c] hover:scale-95 ease-in-out transition-all duration-200 text-white font-semibold rounded-md"
					>
						<button>Book Again</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default UserAppointment;

import EastIcon from "@mui/icons-material/East";
import { motion } from "framer-motion";
import {
	bills,
	pharmacy,
	record,
	reminder,
	schedule,
	software,
	warehouse,
} from "assets";

const OurProduct = () => {
	const saturationArr = [
		{
			id: 1,
			title: "Telemedicine",
			subtitle:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, accusantium?",
			img: schedule.src,
		},
		{
			id: 2,
			title: "Appointment Booking Store",
			subtitle:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, accusantium?",
			img: reminder.src,
		},
		{
			id: 3,
			title: "APPOINTMENT SCHEDULING",
			subtitle:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, accusantium?",
			img: schedule.src,
		},
		{
			id: 4,
			title: "MEDICAL BILLING SOFTWARE",
			subtitle:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, accusantium?",
			img: bills.src,
		},
		{
			id: 5,
			title: "ELECTRONIC MEDICAL RECORDS",
			subtitle:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, accusantium?",
			img: record.src,
		},
		{
			id: 6,
			title: "LIMS SOFTWARE",
			subtitle:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, accusantium?",
			img: software.src,
		},
		{
			id: 7,
			title: "HOSPITAL STOCK MANAGEMENT",
			subtitle:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, accusantium?",
			img: warehouse.src,
		},
		{
			id: 8,
			title: "PHARMACY MANAGEMENT SYSTEM",
			subtitle:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, accusantium?",
			img: pharmacy.src,
		},
	];

	return (
		<div
			className="bg-blend-overlay bg-white/80 w-full py-5 md:pb-20 lg:h-[50vw] flex flex-col justify-evenly items-center bg-cover bg-center bg-no-repeat"
			id="product"
		>
			<div className="flex flex-col justify-center items-center">
				<div className="flex items-center gap-2 mt-10 text-sm text-[#0E89E2] font-bold">
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
					<div>Developing Solutions For The Future</div>
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
				</div>
				<h2 className="lg:text-4xl text-xl font-bold text-[#0E89E2] text-center mb-8">
					<span className="lg:text-4xl text-xl font-thin text-black text-center">
						Popular
					</span>{" "}
					Products
				</h2>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 md:gap-7 lg:gap-10 justify-items-center">
				{saturationArr.map((item, index) => {
					return (
						<motion.div
							// data-aos="flip-right"
							key={index}
							initial={{ scale: 0, opacity: 0, rotateY: 0 }}
							whileInView={{ scale: 1, opacity: 1, rotateY: 360 }}
							whileHover={{ scale: 1.1 }}
							transition={{ delay: index * 0.1 }}
							exit={{ scale: 0, opacity: 0, rotateY: 0 }}
							className="shadow-xl group px-2 rounded-xl flex flex-col gap-3 justify-center items-start w-72 md:w-56 h-64 hover:shadow-2xl border-2 transition duration-500 ease-out"
						>
							<div className="bg-[#0E89E2] flex justify-center items-center p-2 w-10 h-10 rounded-xl">
								<img src={item.img} alt="product-img" />
							</div>

							<p className="text-md font-bold text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-700 via-pink-600 to-zinc-300 transition duration-500 ease-out">
								{item.title}
							</p>
							<p className="text-xs text-gray-500 transition duration-500 ease-out">
								{item.subtitle}
							</p>
							<div className="px-3 py-2 transition duration-500 ease-out text-sm font-medium hover:text-[#2d64a6]">
								<button className="px-2">View Details</button>
								<EastIcon />
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
};

export default OurProduct;

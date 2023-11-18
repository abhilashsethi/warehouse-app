import EqualizerIcon from "@mui/icons-material/Equalizer";
import ComputerIcon from "@mui/icons-material/Computer";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { motion } from "framer-motion";
import React from "react";

const WhyUs = () => {
	return (
		<section className="py-7">
			<div className=" flex flex-col justify-center items-center px-4">
				<div className="flex items-center gap-2 mt-10 text-sm text-[#0E89E2] font-bold">
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
					<div className="text-center">Why Us ?</div>
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
				</div>
				<h2 className="lg:text-4xl text-xl font-bold text-[#0E89E2] text-center mb-8">
					<span className="lg:text-4xl text-xl font-thin text-black text-center">
						Why
					</span>{" "}
					Choose Us ?
				</h2>
			</div>

			<div className="flex px-3 md:flex-row flex-col gap-7 w-full justify-center items-center overflow-hidden ">
				<motion.div
					initial={{ x: -200, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
					exit="exit"
					className="flex md:order-1 order-2 flex-col gap-7 justify-center items-center md:w-1/3"
				>
					<div className="flex gap-3 ">
						<EqualizerIcon className="text-4xl text-[#0E89E2]" />
						<div className="flex flex-col">
							<p className="text-xl font-bold text-[#0E89E2]">
								Digital Innovation
							</p>
							<p className="text-sm text-gray-400 font-semibold">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
								aliquam iste beatae magnam inventore mollitia a modi,
								perspiciatis rerum esse.
							</p>
						</div>
					</div>

					<div className="flex gap-3 ">
						<ThumbUpIcon className="text-4xl text-[#0E89E2]" />
						<div className="flex flex-col">
							<p className="text-xl font-bold text-[#0E89E2]">
								Passionate Approach
							</p>
							<p className="text-sm text-gray-400 font-semibold">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
								qui ipsa, vel libero accusantium optio? Amet illum assumenda
								consequatur doloribus.
							</p>
						</div>
					</div>
					<div className="flex gap-3 ">
						<ComputerIcon className="text-4xl text-[#0E89E2]" />
						<div className="flex flex-col">
							<p className="text-xl font-bold text-[#0E89E2]">
								Transparent Business Model
							</p>
							<p className="text-sm text-gray-400  font-semibold">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
								amet asperiores alias beatae et minima nisi fugiat aut veritatis
								tempore?
							</p>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ y: 200, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
					exit="exit"
					className="md:w-1/3 px-10 space-y-3 md:order-2 order-1"
				>
					{/* <p className="text-sm text-[#0E89E2] font-bold">
						Why we are the best ?
					</p> */}
					<h1 className="text-3xl font-bold text-black ">
						We are leading in{" "}
						<span className="text-3xl text font-bold text-[#0E89E2]">
							healthcare industry
						</span>
					</h1>
					<p className="tracking-wide text-md text-justify text-slate-700 italic font-medium">
						One Stop Solutions for Single or Multi-Specialist Hospitals, Clinics
						& Startups; HIPPA, 100+ Integrations, Advanced Tech, API &
						Interoperability, Standards & Compliances.
					</p>
					<p className="tracking-wide leading-6 text-sm text-justify text-slate-600 font-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
						accusantium sunt fuga cum quia obcaecati perferendis ratione aut,
						delectus quidem iusto, quam voluptatum asperiores dolore eum soluta
						porro dolores omnis.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default WhyUs;

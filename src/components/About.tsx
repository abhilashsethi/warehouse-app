import { motion } from "framer-motion";
import { aboutImg } from "assets";
import React from "react";

const About = () => {
	return (
		<section className="mb-8 bg-cover">
			<div className="flex flex-col justify-center items-center px-4">
				<div className="flex items-center gap-2 mt-10 text-sm text-[#0E89E2] font-bold">
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
					<div className="text-center">
						The Leading Clinic Management System
					</div>
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
				</div>
				<h2 className="lg:text-4xl text-xl font-bold text-[#0E89E2] text-center mb-8">
					<span className="lg:text-4xl text-xl font-thin text-black text-center">
						Why we are
					</span>{" "}
					The best
				</h2>
			</div>

			<div className="flex md:flex-row flex-col md:gap-10 w-full justify-center overflow-hidden">
				<div className="relative flex">
					<motion.div
						initial={{ x: -200, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
						exit="exit"
						className=""
					>
						<div className="absolute top-14 left-2 text-center">
							<p className="text-white text-3xl font-bold">5</p>
							<p className="text-white text-sm tracking-tight font-bold">
								years of experience
							</p>
						</div>
						<img className="w-96 h-96" src={aboutImg.src} alt="aboutImg" />
					</motion.div>
				</div>
				<motion.div
					initial={{ x: 200, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
					exit="exit"
					className="md:w-1/3 px-10 space-y-3"
				>
					<p className="text-sm text-[#0E89E2] font-bold">
						Why we are the best ?
					</p>
					<h1 className="text-3xl font-bold text-black ">
						We aim to provide expert Advice And{" "}
						<span className="text-3xl text font-bold text-[#0E89E2]">
							Quality Service
						</span>
					</h1>
					<p className="tracking-wide text-md text-justify text-slate-700 italic font-medium">
						We will find highly tailored solution that offer the most
						appropriate coverage at the most competitive rates
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

export default About;

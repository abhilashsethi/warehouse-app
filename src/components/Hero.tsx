import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Icons from "assets/icons";
import React from "react";

const Hero = () => {
	return (
		<section>
			<div>
				<div
					style={{
						backgroundImage: `url('./bg/bg-img5.png')`,
						backgroundSize: "cover",
						backgroundPosition: "left",
						backgroundRepeat: "no-repeat",
					}}
					className="bg-black/25 md:bg-center	bg-right min-h-[70vh] min-w-full flex flex-col justify-center items-start px-10"
				>
					<motion.div
						initial={{ x: -200, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
						exit="exit"
						className="text-center lg:w-[40vw] w-full grid grid-cols-1 gap-4"
					>
						<h1 className="text-gray-900 font-bold lg:text-5xl md:text-3xl text-xl">
							<span className="text-[#0E89E2] font-bold lg:text-5xl md:text-3xl text-xl">
								Software For{" "}
							</span>
							Hospitals
						</h1>
						<div className="text-[#0E89E2] flex justify-center lg:text-2xl md:text-xl text-base font-semibold py-2">
							Want to gain, engage and retain more patients today ?
						</div>
						<span className="hidden lg:block text-4xl font-semibold text-[#0E89E2]">
							<Typewriter
								options={{
									strings: ["Digital India.", "Digital Healthcare."],
									autoStart: true,
									loop: true,
								}}
							/>
						</span>
						<div>
							<button className="text-white font-bold px-7 py-3 mt-3 bg-[#ab3571] rounded-lg hover:scale-105 transition duration-200 ease-out">
								<p className="inline-block pr-3 text-white">Get Started</p>
								<Icons.RightArrow className=" h-6 w-6 text-xl inline-block text-white" />
							</button>
							<button className="text-white mx-4 font-bold px-7 py-3 mt-3 bg-[#0E89E2] rounded-lg hover:scale-105 transition duration-200 ease-out">
								<p className="inline-block text-white pr-3">How it works</p>
								<Icons.RightArrow className="h-6 w-6 text-xl inline-block text-white" />
							</button>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

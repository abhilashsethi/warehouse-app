import { motion } from "framer-motion";
import Icons from "assets/icons";
import React from "react";

const OurPartners = () => {
	const partnerArr = [
		{
			id: 1,
			img: "https://cdn.mos.cms.futurecdn.net/rjqJEKv6P9Yjy9d3KMGvp8.jpg",
		},
		{
			id: 2,
			img: "/about/linkedin.png",
		},
		{
			id: 3,
			img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png",
		},
		{
			id: 4,
			img: "https://1000logos.net/wp-content/uploads/2017/05/Yahoo-Logo-2009.png",
		},
		{
			id: 5,
			img: "https://getlogo.net/wp-content/uploads/2020/02/taboola-logo-vector.png",
		},
		{
			id: 6,
			img: "https://www.adroll.com/assets/img/adroll-logo-black.png",
		},
	];

	return (
		<section className="py-3">
			<div className="flex flex-col justify-center items-center">
				<div className="flex items-center gap-2 mt-10 text-sm text-[#0E89E2] font-bold">
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
					<div>Partners</div>
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
				</div>
				<h2 className="lg:text-4xl text-xl font-bold text-[#0E89E2] text-center mb-8">
					<span className="lg:text-4xl text-xl font-thin text-black text-center">
						Our
					</span>{" "}
					Partners
				</h2>
			</div>

			<div className="overflow-hidden flex md:flex-row flex-col justify-around items-center gap-5 px-2">
				<motion.div
					initial={{ x: -200, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
					exit="exit"
					className="md:w-1/3 flex flex-col gap-3"
				>
					<div className="flex justify-start gap-4 items-center">
						<p className="text-md font-medium">TEAM</p>
						<p>.</p>
						<p className="text-md font-medium">CUSTOMER</p>
						<p>.</p>
						<p className="text-md font-medium">COMMUNITY</p>
					</div>
					<div>
						<h1 className="text-3xl font-bold text-black">
							We Work With{" "}
							<span className="text-3xl text font-bold text-[#0E89E2]">
								the Best Partners
							</span>
						</h1>
					</div>
					<div>
						<p className="text-base font-medium tracking-wider text-justify">
							While we are at the forefront of and specialize in design-build,
							we are very familiar with a number of delivery methods and are
							confident we can find the process that will best help you meet
							your goals.
						</p>
					</div>
					<button className="text-white w-36 font-bold px-2 py-3 mt-3 bg-[#0E89E2] rounded-lg hover:scale-105 transition duration-200 ease-out">
						<p className="inline-block text-white pr-3">Read More</p>
						{/* <Icons.RightArrow className="h-6 w-6 text-xl inline-block text-white" /> */}
					</button>
				</motion.div>
				<motion.div
					initial={{ y: 200, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
					exit="exit"
					className="grid grid-cols-2 md:gap-1 gap-6 justify-items-center md:w-1/2"
				>
					{partnerArr.map((item, index) => {
						return (
							<img
								key={item.id}
								className={`justify-self-center self-center ${
									item.id === 2 ? `w-16` : `w-32`
								}`}
								src={item.img}
								alt="ourPartner"
							/>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default OurPartners;

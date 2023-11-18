import { appointment, customer, doctor } from "assets";
import { motion } from "framer-motion";
import Counter from "./Counter";
import React from "react";

const CounterPage = () => {
	const counterArr = [
		{
			id: 1,
			title: "300",
			sign: "+",
			subtitle: "Doctors and growing!",
			img: doctor.src,
			count: <Counter endNo={3000} suffix="+" />,
		},
		{
			id: 2,
			title: "200",
			sign: "+",
			subtitle: "Client",
			img: customer.src,
			count: <Counter endNo={200} suffix="+" />,
		},
		{
			id: 3,
			title: "25",
			sign: "+",
			subtitle: "Clinics",
			img: appointment.src,
			count: <Counter endNo={25} suffix="+" />,
		},
		{
			id: 4,
			title: "20",
			sign: "+",
			subtitle: "Cities",
			img: appointment.src,
			count: <Counter endNo={5} suffix="+" />,
		},
	];

	return (
		<section className="mt-10 lg:px-40 py-5">
			<motion.div
				initial={{ y: 180, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
				exit="exit"
				className="rounded-xl py-2 w-full border-2 bg-gradient-to-r from-slate-300 via-gray-200 to-slate-300"
			>
				<div className="md:h-[20vh] flex-col md:flex-row flex justify-around items-center px-1">
					{counterArr.map((item, index) => {
						return (
							<motion.div
								initial={{ y: 200, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
								exit="exit"
								key={index}
								className="grid gap-3 justify-items-center"
							>
								<p className="text-black md:text-5xl text-2xl font-bold">
									{item.count}
								</p>
								<p className="md:text-2xl text-md font-semibold text-black">
									{item.subtitle}
								</p>
							</motion.div>
						);
					})}
				</div>
			</motion.div>
		</section>
	);
};

export default CounterPage;

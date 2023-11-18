import { motion } from "framer-motion";
import Card from "components/Card";
import Slider from "react-slick";
import Icons from "assets/icons";
import React from "react";

const Testimonial = () => {
	const SamplePrevArrow = (props: any) => {
		const { onClick } = props;
		return (
			<button
				onClick={onClick}
				className=" absolute top-1/2 hidden -translate-y-1/2 rounded bg-blue-600 transition hover:scale-105 sm:left-[-1em] sm:block lg:-left-4 lg:flex"
			>
				<Icons.RightArrow className=" h-6 w-6 rotate-180 text-xl text-white" />
			</button>
		);
	};
	const SampleNextArrow = (props: any) => {
		const { onClick } = props;
		return (
			<button
				onClick={onClick}
				className=" absolute top-1/2 hidden  -translate-y-1/2 rounded bg-blue-600 transition hover:scale-105 sm:right-[-1em] sm:block lg:-right-4 lg:flex"
			>
				<Icons.RightArrow className="h-6 w-6 text-xl text-white" />
			</button>
		);
	};

	const testimonalArr = [
		{
			id: 1,
			name: "Dr. Sagarika Muni",
			designation: "Director, ABCD Clinic",
			title:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita neque non dicta accusamus facilis facere id dignissimos inventore sed laudantium eveniet nobis distinctio aspernatur aliquam, exercitationem, natus doloremque est.",
			img: "/testimonials/testimonial1.jpeg",
		},
		{
			id: 2,
			name: "Dr.Ronak Choudhary",
			designation: "Director, Dr Ronak’s Multi Speciality Dental Clinic",
			title:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita neque non dicta accusamus facilis facere id dignissimos inventore sed laudantium eveniet nobis distinctio aspernatur aliquam, exercitationem, natus doloremque est.",
			img: "/testimonials/testimonial2.jpeg",
		},
		{
			id: 3,
			name: "Dr. Akshay Kumar Rout",
			designation: "M.B.B.S. : S.C.B. Medical College",
			title:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita neque non dicta accusamus facilis facere id dignissimos inventore sed laudantium eveniet nobis distinctio aspernatur aliquam, exercitationem, natus doloremque est.",
			img: "/testimonials/testimonial3.jpeg",
		},
		{
			id: 4,
			name: "Dr. Sushmita Swain",
			designation: "BDS, MDS(ORAL PATH.), MCPE(USA)",
			title:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita neque non dicta accusamus facilis facere id dignissimos inventore sed laudantium eveniet nobis distinctio aspernatur aliquam, exercitationem, natus doloremque est.",
			img: "/testimonials/testimonial4.jpeg",
		},
		{
			id: 5,
			name: "Dr. Mrutyunjay Das",
			designation: "CEO, Narayan Cosmeto Care",
			title:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita neque non dicta accusamus facilis facere id dignissimos inventore sed laudantium eveniet nobis distinctio aspernatur aliquam, exercitationem, natus doloremque est.",
			img: "/testimonials/testimonial5.jpeg",
		},
	];

	const settings = {
		// dots: true,
		infinite: true,
		// speed: 500,
		slidesToShow: 1,
		prevArrow: <SamplePrevArrow />,
		nextArrow: <SampleNextArrow />,
		slidesToScroll: 1,
		// initialSlide: 0,
		autoplay: false,
		// speed: 2000,
		// autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};

	return (
		<section className=" bg-gray-100 pb-8">
			<div className="flex flex-col justify-center items-center">
				<div className="flex items-center gap-2 mt-10 text-sm text-[#0E89E2] font-bold">
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
					<div>Testimonials</div>
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
				</div>
				<h2 className="lg:text-4xl text-xl font-bold text-[#0E89E2] text-center mb-8">
					<span className="lg:text-4xl text-xl font-thin text-black text-center">
						We Care About
					</span>{" "}
					Our Customers Experience Too
				</h2>
			</div>
			<div className="flex justify-center items-center">
				<motion.div
					initial={{ x: -200, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
					exit="exit"
					className="md:w-[40vw] w-[70vw] md:m-auto md:mx-10 border-2 bg-white rounded-xl pt-3 shadow-lg"
				>
					<Slider {...settings}>
						{testimonalArr.map((item, index) => {
							return (
								<div className="" key={index}>
									<Card
										name={item.name}
										designation={item.designation}
										title={item.title}
										image={item.img}
									/>
								</div>
							);
						})}
					</Slider>
				</motion.div>
			</div>
		</section>
	);
};

export default Testimonial;

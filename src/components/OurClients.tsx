import Slider from "react-slick";
import Icons from "assets/icons";
import React from "react";

const OurClients = () => {
	const SamplePrevArrow = (props: any) => {
		const { onClick } = props;
		return (
			<button
				onClick={onClick}
				className="absolute top-1/2 hidden -translate-y-1/2 rounded bg-blue-600 transition hover:scale-105 sm:left-[-1em] sm:block lg:-left-4 lg:flex"
			>
				{/* <Icons.RightArrow className="h-6 w-6 rotate-180 text-xl text-white" /> */}
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
				{/* <Icons.RightArrow className="h-6 w-6 text-xl text-white" /> */}
			</button>
		);
	};

	const clientArr = [
		{
			id: 1,
			img: "/clients/client1.png",
		},
		{
			id: 2,
			img: "/clients/client2.png",
		},
		{
			id: 3,
			img: "/clients/client3.png",
		},
		{
			id: 4,
			img: "/clients/clients.svg",
		},
		{
			id: 5,
			img: "/clients/client5.png",
		},
		{
			id: 6,
			img: "/clients/client6.png",
		},
		{
			id: 7,
			img: "/clients/client7.png",
		},
		{
			id: 8,
			img: "/clients/client8.png",
		},
		{
			id: 9,
			img: "/clients/client9.png",
		},
		{
			id: 10,
			img: "/clients/client10.png",
		},
		{
			id: 11,
			img: "/clients/client11.png",
		},
		{
			id: 12,
			img: "/clients/client12.png",
		},
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 6,
		// prevArrow: <SamplePrevArrow />,
		// nextArrow: <SampleNextArrow />,
		slidesToScroll: 1,
		// initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 2000,
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
					slidesToShow: 2,
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
		<section className="mb-8">
			<div className="flex flex-col justify-center items-center">
				<div className="flex items-center gap-2 mt-10 text-sm text-[#0E89E2] font-bold">
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
					<div>Clients</div>
					<div className="w-8 h-[2px] bg-[#0E89E2] rounded-lg"></div>
				</div>
				<h2 className="md:text-4xl text-xl font-bold text-[#0E89E2] text-center mb-8">
					<span className="md:text-4xl text-xl font-thin text-black text-center">
						Our
					</span>{" "}
					Clients
				</h2>
			</div>
			<div className="px-10 pt-3">
				<Slider {...settings}>
					{clientArr.map((item, index) => {
						return (
							<div className="w-full px-5" key={index}>
								<img
									className="rounded-lg h-32"
									src={item.img}
									alt="clientImg"
								/>
							</div>
						);
					})}
				</Slider>
			</div>
		</section>
	);
};

export default OurClients;

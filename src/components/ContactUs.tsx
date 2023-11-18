import { FaPhoneAlt, FaMailBulk, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { Card } from "flowbite-react";
import React from "react";

const ContactUs = () => {
	const cardArr = [
		{
			id: 1,
			title: "INDIA",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvk2NkbNItX3LgMg4eaoCsDyq38P1Cf632xjrXcy_I3UbRiT6n&usqp=CAU",
			contact1: "Sale: +91-8114957912",
			contact2: "Support: +91-9348011255",
			contact3: "searchingyard@gmail.com",
			contact4: "info@yardhealth.in",
			contact5: "Odisha, Chennai, Bangalore - INDIA",
		},
		{
			id: 2,
			title: "AUSTRALIA",
			img: "https://lp-cms-production.imgix.net/2019-06/4dbac764773354e75e44a66723c82b51-australia-pacific.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
			contact1: "Sale: +61 414 591 981",
			contact2: "Support: +91-9348011255",
			contact3: "searchingyard@gmail.com",
			contact4: "info@yardhealth.in",
			contact5: "Sydney - AUSTRALIA",
		},
		{
			id: 3,
			title: "ZAMBIA",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4WF99WZBgcoNBjqyqZRIsLruHmZVw60lmY066xbc9jsK42vzgzyOtPVXl0zTd6WZllU&usqp=CAU",
			contact1: "Sale: +91-8114957912",
			contact2: "Support: +91-9348011255",
			contact3: "searchingyard@gmail.com",
			contact4: "info@yardhealth.in",
			contact5: "Lusuka, Zambia, Africa Reg - AFRICA",
		},
	];

	return (
		<section className="">
			<div className="overflow-hidden">
				<div className="kenburns-top bg-[url('/bg/hero.webp')] grid h-80 place-items-center bg-black/25 bg-cover bg-no-repeat bg-blend-overlay">
					<div className="text-center">
						<h1 className="text-4xl font-extrabold text-white lg:text-5xl">
							Contact Us
						</h1>
						<p className="text-base font-medium text-gray-300 lg:text-xl">
							We would be happy to assist you
						</p>
					</div>
				</div>
			</div>
			<section className="flex flex-col items-center px-5 py-16">
				<div className="flex w-full flex-col gap-5 pb-10 lg:flex-row">
					<div className="w-full pt-10">
						<h1 className="border-l-4 border-l-[#0E89E2] border-primary px-5  text-2xl font-semibold md:text-4xl md:leading-relaxed">
							To make requests for further information,{" "}
							<span className="font-semibold text-[#0E89E2]">contact us</span>{" "}
							via our social channels.
						</h1>

						<p className="p-6 text-lg font-medium text-gray-600">
							We just need a couple of hours! Not more than 2 working days since
							receiving your message.
						</p>
					</div>
					<div className="w-full">
						<ContactForm />
					</div>
				</div>
			</section>

			<div className="flex flex-col justify-center items-center">
				<h2 className="lg:text-4xl text-xl font-bold text-[#0E89E2] text-center mb-8">
					<span className="lg:text-4xl text-xl font-thin text-black text-center">
						Our Contact
					</span>{" "}
					Information
				</h2>
			</div>
			<section className="lg:px-10 flex flex-col md:flex-row justify-around mb-10">
				{cardArr.map((item, index) => {
					return (
						<div key={index} className="max-w-sm">
							<Card imgSrc={item.img}>
								<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									{item.title}
								</h5>
								<div className="flex flex-col gap-3 ">
									<div className="flex gap-4 items-center">
										<FaPhoneAlt color="#0e89e2" />
										<p>{item.contact1}</p>
									</div>
									<div className="flex gap-4 items-center">
										<FaPhoneAlt color="#0e89e2" />
										<p>{item.contact2}</p>
									</div>
									<div className="flex gap-4 items-center">
										<FaMailBulk color="#0e89e2" />
										<p>{item.contact3}</p>
									</div>
									<div className="flex gap-4 items-center">
										<FaMailBulk color="#0e89e2" />
										<p>{item.contact4}</p>
									</div>
									<div className="flex gap-4 items-center">
										<FaMapMarkerAlt color="#0e89e2" />
										<p>{item.contact5}</p>
									</div>
								</div>
							</Card>
						</div>
					);
				})}
			</section>

			<iframe
				className="mb-10 "
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.0498148974143!2d85.77688741471765!3d20.256768686421527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a740ae304117%3A0x629ce9db127f69ef!2sSearchingYard%20Software%20Private%20Limited!5e0!3m2!1sen!2sin!4v1671625448846!5m2!1sen!2sin"
				width="100%"
				height="300"
				// style="border:0;"
				// allowfullscreen=""
				loading="lazy"
				// referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</section>
	);
};

export default ContactUs;

import { FaAngleDoubleRight, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Icons from "assets/icons";
import { LOGO } from "assets";
import { EN } from "locales";
import Link from "next/link";

const footer_menus = [
	{
		id: 1,
		title: EN.Footer.FooterLinks.QUICK_LINKS.Title,
		list: [
			{
				id: 11,
				subtitle: EN.Footer.FooterLinks.QUICK_LINKS.links.Home,
				route: "/",
			},
			{
				id: 12,
				subtitle: EN.Footer.FooterLinks.QUICK_LINKS.links.Products,
				route: "/about",
			},
			{
				id: 13,
				subtitle: EN.Footer.FooterLinks.QUICK_LINKS.links.Solutions,
				route: "/partner",
			},

			{
				id: 17,
				subtitle: EN.Footer.FooterLinks.QUICK_LINKS.links.Pricing,
				route: "/career",
			},
			,
			,
		],
	},
	{
		id: 2,
		title: EN.Footer.FooterLinks.HIRE_DEVELOPERS.Title,
		list: [
			{
				id: 21,
				subtitle: EN.Footer.FooterLinks.HIRE_DEVELOPERS.links.Telemedicin,
				// url: "https://gorillayard.com/",
				url: "#",
			},
			// {
			// 	id: 22,
			// 	subtitle: EN.Footer.FooterLinks.HIRE_DEVELOPERS.links.Appointment,
			// 	url: "https://www.yardstream.live/",
			// },
			// {
			// 	id: 23,
			// 	subtitle: EN.Footer.FooterLinks.HIRE_DEVELOPERS.links.Scheduling,
			// 	url: "https://yardhotel.live/",
			// },
			{
				id: 24,
				subtitle: EN.Footer.FooterLinks.HIRE_DEVELOPERS.links.Billing,
				// url: "https://www.goliveclass.com/",
				url: "#",
			},
			{
				id: 25,
				subtitle: EN.Footer.FooterLinks.HIRE_DEVELOPERS.links.Electronic,
				// url: "https://www.yarddrone.com/",
				url: "#",
			},
			{
				id: 26,
				subtitle: EN.Footer.FooterLinks.HIRE_DEVELOPERS.links.LIMS,
				// url: "https://yardfundraising.searchingyard.com/",
				url: "#",
			},
			// {
			// 	id: 27,
			// 	subtitle: EN.Footer.FooterLinks.HIRE_DEVELOPERS.links.Stock,
			// 	url: "https://yardfundraising.searchingyard.com/",
			// },
			// {
			// 	id: 28,
			// 	subtitle: EN.Footer.FooterLinks.HIRE_DEVELOPERS.links.Pharmacy,
			// 	url: "https://yardfundraising.searchingyard.com/",
			// },
			// {
			// 	id: 29,
			// 	subtitle: EN.Footer.FooterLinks.HIRE_DEVELOPERS.links.Doctor,
			// 	url: "https://yardfundraising.searchingyard.com/",
			// },
		],
	},
	// {
	// 	id: 3,
	// 	title: EN.Footer.FooterLinks.INDUSTRIES.Title,
	// 	list: [
	// 		{
	// 			id: 31,
	// 			subtitle: EN.Footer.FooterLinks.INDUSTRIES.links.CLINIC,
	// 			route: "/industry/e-commerce",
	// 		},
	// 		{
	// 			id: 32,
	// 			subtitle: EN.Footer.FooterLinks.INDUSTRIES.links.MEDICAL,
	// 			route: "/industry/health",
	// 		},

	// 		{
	// 			id: 34,
	// 			subtitle: EN.Footer.FooterLinks.INDUSTRIES.links.HOSPITAL,
	// 			route: "/industry/travel-and-tourism",
	// 		},
	// 		{
	// 			id: 35,
	// 			subtitle: EN.Footer.FooterLinks.INDUSTRIES.links.CHAINS,
	// 			route: "/industry/energy-and-utilities",
	// 		},
	// 	],
	// },
	// {
	// 	id: 4,
	// 	title: EN.Footer.FooterLinks.COMPANY.Title,
	// 	list: [
	// 		{
	// 			id: 31,
	// 			subtitle: EN.Footer.FooterLinks.COMPANY.links.IIot,
	// 			route: "/services/iot",
	// 		},
	// 		{
	// 			id: 32,
	// 			subtitle: EN.Footer.FooterLinks.COMPANY.links.AIAndMl,
	// 			route: "/services/ai-and-ml",
	// 		},
	// 		{
	// 			id: 33,
	// 			subtitle: EN.Footer.FooterLinks.COMPANY.links.ARAndVR,
	// 			route: "/services/ar-and-vr",
	// 		},
	// 		{
	// 			id: 34,
	// 			subtitle: EN.Footer.FooterLinks.COMPANY.links.MobileApplication,
	// 			route: "/services/mobile-application",
	// 		},
	// 		{
	// 			id: 35,
	// 			subtitle: EN.Footer.FooterLinks.COMPANY.links.WebApplication,
	// 			route: "/services/web-application",
	// 		},

	// 		{
	// 			id: 37,
	// 			subtitle: EN.Footer.FooterLinks.COMPANY.links.CloudDevelopment,
	// 			route: "/services/cloud",
	// 		},
	// 	],
	// },
];

const social_media_links = [
	{
		id: 1,
		url: "https://www.facebook.com/SearchingYard/",
		icon: Icons.Facebook,
	},
	{
		id: 2,
		url: "https://twitter.com/YardSearching",
		icon: Icons.Twitter,
	},
	{
		id: 3,
		url: "https://www.linkedin.com/company/searchingyardindia",
		icon: Icons.Linkedin,
	},
	{
		id: 4,
		url: "https://www.instagram.com/SearchingYard/",
		icon: Icons.Instagram,
	},
	{
		id: 5,
		url: "mailto:info@searchingyard.com",
		icon: Icons.WhatsApp,
	},
];

export default function Footer() {
	return (
		<footer className="bg-gradient-to-bl from-black to-[#231f40] px-10">
			<div className="container mx-auto px-2 py-2 sm:px-4">
				<div className="flex flex-wrap gap-20 lg:flex-nowrap">
					<div className="w-full pt-1 lg:w-3/12">
						<div className="">
							<div className="flex items-center">
								<Link href="/">
									<img
										// src={IMAGES.LOGO_SVG}
										// src="https://yardhealth.in/images/logo.png"
										src={LOGO.src}
										alt="SearchingYard LOGO_SVG"
										className="w-3/6"
									/>
								</Link>
							</div>
						</div>
						<div className="">
							<p className="text-md py-8 text-left text-purple-50/90">
								Simplify the Clinical operations in the most effective way with
								the Clinic Chain Management Software
							</p>

							<div className="flex items-center gap-4">
								{social_media_links.map((item) => (
									<div
										key={item.id}
										className=" rounded-full bg-[#bc3863] p-2 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#0D70AE] hover:shadow-sm hover:shadow-purple-200 "
									>
										<a href={item.url} target="_blank;">
											{item.icon({
												className: "w-6 h-6 text-white ",
											})}
										</a>
									</div>
								))}
							</div>
							<div className="flex items-center justify-center  pt-8 md:flex-row md:justify-start md:gap-3">
								<a
									href="https://play.google.com/store/apps/developer?id=SearchingYard+Software+Private+Limited"
									target="_blank;"
									className="w-full lg:h-12"
								>
									{/* <img src={IMAGES.GooglePlay} alt="playStore" /> */}
								</a>
								<a
									href="https://apps.apple.com/us/developer/ashutosh-mohapatra/id1585081396"
									className="w-full lg:h-12"
									target="_blank"
								>
									{/* <img src={IMAGES.AppleStore} alt="appleStore" /> */}
								</a>
							</div>
						</div>
					</div>
					<div className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-10 lg:w-8/12  lg:grid-cols-3 ">
						{footer_menus?.map((item) => (
							<div key={item.id}>
								<h1 className="whitespace-nowrap py-5 text-xl font-semibold text-gray-300">
									{item.title}
								</h1>
								{item?.list?.map((listItem: any) => (
									<div key={listItem.id}>
										{listItem?.url ? (
											<a href={listItem?.url} target={"_blank"}>
												<p className="w-fit cursor-pointer py-2 text-gray-200 transition-all duration-500 ease-in-out hover:translate-x-2">
													<span className="flex items-center gap-3">
														<FaAngleDoubleRight className="h-3 w-3" />
														{listItem.subtitle}
													</span>
												</p>
											</a>
										) : (
											<Link href={listItem?.route!}>
												<p className="w-fit cursor-pointer py-2 text-gray-200 transition-all duration-500 ease-in-out hover:translate-x-2">
													<span className="flex items-center gap-3">
														<FaAngleDoubleRight className="h-3 w-3" />
														{listItem.subtitle}
													</span>
												</p>
											</Link>
										)}
									</div>
								))}
							</div>
						))}
						<div className="flex flex-col pt-5 gap-4 justify-start items-start">
							<h1 className="text-gray-200 text-2xl font-semibold">
								contact info
							</h1>
							<ul className="text-gray-200 space-y-6">
								<li className="flex items-start gap-4 justify-center">
									<FaMapMarkerAlt className="text-[#1f69a9] text-lg mt-1" />
									House No -HIG 66,AMRI Hosp Road, Khandagiri,
								</li>

								<li className="flex items-start gap-4 justify-start">
									<FaPhoneAlt className="text-[#1f69a9] text-lg mt-1" />
									+91 8114957912
								</li>
								<li className="flex items-start gap-4 justify-start">
									<IoMail className="text-[#1f69a9] text-lg mt-1" />
									sales@searchingyard.com
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-5 lg:flex-row lg:justify-center pb-3">
				<p className="text-gray-400">
					<span className="">Copyright</span> &copy; 2017-
					{new Date().getFullYear()} SearchingYard Software Private Limited
				</p>
				{/* <p className="text-white">
						<Link href="./privacy">
							<span className="w-fit cursor-pointer">Privacy Policy</span>
						</Link>{" "}
						|{" "}
						<Link href="./terms-and-condition">
							<span className="w-fit cursor-pointer">Terms and Conditions</span>
						</Link>
					</p> */}
			</div>
		</footer>
	);
}

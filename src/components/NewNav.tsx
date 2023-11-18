import { Menu, KeyboardArrowDown, Close } from "@mui/icons-material";
import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";
import { LOGO } from "assets";
import Button from "./Button";
import Link from "next/link";

const menus = [
	{ id: 1, title: "Home", link: "/" },
	{ id: 2, title: "Solutions", link: "#" },
	{ id: 3, title: "Products", link: "#" },
	{ id: 4, title: "About Us", link: "/about-us" },
	{ id: 5, title: "Contact Us", link: "/contact-us" },
];

// const products = [
// 	{ id: 1, title: "CSP", link: "/products/#csp" },
// 	{ id: 2, title: "AePS", link: "/products/#aeps" },
// 	{ id: 3, title: "PREPAID CARD", link: "/products/#prepaid-card" },
// 	{ id: 4, title: "PETRO CARD", link: "/products/#petro-card" },
// 	{ id: 5, title: "GPRS-PLUS", link: "/products/#gprs-plus" },
// 	{ id: 6, title: "ATM", link: "/products/#atm" },
// ];
const products = [
	{ id: 1, title: "Telemedicin" },
	{ id: 2, title: "Appointment Booking Software with IVR Solutions" },
	{ id: 3, title: "Appointment Scheduling Software" },
	{ id: 4, title: "Medical Billing Software" },
	{ id: 5, title: "Electronic Medical/Health Records" },
	{ id: 6, title: "LIMS Software" },
	{ id: 7, title: "Hospital Stock And Inventory Management" },
	{ id: 8, title: "Pharmacy Management System" },
	{ id: 9, title: "Patient Management System" },
	{ id: 10, title: "Doctor Appointment App" },
];
const solutions = [
	{ id: 1, title: "Clinic Management Software" },
	{ id: 2, title: "Medical Software" },
	{ id: 3, title: "Hospital Management Software" },
	{ id: 4, title: "Clinic Chains" },
];

const NewNav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isProducts, setIsProducts] = useState(false);
	const [isSolutions, setIsSolutions] = useState(false);

	return (
		<div className="sticky top-0 bg-white z-[999] px-5">
			<section className="relative bg-white">
				<div className="w-full py-4 md:py-2 shadow-sm bg-white z-[999]">
					<div className="main-container flex items-center justify-between bg-white">
						<Link href="/">
							<img
								src={LOGO.src}
								alt="logo"
								className="md:cursor-pointer md:w-52 w-28"
							/>
						</Link>
						<ul className="gap-8 items-center md:flex hidden">
							{menus?.map((item) => (
								<div
									className="flex flex-col h-10 justify-center"
									key={item?.id}
								>
									<div className="text-sm relative group font-semibold text-gray-700 cursor-pointer hover:scale-110 hover:text-gray-900 transition-all ease-in-out duration-300">
										<Link href={item?.link}>{item?.title}</Link>
										{item?.title === "Products" ? (
											<div
												className="absolute ease-in transition-all duration-200 top-[25px] rounded-lg hidden group-hover:flex bg-[#ffffffef] px-6 py-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
												key={item?.id}
											>
												<ul className="flex flex-col space-y-4 w-72">
													{products?.map((item) => (
														<Link href={"/"} key={item?.id}>
															<li className="text-sm cursor-pointer font-light hover:text-theme hover:scale-110 hover:font-semibold ease-in-out transition-all duration-150">
																{item?.title}
															</li>
														</Link>
													))}
												</ul>
											</div>
										) : null}
										{item?.title === "Solutions" ? (
											<div className="absolute ease-in transition-all duration-200 top-[25px] rounded-lg hidden group-hover:flex bg-[#ffffffee] px-6 py-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
												<ul className="flex flex-col space-y-4 w-52">
													{solutions?.map((item) => (
														<li
															className="text-sm cursor-pointer font-light hover:text-theme hover:scale-110 hover:font-semibold ease-in-out transition-all duration-150"
															key={item?.id}
														>
															{item?.title}
														</li>
													))}
												</ul>
											</div>
										) : null}
										{item?.title === "Products" ? <KeyboardArrowDown /> : null}
										{item?.title === "Solutions" ? <KeyboardArrowDown /> : null}
									</div>
								</div>
							))}
							<li>
								<div className="md:block hidden">
									<Button title={"Login"} icon={<FaSignInAlt />} />
								</div>
							</li>
						</ul>
						<div className="md:hidden flex">
							{!isMenuOpen ? (
								<Menu
									className="!cursor-pointer"
									onClick={() => setIsMenuOpen((prev) => !prev)}
								/>
							) : (
								<Close
									className="!cursor-pointer"
									onClick={() => setIsMenuOpen((prev) => !prev)}
								/>
							)}
						</div>
					</div>
				</div>

				{/*------------responsive Nav---------------*/}
				<div
					className={`w-full md:hidden flex bg-white shadow-lg absolute ease-in-out transition-all duration-200 z-[40] ${
						isMenuOpen ? "translate-y-[0%]" : "translate-y-[-150%]"
					}`}
				>
					<div className="main-container py-6">
						<ul className="text-base font-semibold text-gray-600 flex flex-col">
							<li className="py-2">
								<Link href="/">
									<p>Home</p>
								</Link>
							</li>
							{/* <li className="py-2">
								<Link href="#">
									<p>
										Solutions <KeyboardArrowDown />
									</p>
								</Link>
							</li> */}

							<li className="py-2">
								<Link href="#">
									<p
										className="flex items-center"
										onClick={() => setIsSolutions((prev) => !prev)}
									>
										Solutions <KeyboardArrowDown />
									</p>
								</Link>
								{isSolutions ? (
									<div className="flex flex-col gap-3 py-3 font-light pl-4">
										{solutions?.map((item) => (
											<Link key={item.id} href={"/"}>
												<p>{item?.title}</p>
											</Link>
										))}
									</div>
								) : null}
							</li>

							<li className="py-2">
								<Link href="#">
									<p
										className="flex items-center"
										onClick={() => setIsProducts((prev) => !prev)}
									>
										Products <KeyboardArrowDown />
									</p>
								</Link>
								{isProducts ? (
									<div className="flex flex-col gap-3 py-3 font-light pl-4">
										{products?.map((item) => (
											<Link key={item.id} href={"/"}>
												<p>{item?.title}</p>
											</Link>
										))}
									</div>
								) : null}
							</li>
							<li className="py-2">
								<Link href="/about-us">
									<p>About Us</p>
								</Link>
							</li>
							<li className="py-2">
								<Link href="/contact-us">
									<p>Contact Us</p>
								</Link>
							</li>
							<li>
								<div className="md:hidden block">
									<Button title={"Login"} icon={<FaSignInAlt />} />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};

export default NewNav;

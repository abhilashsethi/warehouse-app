import DropDownBtn from "components/core/DropDownBtn";
import { FaSignInAlt } from "react-icons/fa";
import Button from "components/Button";
import { useState } from "react";
import { LOGO } from "assets";
import Link from "next/link";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// const [isProducts, setIsProducts] = useState(false);
	// const [isSolutions, setIsSolutions] = useState(false);

	return (
		<div className="sticky top-0 bg-white z-[999]">
			<section className="relative bg-white">
				<div className="w-full py-4 md:py-0 shadow-sm bg-white z-[999]">
					<div className="main-container w-full flex items-center justify-between bg-white border border-b-gray-300 md:px-5 px-2">
						<Link href="/">
							<img
								src={LOGO.src}
								alt="logo"
								className="md:cursor-pointer md:w-52 w-32"
							/>
						</Link>
						<ul className="">
							{/* <li className="md:flex hidden">
								<div className="">
									<Button title={"Login / SignUp"} icon={<FaSignInAlt />} />
								</div>
							</li> */}
							<li>
								<div className="">
									<DropDownBtn />
								</div>
							</li>
						</ul>
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

export default Header;

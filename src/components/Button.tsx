import Link from "next/link";
import React from "react";
// import { FaSignInAlt } from "react-icons/fa";

type Props = {
	title: String;
	icon?: any;
};
const Button = ({ title, icon }: Props) => {
	return (
		<Link
			href={"/login"}
			className="bg-[#0E89E2] text-white flex justify-center items-center gap-2 px-6 py-2 rounded-full btn nav-btn-inset"
		>
			{title}
			{icon}
		</Link>
	);
};

export default Button;

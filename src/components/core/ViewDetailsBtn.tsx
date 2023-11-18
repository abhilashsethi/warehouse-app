import { InfoOutlined, Visibility } from "@mui/icons-material";
import { Avatar, Tooltip } from "@mui/material";
import Link from "next/link";
import React from "react";
// import { FaSignInAlt } from "react-icons/fa";

type Props = {
	title?: String;
	icon?: any;
};
const Button = ({ title, icon }: Props) => {
	return (
		<Link
			href={"#"}
			// className="bg-[#014488] text-white w-32 flex justify-center items-center py-2 rounded-full btn nav-btn-inset"
		>
			<Tooltip title="View Details">
				<Avatar
					variant="rounded"
					// onClick={() => setOpenProductInfo(row as any)}
					// onClick={() => setOpenProductInfo(row)}
					className="!mr-1 !cursor-pointer !bg-[#014488] !p-0 !ml-2"
					sx={{
						mr: ".1vw",
						padding: "0px !important",
						backgroundColor: "Highlight",
						cursor: "pointer",
						color: "",
					}}
				>
					<Visibility sx={{ padding: "0px !important" }} />
				</Avatar>
			</Tooltip>
			{title}
		</Link>
	);
};

export default Button;

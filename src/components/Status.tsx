import { Close, Done } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";

type props = {
	title1: string;
	title2: string;
};

const Status = ({ title1, title2 }: props) => {
	return (
		<div className="flex justify-center items-center gap-1">
			<Tooltip title="Accept">
				<button className="bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-1">
					<Done fontSize="small" />
					{title1}
				</button>
			</Tooltip>
			<Tooltip title="Reject">
				<button className="bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-1">
					<Close fontSize="small" />
					{title2}
				</button>
			</Tooltip>
		</div>
	);
};

export default Status;

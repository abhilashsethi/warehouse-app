import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
const GoToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const goToBtn = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const listenToScroll = () => {
		let heightToHidden = 20;
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;

		if (winScroll > heightToHidden) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);

	return (
		<div className="hidden md:flex justify-center items-center relative">
			{isVisible && (
				<Tooltip title="Scroll to top">
					<div
						className="text-xl p-3 text-white bg-blue-700 rounded-full fixed bottom-20 right-10 z-[999] flex justify-center items-center cursor-pointer"
						onClick={goToBtn}
					>
						<ArrowUpwardIcon className="text-3xl heartbeat top-btn icon" />
					</div>
				</Tooltip>
			)}
		</div>
	);
};

export default GoToTop;

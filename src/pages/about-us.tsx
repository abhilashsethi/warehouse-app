import { Footer, GoToTop } from "components";
import AboutUs from "components/AboutUs";
import NewNav from "components/NewNav";
import React from "react";

const aboutUs = () => {
	return (
		<div>
			<NewNav />
			<AboutUs />
			<GoToTop />
			<Footer />
		</div>
	);
};

export default aboutUs;

import { Footer, GoToTop } from "components";
import ContactUs from "components/ContactUs";
import NewNav from "components/NewNav";
import React from "react";

const contactUs = () => {
	return (
		<div>
			<NewNav />
			<ContactUs />
			<GoToTop />
			<Footer />
		</div>
	);
};

export default contactUs;

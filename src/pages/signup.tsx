import { NewNav } from "components";
import Footer from "components/Footer";
import Signup from "components/Signup";
import React from "react";

const signup = () => {
	return (
		<div>
			{" "}
			<NewNav />
			<Signup />
			<Footer />
		</div>
	);
};

export default signup;

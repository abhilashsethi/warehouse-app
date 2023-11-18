import type { NextPage } from "next";
import { useEffect } from "react";

//npm install --save aos@next
//aos
import AOS from "aos";
import "aos/dist/aos.css";
import {
	About,
	CounterPage,
	Footer,
	GoToTop,
	Hero,
	Login,
	OurClients,
	OurProducts,
	Testimonial,
	WhyUs,
} from "components";
import NewNav from "components/NewNav";

const Home: NextPage = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div>
			<Login />
		</div>
	);
};

export default Home;
